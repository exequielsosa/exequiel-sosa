import styled from "styled-components";

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: Fira Code;
  font-size: 26px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  background: transparent;
  color: #607b96;
  text-align: center;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-bottom: 37px;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const ButtonSubmit = styled.button`
  border-radius: 8px;
  background: #1c2b3a;
  color: #fff;
  text-align: right;
  font-family: Fira Code;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  border-style: none;
  width: 163px;
  padding: 10px 14px;
  opacity: ${(props) => props.disabled && 0.4};
  &:hover {
    opacity: ${(props) => (props.disabled ? "0.4" : "0.8")};
    cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
    color: ${(props) => (props.disabled ? "#fff" : "#5565e8")};
  }
`;

export const ThankYou = ({ handleClick }) => {
  return (
    <Layout>
      <Title>Thank you! 🤘</Title>
      <SubTitle>
      Thank you for sending your WhatsApp with your comments.<br /><br /> I will respond really soon!
      </SubTitle>
      <ButtonSubmit onClick={handleClick}>send-new-message</ButtonSubmit>
    </Layout>
  );
};

export default ThankYou;
