import ContactSection from "@/components/molecules/ContactSection";
import styled from "styled-components";
import TitleSection from "../../molecules/TitleSection";
import { TitleSelector } from "@/components/atoms";
import { useState } from "react";

const Layout = styled.div`
  display: flex;
  width: 100%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 700px;
  background: transparent;
`;

const Icon = styled.img`
  background: transparent;
  width: 24px;
  margin-bottom: 32px;
  opacity: ${(props) => (props.isSelected ? "1" : "0.4")};
  &:hover {
    cursor: pointer;
  }
`;

const SideBarMenu = styled.div`
  width: 66px;
  background: transparent;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  min-height: 700px;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  align-items: center;
`;

const DisplayMenu = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AboutMeMenu = () => {
  const [section, setSection] = useState("");

  const handeClickBio = () => {
    setSection("");
    setSection("bio");
  };

  const handeClickInterest = () => {
    setSection("");
    setSection("interest");
  };

  const handeClickEducation = () => {
    setSection("");
    setSection("education");
  };

  return (
    <Layout>
      <SideBarMenu>
        <Icon src="/personalInfo.svg" isSelected={section === "bio"} />
        <Icon src="/hobbyInfo.svg" isSelected={section === "interest"} />
        <Icon src="/ProfesionalInfo.svg" isSelected={section === "education"} />
      </SideBarMenu>
      <DisplayMenu>
        <TitleSection title="personal-info" />
        <TitleSelector
          sectionName="bio"
          icon="/bioFolder.svg"
          handleClick={handeClickBio}
          isSelected={section === "bio"}
        />
        {section === "bio" && <p>bio cosas</p>}
        <TitleSelector
          sectionName="interests"
          icon="/interestFolder.svg"
          handleClick={handeClickInterest}
          isSelected={section === "interest"}
        />
        {section === "interest" && <p>interest cosas</p>}
        <TitleSelector
          sectionName="education"
          icon="/educationFolder.svg"
          handleClick={handeClickEducation}
          isSelected={section === "education"}
        />
        {section === "education" && <p>education cosas</p>}
        <TitleSection title="contacts" isComplete />
        <ContactSection title="exequielsosa@gmail.com" icon="/mailVector.svg" />
        <ContactSection title="+5491158959825" icon="/phoneVector.svg" />
      </DisplayMenu>
    </Layout>
  );
};

export default AboutMeMenu;
