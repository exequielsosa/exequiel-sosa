import styled from "styled-components";
import TitleSection from "../../molecules/TitleSection";
import { MenuProjects } from "@/components/organisms";
import { useState } from "react";

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

const Project = () => {
  const [valueFpay, setCheckboxFpay] = useState(false);
  const [valueLandings, setCheckboxLandings] = useState(false);
  const [valueB2C, setCheckboxB2C] = useState(false);
  const [valueLabels, setCheckboxLabels] = useState(false);
  const [valueLapzo, setCheckboxLapzo] = useState(false);
  const [valueAus, setCheckboxAus] = useState(false);
  const [valueDillon, setCheckboxDillon] = useState(false);
  const [valueNidit, setCheckboxNidit] = useState(false);
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
          </TextAreaLayout>
        </LayoutBody>
      </Body>
    </Layout>
  );
};

export default Project;
