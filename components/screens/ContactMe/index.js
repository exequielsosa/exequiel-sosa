import styled from "styled-components";
import { ContactsContactMe, FormContact } from "@/components/organisms/";
import { ImagesContacts } from "@/components/molecules/";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { TitleSelectorMobile } from "@/components/atoms";
import { ContactSection } from "@/components/molecules";
import { useState } from "react";

const Layout = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  @media(max-height: 768px) { 
    min-height: 720px;

  }
`;

const Body = styled.div`
  width: 76%;  
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
  @media(min-height: 768px) {
    min-height: 720px;
  }
`;
const LayoutForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: transparent;
  @media (min-width: 1440px) {
    border-right: 1px solid rgba(96, 123, 150, 0.4);
    width: 45%;
  }
`;

const LayoutImage = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    width: 55%;
    flex-direction: column;
    background: transparent;
  }
`;

const BodyMobile = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  background-image: url("grid.png");
  background-color: #011627;
  flex-direction: column;
`;

const TitleMobile = styled.div`
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 140%;
  background: transparent;
  padding: 21px 0px 29px 25px;
`;

const MailTo = styled.a`
  background: transparent;
  text-decoration: none;
`;

const ContactMe = () => {
  const { isLg, isLl, isMd } = useBreakpoints();
  const [openContacts, setOpenContacts] = useState(false);
  const toogleOpenContacts = () => setOpenContacts(!openContacts);
  const [openFindMe, setOpenFindMe] = useState(false);
  const toogleOpenFindMe = () => setOpenFindMe(!openFindMe);

  return (
    <Layout>
      {isLg || isLl || isMd ? (
        <>
          <ContactsContactMe />
          <Body>
            <LayoutForm>
              <FormContact />
            </LayoutForm>
            <LayoutImage>
              <ImagesContacts />
            </LayoutImage>
          </Body>
        </>
      ) : (
        <>
          <BodyMobile>
            <TitleMobile>_contact-me</TitleMobile>
            <TitleSelectorMobile
              sectionName="contacts"
              handleClick={toogleOpenContacts}
              isSelected={openContacts}
              isMobile
            />
            {openContacts && (
              <>
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
                  handleClick={() =>
                    window.open("https://wa.me/541158959825", "_blank")
                  }
                  isMobile
                />
              </>
            )}
            <TitleSelectorMobile
              sectionName="find-me-also-in"
              handleClick={toogleOpenFindMe}
              isSelected={openFindMe}
              isMobile
            />
            {openFindMe && (
              <>
                <ContactSection
                  title="Instagram accaunt"
                  icon="/goTo.svg"
                  handleClick={() =>
                    window.open("https://instagram.com/exequielsosa", "_blank")
                  }
                  isMobile
                />
                <ContactSection
                  title="Linkedin profile"
                  icon="/goTo.svg"
                  handleClick={() =>
                    window.open(
                      "https://linkedin.com/in/exequielsosa",
                      "_blank"
                    )
                  }
                  isMobile
                />
              </>
            )}
            <FormContact isMobile/>
          </BodyMobile>
        </>
      )}
    </Layout>
  );
};

export default ContactMe;
