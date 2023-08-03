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
  margin-top: 100px;
`;

const LayoutThanks = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
  background: transparent;
  flex-direction: column;
  margin-top: 200px;
`;

export const FormContact = () => {
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

  return (
    <GralLayout>
      {thanks ? (
        <>
          <LayoutThanks>
            <ThankYou handleClick={() => setThanks(false)} />
          </LayoutThanks>
        </>
      ) : (
        <Layout>
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
