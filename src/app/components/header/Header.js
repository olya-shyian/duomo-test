"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import menu from "../../../../public/images/menu-icon.png";
import arrow from "../../../../public/images/arrow-icon.png";
import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className={styles.header}>
        <a className={styles.arrow} onClick={() => router.back()}>
          <Image alt="Arrow icon" src={arrow} height={16} width={18} />
        </a>

        <div className={styles.logo} onClick={() => router.push("/")}>
          App
        </div>

        <div className={styles.hamburger}>
          <Image alt="Menu icon" src={menu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
