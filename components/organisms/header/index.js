import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: rgba(30, 45, 61, 0.1);
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  padding: 18px 22px;
  width: 24%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

const MenuCenter = styled.div`
  padding: 18px 22px;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
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
  width: 50%;
  background-color: transparent;
`;

const AlignContact = styled.div`
  display: flex;
  width: 26%;
  background-color: transparent;
  justify-content: flex-end;
`;

export const Header = () => {
  return (
    <Layout>
      <Name>exequiel-sosa</Name>
      <AlignContent>
        <MenuCenter isSelected>_hello</MenuCenter>
        <MenuCenter>_about-me</MenuCenter>
        <MenuCenter>_projects</MenuCenter>
      </AlignContent>
      <AlignContact>
        <MenuEnd>_contact-me</MenuEnd>
      </AlignContact>
    </Layout>
  );
};

export default Header;
