import styled from "styled-components";
import MenuMobile from "../MenuMobile";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const ImageLogo = styled.img`
  width: 20px;
  background-color: transparent;
  margin-right: 16px;
  cursor: pointer;
`;

const ImageResume = styled.img`
  width: 20px;
  background-color: transparent;
  margin-right: 24px;
  cursor: pointer;
`;

const LinkResume = styled.a`
  text-decoration: none;
  background: transparent;
  display: flex;
`;

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
  width: 34px;
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

const FinalLayout = styled.div`
  background: transparent;
  display: flex;
`;

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const toogleOpen = () => setOpen(!open);

  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541158959825" +
          "&text=Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer.";
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541158959825" +
          "&text=Thank you for getting in touch with Exequiel Sosa - FrontEnd Developer.";
        window.open(mensaje, "_blank");
      }
    }, 1500);
  };

  return (
    <LayoutGral>
      <Layout>
        <LayoutMenu>
          <Name>exequiel-sosa</Name>
          <FinalLayout>
            <ImageLogo src="/wp.svg" alt="al" onClick={handleSubmit} />
            <LinkResume
              href="/ExequielIgnacioSosaResume2025.pdf"
              target="_blank"
            >
              <ImageResume src="/resume2.svg" alt="al" />
            </LinkResume>
            <MenuBtn
              src={open ? "/cruz.svg" : "/menuBtn.svg"}
              onClick={toogleOpen}
            />
          </FinalLayout>
        </LayoutMenu>
        {open && <MenuMobile out={!open} onClose={() => setOpen(false)} />}
      </Layout>
    </LayoutGral>
  );
};

export default HeaderMobile;
