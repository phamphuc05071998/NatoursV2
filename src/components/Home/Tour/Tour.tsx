import React from "react";
import styles from "./Tour.module.scss";
import "./../../globalStyles/GlobalStyles.scss";
import Button from "../../UI/Button";
import AnimatedHeading from "../../UI/Heading/AnimatedHeading";
export const Tour: React.FC = () => {
  return (
    <section className={styles.tourSection}>
      <AnimatedHeading center>Most popular tour</AnimatedHeading>

      <div className="row">
        <div className="col-1-of-3">
          {" "}
          <div className={styles.card}>
            <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
              <div className={`${styles.cardPicture} ${styles.cardPicture1}`}>
                &nbsp;
              </div>
              <h4 className={styles.cardHeading}>
                <span
                  className={`${styles.cardHeadingSpan1} ${styles.cardHeadingSpan}`}
                >
                  The sea Explore
                </span>{" "}
              </h4>
              <div className={styles.cardDetail}>
                <ul>
                  <li>3 days tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guide</li>
                  <li>Sleep in cozy hotel</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack1}`}
            >
              <div className={styles.cardCta}>
                <div className={styles.cardPriceBox}>
                  <p className={styles.cardPriceOnly}>Only</p>
                  <p className={styles.cardPriceValue}>$297</p>
                  <Button>Book now!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          {" "}
          <div className={styles.card}>
            <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
              <div className={`${styles.cardPicture} ${styles.cardPicture2}`}>
                &nbsp;
              </div>
              <h4 className={styles.cardHeading}>
                <span
                  className={`${styles.cardHeadingSpan2} ${styles.cardHeadingSpan}`}
                >
                  The forest hiker
                </span>{" "}
              </h4>
              <div className={styles.cardDetail}>
                <ul>
                  <li>7 days tour</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guide</li>
                  <li>Sleep in provided tent</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack2}`}
            >
              <div className={styles.cardCta}>
                <div className={styles.cardPriceBox}>
                  <p className={styles.cardPriceOnly}>Only</p>
                  <p className={styles.cardPriceValue}>$497</p>
                  <Button>Book now!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          {" "}
          <div className={styles.card}>
            <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
              <div className={`${styles.cardPicture} ${styles.cardPicture3}`}>
                &nbsp;
              </div>
              <h4 className={styles.cardHeading}>
                <span
                  className={`${styles.cardHeadingSpan3} ${styles.cardHeadingSpan}`}
                >
                  The snow adventurer
                </span>{" "}
              </h4>
              <div className={styles.cardDetail}>
                <ul>
                  <li>5 days tour</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guide</li>
                  <li>Sleep in provided tent</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack3}`}
            >
              <div className={styles.cardCta}>
                <div className={styles.cardPriceBox}>
                  <p className={styles.cardPriceOnly}>Only</p>
                  <p className={styles.cardPriceValue}>$897</p>
                  <Button>Book now!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
       <Button color="#55c57a" textColor="#fff" >Discovery all tour</Button>
      </div>
    </section>
  );
};
