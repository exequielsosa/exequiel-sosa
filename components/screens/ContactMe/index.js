import styled from "styled-components";
import { ContactsContactMe, FormContact } from "@/components/organisms/";
import { ImagesContacts } from "@/components/molecules/";

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Body = styled.div`
  width: 76%;
  min-height: 720px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
`;
const LayoutForm = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  background: transparent;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const LayoutImage = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  background: transparent;  
`;

const ContactMe = () => {
  return (
    <Layout>
      <ContactsContactMe />
      <Body>
        <LayoutForm>
          <FormContact />
        </LayoutForm>
        <LayoutImage>
          <ImagesContacts />
        </LayoutImage>
      </Body>
    </Layout>
  );
};

export default ContactMe;
