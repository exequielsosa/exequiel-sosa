import styled from "styled-components";
import { AboutMeMenu, DisplayMobileInfoAboutMe, ContactMe } from "@/components/organisms";
import { SectionCard, TextTable, TitleCard } from "@/components/atoms";
import { useState } from "react";
import {
  dataAboutMe,
  dataFalabella,
  dataKinsper,
  dataSkydropx,
  dataLapzo,
  dataFreelance,
  dataMusic,
  dataHardware,
  dataFamily,
  dataHight,
  dataUniversity,
  dataOthers,
  dataUniversityMobile,
  dataHightMobile,
  dataOthersMobile,
  dataHardwareMobile,
  dataMusicMobile,
  dataFamilyMobile,
  dataAboutMeMobile,
  dataFalabellaMobile,
  dataKinsperMobile,
  dataSkydropxMobile,
  dataLapzoMobile,
  dataFreelanceMobile,
} from "../../../constants";
import { SnipetsAboutMe } from "../../molecules";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  @media (min-width: 1440px) {
    min-height: 720px;
  }
`;

const Column = styled.div`
  width: 24%;
  height: 720px;
  display: flex;
  background: #011627;
  @media (min-width: 1024px) {
    width: 35%;
  }
  @media (min-width: 1440px) {
    min-height: 720px;
    width: 24%;
  }
`;

const Body = styled.div`
  width: 76%;
  height: 720px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    min-height: 720px;
  }
`;

const BodyMobile = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
  flex-direction: column;
`;

const LayoutBody = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
`;

const TextAreaLayout = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 720px; */
  @media (min-width: 1440px) {
    border-right: 1px solid rgba(96, 123, 150, 0.4);
    width: 55%;
  }
`;

const ContainerNameSection = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  height: 42px;
`;

const ContainerSnippet = styled.div`
  display: none;
  @media (min-width: 1440px) {
    background: transparent;
    display: flex;
    flex-direction: column;
    width: 45%;
  }
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

