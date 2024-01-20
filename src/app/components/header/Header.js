import Image from "next/image";
import menu from "../../../../public/images/menu-icon.png";
import arrow from "../../../../public/images/arrow-icon.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.arrow}>
        <Image alt="Arrow icon" src={arrow} height={16} width={18} />
      </div>

      <div className={styles.logo}>App</div>

      <div className={styles.hamburger}>
        <Image alt="Menu icon" src={menu} />
      </div>
    </nav>
  );
};

export default Header;
