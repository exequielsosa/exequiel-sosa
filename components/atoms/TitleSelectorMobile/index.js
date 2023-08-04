import styled from "styled-components";

const Layout = styled.div`
  background: rgba(30, 45, 61, 0.5);
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => (props.isSelected ? "13px" : "4px")};
  height: 40px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  color: ${(props) =>
    props.isSelected ? "#fff" : props.isMobile ? "#fff" : "#607b96"};
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
  margin-left: ${(props) => (props.isSelected ? "25px" : "28px")};
  margin-right: 12px;
`;

export const TitleSelectorMobile = ({
  sectionName,
  isSelected,
  handleClick,
  isMobile,
}) => {
  return (
    <Layout onClick={handleClick} isMobile={isMobile} isSelected={isSelected}>
      <Vector
        src={isSelected ? "/dotCloseOpen.svg" : "/dotClose.svg"}
        isSelected={isSelected}
      />

      <Name isSelected={isSelected} isMobile={isMobile}>
        {sectionName}
      </Name>
    </Layout>
  );
};

export default TitleSelectorMobile;
