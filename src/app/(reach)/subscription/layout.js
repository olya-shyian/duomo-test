import BackToTop from "../../components/backToTop/BackToTop";

export const metadata = {
  title: "Subscription Plan",
  description: "Marketing Funnel Implementation",
};

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
};

export default Layout;
