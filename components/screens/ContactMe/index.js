import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Column = styled.div`
  width: 24%;
  min-height: 700px;
  display: flex;
  background: #011627;
`;

const Body = styled.div`
  width: 59%;
  min-height: 700px;
  display: flex;
  background: transparent;
  background-image: url("grid.png");
  background-color: #011627;
`;

const NoneArea = styled.div`
  width: 17%;
  min-height: 700px;
  display: flex;
  background: #011627;
`;

const ContactMe = () => {
  return (
    <Layout>
      <Column></Column>
      <Body>Contact Me!</Body>
      <NoneArea />
    </Layout>
  );
};

export default ContactMe;