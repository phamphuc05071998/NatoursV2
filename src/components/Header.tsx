import React from "react";
import styles from "./Header.module.css";
import logo from "./../assets/img/logo-white.png";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.headerPrimary}>
          <span className={styles.headerPrimaryMain}>Outdoors </span>
          <span className={styles.headerPrimarySub}>is where life happens</span>
        </h1>
        <a href="#" className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>Discover our tour </a>
      </div>
    </header>
  );
}

export default Header;
