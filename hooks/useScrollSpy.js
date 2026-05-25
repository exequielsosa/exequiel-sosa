import { useEffect, useState } from "react";

// Tracks which heading id is currently the most relevant one for the
// user's scroll position. Picks the LAST heading whose top is above an
// imaginary line near the top of the viewport (rootMargin trick).
//
// Why not just listen to scroll events: IntersectionObserver is way
// cheaper and reports per-element rather than per-frame.
//
// @param {string[]} ids — heading ids in document order.
// @param {{ rootMargin?: string, root?: Element | null }} options
// @returns {string | null} active id, or null until something is seen.

export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!ids || ids.length === 0) return undefined;
    if (typeof window === "undefined") return undefined;

    // Resolve elements once. If any id is missing from the DOM we skip it
    // — usually means the HTML hasn't been hydrated yet on first paint.
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    // We mark a heading as "in view" only when it crosses an upper band of
    // the viewport. The bottom margin is aggressive so only one heading
    // is ever "active" at a time.
    const observer = new IntersectionObserver(
      (entries) => {
        // Track which ids are currently in our active band.
        const visibleIds = new Set();
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleIds.add(entry.target.id);
        });

        if (visibleIds.size > 0) {
          // Of those visible, pick the one earliest in the document.
          const firstVisible = ids.find((id) => visibleIds.has(id));
          if (firstVisible) setActiveId(firstVisible);
        }
      },
      {
        // Active band: top of viewport down to ~25% from the top.
        // rootMargin sign convention: top right bottom left.
        rootMargin: options.rootMargin || "0px 0px -75% 0px",
        threshold: 0,
        root: options.root || null,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options.rootMargin, options.root]);

  return activeId;
}

export default useScrollSpy;
