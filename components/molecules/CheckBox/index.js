import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  background: transparent;
  position: relative;
  display: inline-block;
  font-family: Fira Code;
  color: ${(props) => (props.checked ? "#fff" : "#607B96")};
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-left: 40px;
  margin-bottom: 16px;
  &:hover {
    color: #fff;
  }
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 19px;
  height: 19px;
  background: ${(props) =>
    props.checked ? "rgba(96, 123, 150, 1)" : "transparent"};
  position: absolute;
  top: 0;
  left: -40px;
  border: 1px solid rgba(96, 123, 150, 1);
  border-radius: 4px;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 20%;
    height: 55%;
    border: solid #fff;
    border-width: 0 0.15em 0.15em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}) {
  return (
    <Label htmlFor={id} disabled={disabled} checked={checked}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator checked={checked} />
    </Label>
  );
}
