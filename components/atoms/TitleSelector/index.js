import styled from "styled-components";

const Image = styled.img`
  background: transparent;
  margin-right: 9px;
`;

const Layout = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  margin-bottom: 13px;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  color: ${(props)=> props.isSelected ? '#fff' : '#607b96'};
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  display: flex;
  &:hover {
    color: #fff;
  }
`;

const Vector = styled.img`
  background: transparent;
  margin-left: ${(props)=> props.isSelected ? '11px' : '16px'};
  margin-right: 12px;
`;

export const TitleSelector = ({ sectionName, icon, isSelected, handleClick }) => {
  return (
    <Layout onClick={handleClick}>
      <Vector
        src={isSelected ? "/iconSelectedDisplay.svg" : "/iconSelected.svg"}
        isSelected={isSelected}
      />
      <Image src={icon} />
      <Name isSelected={isSelected}>{sectionName}</Name>
    </Layout>
  );
};

export default TitleSelector;
