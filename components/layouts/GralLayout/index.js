import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const GralLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default GralLayout;
