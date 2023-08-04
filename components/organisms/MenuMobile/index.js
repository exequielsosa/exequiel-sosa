import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const DivTest = styled.div`
  position: absolute;
  padding-left: 0px;
  background-color: #011627;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  width: 100%;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.3s linear;
  transition: visibility 0.3s linear;
`;

const ContainerTag = styled.div`
  color: ${(props) => (props.selected ? "#5565e8" : "#fff")};
  background: transparent;
  height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding-left: 18px;
  border-bottom: 1px solid rgba(96, 123, 150, 0.4);
  &:hover {
    color: #5565e8;
  }
`;

export const MenuMobile = ({
  out,
  hadleClickHello,
  hadleClickAbout,
  hadleClickProjects,
  hadleClickContanct,
}) => {
  const router = useRouter();
  const route = router.asPath;
  return (
    <DivTest out={out}>
      <ContainerTag selected={route === "/"} onClick={hadleClickHello}>
        _hello
      </ContainerTag>
      <ContainerTag selected={route === "/about-me"} onClick={hadleClickAbout}>
        _about-me
      </ContainerTag>
      <ContainerTag
        selected={route === "/projects"}
        onClick={hadleClickProjects}
      >
        _projects
      </ContainerTag>
      <ContainerTag
        selected={route === "/contact-me"}
        onClick={hadleClickContanct}
      >
        _contact-me
      </ContainerTag>
    </DivTest>
  );
};

export default MenuMobile;
