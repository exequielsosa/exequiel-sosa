import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  padding-left: 4px;
  z-index: 5;
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
  font-size: 62px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
`;

const Frontend = styled.div`
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 32px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
`;

const CanSee = styled.div`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
  margin-top: 80px;
  margin-bottom: 8px;
`;

const Const = styled.div`
  background: transparent;
  color: #4d5bce;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
`;

const Git = styled.div`
  background: transparent;
  color: #43d9ad;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
`;

const Equal = styled.div`
  background: transparent;
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
`;

const Link = styled.div`
  background: transparent;
  color: #e99287;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LayoutLink = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  cursor: pointer;
`;

export const TitleHome = () => {
  return (
    <Layout>
      <Hi>Hi all. I am</Hi>
      <Name>Exequiel Sosa</Name>
      <Frontend>{">"} Front-end developer</Frontend>
      <CanSee>// you can also see it on my Github page</CanSee>
      <LayoutLink>
        <Const>const</Const>
        <Git>githubLink</Git>
        <Equal>=</Equal>
        <Link>“https://github.com/exequielsosa”</Link>
      </LayoutLink>
    </Layout>
  );
};

export default TitleHome;
