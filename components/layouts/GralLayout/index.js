import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 15px 15px 15px;
  @media (min-width: 1440px) {
  padding: 24px;
  }
`;

export const GralLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default GralLayout;
