import styled from "styled-components";
import { MenuProjects, EmptyState } from "@/components/organisms";
import { SectionProjectCard, TitleSelectorMobile } from "@/components/atoms";
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

import {
  dataLandingsMobile,
  dataLabelsMobile,
  dataLapzoCardsMobile,
  dataNiditMobile,
  dataVetiMobile,
} from "../../../constants/dataCardsMobile";

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

const LayoutContainerCardsMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  align-items: center;
`;

const ContainerCardsMobile = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  max-width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 1440px) {
    justify-content: flex-start;
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

const BodyMobile = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  background-image: url("grid.png");
  background-color: #011627;
  flex-direction: column;
`;

const DivMenu = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 45px;
  padding-top: 18px;
`;

const Project = () => {
  const [valueFpay, setCheckboxFpay] = useState(false);
  const [valueLandings, setCheckboxLandings] = useState(false);
  const [valueB2C, setCheckboxB2C] = useState(false);
  const [valueLabels, setCheckboxLabels] = useState(false);
  const [valueLapzo, setCheckboxLapzo] = useState(false);
  const [valueAus, setCheckboxAus] = useState(false);
  const [valueDillon, setCheckboxDillon] = useState(false);
  const [valueNidit, setCheckboxNidit] = useState(false);
  const [valueColombia, setCheckboxColombia] = useState(false);
  const [valueVeti, setCheckboxVeti] = useState(false);
  const [valueUverified, setCheckboxUverified] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => setIsOpen(!isOpen);

  const emptyState =
    !valueFpay &&
    !valueLandings &&
    !valueB2C &&
    !valueLabels &&
    !valueLapzo &&
    !valueAus &&
    !valueDillon &&
    !valueNidit &&
    !valueColombia &&
    !valueVeti &&
    !valueUverified;

  const { isLg, isXs } = useBreakpoints();
  return (
    <Layout>
      {isLg ? (
        <>
          <Column>
            <LayoutMenu>
              <TitleSection title="projects" isProject />
              <MenuProjects
                isNoMobile
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
                  {emptyState ? (
                    <EmptyState />
                  ) : (
                    <ContainerCards>
                      <CardProject
                        dataCards={valueFpay && dataFpay}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueLandings && dataLandings}
                        isNoMobile
                      />
                      <CardProject dataCards={valueB2C && dataB2C} isNoMobile />
                      <CardProject
                        dataCards={valueLabels && dataLabels}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueLapzo && dataLapzoCards}
                        isNoMobile
                      />
                      <CardProject dataCards={valueAus && dataAus} isNoMobile />
                      <CardProject
                        dataCards={valueDillon && dataDillon}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueNidit && dataNidit}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueColombia && dataColombia}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueVeti && dataVeti}
                        isNoMobile
                      />
                      <CardProject
                        dataCards={valueUverified && dataUverified}
                        isNoMobile
                      />
                    </ContainerCards>
                  )}
                </LayoutContainerCards>
              </TextAreaLayout>
            </LayoutBody>
          </Body>
        </>
      ) : (
        <BodyMobile>
          <TitleMobile>_projects</TitleMobile>
          <TitleSelectorMobile
            sectionName="projects"
            handleClick={toogleOpen}
            isSelected={isOpen}
            isMobile
          />
          {isOpen && (
            <DivMenu>
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
                isMobile
              />
            </DivMenu>
          )}
          <LayoutContainerCardsMobile>
            {emptyState ? (
              <EmptyState isMobile />
            ) : (
              <ContainerCardsMobile>
                <CardProject dataCards={valueFpay && dataFpay} />
                <CardProject
                  dataCards={
                    valueLandings && (isXs ? dataLandingsMobile : dataLandings)
                  }
                />
                <CardProject dataCards={valueB2C && dataB2C} />
                <CardProject
                  dataCards={
                    valueLabels && (isXs ? dataLabelsMobile : dataLabels)
                  }
                />
                <CardProject
                  dataCards={
                    valueLapzo && (isXs ? dataLapzoCardsMobile : dataLapzoCards)
                  }
                />
                <CardProject dataCards={valueAus && dataAus} />
                <CardProject dataCards={valueDillon && dataDillon} />
                <CardProject
                  dataCards={valueNidit && (isXs ? dataNiditMobile : dataNidit)}
                />
                <CardProject dataCards={valueColombia && dataColombia} />
                <CardProject
                  dataCards={valueVeti && (isXs ? dataVetiMobile : dataVeti)}
                />
                <CardProject dataCards={valueUverified && dataUverified} />
              </ContainerCardsMobile>
            )}
          </LayoutContainerCardsMobile>
        </BodyMobile>
      )}
    </Layout>
  );
};

export default Project;
