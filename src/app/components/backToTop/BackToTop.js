"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import arrowUp from "../../../../public/images/arrow-up-icon.svg";
import styles from "./backToTop.module.scss";

const isBrowser = () => typeof window !== "undefined";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${
        isVisible ? styles.visible : ""
      }`}
      onClick={scrollToTop}
    >
      <Image alt="Arrow-up icon" src={arrowUp} width={30} />
    </button>
  );
};

export default BackToTop;
