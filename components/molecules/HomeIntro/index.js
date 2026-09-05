/* eslint-disable react/jsx-no-comment-textnodes */
import styled from "styled-components";
import Link from "next/link";

// Server-rendered content block for the home page.
//
// The hero above is intentionally minimal (terminal aesthetic) and renders
// almost no text, which left the home with ~300 indexable characters. This
// block keeps the same aesthetic but ships real copy and internal links in
// the HTML — no breakpoint hook, so it renders identically on the server.

const Section = styled.section`
  width: 100%;
  background: #011627;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  padding: 32px 16px 40px 16px;
  font-family: Fira Code;
  @media (min-width: 768px) {
    padding: 48px 32px 56px 32px;
  }
  @media (min-width: 1440px) {
    padding: 56px 64px 64px 64px;
  }
`;

const Inner = styled.div`
  background: transparent;
  max-width: 940px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Block = styled.div`
  background: transparent;
`;

const Heading = styled.h2`
  color: #607b96;
  font-family: Fira Code;
  font-size: 14px;
  font-weight: 450;
  line-height: normal;
  margin: 0 0 12px 0;
  background: transparent;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 15px;
  font-weight: 400;
  line-height: 175%;
  margin: 0;
  background: transparent;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Accent = styled.span`
  color: #43d9ad;
  background: transparent;
`;

const Stack = styled.p`
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 14px;
  font-weight: 450;
  line-height: 190%;
  margin: 0;
  background: transparent;
  @media (min-width: 600px) {
    font-size: 15px;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  background: transparent;
`;

const PageLink = styled(Link)`
  color: #e99287;
  font-family: Fira Code;
  font-size: 15px;
  font-weight: 450;
  text-decoration: none;
  background: transparent;
  &:hover {
    color: #4d5bce;
  }
`;

export const HomeIntro = () => {
  return (
    <Section>
      <Inner>
        <Block>
          <Heading>
            // about — Senior Front-end Developer in Buenos Aires
          </Heading>
          <Text>
            I am <Accent>Exequiel Sosa</Accent>, a Senior Front-end Developer
            based in Buenos Aires, Argentina. For the past 4+ years I have built
            production web applications with React, Next.js and TypeScript —
            from fintech wallets and B2B e-commerce to satellite telemetry
            consoles and legaltech platforms.
          </Text>
        </Block>

        <Block>
          <Heading>
            // currently — Senior Front-end Developer at MercadoLibre
          </Heading>
          <Text>
            I work on the Supermarket &amp; Proximity team at Latin America’s
            leading e-commerce and fintech ecosystem, building scalable,
            high-performance interfaces with React, TypeScript, SSR, Storybook
            and end-to-end testing.
          </Text>
        </Block>

        <Block>
          <Heading>// companies I have worked with</Heading>
          <Text>
            MercadoLibre · Falabella (Fpay) · vLex · Danone · Skydropx · Baufest
            (ARSAT) · Lapzo · Kinsper
          </Text>
        </Block>

        <Block>
          <Heading>// stack</Heading>
          <Stack>
            React · Next.js · TypeScript · JavaScript · Redux Toolkit · Styled
            Components · Chakra UI · Material UI · Jest · Cypress · Storybook ·
            Micro-frontends · Monorepos · Node.js · SSR &amp; SEO
          </Stack>
        </Block>

        <Block>
          <Heading>// explore</Heading>
          <LinkRow>
            <PageLink href="/projects">_front-end projects</PageLink>
            <PageLink href="/about-me">_about me</PageLink>
            <PageLink href="/blog">_react &amp; next.js blog</PageLink>
            <PageLink href="/contact-me">_hire me</PageLink>
          </LinkRow>
        </Block>
      </Inner>
    </Section>
  );
};

export default HomeIntro;
