import { useEffect } from "react";

// After the post HTML is rendered (via dangerouslySetInnerHTML), this hook
// walks every <pre> inside the container and injects a "copy" button in the
// top-right corner. Click → copies the <code> text to the clipboard and the
// button flashes "copied!" for 2 seconds.
//
// We do this with vanilla DOM rather than React because the HTML is opaque
// to React (set via innerHTML). The hook is idempotent: re-running won't
// add duplicate buttons.
//
// Pass `key` (typically post.slug) so the effect re-runs when navigating
// between posts — otherwise the buttons of the previous post would linger.

export function useCopyCodeButtons(containerRef, key) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    if (typeof window === "undefined") return undefined;

    const pres = container.querySelectorAll("pre");
    const cleanupFns = [];

    pres.forEach((pre) => {
      // Idempotency guard — don't double-add if this effect already ran.
      if (pre.querySelector(".code-copy-btn")) return;

      // The button is absolutely positioned, so the pre needs to be the
      // positioning context. Setting it inline keeps the CSS file clean.
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.className = "code-copy-btn";
      btn.type = "button";
      btn.textContent = "copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");

      let resetTimer = null;

      const handleClick = async () => {
        const code = pre.querySelector("code");
        if (!code) return;
        const text = code.innerText || code.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = "copied!";
          btn.dataset.copied = "true";
          if (resetTimer) clearTimeout(resetTimer);
          resetTimer = setTimeout(() => {
            btn.textContent = "copy";
            delete btn.dataset.copied;
          }, 2000);
        } catch (e) {
          // Older browsers without Clipboard API, or insecure context.
          // We log instead of throwing to keep the page usable.
          console.warn("Copy to clipboard failed:", e);
        }
      };

      btn.addEventListener("click", handleClick);
      pre.appendChild(btn);

      cleanupFns.push(() => {
        if (resetTimer) clearTimeout(resetTimer);
        btn.removeEventListener("click", handleClick);
        if (pre.contains(btn)) pre.removeChild(btn);
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, [containerRef, key]);
}

export default useCopyCodeButtons;
