import styled from "styled-components";
import { MenuProjects } from "@/components/organisms";
import { useState } from "react";
import { CardProject, TitleSection } from "@/components/molecules";

const LayoutMenu = styled.div`
  display: flex;
  width: 100%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  min-height: 700px;
  background: transparent;
  flex-direction: column;
`;

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
  width: 100%;
  min-height: 700px;
`;

const ContainerNameSection = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  height: 42px;
`;

const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  flex-direction: row;
  margin-top: 80px;
  margin-left: 32px;
  margin-right: 32px;
  /* justify-content: space-between; */
  overflow-x: auto;
  white-space: nowrap;
  
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

  const dataFpay = [
    {
      nameProject: "Portal Comercio",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataLandings = [
    {
      nameProject: "Landings - Skydropx",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataB2C = [
    {
      nameProject: "B2C - Skydropx",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataLabels = [
    {
      nameProject: "Labels - Skydropx",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataLapzo = [
    {
      nameProject: "Lapzo by lernit",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataAus = [
    {
      nameProject: "aUshuaia",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataDillon = [
    {
      nameProject: "estudio-dillon.com",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  const dataNidit = [
    {
      nameProject: "nidit!",
      nameDetail: "// _ui-animations",
      projectDescription: "Duis aute irure dolor in velit esse cillum dolore.",
      url: 'url("fpay.png")',
      link: "https://facebook.com/exequiel.sosa",
    },
  ];

  return (
    <Layout>
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
          />
        </LayoutMenu>
      </Column>
      <Body>
        <LayoutBody>
          <TextAreaLayout>
            <ContainerNameSection></ContainerNameSection>
            <ContainerCards>
              <CardProject dataCards={valueFpay && dataFpay} />
              <CardProject dataCards={valueLandings && dataLandings} />
              <CardProject dataCards={valueB2C && dataB2C} />
              <CardProject dataCards={valueLabels && dataLabels} />
              <CardProject dataCards={valueLapzo && dataLapzo} />
              <CardProject dataCards={valueAus && dataAus} />
              <CardProject dataCards={valueDillon && dataDillon} />
              <CardProject dataCards={valueNidit && dataNidit} />
            </ContainerCards>
          </TextAreaLayout>
        </LayoutBody>
      </Body>
    </Layout>
  );
};

export default Project;
