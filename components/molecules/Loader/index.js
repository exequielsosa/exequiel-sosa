import { styled } from "styled-components";

const ContainerLoader = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
`;

export const Loader = () => {
  return (
    <ContainerLoader>
      <div className="loading">
        <span>&lt;</span>
        <span>LOADING</span>
        <span>/&gt;</span>
      </div>
    </ContainerLoader>
  );
};

export default Loader;
