import styled from "styled-components";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url("grid.png");
`;

const Name = styled.div`
  display: flex;
  padding-left: 18px;
  padding-right: 18px;
  color: rgba(96, 123, 150, 1);
  height: 42px;
  font-size: 16px;
  background-color: transparent;
  border-right: ${(props) =>
    props.small && "1px solid rgba(96, 123, 150, 0.4)"};
  align-items: center;
`;

const Logo = styled.div`
display: flex;
border-left: ${(props) => props.left && "1px solid rgba(96, 123, 150, 0.4)"};
  border-right: ${(props) =>
    props.rigth && "1px solid rgba(96, 123, 150, 0.4)"};
  background-color: transparent;  
  width: 52px;
  justify-content: center;
  &:hover {
    background: rgba(30, 45, 61, 0.6);
    cursor: pointer;
`;

const ImageLogo = styled.img`
  width: 43px;
  background-color: transparent;
`;

const ImageGit = styled.img`
  width: 30px;
  background-color: transparent;
`;

const LayoutSocial = styled.div`
  background-color: transparent;
  display: flex;
`;

export const FooterMobile = () => {
  const { isXs } = useBreakpoints();
  return (
    <Layout>
      <Name small={!isXs}>find me in:</Name>
      <LayoutSocial>
        <Logo
          rigth
          left
          onClick={() =>
            window.open("https://twitter.com/soyexequielsosa", "_blank")
          }
        >
          <ImageLogo src="/twitter.svg" />
        </Logo>
        <Logo
          rigth
          onClick={() =>
            window.open("https://facebook.com/exequiel.sosa", "_blank")
          }
        >
          <ImageLogo src="/facebook.svg" />
        </Logo>

        <Logo
          onClick={() =>
            window.open("https://github.com/exequielsosa", "_blank")
          }
        >
          <ImageGit src="/github2.svg" />
        </Logo>
      </LayoutSocial>
    </Layout>
  );
};

export default FooterMobile;
