import ContactSection from "@/components/molecules/ContactSection";
import styled from "styled-components";
import TitleSection from "../../molecules/TitleSection";
import { SectionSelector, TitleSelector } from "@/components/atoms";

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

export const AboutMeMenu = ({
  handeClickBio,
  handeClickInterest,
  handeClickEducation,
  section,
  handleClickAboutMe,
  handleClickFalabella,
  handleClickKinsper,
  handleClickSkydropx,
  handleClickLapzo,
  handleClickFreelance,
  handleClickHardware,
  handleClickMusic,
  handleClickFamily,
  handleClickHight,
  handleClickUniversity,
  handleClickOthers,
  note,
}) => {
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
        {section === "bio" && (
          <>
            <SectionSelector
              nameSection="about-me"
              handleClick={handleClickAboutMe}
              active={note === "dataAboutMe"}
            />
            <SectionSelector
              nameSection="falabella financiero"
              handleClick={handleClickFalabella}
              active={note === "dataFalabella"}
            />
            <SectionSelector
              nameSection="kinsper"
              handleClick={handleClickKinsper}
              active={note === "dataKinsper"}
            />
            <SectionSelector
              nameSection="skydropx"
              handleClick={handleClickSkydropx}
              active={note === "dataSkydropx"}
            />
            <SectionSelector
              nameSection="lapzo"
              handleClick={handleClickLapzo}
              active={note === "dataLapzo"}
            />
            <SectionSelector
              nameSection="freelance"
              handleClick={handleClickFreelance}
              active={note === "dataFreelance"}
            />
          </>
        )}
        <TitleSelector
          sectionName="interests"
          icon="/interestFolder.svg"
          handleClick={handeClickInterest}
          isSelected={section === "interest"}
        />
        {section === "interest" && (
          <>
            <SectionSelector
              nameSection="computer-hardware"
              handleClick={handleClickHardware}
              active={note === "dataHardware"}
            />
            <SectionSelector
              nameSection="music"
              handleClick={handleClickMusic}
              active={note === "dataMusic"}
            />
            <SectionSelector
              nameSection="family"
              handleClick={handleClickFamily}
              active={note === "dataFamily"}
            />
          </>
        )}
        <TitleSelector
          sectionName="education"
          icon="/educationFolder.svg"
          handleClick={handeClickEducation}
          isSelected={section === "education"}
        />
        {section === "education" && (
          <>
            <SectionSelector
              nameSection="hight-school"
              handleClick={handleClickHight}
              active={note === "dataHight"}
            />
            <SectionSelector
              nameSection="university"
              handleClick={handleClickUniversity}
              active={note === "dataUniversity"}
            />
            <SectionSelector
              nameSection="others studies - skills"
              handleClick={handleClickOthers}
              active={note === "dataOthers"}
            />
          </>
        )}
        <TitleSection title="contacts" isComplete />
        <ContactSection title="exequielsosa@gmail.com" icon="/mailVector.svg" />
        <ContactSection title="+5491158959825" icon="/phoneVector.svg" />
      </DisplayMenu>
    </Layout>
  );
};

export default AboutMeMenu;
