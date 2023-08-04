import styled from "styled-components";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  padding-left: 16px;
  z-index: 5;
  @media (min-width: 768px) {
    padding-left: 24px;
  }
  @media (min-width: 1024px) {
    padding-left: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 4px;
  }
`;

const Hi = styled.div`
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
`;

const Name = styled.div`
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  display: flex;
  width: 100%;
  @media (min-width: 600px) {
    font-size: 62px;
  }
`;

const Frontend = styled.div`
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 24px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

const CanSee = styled.div`
  color: #607b96;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
  margin-top: 80px;
  margin-bottom: 16px;
  @media (min-width: 600px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const Const = styled.div`
  background: transparent;
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Git = styled.div`
  background: transparent;
  color: #43d9ad;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Equal = styled.div`
  background: transparent;
  color: #fff;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

const Link = styled.div`
  background: transparent;
  color: #e99287;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (min-width: 600px) {
    font-size: 16px;
  }
  &:hover {
    color: #4d5bce;
  }
`;

const LayoutLink = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  cursor: pointer;
`;

const LayoutLinkMobile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: transparent;
`;

const LayoutConst = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  margin-bottom: 4px;
`;

export const TitleHome = ({ handleClick }) => {
  const { isXs } = useBreakpoints();
  return (
    <Layout>
      <Hi>Hi all. I am</Hi>
      <Name>Exequiel Sosa</Name>
      <Frontend>{">"} Front-end developer</Frontend>
      <CanSee>// you can also see it on my Github page</CanSee>
      {isXs ? (
        <LayoutLinkMobile>
          <LayoutConst>
            <Const>const</Const>
            <Git>githubLink</Git>
            <Equal>=</Equal>
          </LayoutConst>
          <Link onClick={handleClick}>“https://github.com/exequielsosa”</Link>
        </LayoutLinkMobile>
      ) : (
        <LayoutLink>
          <Const>const</Const>
          <Git>githubLink</Git>
          <Equal>=</Equal>
          <Link onClick={handleClick}>“https://github.com/exequielsosa”</Link>
        </LayoutLink>
      )}
    </Layout>
  );
};

export default TitleHome;
