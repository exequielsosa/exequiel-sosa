import styled from "styled-components";
import { TitleHome, HomeSnipets } from "@/components/atoms";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const ImageBlurBlue = styled.img`
  position: absolute;
  background: transparent;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  fill: #4d5bce;
  margin-top: 250px;
  margin-left: 50px;
  width: 500px;
`;

const ImageBlurGreen = styled.img`
  position: absolute;
  background: transparent;
  fill: #43d9ad;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  margin-top: -200px;
  margin-left: -200px;
  width: 500px;
`;

const ImageBlurBlueMobile = styled.img`
  position: absolute;
  background: transparent;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  fill: #4d5bce;
  margin-top: 250px;
  margin-left: 50px;
  width: 300px;
  @media (min-width: 600px) {
    width: 500px;
    margin-top: 150px;
  }
  @media (min-width: 768px) {
    width: 650px;
    margin-top: 50px;
    margin-left: 80px;
  }
  @media (min-width: 1024px) {
    width: 900px;
    margin-top: 50px;
    margin-left: 80px;
  }
`;

const ImageBlurGreenMobile = styled.img`
  position: absolute;
  background: transparent;
  fill: #43d9ad;
  opacity: 0.4000000059604645;
  filter: blur(87px);
  width: 300px;
  @media (min-width: 600px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 650px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`;

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const LayoutMobile = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  background-image: url("grid.png");
`;

const Column = styled.div`
  width: 24%;
  min-height: 720px;
  display: flex;
  background: #011627;
`;

const Body = styled.div`
  width: 59%;
  min-height: 720px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
`;

const NoneArea = styled.div`
  width: 17%;
  min-height: 720px;
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
  const { isLg } = useBreakpoints();
  return (
    <>
      {isLg ? (
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
      ) : (
        <LayoutMobile>
          <TitleHome
            handleClick={() =>
              window.open("https://github.com/exequielsosa", "_blank")
            }
          />
          <ImageBlurBlueMobile src="/blueBack.svg" />
          <ImageBlurGreenMobile src="/greenBack.svg" />
        </LayoutMobile>
      )}
    </>
  );
};

export default Home;
