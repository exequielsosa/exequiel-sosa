import styled from "styled-components";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Avatar = styled.img`
  background: transparent;
  width: 36px;
  margin-right: 10px;
`;

const Layout = styled.div`
  background: transparent;
  width: 100%;
  max-width: 450px;
  margin-bottom: 30px;
`;

const CenterLayout = styled.div`
  background: transparent;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContainerFront = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ContainerAvatar = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  max-width: 250px;
`;

const ContainerText = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const UserName = styled.div`
  background: transparent;
  color: #5565e8;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const DetailName = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 12px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

const ContainerRating = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const ContainerTextAndRating = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${(props) => (props.isFinal ? "10px" : "16px")};
`;

const ImageRating = styled.img`
  background: transparent;
  width: 18px;
  margin-right: 4px;
`;

const TextRating = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

const SnippetImage = styled.img`
  background: transparent;
  width: 100%;
  max-width: 450px;
`;

const CodeImage1 = styled.img`
  background: transparent;
  width: 100%;
  position: absolute;
  max-width: 409px;
  margin-top: 64px;
`;

const CodeImage2 = styled.img`
  background: transparent;
  width: 100%;
  position: absolute;
  max-width: 409px;
  margin-top: 292px;
`;

const TextTitle = styled.div`
  margin-top: ${(props)=> props.isMobile ? '36px' : '18px'};
  margin-left: 16px;
  margin-bottom: ${(props)=> props.isMobile ? '36px' : '50px'};
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const SnipetsAboutMe = ({isMobile}) => {
  const {isLg} = useBreakpoints();
  return (
    <>
      <TextTitle isMobile={isMobile}>// Code snippet showcase:</TextTitle>
      <CenterLayout>
        <Layout>
          <ContainerFront>
            <ContainerAvatar>
              <Avatar src="/avatarExe.png" />
              <ContainerText>
                <UserName>@exequielsosa</UserName>
                <DetailName>Created 5 months ago</DetailName>
              </ContainerText>
            </ContainerAvatar>
            <ContainerRating>
              <ContainerTextAndRating>
                <ImageRating src="/comments.svg" />
                <TextRating>details</TextRating>
              </ContainerTextAndRating>
              <ContainerTextAndRating isFinal>
                <ImageRating src="/stars.svg" />
                <TextRating>5 stars</TextRating>
              </ContainerTextAndRating>
            </ContainerRating>
          </ContainerFront>
          <SnippetImage src="/snippet1.png" />
        </Layout>
        <CodeImage1 src="/code1.png" />
        {isLg && 
        <>
        <Layout>
          <ContainerFront>
            <ContainerAvatar>
              <Avatar src="/avatarExe.png" />
              <ContainerText>
                <UserName>@exequielsosa</UserName>
                <DetailName>Created 9 months ago</DetailName>
              </ContainerText>
            </ContainerAvatar>
            <ContainerRating>
              <ContainerTextAndRating>
                <ImageRating src="/comments.svg" />
                <TextRating>details</TextRating>
              </ContainerTextAndRating>
              <ContainerTextAndRating isFinal>
                <ImageRating src="/stars.svg" />
                <TextRating>5 stars</TextRating>
              </ContainerTextAndRating>
            </ContainerRating>
          </ContainerFront>
          <SnippetImage src="/snippet2.png" />
        </Layout>
        <CodeImage2 src="/code2.png" />
        </>
}
      </CenterLayout>
    </>
  );
};

export default SnipetsAboutMe;
