import styled from "styled-components";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

const ImageLogo = styled.img`
  width: 24px;
  background-color: transparent;
`;

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  padding: 18px 22px;
  width: 24%;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

const MenuCenter = styled.div`
  z-index: 6;
  padding: 18px 22px;
  border-right: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const MenuEnd = styled.div`
  z-index: 6;
  display: flex;
  padding: 18px 22px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent !important;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const MenuEndWp = styled.div`
  z-index: 6;
  display: flex;
  padding: 18px 22px;
  border-left: 1px solid rgba(96, 123, 150, 0.4);
  color: ${(props) => (props.isSelected ? "#fff" : "rgba(96, 123, 150, 1)")};
  border-bottom: ${(props) =>
    props.isSelected && "3px solid rgba(254, 165, 95, 1)"};
  background-color: transparent;
  &:hover {
    background: rgba(30, 45, 61, 0.6);
    cursor: pointer;
  }
`;

const AlignContent = styled.div`
  background-image: url("grid2.png");
  display: flex;
  width: 59%;
  background-color: transparent;
`;

const AlignContact = styled.div`
  display: flex;
  width: 17%;
  background-color: transparent;
  justify-content: flex-end;
`;

export const Header = () => {
  const router = useRouter();
  const route = router.asPath;
  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541158959825" +
          "&text=Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer";
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541158959825" +
          "&text=Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer";
        window.open(mensaje, "_blank");
      }
    }, 1500);
  };
  return (
    <Layout>
      <Name>exequiel-sosa</Name>
      <AlignContent>
        <MenuCenter isSelected={route === "/"} onClick={() => router.push("/")}>
          _hello
        </MenuCenter>
        <MenuCenter
          isSelected={route === "/about-me"}
          onClick={() => router.push("/about-me")}
        >
          _about-me
        </MenuCenter>
        <MenuCenter
          isSelected={route === "/projects"}
          onClick={() => router.push("/projects")}
        >
          _projects
        </MenuCenter>
      </AlignContent>
      <AlignContact>
        <MenuEndWp onClick={handleSubmit}>
          <ImageLogo src="wp.svg" alt="img" />
        </MenuEndWp>
        <MenuEnd
          isSelected={route === "/contact-me"}
          onClick={() => router.push("/contact-me")}
        >
          _contact-me
        </MenuEnd>
      </AlignContact>
    </Layout>
  );
};

export default Header;
