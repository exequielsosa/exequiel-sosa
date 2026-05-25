// Server-side helper: parses the HTML body of a blog post, finds every
// <h2>, assigns it a stable kebab-case id, and returns:
//   - html: the same HTML but with id attributes injected
//   - toc:  an array of { id, text } entries (in document order)
//
// We only target h2 because that's the section level our LLM prompt
// instructs the model to emit. h3 are nested subsections and the TOC
// would get noisy.

function slugify(text) {
  const base = String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 50);
  return base || "section";
}

// Average reading speed for technical content (English, with code) is
// closer to 200 wpm than the 250-280 used for general prose.
const WORDS_PER_MINUTE = 200;

export function calcReadingTime(html) {
  if (!html) return 0;
  const text = String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return 0;
  const words = text.split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function extractTocAndAugment(html) {
  if (!html) return { html: "", toc: [] };

  const toc = [];
  const usedIds = new Set();

  const augmented = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (full, rawAttrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) return full;

      // Preserve an existing id if the model already added one (rare but possible).
      const existingId = rawAttrs.match(/\bid\s*=\s*["']([^"']+)["']/i);
      if (existingId) {
        toc.push({ id: existingId[1], text });
        return full;
      }

      // Generate a unique id, disambiguating duplicates by appending -2, -3, ...
      let id = slugify(text);
      let candidate = id;
      let n = 2;
      while (usedIds.has(candidate)) {
        candidate = `${id}-${n++}`;
      }
      usedIds.add(candidate);
      toc.push({ id: candidate, text });

      return `<h2 id="${candidate}"${rawAttrs}>${inner}</h2>`;
    },
  );

  return { html: augmented, toc };
}
