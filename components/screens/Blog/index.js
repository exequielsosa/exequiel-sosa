import styled from "styled-components";
import { BlogList } from "@/components/organisms";
import { VisuallyHiddenH1 } from "@/components/atoms";

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  background-image: url("grid2.png");
  background-color: #011627;
  @media (min-width: 1440px) {
    min-height: 720px;
    max-height: 720px;
  }
`;

const Header = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 24px;
  border-bottom: 1px solid rgba(96, 123, 150, 0.2);
`;

const Tag = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  background: transparent;
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 8px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 14px;
  max-width: 720px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 0 0 24px 0;
  @media (min-width: 1440px) {
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

const Blog = ({ posts = [] }) => {
  return (
    <Layout>
      <VisuallyHiddenH1>
        Blog — React, Next.js & TypeScript articles by Exequiel Sosa
      </VisuallyHiddenH1>
      <Header>
        <Tag>_blog</Tag>
        <Title>{"// Notes on Front-end engineering"}</Title>
        <Subtitle>
          Thoughts and explorations on React, Next.js, TypeScript, performance
          and the tools I use every day. New post every week.
        </Subtitle>
      </Header>
      <Body>
        <BlogList posts={posts} />
      </Body>
    </Layout>
  );
};

export default Blog;
