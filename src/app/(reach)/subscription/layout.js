import styles from "./layout.module.scss";

export const metadata = {
  title: "Subscription Plan",
  description: "Marketing Funnel Implementation",
};

const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
