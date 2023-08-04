import TitleSection from "../../molecules/TitleSection";
import ContactSection from "@/components/molecules/ContactSection";
import styled from "styled-components";

const MailTo = styled.a`
  background: transparent;
  text-decoration: none;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ContactMe = () => {
  return (
    <Layout>
      <TitleSection title="contacts" isComplete />
      <MailTo href="mailto:exequielsosa@gmail.com">
        <ContactSection title="exequielsosa@gmail.com" icon="/mailVector.svg" />
      </MailTo>
      <ContactSection
        title="+5491158959825"
        icon="/phoneVector.svg"
        handleClick={() => window.open("https://wa.me/541158959825", "_blank")}
      />
    </Layout>
  );
};

export default ContactMe;
