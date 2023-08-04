import styled from "styled-components";
import { MenuProjects } from "@/components/organisms";
import { SectionProjectCard } from "@/components/atoms";
import { useState } from "react";
import { CardProject, TitleSection } from "@/components/molecules";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import {
  dataFpay,
  dataLandings,
  dataB2C,
  dataLabels,
  dataColombia,
  dataLapzoCards,
  dataAus,
  dataDillon,
  dataNidit,
  dataVeti,
  dataUverified,
} from "../../../constants/dataCards";

const LayoutMenu = styled.div`
  display: flex;
  width: 100%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 720px;
  background: transparent;
  flex-direction: column;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 720px;
  display: flex;
  background: transparent;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  border-right: 1px solid rgba(96, 123, 150, 0.4);
`;

const Column = styled.div`
  width: 24%;
  min-height: 720px;
  display: flex;
  background: #011627;
`;

const Body = styled.div`
  width: 76%;
  min-height: 720px;
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
  width: 100%;
  min-height: 720px;
`;

const ContainerNameSection = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  height: 42px;
`;

const LayoutContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  max-width: 90%;
  flex-wrap: wrap;
  max-height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 26px;
    border: 1px solid #1e2d3d;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(96, 123, 150, 0.1);
    height: 20px;
  }
`;

const ContainerTags = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  max-width: 98.5%;
  flex-wrap: inherit;
  max-height: 600px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border: 1px solid #1e2d3d;
    /* display: none; */
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(96, 123, 150, 0.1);
    height: 5px;
  }
`;

const Project = () => {
  const [valueFpay, setCheckboxFpay] = useState(true);
  const [valueLandings, setCheckboxLandings] = useState(true);
  const [valueB2C, setCheckboxB2C] = useState(true);
  const [valueLabels, setCheckboxLabels] = useState(false);
  const [valueLapzo, setCheckboxLapzo] = useState(false);
  const [valueAus, setCheckboxAus] = useState(false);
  const [valueDillon, setCheckboxDillon] = useState(false);
  const [valueNidit, setCheckboxNidit] = useState(false);
  const [valueColombia, setCheckboxColombia] = useState(false);
  const [valueVeti, setCheckboxVeti] = useState(false);
  const [valueUverified, setCheckboxUverified] = useState(false);

  const { isLg } = useBreakpoints();
  return (
    <Layout>
      {isLg ? (
        <>
          <Column>
            <LayoutMenu>
              <TitleSection title="projects" isProject />
              <MenuProjects
                valueFpay={valueFpay}
                valueLandings={valueLandings}
                valueB2C={valueB2C}
                valueLabels={valueLabels}
                valueLapzo={valueLapzo}
                valueAus={valueAus}
                valueDillon={valueDillon}
                valueNidit={valueNidit}
                valueColombia={valueColombia}
                valueVeti={valueVeti}
                valueUverified={valueUverified}
                onChangeFpay={({ target }) => setCheckboxFpay(!valueFpay)}
                onChangeLandings={({ target }) =>
                  setCheckboxLandings(!valueLandings)
                }
                onChangeB2C={({ target }) => setCheckboxB2C(!valueB2C)}
                onChangeLabels={({ target }) => setCheckboxLabels(!valueLabels)}
                onChangeLapzo={({ target }) => setCheckboxLapzo(!valueLapzo)}
                onChangeAus={({ target }) => setCheckboxAus(!valueAus)}
                onChangeDillon={({ target }) => setCheckboxDillon(!valueDillon)}
                onChangeNidit={({ target }) => setCheckboxNidit(!valueNidit)}
                onChangeColombia={({ target }) =>
                  setCheckboxColombia(!valueColombia)
                }
                onChangeVeti={({ target }) => setCheckboxVeti(!valueVeti)}
                onChangeUverified={({ target }) =>
                  setCheckboxUverified(!valueUverified)
                }
              />
            </LayoutMenu>
          </Column>
          <Body>
            <LayoutBody>
              <TextAreaLayout>
                <ContainerNameSection>
                  <ContainerTags>
                    {valueFpay && (
                      <SectionProjectCard
                        sectionName="Fpay"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxFpay(!valueFpay)
                        }
                      />
                    )}
                    {valueLandings && (
                      <SectionProjectCard
                        sectionName="Landings"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxLandings(!valueLandings)
                        }
                      />
                    )}
                    {valueB2C && (
                      <SectionProjectCard
                        sectionName="B2C"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxB2C(!valueB2C)
                        }
                      />
                    )}
                    {valueLabels && (
                      <SectionProjectCard
                        sectionName="Labels"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxLabels(!valueLabels)
                        }
                      />
                    )}
                    {valueLapzo && (
                      <SectionProjectCard
                        sectionName="Lapzo"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxLapzo(!valueLapzo)
                        }
                      />
                    )}
                    {valueAus && (
                      <SectionProjectCard
                        sectionName="aUshuaia"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxAus(!valueAus)
                        }
                      />
                    )}
                    {valueDillon && (
                      <SectionProjectCard
                        sectionName="estudio"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxDillon(!valueDillon)
                        }
                      />
                    )}
                    {valueNidit && (
                      <SectionProjectCard
                        sectionName="nidit!"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxNidit(!valueNidit)
                        }
                      />
                    )}
                    {valueColombia && (
                      <SectionProjectCard
                        sectionName="HomePage"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxColombia(!valueColombia)
                        }
                      />
                    )}
                    {valueVeti && (
                      <SectionProjectCard
                        sectionName="Vetinsure"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxVeti(!valueVeti)
                        }
                      />
                    )}
                    {valueUverified && (
                      <SectionProjectCard
                        sectionName="Uverified"
                        handleClickButtonClose={({ target }) =>
                          setCheckboxUverified(!valueUverified)
                        }
                      />
                    )}
                  </ContainerTags>
                </ContainerNameSection>
                <LayoutContainerCards>
                  <ContainerCards>
                    <CardProject dataCards={valueFpay && dataFpay} />
                    <CardProject dataCards={valueLandings && dataLandings} />
                    <CardProject dataCards={valueB2C && dataB2C} />
                    <CardProject dataCards={valueLabels && dataLabels} />
                    <CardProject dataCards={valueLapzo && dataLapzoCards} />
                    <CardProject dataCards={valueAus && dataAus} />
                    <CardProject dataCards={valueDillon && dataDillon} />
                    <CardProject dataCards={valueNidit && dataNidit} />
                    <CardProject dataCards={valueColombia && dataColombia} />
                    <CardProject dataCards={valueVeti && dataVeti} />
                    <CardProject dataCards={valueUverified && dataUverified} />
                  </ContainerCards>
                </LayoutContainerCards>
              </TextAreaLayout>
            </LayoutBody>
          </Body>
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Project;
