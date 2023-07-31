import styled from "styled-components";

const Name = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;

const Layout = styled.div`
  background: transparent;
  display: flex;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  align-items: center;
`;

export const TitleCard = ({ titleName }) => {
  return (
    <Layout>
      <Name>{titleName}</Name>
    </Layout>
  );
};

export default TitleCard;
