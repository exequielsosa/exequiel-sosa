import { Header, Footer } from "../../organisms";

const LayoutMenuAndFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutMenuAndFooter;
