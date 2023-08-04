import styled from "styled-components";
import { useRouter } from "next/router";
import MenuMobile from "../MenuMobile";
import { useState } from "react";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  transition: 0.5s ease-in;
  z-index: 1000;
`;

const LayoutGral = styled.div`
  width: 100%;
  background: rgba(1, 12, 21, 1);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  transition: 0.5s ease-in;
  z-index: 1000;
  padding-top: 15px;
`;

const MenuBtn = styled.img`
  background: transparent;
  cursor: pointer;
  padding-right: 18px;
  z-index: 10;
`;

const Name = styled.div`
  padding: 18px 22px;

  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

const LayoutMenu = styled.div`
  background-color: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const toogleOpen = () => setOpen(!open);
  const router = useRouter();

  const hello = () => {
    router.push("/");
    setOpen(false);
  };

  const about = () => {
    router.push("/about-me");
    setOpen(false);
  };

  const projects = () => {
    router.push("/projects");
    setOpen(false);
  };

  const contact = () => {
    router.push("/contact-me");
    setOpen(false);
  };

  return (
    <LayoutGral>
      <Layout>
        <LayoutMenu>
          <Name>exequiel-sosa</Name>
          <MenuBtn
            src={open ? "/cruz.svg" : "/menuBtn.svg"}
            onClick={toogleOpen}
          />
        </LayoutMenu>
        {open && (
          <MenuMobile
            out={!open}
            hadleClickHello={hello}
            hadleClickAbout={about}
            hadleClickProjects={projects}
            hadleClickContanct={contact}
          />
        )}
      </Layout>
    </LayoutGral>
  );
};

export default HeaderMobile;
