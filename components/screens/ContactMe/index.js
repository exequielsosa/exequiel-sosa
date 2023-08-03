import styled from "styled-components";
import { ContactsContactMe, FormContact } from "@/components/organisms/";


const Layout = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Body = styled.div`
  width: 76%;
  min-height: 700px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
`;

const ContactMe = () => {
  return (
    <Layout>
      <ContactsContactMe />
      <Body><FormContact /></Body>
    </Layout>
  );
};

export default ContactMe;
