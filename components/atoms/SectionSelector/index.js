import styled from "styled-components";

const ImageIcon = styled.img`
  background: transparent;
  margin-left: 35px;
  margin-right: 9px;
`;

const NameSection = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  &:hover {
    color: #4d5bce;
  }
`;

const Layout = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const SectionSelector = ({ nameSection, handleClick }) => {
  return (
    <Layout onClick={handleClick}>
      <ImageIcon src="/displayItems.svg" />
      <NameSection>{nameSection}</NameSection>
    </Layout>
  );
};

export default SectionSelector;
