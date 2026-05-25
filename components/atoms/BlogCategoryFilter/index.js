import styled from "styled-components";

const Wrapper = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(67, 217, 173, 0.1)" : "transparent"};
  color: ${(props) => (props.$active ? "#43d9ad" : "#607b96")};
  border: 1px solid
    ${(props) =>
      props.$active ? "#43d9ad" : "rgba(96, 123, 150, 0.4)"};
  border-radius: 4px;
  padding: 4px 12px;
  font-family: Fira Code;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: #43d9ad;
    color: #43d9ad;
  }
`;

const Count = styled.span`
  background: transparent;
  color: inherit;
  opacity: 0.6;
  margin-left: 4px;
  font-size: 12px;
`;

/**
 * Renders the list of available blog categories as filter chips.
 *
 * @param {Array<{name: string, count: number}>} categories - Categories with post counts.
 *   "all" is implicit and always rendered first; do NOT include it.
 * @param {string|null} selected - Currently active category name, or null for "all".
 * @param {(name: string|null) => void} onSelect - Called with the category name,
 *   or `null` when the user picks "all".
 * @param {number} totalCount - Total number of posts (used in the "all" chip).
 */
export const BlogCategoryFilter = ({
  categories = [],
  selected = null,
  onSelect = () => {},
  totalCount = 0,
}) => {
  if (!categories.length) return null;

  return (
    <Wrapper>
      <Chip
        type="button"
        $active={selected === null}
        onClick={() => onSelect(null)}
        aria-pressed={selected === null}
      >
        [ all <Count>({totalCount})</Count> ]
      </Chip>
      {categories.map((cat) => (
        <Chip
          key={cat.name}
          type="button"
          $active={selected === cat.name}
          onClick={() => onSelect(cat.name)}
          aria-pressed={selected === cat.name}
        >
          [ {cat.name} <Count>({cat.count})</Count> ]
        </Chip>
      ))}
    </Wrapper>
  );
};

export default BlogCategoryFilter;
