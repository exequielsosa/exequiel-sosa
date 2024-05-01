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

const DivLayout = styled.div`
  background: transparent;
  margin-left: 12px;
  margin-top: 12px;
`;

export const ContactMe = () => {
  return (
    <Layout>
      <TitleSection title="contacts" isComplete isMobile />
      <MailTo href="mailto:exequielsosa@gmail.com">
        <ContactSection
          title="exequielsosa@gmail.com"
          icon="/mailVector.svg"
          isMobile
        />
      </MailTo>
      <ContactSection
        title="+5491158959825"
        icon="/phoneVector.svg"
        handleClick={() => window.open("https://wa.me/541158959825", "_blank")}
        isMobile
      />
      <DivLayout>
        <MailTo href="/ExequielIgnacioSosaResume2024.pdf" target="_blank">
          <ContactSection title="download my resume" icon="/resume.svg" />
        </MailTo>
      </DivLayout>
    </Layout>
  );
};

export default ContactMe;
