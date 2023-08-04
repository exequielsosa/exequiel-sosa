import { Header, Footer, HeaderMobile, FooterMobile } from "../../organisms";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const LayoutMenuAndFooter = ({ children }) => {
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <>
      {isLg ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <HeaderMobile />
          {children}
          <FooterMobile />
        </>
      )}
    </>
  );
};

export default LayoutMenuAndFooter;
