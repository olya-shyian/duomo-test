import Header from "../../components/header/Header";
import styles from "./layout.module.scss";

export const metadata = {
  title: "Subscription Plan",
  description: "Marketing Funnel Implementation",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
