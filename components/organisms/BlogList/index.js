import styled from "styled-components";
import { BlogCard } from "@/components/atoms";

const Grid = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  padding: 32px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const EmptyState = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  text-align: center;
  padding: 64px 32px;
  font-size: 14px;
`;

export const BlogList = ({ posts = [] }) => {
  if (!posts.length) {
    return (
      <EmptyState>{"// No posts published yet. Check back soon."}</EmptyState>
    );
  }

  return (
    <Grid>
      {posts.map((post) => (
        <BlogCard key={post.id || post.slug} post={post} />
      ))}
    </Grid>
  );
};

export default BlogList;
