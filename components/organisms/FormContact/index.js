import { InputText, Label, TextArea, ButtonSubmit } from "@/components/atoms/";
import { ThankYou } from "@/components/molecules/";
import styled from "styled-components";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

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
const initValues = {
  name: "",
  email: "",
  subject: "Contacto desde exequielsosa.com.ar",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export const FormContact = ({ isMobile }) => {
  const [state, setState] = useState(initState);
  const [success, setSuccess] = useState(false);

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // const disabled = name.length > 0 && email.length > 0 && comment.length > 0;

  const handleBack = () => {
    setSuccess(false);
    setState(initState);
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Esto evita la recarga de la página
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      console.log("pasa");
      await sendContactForm(values);
      setState(initState);
      setSuccess(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  console.log(state);
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
          <form
            id="contact-form"
            onSubmit={(e) => onSubmit(e)}
            data-aos="zoom-in"
            style={{ background: "transparent" }}
          >
            <Label>_name:</Label>
            <InputText
              mb="24px"
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <Label>_email:</Label>
            <InputText
              mb="24px"
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <Label>_message:</Label>
            <TextArea
              rows={4}
              mb="24px"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            <ButtonSubmit disabled={false} type="submit">
              submit-message
            </ButtonSubmit>
          </form>
        </Layout>
      )}
    </GralLayout>
  );
};

export default FormContact;
