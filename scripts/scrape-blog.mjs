/**
 * Twice-a-week technical blog post generator for exequielsosa.com.ar
 *
 * Schedule:
 *   - Mondays    → front-end track (React / Next.js / TypeScript / performance)
 *   - Thursdays  → AI-for-web track (LLMs in apps, RAG, AI SDK, prompt engineering)
 *   - Other days → default to the front-end track (for manual runs)
 *
 * Pipeline:
 *   1. Pull recent items from RSS feeds matching the day's track
 *   2. Filter for relevance to the target nicho (front-end OR AI applied to web dev)
 *   3. Generate an original English article with Groq (gpt-oss-120b)
 *   4. POST to /api/blog/create with x-api-key auth
 *
 * Triggered by:
 *   - GitHub Actions cron (Mondays + Thursdays 11:00 UTC)
 *   - Local manual run: `yarn blog:generate` (uses .env)
 *
 * Required env vars:
 *   - GROQ_API_KEY
 *   - BLOG_API_URL (e.g. https://www.exequielsosa.com.ar/api/blog/create)
 *   - BLOG_API_KEY (matches the one in /api/blog/create)
 */

import Parser from "rss-parser";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env") });

// ─── CLI flag parsing ────────────────────────────────────────────────────────
// Supported flags (all optional):
//   --dry-run         Skip the POST, just print the generated payload.
//   --count=N         Generate N posts in one run (default 1). Useful for seeding.
//   --track=X         Force the track ("frontend" or "ai"). Default: depends on the day.
//   --seed            Skip RSS entirely; use only fallback topics. Alternates tracks
//                     across posts when --count > 1.

const getArg = (name) => {
  const prefix = `--${name}=`;
  const match = process.argv.find((a) => a.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
};

const DRY_RUN =
  process.env.DRY_RUN === "true" || process.argv.includes("--dry-run");
const SEED_MODE = process.argv.includes("--seed");
const COUNT = Math.max(1, parseInt(getArg("count") || "1", 10) || 1);
const FORCED_TRACK = getArg("track"); // null | "frontend" | "ai"

const API_URL = process.env.BLOG_API_URL;
const API_KEY = process.env.BLOG_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// ─── Validations ─────────────────────────────────────────────────────────────

if (!GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is required");
  process.exit(1);
}

if (!DRY_RUN) {
  if (!API_URL) {
    console.error("❌ BLOG_API_URL is required (unless DRY_RUN=true)");
    process.exit(1);
  }
  if (!API_KEY) {
    console.error("❌ BLOG_API_KEY is required (unless DRY_RUN=true)");
    process.exit(1);
  }
}

const groq = new Groq({ apiKey: GROQ_API_KEY });

// ─── RSS feeds, split by track ───────────────────────────────────────────────
// Front-end track: classic React / Next.js / TypeScript / performance content.
// AI track: AI tooling, LLMs in apps, RAG, AI SDK — angled at web developers.

const FEEDS_FRONTEND = {
  devto_react: "https://dev.to/feed/tag/react",
  devto_nextjs: "https://dev.to/feed/tag/nextjs",
  devto_typescript: "https://dev.to/feed/tag/typescript",
  devto_webperf: "https://dev.to/feed/tag/webperf",
  smashing: "https://www.smashingmagazine.com/feed/",
  css_tricks: "https://css-tricks.com/feed/",
  web_dev: "https://web.dev/feed.xml",
};

const FEEDS_AI = {
  devto_ai: "https://dev.to/feed/tag/ai",
  devto_chatgpt: "https://dev.to/feed/tag/chatgpt",
  devto_llm: "https://dev.to/feed/tag/llm",
  devto_openai: "https://dev.to/feed/tag/openai",
  devto_machinelearning: "https://dev.to/feed/tag/machinelearning",
  huggingface: "https://huggingface.co/blog/feed.xml",
};

// Pick a feed from the right pool for the given track. If no track is
// passed, falls back to the day-of-week rotation:
//   Thursdays  → AI track
//   any other  → frontend track
// Within a pool, the feed rotates week-by-week so consecutive Mondays don't
// always hit the same source.
function pickFeed(forcedTrack = null) {
  let track = forcedTrack;
  if (!track) {
    const day = new Date().getDay();
    track = day === 4 ? "ai" : "frontend";
  }

  const pool = track === "ai" ? FEEDS_AI : FEEDS_FRONTEND;
  const keys = Object.keys(pool);
  const week = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const key = keys[week % keys.length];

  return { track, key, url: pool[key] };
}

// ─── RSS parsing ─────────────────────────────────────────────────────────────

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "mediaContent"],
      ["media:thumbnail", "mediaThumbnail"],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

