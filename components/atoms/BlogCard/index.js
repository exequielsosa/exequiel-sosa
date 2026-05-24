import Link from "next/link";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background-color: #011627;
  border: 1px solid rgba(96, 123, 150, 0.4);
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #e5e9f0;
  font-family: Fira Code;
  transition: border-color 0.2s ease, transform 0.2s ease;
  cursor: pointer;
  &:hover {
    border-color: #43d9ad;
    transform: translateY(-2px);
  }
`;

const Category = styled.span`
  display: inline-block;
  width: fit-content;
  color: #43d9ad;
  font-size: 12px;
  font-weight: 500;
  background: rgba(67, 217, 173, 0.08);
  border: 1px solid rgba(67, 217, 173, 0.3);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 16px;
`;

const Comment = styled.div`
  background: transparent;
  color: #607b96;
  font-size: 12px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  background: transparent;
  color: #e5e9f0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 12px;
`;

const Description = styled.p`
  background: transparent;
  color: #607b96;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 24px;
  flex-grow: 1;
`;

const Footer = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(96, 123, 150, 0.2);
  padding-top: 12px;
`;

const DateLabel = styled.span`
  background: transparent;
  color: #607b96;
  font-size: 12px;
`;

const ReadMore = styled.span`
  background: transparent;
  color: #e99287;
  font-size: 13px;
  font-weight: 500;
  &::after {
    content: " →";
  }
`;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const BlogCard = ({ post }) => {
  if (!post) return null;
  return (
    <Link
      href={`/blog/${post.slug}`}
      passHref
      legacyBehavior
    >
      <Card>
        {post.category && <Category>[{post.category}]</Category>}
        <Comment>{`// ${post.category || "post"}`}</Comment>
        <Title>{post.title}</Title>
        {post.description && <Description>{post.description}</Description>}
        <Footer>
          <DateLabel>{formatDate(post.published_at)}</DateLabel>
          <ReadMore>read</ReadMore>
        </Footer>
      </Card>
    </Link>
  );
};

export default BlogCard;
