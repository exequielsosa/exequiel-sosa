import Link from "next/link";
import styled from "styled-components";
import { BlogCard } from "@/components/atoms";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  background-image: url("grid2.png");
  background-color: #011627;
  @media (min-width: 1440px) {
    max-height: 720px;
    min-height: 720px;
  }
`;

// Two-column wrapper. Stacked by default (mobile/tablet); side-by-side on
// large screens with the article on the left and the related sidebar on
// the right.
const MainWrap = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1440px) {
    flex: 1;
    min-height: 0;
    flex-direction: row;
    align-items: stretch;
    margin: 0 auto;
    padding: 0 24px;
  }
`;

const Container = styled.article`
  background: transparent;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px 64px;
  font-family: Fira Code;

  @media (min-width: 1440px) {
    flex: 1 1 auto;
    min-width: 0;
    width: auto;
    margin: 24px 0 0 0;
    padding: 0px 32px 64px 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 26px;
      border: 1px solid #1e2d3d;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(96, 123, 150, 0.1);
      height: 20px;
    }
  }
`;

const BackLink = styled.a`
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #43d9ad;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 32px;
  cursor: pointer;
  &:hover {
    color: #e99287;
  }
`;

const Meta = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Category = styled.span`
  color: #43d9ad;
  font-size: 12px;
  font-weight: 500;
  background: rgba(67, 217, 173, 0.08);
  border: 1px solid rgba(67, 217, 173, 0.3);
  border-radius: 4px;
  padding: 2px 8px;
`;

const DateLabel = styled.span`
  background: transparent;
  color: #607b96;
  font-size: 13px;
`;

const Title = styled.h1`
  background: transparent;
  color: #e5e9f0;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 24px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  background: transparent;
  color: #607b96;
  font-size: 17px;
  line-height: 1.6;
  margin: 0 0 32px;
`;

const Hero = styled.img`
  background: transparent;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 32px;
  border: 1px solid rgba(96, 123, 150, 0.4);
  @media (min-width: 1440px) {
    width: 60%;
  }
`;

const Tags = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const Tag = styled.span`
  color: #4d5bce;
  font-size: 12px;
  background: rgba(77, 91, 206, 0.08);
  border: 1px solid rgba(77, 91, 206, 0.3);
  border-radius: 4px;
  padding: 2px 8px;
`;

const Content = styled.div`
  background: transparent;
  color: #e5e9f0;
  font-size: 16px;
  line-height: 1.75;

  h2 {
    background: transparent;
    color: #e5e9f0;
    font-size: 22px;
    font-weight: 500;
    margin: 32px 0 12px;
  }
  h3 {
    background: transparent;
    color: #e5e9f0;
    font-size: 18px;
    font-weight: 500;
    margin: 24px 0 10px;
  }
  p {
    background: transparent;
    color: #c5d1de;
    margin: 0 0 16px;
  }
  ul,
  ol {
    background: transparent;
    color: #c5d1de;
    padding-left: 24px;
    margin: 0 0 18px;
  }
  li {
    background: transparent;
    margin-bottom: 6px;
  }
  strong {
    background: transparent;
    color: #e5e9f0;
  }
  code {
    color: #43d9ad;
    background: rgba(67, 217, 173, 0.1);
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
  pre {
    background: rgba(1, 22, 39, 0.6);
    border: 1px solid rgba(96, 123, 150, 0.3);
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 0 0 18px;
  }
  pre code {
    background: transparent;
    padding: 0;
    color: #e5e9f0;
  }
  a {
    background: transparent;
    color: #e99287;
    text-decoration: underline;
    &:hover {
      color: #43d9ad;
    }
  }
  blockquote {
    background: transparent;
    border-left: 3px solid #43d9ad;
    padding-left: 16px;
    margin: 0 0 18px;
    color: #607b96;
    font-style: italic;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin: 16px 0;
  }
`;

const SourceRow = styled.div`
  background: transparent;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(96, 123, 150, 0.2);
  font-size: 13px;
  color: #607b96;
  a {
    background: transparent;
    color: #43d9ad;
    text-decoration: underline;
    word-break: break-all;
  }
`;

const RelatedSection = styled.section`
  background: transparent;
  border-top: 1px solid rgba(96, 123, 150, 0.2);
  padding: 48px 24px;

  @media (min-width: 1440px) {
    flex: 0 0 33%;
    min-width: 320px;
    border-top: none;
    border-left: 1px solid rgba(96, 123, 150, 0.2);
    padding: 0px 32px 64px 32px;
    position: sticky;
    top: 24px;
    flex: 1 1 auto;
    margin: 24px 0 0 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 26px;
      border: 1px solid #1e2d3d;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(96, 123, 150, 0.1);
      height: 20px;
    }
  }
`;

const RelatedTitle = styled.h2`
  background: transparent;
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 500;
  max-width: 1200px;
  margin: 0 auto 24px;

  @media (min-width: 1440px) {
    margin: 0 0 24px;
    max-width: none;
  }
`;

const RelatedGrid = styled.div`
  background: transparent;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: 1fr;
    max-width: none;
  }
`;

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPost = ({ post, relatedPosts = [] }) => {
  if (!post) return null;
  return (
    <Layout>
      <MainWrap>
        <Container>
          <Link href="/blog" passHref legacyBehavior>
            <BackLink>← Back to blog</BackLink>
          </Link>

          <Meta>
            {post.category && <Category>[{post.category}]</Category>}
            {post.published_at && (
              <DateLabel>{formatDate(post.published_at)}</DateLabel>
            )}
          </Meta>

          <Title>{post.title}</Title>

          {post.description && <Description>{post.description}</Description>}

          {post.image_url && (
            <Hero
              src={post.image_url}
              alt={post.image_alt || post.title}
              loading="eager"
            />
          )}

          {post.tags?.length > 0 && (
            <Tags>
              {post.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </Tags>
          )}

          <Content dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.source_url && (
            <SourceRow>
              Inspired by:{" "}
              <a href={post.source_url} target="_blank" rel="noopener nofollow">
                {post.source_url}
              </a>
            </SourceRow>
          )}
        </Container>

        {relatedPosts.length > 0 && (
          <RelatedSection>
            <RelatedTitle>{"// related"}</RelatedTitle>
            <RelatedGrid>
              {relatedPosts.map((p) => (
                <BlogCard key={p.id || p.slug} post={p} />
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </MainWrap>
    </Layout>
  );
};

export default BlogPost;
