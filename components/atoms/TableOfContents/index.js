import { useMemo } from "react";
import styled from "styled-components";
import { useScrollSpy } from "../../../hooks/useScrollSpy";

const Box = styled.nav`
  background: rgba(1, 22, 39, 0.6);
  border: 1px solid rgba(96, 123, 150, 0.4);
  border-radius: 8px;
  padding: 20px 22px;
  font-family: Fira Code;
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  background: transparent;
  color: #607b96;
  font-size: 12px;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
`;

const Title = styled.div`
  background: transparent;
  color: #e5e9f0;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const List = styled.ul`
  background: transparent;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(96, 123, 150, 0.5) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(96, 123, 150, 0.4);
    border-radius: 3px;
  }
`;

const Item = styled.li`
  background: transparent;
`;

const Anchor = styled.a`
  background: transparent;
  display: block;
  color: ${(props) => (props.$active ? "#43d9ad" : "#c5d1de")};
  text-decoration: none;
  font-size: 13px;
  line-height: 1.5;
  padding: 4px 0 4px 12px;
  border-left: 2px solid
    ${(props) => (props.$active ? "#43d9ad" : "rgba(96, 123, 150, 0.3)")};
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
  &:hover {
    color: #43d9ad;
    border-left-color: #43d9ad;
  }
`;

/**
 * Sticky-friendly table of contents for a blog post.
 *
 * @param {Array<{ id: string, text: string }>} items - Sections in order.
 *   Each id MUST exist on a real <h2 id="..."> in the document, otherwise
 *   the anchor link won't navigate.
 */
export const TableOfContents = ({ items = [] }) => {
  // Memoize the ids list so useScrollSpy's effect doesn't re-run on every
  // parent render. Otherwise we'd tear down/rebuild the IntersectionObserver
  // each time the post re-renders for unrelated reasons.
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const activeId = useScrollSpy(ids);

  if (!items.length) return null;

  return (
    <Box aria-label="Table of contents">
      <Label>{"// on this page"}</Label>
      <Title>Table of contents</Title>
      <List>
        {items.map((item) => (
          <Item key={item.id}>
            <Anchor href={`#${item.id}`} $active={activeId === item.id}>
              {item.text}
            </Anchor>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default TableOfContents;
