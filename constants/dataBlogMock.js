// Mock data used while Supabase is not yet wired up. Keeps the same shape
// as the real blog_posts rows so the screens can be developed and styled
// without a network round-trip. Remove (or stop importing) once the live
// data source is connected.

export const dataBlogMock = [
  {
    id: "mock-1",
    slug: "react-server-components-explained",
    title: "React Server Components in Plain English",
    description:
      "What RSCs actually solve, when they help, and the trade-offs nobody tells you about.",
    category: "react",
    tags: ["react", "rsc", "architecture"],
    image_url: "/es2.png",
    image_alt: "React Server Components diagram",
    published_at: "2026-05-19",
    content:
      "<p>React Server Components (RSC) are not just about performance — they are about <strong>where your code runs</strong>. This is a primer aimed at developers who already ship React in production.</p><h2>What problem do they solve?</h2><p>The traditional split is simple: components render on the client. RSCs introduce a third state: components that render on the server <em>only</em>, never ship to the client, and stream their output.</p><h2>When to use them</h2><ul><li>Data-heavy components close to the database</li><li>Static content with personalization layers</li><li>Wherever bundle size dominates time-to-interactive</li></ul>",
  },
  {
    id: "mock-2",
    slug: "nextjs-caching-strategies-2026",
    title: "Next.js Caching Strategies for 2026",
    description:
      "A field guide to ISR, on-demand revalidation and the new cache primitives.",
    category: "nextjs",
    tags: ["nextjs", "caching", "performance"],
    image_url: "/es.png",
    image_alt: "Next.js cache layers",
    published_at: "2026-05-12",
    content:
      "<p>Caching is the single biggest lever for Next.js performance, and the API surface keeps changing. Here is a no-nonsense map of what works today.</p><h2>The four cache layers</h2><ol><li>Request memoization (per render)</li><li>Data Cache (durable, shared)</li><li>Full Route Cache (build-time HTML)</li><li>Router Cache (client-side, soft)</li></ol><p>Knowing <strong>which one is invalidating</strong> is half the battle.</p>",
  },
  {
    id: "mock-3",
    slug: "typescript-strict-mode-migration",
    title: "Migrating a Legacy Codebase to TypeScript strict",
    description:
      "An incremental playbook to enable strict mode without freezing feature work.",
    category: "typescript",
    tags: ["typescript", "migration", "refactor"],
    image_url: "/es2.png",
    image_alt: "TypeScript strict mode flags",
    published_at: "2026-05-05",
    content:
      "<p>Flipping <code>strict: true</code> on day one almost always backfires. Here is the order I follow when migrating real codebases.</p><h2>Phase 1: noImplicitAny</h2><p>Catches the worst offenders early without forcing exhaustive null checks. Expect a long PR — accept it.</p><h2>Phase 2: strictNullChecks</h2><p>This is the one that actually pays off. Most production bugs in JS codebases are null-related.</p>",
  },
];

export const findMockPostBySlug = (slug) =>
  dataBlogMock.find((p) => p.slug === slug) || null;

export const getRelatedMockPosts = (currentSlug, limit = 3) =>
  dataBlogMock.filter((p) => p.slug !== currentSlug).slice(0, limit);
