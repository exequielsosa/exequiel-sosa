// Server-side syntax highlighting for blog post HTML.
//
// Finds every <pre><code class="language-XXX">...</code></pre> block in the
// HTML and replaces it with a highlighted version produced by Shiki at
// build time. Zero client-side JS: the colored tokens ship as plain HTML.
//
// If a <pre><code> doesn't declare a language (older posts written before we
// updated the LLM prompt), we fall back to "text" which is a no-op highlight —
// the code stays readable, just without colors.
//
// The Shiki highlighter is expensive to instantiate (~200ms), so we cache it
// at the module level. Next.js getStaticProps runs in the same process for
// many slugs, so this single instance is reused across builds.

import { createHighlighter } from "shiki";

const THEME = "github-dark";

// Languages we pre-load. Adding more here is cheap if the post might use them.
const LANGS = [
  "javascript",
  "typescript",
  "jsx",
  "tsx",
  "json",
  "html",
  "css",
  "scss",
  "bash",
  "shell",
  "markdown",
  "yaml",
  "sql",
  "diff",
];

// Map of common shorthand aliases the LLM might emit → canonical Shiki names.
const LANG_ALIASES = {
  js: "javascript",
  ts: "typescript",
  sh: "bash",
  zsh: "bash",
  md: "markdown",
  yml: "yaml",
  htm: "html",
};

let highlighterPromise = null;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEME],
      langs: LANGS,
    });
  }
  return highlighterPromise;
}

const decodeHtmlEntities = (s) =>
  String(s)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&"); // keep last — entity references decode last

const normalizeLang = (raw) => {
  if (!raw) return "text";
  const clean = raw.toLowerCase().trim();
  if (LANGS.includes(clean)) return clean;
  if (LANG_ALIASES[clean]) return LANG_ALIASES[clean];
  return "text";
};

// Matches:
//   <pre><code class="language-jsx">...</code></pre>
//   <pre><code class="lang-tsx">...</code></pre>
//   <pre><code>...</code></pre>
// Whitespace between tags is tolerated. `s` flag isn't needed because we
// use [\s\S] for the content.
const CODE_BLOCK_RE =
  /<pre[^>]*>\s*<code(?:\s+class="(?:language-|lang-)?([^"]+)")?\s*>([\s\S]*?)<\/code>\s*<\/pre>/gi;

export async function highlightCodeBlocks(html) {
  if (!html) return "";
  if (!CODE_BLOCK_RE.test(html)) return html;
  // RegExp with /g/i retains lastIndex between exec calls — reset before reuse.
  CODE_BLOCK_RE.lastIndex = 0;

  const highlighter = await getHighlighter();

  // Collect matches first (we need async work per match; .replace's sync
  // callback can't await).
  const replacements = [];
  let match;
  while ((match = CODE_BLOCK_RE.exec(html)) !== null) {
    const [fullMatch, rawLang, encodedCode] = match;
    const lang = normalizeLang(rawLang);
    const code = decodeHtmlEntities(encodedCode).replace(/\n$/, "");

    let highlighted;
    try {
      highlighted = highlighter.codeToHtml(code, {
        lang,
        theme: THEME,
      });
    } catch (e) {
      // Bad language or other Shiki error — fall back to plain text.
      console.warn(
        `[blogHighlight] Failed to highlight (lang=${lang}): ${e.message}`,
      );
      highlighted = highlighter.codeToHtml(code, {
        lang: "text",
        theme: THEME,
      });
    }
    replacements.push({ from: fullMatch, to: highlighted });
  }

  // Apply replacements in order. We use indexOf+slice instead of repeated
  // String.replace so we don't accidentally match identical code blocks twice.
  let cursor = 0;
  let out = "";
  for (const { from, to } of replacements) {
    const idx = html.indexOf(from, cursor);
    if (idx === -1) continue;
    out += html.slice(cursor, idx) + to;
    cursor = idx + from.length;
  }
  out += html.slice(cursor);

  return out;
}
