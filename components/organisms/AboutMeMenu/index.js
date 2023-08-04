import ContactSection from "@/components/molecules/ContactSection";
import styled from "styled-components";
import TitleSection from "../../molecules/TitleSection";
import {
  SectionSelector,
  TitleSelector,
  TitleSelectorMobile,
} from "@/components/atoms";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Layout = styled.div`
  display: flex;
  width: 100%;
  border-right: ${(props) =>
    props.isMobile ? "" : "1px solid rgba(96, 123, 150, 0.4)"};
  min-height: ${(props) => (props.isMobile ? "" : "700px")};
  background: transparent;
`;

const MailTo = styled.a`
  background: transparent;
  text-decoration: none;
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
  handleClickPersonal,
  handleClickHobby,
  handleClickProfesional,
  isMobile,
}) => {
  const { isLl, isLg } = useBreakpoints();

  return (
    <Layout isMobile={isMobile}>
      {isLl || isLg ? (
        <SideBarMenu>
          <Icon
            src="/personalInfo.svg"
            isSelected={section === "bio"}
            onClick={handleClickPersonal}
          />
          <Icon
            src="/hobbyInfo.svg"
            isSelected={section === "interest"}
            onClick={handleClickHobby}
          />
          <Icon
            src="/ProfesionalInfo.svg"
            isSelected={section === "education"}
            onClick={handleClickProfesional}
          />
        </SideBarMenu>
      ) : (
        ""
      )}
      <DisplayMenu>
        {(isLl || isLg) && <TitleSection title="personal-info" />}
        {isLl || isLg ? (
          <TitleSelector
            sectionName="bio"
            icon="/bioFolder.svg"
            handleClick={handeClickBio}
            isSelected={section === "bio"}
          />
        ) : (
          <TitleSelectorMobile
            sectionName="bio"
            icon="/bioFolder.svg"
            handleClick={handeClickBio}
            isSelected={section === "bio"}
            isMobile
          />
        )}
        {section === "bio" && (
          <>
            <SectionSelector
              isMobile={isMobile}
              nameSection="about-me"
              handleClick={handleClickAboutMe}
              active={note === "dataAboutMe"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="falabella financiero"
              handleClick={handleClickFalabella}
              active={note === "dataFalabella"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="kinsper"
              handleClick={handleClickKinsper}
              active={note === "dataKinsper"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="skydropx"
              handleClick={handleClickSkydropx}
              active={note === "dataSkydropx"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="lapzo"
              handleClick={handleClickLapzo}
              active={note === "dataLapzo"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="freelance"
              handleClick={handleClickFreelance}
              active={note === "dataFreelance"}
            />
          </>
        )}
        {isLl || isLg ? (
          <TitleSelector
            sectionName="interests"
            icon="/interestFolder.svg"
            handleClick={handeClickInterest}
            isSelected={section === "interest"}
          />
        ) : (
          <TitleSelectorMobile
            sectionName="interests"
            icon="/interestFolder.svg"
            handleClick={handeClickInterest}
            isSelected={section === "interest"}
            isMobile
          />
        )}
        {section === "interest" && (
          <>
            <SectionSelector
              isMobile={isMobile}
              nameSection="computer-hardware"
              handleClick={handleClickHardware}
              active={note === "dataHardware"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="music"
              handleClick={handleClickMusic}
              active={note === "dataMusic"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="family"
              handleClick={handleClickFamily}
              active={note === "dataFamily"}
            />
          </>
        )}
        {isLl || isLg ? (
          <TitleSelector
            sectionName="education"
            icon="/educationFolder.svg"
            handleClick={handeClickEducation}
            isSelected={section === "education"}
          />
        ) : (
          <TitleSelectorMobile
            sectionName="education"
            icon="/educationFolder.svg"
            handleClick={handeClickEducation}
            isSelected={section === "education"}
            isMobile
          />
        )}
        {section === "education" && (
          <>
            <SectionSelector
              isMobile={isMobile}
              nameSection="hight-school"
              handleClick={handleClickHight}
              active={note === "dataHight"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="university"
              handleClick={handleClickUniversity}
              active={note === "dataUniversity"}
            />
            <SectionSelector
              isMobile={isMobile}
              nameSection="developer skills"
              handleClick={handleClickOthers}
              active={note === "dataOthers"}
            />
          </>
        )}
        {(isLl || isLg) && (
          <>
            <TitleSection title="contacts" isComplete />
            <MailTo href="mailto:exequielsosa@gmail.com">
              <ContactSection
                title="exequielsosa@gmail.com"
                icon="/mailVector.svg"
              />
            </MailTo>

            <ContactSection
              title="+5491158959825"
              icon="/phoneVector.svg"
              handleClick={() =>
                window.open("https://wa.me/541158959825", "_blank")
              }
            />
          </>
        )}
      </DisplayMenu>
    </Layout>
  );
};

export default AboutMeMenu;
