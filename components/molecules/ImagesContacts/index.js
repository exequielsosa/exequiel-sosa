import styled from "styled-components";

const LayoutGral = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LayoutCenter = styled.div`
  background: transparent;
  display: flex;
  margin-top: 100px;
`;

const ImageLine = styled.img`
  background: transparent;
  margin-right: 40px;
  width: 100%;
  max-width: 18.7px;
`;

const ImageCode = styled.img`
  background: transparent;
  width: 100%;
  max-width: 483px;
`;

export const ImagesContacts = () => {
  return (
    <LayoutGral>
      <LayoutCenter>
        <ImageLine src="/lineContacts.png" alt="line" />
        <ImageCode src="/codeContacts.png" alt="code" />
      </LayoutCenter>
    </LayoutGral>
  );
};

export default ImagesContacts;
