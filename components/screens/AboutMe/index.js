import styled from "styled-components";
import { AboutMeMenu } from "@/components/organisms";

const Layout = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Column = styled.div`
  width: 24%;
  min-height: 700px;
  display: flex;
  background: #011627;
`;

const Body = styled.div`
  width: 76%;
  min-height: 700px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
`;

const NoneArea = styled.div`
  width: 17%;
  min-height: 700px;
  display: flex;
  background: #011627;
`;

const AboutMe = () => {
  return (
    <Layout>
      <Column><AboutMeMenu /></Column>
      <Body>About Me!</Body>      
    </Layout>
  );
};

export default AboutMe;
