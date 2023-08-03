import styled from "styled-components";

export const InputText = styled.input`
  border-radius: 8px;
  border: 1px solid #607b96;
  background: #011221;
  box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  width: 100%;
  height: 41px;
  color: #465e77;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: ${(props) => props.mb};
`;

export const Label = styled.label`
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: transparent;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #607b96;
  background: #011221;
  box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
  width: 100%;
  color: #465e77;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: ${(props) => props.mb};
  resize: none;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const ButtonSubmit = styled.button`
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
  width: 146px;
  padding: 10px 14px;
  opacity: ${(props) => props.disabled && 0.4};
  &:hover {
    opacity: ${(props) => (props.disabled ? "0.4" : "0.8")};
    cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
    color: ${(props) => (props.disabled ? "#fff" : "#5565e8")};
  }
`;
