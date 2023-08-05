import styled from "styled-components";

const LayoutCard = styled.div`
  background: transparent;
  width: 291px;
  border-radius: 15px;
  border: 1px solid #1e2d3d !important;
  @media (min-width: 600px) {
    width: 370px;
  }
`;

const LayoutImage = styled.div`
  background: ${(props) => props.url};
  height: 145px;
  opacity: 0.9;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid #1e2d3d;
`;

const LayoutIcon = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 19px;
  padding-right: 18px;
`;

const ImageIcon = styled.img`
  background: transparent;
`;

const LayoutDescription = styled.div`
  background: rgba(1, 18, 33, 0.6);
  height: 190px;
  padding-top: 24px;
  padding-left: 31px;
  padding-right: 31px;
  padding-bottom: 31px;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    height: 170px;
  }
`;

const Description = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  background: #1c2b3a;
  border-style: none;
  padding: 10px 24px;
  color: #fff;
  text-align: right;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  cursor: pointer;
  width: fit-content;
  &:hover {
    opacity: 0.8;
    color: #5565e8;
  }
`;

const LayoutGral = styled.div`
  background: transparent;
  margin-right: ${(props) => props.isNoMobile && "40px"};
  margin-bottom: 40px;
  width: 291px;
  @media (min-width: 600px) {
    width: 370px;
  }
`;

const ContainerTitle = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const TitleName = styled.div`
  background: transparent;
  color: #5565e8;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DetailName = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-left: 12px;
  margin-bottom: 15px;
`;

export const CardProject = ({ dataCards, isNoMobile }) => {
  return (
    <>
      {dataCards &&
        dataCards?.map((item) => (
          <LayoutGral isNoMobile={isNoMobile}>
            <ContainerTitle>
              <TitleName>{item.nameProject}</TitleName>
              <DetailName>{item.nameDetail}</DetailName>
            </ContainerTitle>
            <LayoutCard>
              <LayoutImage url={item.url}>
                <LayoutIcon>
                  <ImageIcon src="/reactIcon.svg" />
                </LayoutIcon>
              </LayoutImage>
              <LayoutDescription>
                <Description>{item.projectDescription}</Description>
                <Button onClick={() => window.open(`${item.link}`, "_blank")}>
                  view-project
                </Button>
              </LayoutDescription>
            </LayoutCard>
          </LayoutGral>
        ))}
    </>
  );
};

export default CardProject;
