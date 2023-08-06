import styled from "styled-components";

const SubTitle = styled.div`
  background: transparent;
  color: #607b96;
  text-align: center;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-bottom: 37px;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  background: transparent;
  padding-top: ${(props) => (props.isMobile ? "70px" : "150px")};
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    max-width: 100%;
    align-items: flex-start;
  }
`;

const Imagen = styled.img`
  width: 100%;
  max-width: 250px;
  background: transparent;
  opacity: 0.9;
`;

export const EmptyState = (isMobile) => {
  return (
    <Layout isMobile={isMobile}>
      {isMobile ? (
        <>
          <SubTitle>
            {" "}
            Please select the projects from the menu to see my work! 😊
          </SubTitle>
          <Imagen src="qr.svg" />
        </>
      ) : (
        <>
          <SubTitle>
            Please select the projects from the side menu to see my work! 😊{" "}
          </SubTitle>
          <Imagen src="qr.svg" />
        </>
      )}
    </Layout>
  );
};

export default EmptyState;
