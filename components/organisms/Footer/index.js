import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: rgba(30, 45, 61, 0.1);
  display: flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: row;
  align-items: center;
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
  width: 76%;
  background-color: transparent;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-left: 8px;
`;

export const Footer = () => {
  return (
    <Layout>
      <AlignContent>
        <Name>find me in:</Name>
        <Logo>
          <ImageLogo src="/twitter.svg" />
        </Logo>
        <Logo right>
          <ImageLogo src="/facebook.svg" />
        </Logo>
      </AlignContent>
      <AlignContact>
        <MenuEnd>
          @exequielsosa <Image src="/github.svg" />
        </MenuEnd>
      </AlignContact>
    </Layout>
  );
};

export default Footer;
