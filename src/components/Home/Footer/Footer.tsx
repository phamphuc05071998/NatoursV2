import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/img/logo-green-2x.png";
import logo1x from "../../../assets/img/logo-green-1x.png";
import smallLogo2x from "../../../assets/img/logo-green-small-2x.png";
import smallLogo1x from "../../../assets/img/logo-green-small-1x.png";
import "./../../globalStyles/GlobalStyles.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogoBox}>
        <picture className={styles.footerLogo}>
          <source srcSet={`${smallLogo1x} 1x, ${smallLogo2x} 2x`} media="(max-width: 37.5em)"/>
        <img srcSet={`${logo} 1x,  ${logo1x} 2x`} alt="full logo" ></img>

        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className={styles.footerNavigation}>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <a href="#" className={styles.footerLink}>
                  Company
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#" className={styles.footerLink}>
                 Carrers
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#" className={styles.footerLink}>
                  Privacy policy
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#" className={styles.footerLink}>
                 Term
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#" className={styles.footerLink}>
                    Contact us
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className={`col-1-of-2 ${styles.footerCopyright}`}>
          <p className={styles.footerCopyRightText}>
            Hello Iam{" "}
            <a
              href="https://github.com/phamphuc05071998"
              className={styles.footerLink}
            >
              Pham Phuc
            </a>{" "}
            click to see more detail <a href="#" className={styles.footerLink}>Fresher front end developer</a>. Copyright &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