const stripHtml = (html = "") =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const extractContent = (item) =>
  item.contentEncoded ||
  item["content:encoded"] ||
  item.content ||
  item.description ||
  item.summary ||
  "";

const extractImage = (item) => {
  if (item.mediaContent?.length) {
    const img = item.mediaContent.find((m) => m.$?.url);
    if (img) return img.$.url;
  }
  if (item.mediaThumbnail?.length) {
    const img = item.mediaThumbnail.find((m) => m.$?.url);
    if (img) return img.$.url;
  }
  if (item.enclosure?.url) return item.enclosure.url;
  const content = extractContent(item);
  const match = content.match(/<img[^>]+src=["']([^"'>]+)["']/i);
  return match?.[1] || null;
};

// HEAD-checks the image URL. Discards 1x1 tracking pixels (very small files),
// dead URLs, hotlink-protected ones, etc. so we don't end up writing broken
// image_url values into Supabase.
async function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  if (!/^https?:\/\//i.test(url)) return false;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, { method: "HEAD", signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return false;
    const type = (res.headers.get("content-type") || "").toLowerCase();
    if (!type.startsWith("image/")) return false;
    const size = parseInt(res.headers.get("content-length") || "0", 10);
    if (size > 0 && size < 5000) return false;
    return true;
  } catch {
    return false;
  }
}

// Per-category placeholder images. Falls back to /es2.png if a category has
// no dedicated placeholder (or the file isn't there yet — drop your own PNGs
// into /public/blog/ to use them).
const CATEGORY_PLACEHOLDERS = {
  react: "/blog/react.jpg",
  nextjs: "/blog/nextjs.jpg",
  typescript: "/blog/typescript.jpg",
  performance: "/blog/performance.jpg",
  tooling: "/blog/tooling.jpg",
  "frontend-news": "/blog/frontend-news.jpg",
  ai: "/blog/ai.jpg",
};

const placeholderFor = (category) =>
  CATEGORY_PLACEHOLDERS[category] || "/es2.png";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const slugify = (text) => {
  const base = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 60);
  return `${base}-${Date.now()}`;
};

// Sanitizes a JSON string by escaping unescaped control characters that
// occasionally appear inside string literals (typically a raw \n in the
// middle of long HTML content). Only run as a fallback if normal parse fails.
function escapeControlCharsInsideStrings(jsonText) {
  let out = "";
  let inString = false;
  let prev = "";
  for (const ch of jsonText) {
    if (ch === '"' && prev !== "\\") {
      inString = !inString;
      out += ch;
    } else if (inString && ch === "\n") {
      out += "\\n";
    } else if (inString && ch === "\r") {
      out += "\\r";
    } else if (inString && ch === "\t") {
      out += "\\t";
    } else if (inString && ch.charCodeAt(0) < 0x20) {
      // Strip other invisible control chars
      // (vertical tab, null, etc.) — they'd break the parse anyway.
    } else {
      out += ch;
    }
    prev = ch;
  }
  return out;
}

