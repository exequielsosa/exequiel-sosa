import { useState } from "react";
import styled from "styled-components";

const SITE = "https://www.exequielsosa.com.ar";

const Wrap = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(96, 123, 150, 0.2);
`;

const Label = styled.span`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 13px;
  margin-right: 4px;
`;

const Btn = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(67, 217, 173, 0.15)" : "rgba(96, 123, 150, 0.12)"};
  color: ${(props) => (props.$active ? "#43d9ad" : "#c5d1de")};
  border: 1px solid
    ${(props) =>
      props.$active ? "#43d9ad" : "rgba(96, 123, 150, 0.4)"};
  border-radius: 4px;
  padding: 6px 12px;
  font-family: Fira Code;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: #43d9ad;
    border-color: #43d9ad;
    background: rgba(67, 217, 173, 0.1);
  }
`;

/**
 * Social share buttons rendered at the bottom of a blog post.
 *
 * @param {object} post - The post object. Only `title` and `slug` are used.
 * @param {string} [siteUrl] - Override the absolute site URL. Useful for tests.
 */
export const SharePost = ({ post, siteUrl = SITE }) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const url = `${siteUrl}/blog/${post.slug}`;
  const text = post.title;

  // window.open in a popup-sized chrome — matches what X and LinkedIn
  // themselves use when surfaced from a "share" button on any site.
  const openShare = (shareUrl) => {
    if (typeof window === "undefined") return;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const shareX = () =>
    openShare(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    );

  const shareLinkedIn = () =>
    openShare(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    );

  const copyLink = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Insecure context or older browser — fail silently.
      console.warn("Copy link failed:", e);
    }
  };

  return (
    <Wrap>
      <Label>{"// share"}</Label>
      <Btn type="button" onClick={shareX} aria-label="Share on X">
        [ X ]
      </Btn>
      <Btn type="button" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
        [ LinkedIn ]
      </Btn>
      <Btn
        type="button"
        onClick={copyLink}
        $active={copied}
        aria-label="Copy link to clipboard"
      >
        [ {copied ? "copied!" : "copy link"} ]
      </Btn>
    </Wrap>
  );
};

export default SharePost;
