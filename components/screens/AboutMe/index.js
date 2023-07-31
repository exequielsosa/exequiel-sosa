import styled from "styled-components";
import { AboutMeMenu } from "@/components/organisms";
import { SectionCard } from "@/components/atoms";
import { useState } from "react";

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

  const isEnabled = section.length > 0;

  return (
    <Layout>
      <Column>
        <AboutMeMenu
          section={section}
          handeClickBio={handeClickBio}
          handeClickInterest={handeClickInterest}
          handeClickEducation={handeClickEducation}
        />
      </Column>
      <Body>
        <LayoutBody>
          <TextAreaLayout>
            <ContainerNameSection>
              {isEnabled && (
                <SectionCard
                  sectionName={section}
                  handleClickButtonClose={() => setSection("")}
                />
              )}
            </ContainerNameSection>
            <TextArea>hola</TextArea>
          </TextAreaLayout>
        </LayoutBody>
      </Body>
    </Layout>
  );
};

export default AboutMe;