const safeParseJSON = (raw) => {
  if (!raw) return null;
  // Strip possible markdown fences the model sometimes adds despite instructions
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```$/, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch (e1) {
    // Fallback: try again after escaping unescaped control chars inside strings.
    try {
      const sanitized = escapeControlCharsInsideStrings(cleaned);
      const parsed = JSON.parse(sanitized);
      console.warn(
        "⚠️  Recovered from malformed JSON (sanitized control chars)",
      );
      return parsed;
    } catch (e2) {
      console.error("❌ Failed to parse model JSON output:", e1.message);
      console.error("   Sanitized retry also failed:", e2.message);
      console.error("Raw output:", raw.substring(0, 500));
      return null;
    }
  }
};

// ─── Relevance filter (LLM-based) ────────────────────────────────────────────

async function isRelevant(title, snippet, track) {
  const audience =
    track === "ai"
      ? "a Senior Front-end Developer's blog about applied AI for web apps — LLMs in production, RAG patterns, AI SDKs (Vercel AI / OpenAI / Anthropic), prompt engineering, AI-powered UX, and AI tooling for developers"
      : "a Senior Front-end Developer's blog focused on React, Next.js, TypeScript and web performance";

  const prompt = `You are filtering tech articles for ${audience}.

Reply with ONLY "yes" or "no" — no other text.

Is the following article relevant?

Title: ${title}
Snippet: ${snippet.substring(0, 400)}`;

  try {
    const completion = await groq.chat.completions.create({
      // gpt-oss-120b is a reasoning model: it emits "reasoning tokens" before
      // the final answer, and those count toward max_tokens. A 5-token budget
      // (which worked fine on llama-3.3) would consume itself in reasoning
      // and return an empty message here. 500 covers a yes/no answer with a
      // little slack for the model's low-effort reasoning trace. Kept low
      // deliberately: we may run this call 5× per invocation and the free
      // tier's 8000 TPM cap forces us to reserve most of that budget for the
      // article-generation call downstream.
      model: "openai/gpt-oss-120b",
      max_tokens: 500,
      reasoning_effort: "low",
      temperature: 0,
      messages: [{ role: "user", content: prompt }],
    });
    const answer = (completion.choices[0]?.message?.content || "")
      .trim()
      .toLowerCase();
    return answer.startsWith("y");
  } catch (e) {
    console.warn(`⚠️  Relevance check failed: ${e.message}`);
    return false;
  }
}

// ─── Article generation ──────────────────────────────────────────────────────

function buildSystemPrompt(track) {
  const trackBrief =
    track === "ai"
      ? `Today you are writing about AI applied to web development — LLMs in real apps, RAG, AI SDKs (Vercel AI, OpenAI, Anthropic), prompt engineering for production, AI-powered UX patterns, copilot workflows, or AI tooling for developers. Your angle is always "what does this mean for a working front-end engineer", not abstract ML theory.`
      : `Today you are writing about classic front-end engineering — React, Next.js, TypeScript and web performance. Focus on real production trade-offs, patterns that survive scale, and the gap between docs and reality.`;

  const categoryLine =
    track === "ai"
      ? `"category": "one of: ai | tooling | frontend-news"`
      : `"category": "one of: react | nextjs | typescript | performance | tooling | frontend-news"`;

  return `You are a Senior Front-end Developer with 4+ years of production experience shipping React, Next.js and TypeScript applications. You are also actively exploring how AI is changing front-end engineering — building with LLMs, RAG patterns, AI SDKs, and prompt engineering for production use. You write technical blog posts twice a week.

${trackBrief}

Voice and tone:
- Direct and practical. No corporate fluff, no marketing speak.
- Conversational but technical. Address the reader as "you".
- Share real opinions and trade-offs, not generic advice.
- Use concrete examples and short code snippets where useful.
- Never pitch services or invite the reader to "contact you".

Format requirements (STRICT):
- Output ONLY a JSON object — no preamble, no markdown fences, no comments.
- The JSON must validate against this exact shape:
  {
    "title": "60-80 char SEO title in English",
    "description": "140-160 char meta description in English",
    "slug": "kebab-case-slug-30-50-chars",
    "content": "HTML body, 500-700 words TOTAL. Use 4-6 <h2> sections MAX. Keep code snippets short (10-25 lines each) and use at most 2-3 of them in the whole article. Allowed tags: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <code>, <pre><code>, <blockquote>. No <h1> (the title is rendered separately). No inline styles. No external image tags. IMPORTANT: every code block MUST declare its language via a class on the <code> element using this exact format: <pre><code class=\"language-jsx\">...</code></pre>. Use one of: javascript, typescript, jsx, tsx, json, html, css, bash, markdown.",
    ${categoryLine},
    "tags": ["3-5 lowercase tags, no spaces, no #"],
    "image_alt": "Concise descriptive alt text for a hero image (max 100 chars)"
  }`;
}

async function generateArticle({
  track,
  topic,
  sourceTitle,
  sourceUrl,
  sourceSnippet,
}) {
  const userPrompt = `Write an original blog post inspired by this source. Do NOT copy or summarize the source verbatim — use it as a jumping-off point and write your own take with your own examples.

Topic angle: ${topic}
Source title: ${sourceTitle}
Source URL: ${sourceUrl}
Source snippet: ${sourceSnippet.substring(0, 800)}

Remember: return ONLY the JSON object, nothing else.`;

  const completion = await groq.chat.completions.create({
    // gpt-oss-120b free tier: 8000 TPM cap per organization.
    // Budget at 6000 tokens with reasoning_effort "low":
    //   - ~500-1000 reasoning tokens
    //   - ~5000-5500 output tokens = ~750 words of HTML (fits the prompt cap)
    // We tried "medium" but it burned 2000+ reasoning tokens and truncated
    // the article mid-tag. "low" trades some structural planning for
    // completion — the prompt itself carries most of the structure.
    model: "openai/gpt-oss-120b",
    max_tokens: 6000,
    reasoning_effort: "low",
    temperature: 0.7,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: buildSystemPrompt(track) },
      { role: "user", content: userPrompt },
    ],
  });

  const raw = completion.choices[0]?.message?.content;
  return safeParseJSON(raw);
}

// ─── Fallback article (if no RSS item passes the relevance filter) ───────────

const FALLBACK_TOPICS_FRONTEND = [
  "Common React performance mistakes I keep seeing in code reviews",
  "When NOT to use useMemo and useCallback",
  "Next.js App Router caching: what changed and how to think about it",
  "TypeScript generics in real codebases — when they help and when they hurt",
  "Why your Core Web Vitals are still bad after the obvious fixes",
  "Server Components vs Client Components: a decision tree",
  "The hidden cost of barrel exports (index.js) in large React apps",
  "Suspense boundaries: a pattern that actually works",
];

const FALLBACK_TOPICS_AI = [
  "Streaming LLM responses in a React app without melting your UI",
  "RAG patterns for front-end developers: what changes when search is semantic",
  "Vercel AI SDK in production: lessons after a few months shipping with it",
  "Prompt engineering for code generation — what actually works in real apps",
  "Building a chatbot UI that doesn't feel cheap: UX patterns that matter",
  "AI features that aren't chat: semantic search, classification, summaries",
  "Token budgets and cost control when LLMs are in your hot path",
  "Evals for AI features: how front-end teams should test non-deterministic UIs",
];

// Tracks which fallback topics were already used in this run so seed batches
// of multiple posts don't repeat the same topic twice.
const usedTopics = new Set();

function pickFallbackTopic(track) {
  const pool = track === "ai" ? FALLBACK_TOPICS_AI : FALLBACK_TOPICS_FRONTEND;
  const available = pool.filter((t) => !usedTopics.has(t));
  // If we exhaust the pool (unlikely with COUNT ≤ pool size) we reset and
  // accept that one might repeat. Defensive, not the common path.
  const choices = available.length ? available : pool;
  const topic = choices[Math.floor(Math.random() * choices.length)];
  usedTopics.add(topic);
  return topic;
}

async function generateFallback(track, reason = "no relevant RSS items") {
  const topic = pickFallbackTopic(track);
  console.log(`✍️  ${reason}. Using ${track} fallback topic: "${topic}"`);
  return generateArticle({
    track,
    topic,
    sourceTitle: topic,
    sourceUrl: "",
    sourceSnippet: "",
  });
}

// ─── Post to the blog API ────────────────────────────────────────────────────

async function postToBlog(article) {
  if (DRY_RUN) {
    console.log("🧪 DRY_RUN — would POST the following payload:");
    console.log(JSON.stringify(article, null, 2).substring(0, 2000));
    return { dryRun: true };
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify(article),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      `Blog API error ${res.status}: ${body.message || "unknown"}`,
    );
  }

  return body;
}

// ─── Single-post generator ───────────────────────────────────────────────────
// Runs the full pipeline ONCE for the given track. In seed mode, skips the
// RSS phase and goes straight to a fallback topic.

async function generateOne(track, { useSeed }) {
  let chosen = null;
  let feedInfo = null;

  if (!useSeed) {
    feedInfo = pickFeed(track);
    console.log(`🎯 Feed: ${feedInfo.key} (${feedInfo.url})`);

    // 1. Fetch the feed
    let items = [];
    try {
      const feed = await parser.parseURL(feedInfo.url);
      items = feed.items || [];
      console.log(`📥 Fetched ${items.length} items`);
    } catch (e) {
      console.error(`❌ Failed to fetch feed ${feedInfo.url}: ${e.message}`);
    }

    // 2. Find a relevant one (check up to 5 newest)
    for (const item of items.slice(0, 5)) {
      const title = item.title || "";
      const snippet = stripHtml(extractContent(item));
      console.log(`🔎 Checking relevance: "${title.substring(0, 70)}"`);
      // eslint-disable-next-line no-await-in-loop
      if (await isRelevant(title, snippet, track)) {
        chosen = { item, snippet };
        console.log(`✅ Relevant: "${title}"`);
        break;
      }
    }
  } else {
    console.log("🌱 Seed mode — skipping RSS, using fallback topics only");
  }

  // 3. Generate the article (from chosen item or fallback)
  let article;
  if (chosen) {
    article = await generateArticle({
      track,
      topic: chosen.item.title,
      sourceTitle: chosen.item.title,
      sourceUrl: chosen.item.link || "",
      sourceSnippet: chosen.snippet,
    });
  } else {
    article = await generateFallback(
      track,
      useSeed ? "seed mode" : "no relevant RSS items",
    );
  }

  if (!article || !article.title || !article.content) {
    throw new Error("Article generation failed or returned invalid JSON");
  }

  // 4. Pick the image
  const category =
    article.category || (track === "ai" ? "ai" : "frontend-news");

  let imageUrl = placeholderFor(category);
  if (chosen?.item) {
    const candidate = extractImage(chosen.item);
    if (candidate && (await isValidImageUrl(candidate))) {
      imageUrl = candidate;
      console.log(`🖼️  Using RSS source image: ${candidate}`);
    } else {
      console.log(
        `🖼️  RSS image missing/invalid → falling back to placeholder: ${imageUrl}`,
      );
    }
  } else {
    console.log(`🖼️  No RSS source → using category placeholder: ${imageUrl}`);
  }

  // 5. Build payload
  const payload = {
    slug: article.slug || slugify(article.title),
    title: article.title,
    description: article.description || "",
    content: article.content,
    category,
    tags: Array.isArray(article.tags) ? article.tags : [],
    image_url: imageUrl,
    image_alt: article.image_alt || article.title,
    source_url: chosen?.item?.link || null,
    is_automated: true,
    is_published: true,
  };

  console.log(`📝 Generated: "${payload.title}"`);
  console.log(`   slug:     ${payload.slug}`);
  console.log(`   category: ${payload.category}`);
  console.log(`   tags:     ${payload.tags.join(", ")}`);

  // 6. POST to the blog API
  const result = await postToBlog(payload);
  console.log("✅ Published:", result);
  return result;
}

// ─── Resolve the track for each iteration ────────────────────────────────────
// - If --track was passed, use that for every iteration.
// - If --count > 1 and no --track, alternate frontend / ai across posts.
// - If --count === 1 and no --track, use the day-of-week default.

function resolveTrackForIndex(i) {
  if (FORCED_TRACK === "frontend" || FORCED_TRACK === "ai") {
    return FORCED_TRACK;
  }
  if (COUNT > 1) {
    return i % 2 === 0 ? "frontend" : "ai";
  }
  const day = new Date().getDay();
  return day === 4 ? "ai" : "frontend";
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`📅 ${new Date().toISOString()}`);
  console.log(
    `⚙️  count=${COUNT} | track=${FORCED_TRACK || "auto"} | seed=${SEED_MODE} | dryRun=${DRY_RUN}`,
  );

  const results = [];
  for (let i = 0; i < COUNT; i++) {
    const track = resolveTrackForIndex(i);
    console.log(`\n─── Post ${i + 1}/${COUNT} · track=${track} ───`);
    try {
      // eslint-disable-next-line no-await-in-loop
      const r = await generateOne(track, { useSeed: SEED_MODE });
      results.push({ ok: true, track, result: r });
    } catch (e) {
      console.error(`❌ Post ${i + 1} failed: ${e.message}`);
      results.push({ ok: false, track, error: e.message });
    }

    // Small pause between iterations to be polite with rate limits.
    if (i < COUNT - 1) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  // Summary
  const ok = results.filter((r) => r.ok).length;
  const failed = results.length - ok;
  console.log(`\n📊 Done. Success: ${ok}/${results.length} · Failed: ${failed}`);
  if (failed > 0) process.exit(1);
}

main().catch((e) => {
  console.error("💥 Unhandled error:", e);
  process.exit(1);
});
