import styled from "styled-components";
import { AboutMeMenu } from "@/components/organisms";
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
} from "../../../constants";

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
  width: 76%;
  min-height: 700px;
  display: flex;
  background: transparent;
  background-image: url("grid2.png");
  background-color: #011627;
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
  width: 55%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 700px;
`;

const ContainerNameSection = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  height: 42px;
`;

const TextArea = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
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

  return (
    <Layout>
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
                        ? "data-hardware"
                        : note === "dataMusic"
                        ? "music"
                        : note === "dataFamily"
                        ? "family"
                        : note === "dataHight"
                        ? "hight-school"
                        : note === "dataUniversity"
                        ? "university"
                        : note === "dataOthers"
                        ? "others studies - skills"
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
        </LayoutBody>
      </Body>
    </Layout>
  );
};

export default AboutMe;