const AboutMe = () => {
  const [section, setSection] = useState("bio");
  const [note, setNote] = useState("dataAboutMe");

  const handeClickBio = () => {
    setSection("");
    setSection("bio");
    setNote("dataAboutMe");
  };

  const handeClickInterest = () => {
    setSection("");
    setSection("interest");
    setNote("dataHardware");
  };

  const handeClickEducation = () => {
    setSection("");
    setSection("education");
    setNote("dataHight");
  };

  const handeClickClose = () => {
    setSection("");
    setNote("dataClear");
  };

  const isEnabledSection = section.length > 0;

  const dataClear = [];

  const { isLg, isLl } = useBreakpoints();

  return (
    <Layout>
      {isLg || isLl ? (
        <>
          <Column>
            <AboutMeMenu
              section={section}
              note={note}
              handeClickBio={handeClickBio}
              handeClickInterest={handeClickInterest}
              handeClickEducation={handeClickEducation}
              handleClickAboutMe={() => setNote("dataAboutMe")}
              handleClickFalabella={() => setNote("dataFalabella")}
              handleClickKinsper={() => setNote("dataKinsper")}
              handleClickSkydropx={() => setNote("dataSkydropx")}
              handleClickLapzo={() => setNote("dataLapzo")}
              handleClickFreelance={() => setNote("dataFreelance")}
              handleClickHardware={() => setNote("dataHardware")}
              handleClickMusic={() => setNote("dataMusic")}
              handleClickFamily={() => setNote("dataFamily")}
              handleClickHight={() => setNote("dataHight")}
              handleClickUniversity={() => setNote("dataUniversity")}
              handleClickOthers={() => setNote("dataOthers")}
              handleClickPersonal={handeClickBio}
              handleClickHobby={handeClickInterest}
              handleClickProfesional={handeClickEducation}
            />
          </Column>
          <Body>
            <LayoutBody>
              <TextAreaLayout>
                <ContainerNameSection>
                  {isEnabledSection && (
                    <>
                      <TitleCard
                        titleName={
                          note === "dataAboutMe"
                            ? "about-me"
                            : note === "dataFalabella"
                            ? "falabella financiero"
                            : note === "dataKinsper"
                            ? "kinsper"
                            : note === "dataSkydropx"
                            ? "skydropx"
                            : note === "dataLapzo"
                            ? "lapzo"
                            : note === "dataHardware"
                            ? "computer-hardware"
                            : note === "dataMusic"
                            ? "music"
                            : note === "dataFamily"
                            ? "family"
                            : note === "dataHight"
                            ? "hight-school"
                            : note === "dataUniversity"
                            ? "university"
                            : note === "dataOthers"
                            ? "developer skills"
                            : "freelance"
                        }
                      />
                      <SectionCard
                        sectionName={section}
                        handleClickButtonClose={handeClickClose}
                      />
                    </>
                  )}
                </ContainerNameSection>
                <TextTable
                  data={
                    note === "dataAboutMe"
                      ? dataAboutMe
                      : note === "dataFalabella"
                      ? dataFalabella
                      : note === "dataKinsper"
                      ? dataKinsper
                      : note === "dataSkydropx"
                      ? dataSkydropx
                      : note === "dataLapzo"
                      ? dataLapzo
                      : note === "dataClear"
                      ? dataClear
                      : note === "dataMusic"
                      ? dataMusic
                      : note === "dataHardware"
                      ? dataHardware
                      : note === "dataFamily"
                      ? dataFamily
                      : note === "dataHight"
                      ? dataHight
                      : note === "dataUniversity"
                      ? dataUniversity
                      : note === "dataOthers"
                      ? dataOthers
                      : dataFreelance
                  }
                />
              </TextAreaLayout>
              <ContainerSnippet>
                <ContainerNameSection />
                <SnipetsAboutMe />
              </ContainerSnippet>
            </LayoutBody>
            {!isLg &&
              (note === "dataAboutMe" ||
                note === "dataSkydropx" ||
                note === "dataLapzo" ||
                note === "dataFreelance" ||
                note === "dataHardware" ||
                note === "dataMusic") && <SnipetsAboutMe isMobile />}
          </Body>
        </>
      ) : (
        <>
          <BodyMobile>
            <TitleMobile>_about-me</TitleMobile>
            <AboutMeMenu
              isMobile
              section={section}
              note={note}
              handeClickBio={handeClickBio}
              handeClickInterest={handeClickInterest}
              handeClickEducation={handeClickEducation}
              handleClickAboutMe={() => setNote("dataAboutMe")}
              handleClickFalabella={() => setNote("dataFalabella")}
              handleClickKinsper={() => setNote("dataKinsper")}
              handleClickSkydropx={() => setNote("dataSkydropx")}
              handleClickLapzo={() => setNote("dataLapzo")}
              handleClickFreelance={() => setNote("dataFreelance")}
              handleClickHardware={() => setNote("dataHardware")}
              handleClickMusic={() => setNote("dataMusic")}
              handleClickFamily={() => setNote("dataFamily")}
              handleClickHight={() => setNote("dataHight")}
              handleClickUniversity={() => setNote("dataUniversity")}
              handleClickOthers={() => setNote("dataOthers")}
              handleClickPersonal={handeClickBio}
              handleClickHobby={handeClickInterest}
              handleClickProfesional={handeClickEducation}
            />
            <DisplayMobileInfoAboutMe
              data={
                note === "dataUniversity"
                  ? dataUniversityMobile
                  : note === "dataOthers"
                  ? dataOthersMobile
                  : note === "dataHardware"
                  ? dataHardwareMobile
                  : note === "dataMusic"
                  ? dataMusicMobile
                  : note === "dataFamily"
                  ? dataFamilyMobile
                  : note === "dataAboutMe"
                  ? dataAboutMeMobile
                  : note === "dataFalabella"
                  ? dataFalabellaMobile
                  : note === "dataKinsper"
                  ? dataKinsperMobile
                  : note === "dataSkydropx"
                  ? dataSkydropxMobile
                  : note === "dataLapzo"
                  ? dataLapzoMobile
                  : note === "dataFreelance"
                  ? dataFreelanceMobile
                  : dataHightMobile
              }
            />
            <ContactMe isMobile/>
            <SnipetsAboutMe isMobile />
          </BodyMobile>
        </>
      )}
    </Layout>
  );
};

export default AboutMe;
