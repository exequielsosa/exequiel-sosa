import styled from "styled-components";

const Title = styled.div`
  background: transparent;
  color: #fff;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 140%;
  margin-bottom: 16px;
`;

const Text = styled.div`
  background: transparent;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
`;

const Layout = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 38px 28px;
`;

export const DisplayMobileInfoAboutMe = ({ data }) => {
  return (
    <>
      {data &&
        data?.map((item, index) => (
          <Layout>
            <Title key={index}>// personal-info / {item.title}</Title>
            {item.text.split("\n").map((text, subIndex) => (
              <Text key={subIndex}>{text}</Text>
            ))}
          </Layout>
        ))}
    </>
  );
};

export default DisplayMobileInfoAboutMe;
