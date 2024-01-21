import styles from "./layout.module.scss";

export const metadata = {
  title: "Subscription Plan",
  description: "Marketing Funnel Implementation",
};

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
