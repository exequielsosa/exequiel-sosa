import styled from "styled-components";

const Layout = styled.div`
  background: transparent;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  display: flex;
  width: 100%;
  border-top: ${(props) =>
    props.isComplete && "1px solid rgba(96, 123, 150, 0.4)"};
  height: 42px;
  align-items: center;
  margin-bottom: 18px;
  margin-top: ${(props) => props.isComplete && "16px"};
`;

const Icon = styled.img`
  background: transparent;
  width: 9px;
  margin-left: ${(props)=> props.isProject ? '22px' : props.isMobile ? '25px' : '15px'};
  margin-right: 12px;
`;

const Title = styled.div`
  background: transparent;
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 100%;
`;

export const TitleSection = ({ isComplete, title, isProject, isMobile }) => {
  return (
    <Layout isComplete={isComplete}>
      <Icon src="/dropdownVector.svg" isProject={isProject} isMobile={isMobile} />
      <Title>{title}</Title>
    </Layout>
  );
};

export default TitleSection;
