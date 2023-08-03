import styled from "styled-components";
import { useRouter } from "next/router";

const Layout = styled.div`
  width: 100%;
  border: 1px solid rgba(96, 123, 150, 0.4);
  background-color: #011627;
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url("grid.png");
`;

const MenuBtn = styled.img`
  background: transparent;
  cursor: pointer;
  padding-right: 18px;
  z-index: 10;
`;

const Name = styled.div`
  padding: 18px 22px;
  width: 24%;
  color: rgba(96, 123, 150, 1);
  font-weight: 500px;
  font-size: 16px;
  background-color: transparent;
`;

export const HeaderMobile = () => {
  const router = useRouter();
  const route = router.asPath;
  return (
    <Layout>
      <Name>exequiel-sosa</Name>
      <MenuBtn src="/menuBtn.svg" />
    </Layout>
  );
};

export default HeaderMobile;
