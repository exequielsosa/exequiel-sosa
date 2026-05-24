# Blog category placeholders

These images are used by [scripts/scrape-blog.mjs](../../scripts/scrape-blog.mjs)
when the RSS source has no usable image (missing, broken, tracking pixel,
hotlink-protected, etc.) — and always for fallback topics that aren't tied
to an RSS item.

## Expected files

Drop your own JPGs in this folder using these exact names:

| File                | Used for category |
| ------------------- | ----------------- |
| `react.jpg`         | `react`           |
| `nextjs.jpg`        | `nextjs`          |
| `typescript.jpg`    | `typescript`      |
| `performance.jpg`   | `performance`     |
| `tooling.jpg`       | `tooling`         |
| `frontend-news.jpg` | `frontend-news`   |
| `ai.jpg`            | `ai`              |

## Recommendations

- **Aspect ratio:** 16:9 looks best — the `BlogPost` screen renders the
  hero with `max-height: 420px; object-fit: cover`.
- **Size:** ~1200×630 px is the OG sweet spot (also reused as fallback
  `og:image` if you set this as a default later).
- **Format:** JPG (compress with [tinyjpg](https://tinyjpg.com) or
  [squoosh.app](https://squoosh.app)). Avoid huge files; aim for ≤ 250 KB.
- **Aesthetic:** keep them dark and consistent with the site
  (`#011627` background, Fira Code feel) so the listing doesn't look like
  stock-image chaos.

## What if a file is missing?

The generator falls back to `/es2.png` (the global default) for any category
whose placeholder isn't present here yet. So the blog never publishes a
broken image — but it'll be the same generic one until you add the
category-specific files.
