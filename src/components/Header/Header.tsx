import React from "react";
import styles from "./Header.module.scss";
import logo from ".././../assets/img/logo-white.png";
import Button from "../UI/Button";
const  Header: React.FC = () =>  {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoBox}>
        <img src={logo} alt="logo" className={styles.headerLogo} />
      </div>
      <div className={styles.headerTextBox}>
        <h1 className={styles.headerPrimary}>
          <span className={styles.headerPrimaryMain}>Outdoors </span>
          <span className={styles.headerPrimarySub}>is where life happens</span>
        </h1>
      <Button>Discovery our tour</Button>
      </div>
    </header>
  );
}

export default Header;
