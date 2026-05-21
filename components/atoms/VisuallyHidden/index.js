import styled from "styled-components";

const Hidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const VisuallyHiddenH1 = ({ children }) => <Hidden>{children}</Hidden>;

export default VisuallyHiddenH1;
