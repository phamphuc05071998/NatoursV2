// import "./../../globalStyles/font.css"
import "./../../globalStyles/GlobalStyles.scss";
import React from "react";
import styles from "./Features.module.scss";
export const Features = () => {
  return (
    <section className={styles.featureSection}>
      <div className="row">
        <div className="col-1-of-4">
          <div className={styles.featureBox}>
            <i className={`${styles.featureBoxIcon}      icon-basic-world`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className={styles.featureBoxText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              sunt repellendus earum quis rerum. Similique commodi tempore
              animi, laborio
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={styles.featureBox}>
            <i className={`${styles.featureBoxIcon}      icon-basic-compass`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className={styles.featureBoxText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              sunt repellendus earum quis rerum. Similique commodi tempore
              animi, laborio
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={styles.featureBox}>
            <i className={`${styles.featureBoxIcon} icon-basic-map`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className={styles.featureBoxText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              sunt repellendus earum quis rerum. Similique commodi tempore
              animi, laborio
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className={styles.featureBox}>
            <i className={`${styles.featureBoxIcon}      icon-basic-heart`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live healthy life</h3>
            <p className={styles.featureBoxText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              sunt repellendus earum quis rerum. Similique commodi tempore
              animi, laborio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
