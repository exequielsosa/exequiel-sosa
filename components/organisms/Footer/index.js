import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: row;
`;

const Name = styled.div`
  display: flex;
  padding: 18px 22px;
  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

const Logo = styled.div`
display: flex;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: ${(props) =>
    props.right && "1px solid rgba(96, 123, 150, 0.4)"};
  background-color: transparent;
  padding-left: 14px;
  padding-right: 14px;
  &:hover {
    background: rgba(30, 45, 61, 0.6);
    cursor: pointer;
`;

const ImageLogo = styled.img`
  width: 43px;
  background-color: transparent;
`;

const MenuEnd = styled.div`
z-index: 6;
  display: flex;
  padding: 18px 22px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const AlignContent = styled.div`
  display: flex;
  width: 24%;
  background-color: transparent;
`;

const AlignContact = styled.div`
  display: flex;
  width: 17%;
  background-color: transparent;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-left: 8px;
`;

const NoneArea = styled.div`
  background-image: url("grid2.png");
  display: flex;
  width: 59%;
  color: #1b1423;
`;

export const Footer = () => {
  return (
    <Layout>
      <AlignContent>
        <Name>find me in:</Name>
        <Logo
          onClick={() =>
            window.open("https://twitter.com/soyexequielsosa", "_blank")
          }
        >
          <ImageLogo src="/twitter.svg" />
        </Logo>
        <Logo
          right
          onClick={() =>
            window.open("https://facebook.com/exequiel.sosa", "_blank")
          }
        >
          <ImageLogo src="/facebook.svg" />
        </Logo>
      </AlignContent>
      <NoneArea>.</NoneArea>
      <AlignContact>
        <MenuEnd
          onClick={() =>
            window.open("https://github.com/exequielsosa", "_blank")
          }
        >
          @exequielsosa <Image src="/github.svg" />
        </MenuEnd>
      </AlignContact>
    </Layout>
  );
};

export default Footer;
