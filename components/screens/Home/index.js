import styled from "styled-components";
import { TitleHome, HomeSnipets } from "@/components/atoms";

const ImageBlurBlue = styled.img`
  position: absolute;
  background: transparent;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  fill: #4d5bce;
  margin-top: 100px;
`;

const ImageBlurGreen = styled.img`
  position: absolute;
  background: transparent;
  fill: #43d9ad;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  margin-top: -200px;
  margin-left: -200px;
`;

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
  width: 59%;
  min-height: 700px;
  display: flex;
  background: transparent;
  background-image: url("grid.png");
  background-color: #011627;
`;

const NoneArea = styled.div`
  width: 17%;
  min-height: 700px;
  display: flex;
  background: #011627;
`;

const LayoutBody = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
`;

const LayoutSnipets = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
`;

const Home = () => {
  return (
    <Layout>
      <Column></Column>
      <Body>
        <LayoutBody>
          <TitleHome
            handleClick={() =>
              window.open("https://github.com/exequielsosa", "_blank")
            }
          />
          <LayoutSnipets>
            <ImageBlurBlue src="/blueBack.svg" />
            <ImageBlurGreen src="/greenBack.svg" />
            <HomeSnipets />
          </LayoutSnipets>
        </LayoutBody>
      </Body>
      <NoneArea />
    </Layout>
  );
};

export default Home;
