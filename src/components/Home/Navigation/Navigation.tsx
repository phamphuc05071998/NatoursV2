import React from "react";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <input
        className={styles.navigationCheckBox}
        type="checkbox"
        id="navi-toggle"
      ></input>
      <label htmlFor="navi-toggle" className={styles.navigationButton}><span className={styles.navigationIcon}>&nbsp;</span></label>
      <div className={styles.navigationBackground}>&nbsp;</div>
      <nav className={styles.navigationNav}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}><span >01</span> About Natous</a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}> <span >02</span>Your benifit</a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}> <span >03</span>Popular tours</a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}> <span >04</span>Stories</a>
          </li>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}><span >05</span>Book now</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
