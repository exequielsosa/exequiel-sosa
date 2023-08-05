import { InputText, Label, TextArea, ButtonSubmit } from "@/components/atoms/";
import { ThankYou } from "@/components/molecules/";
import styled from "styled-components";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const GralLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: transparent;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 372px;
  background: transparent;
  flex-direction: column;
  margin-top: ${(props) => (props.isMobile ? "40px" : "100px")};
  margin-bottom: ${(props) => props.isMobile && "60px"};
  padding: ${(props) => props.isMobile && "0px 14px"};
`;

const LayoutThanks = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
  background: transparent;
  flex-direction: column;
  margin-top: ${(props) => (props.isMobile ? "48px" : "200px")};
  padding: ${(props) => props.isMobile && "0px 8px"};
  margin-bottom: ${(props) => props.isMobile && "170px"};
`;

export const FormContact = ({ isMobile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [thanks, setThanks] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { name, email, comment } = formData;

  const disabled = name.length > 0 && email.length > 0 && comment.length > 0;

  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541158959825" +
          "&text=*Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer.*%0A*Name:*%0A" +
          name +
          "%0A*email:*%0A" +
          email +
          "%0A*Message:*%0A" +
          comment;
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541158959825" +
          "&text=*Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer.*%0A*Name:*%0A" +
          name +
          "%0A*email:*%0A" +
          email +
          "%0A*Message:*%0A" +
          comment;
        window.open(mensaje, "_blank");
      }
    }, 1500);
    setTimeout(() => {
      setThanks(true);
    }, 1500);
  };

  const handleBack = () => {
    setThanks(false);
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <GralLayout>
      {thanks ? (
        <>
          <LayoutThanks isMobile={isMobile}>
            <ThankYou handleClick={handleBack} />
          </LayoutThanks>
        </>
      ) : (
        <Layout isMobile={isMobile}>
          <Label>_name:</Label>
          <InputText mb="24px" id="name" onChange={handleChange} />
          <Label>_email:</Label>
          <InputText mb="24px" id="email" onChange={handleChange} />
          <Label>_message:</Label>
          <TextArea rows={4} mb="24px" id="comment" onChange={handleChange} />
          <ButtonSubmit disabled={!disabled} onClick={handleSubmit}>
            submit-message
          </ButtonSubmit>
        </Layout>
      )}
    </GralLayout>
  );
};

export default FormContact;
