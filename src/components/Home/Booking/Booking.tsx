import React from "react";
import "./../../globalStyles/GlobalStyles.scss";
import styles from "./Booking.module.scss";
import AnimatedHeading from "../../UI/Heading/AnimatedHeading";
import Button from "../../UI/Button";
const Booking: React.FC = () => {
  return (
    <section className={styles.bookingSection}>
      <div className="row">
        <div className={styles.book}>
          <div className={styles.bookForm}>
            <form className={styles.form}>
              <AnimatedHeading marginBottom="4rem">
                Start booking now
              </AnimatedHeading>
              <div className={styles.formGroup}>
                <input
                  className={styles.formInput}
                  required
                  placeholder="Full name"
                  id="name"
                  type="text"
                ></input>
                <label className={styles.formLabel} htmlFor="name">
                  Full name
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  className={styles.formInput}
                  required
                  placeholder="Email"
                  id="email"
                  type="email"
                ></input>
                <label className={styles.formLabel} htmlFor="email">
                  Email address
                </label>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formRadioGroup}>
                  <input
                    type="radio"
                    className={styles.formRadioInput}
                    id="small"
                    name="size"
                  ></input>
                  <label htmlFor="small" className={styles.formRadioLabel}>
                    <span className={styles.formRadioButton}></span>
                    Small tour group
                  </label>
                </div>
                <div className={styles.formRadioGroup}>
                  <input
                    name="size"
                    type="radio"
                    className={styles.formRadioInput}
                    id="large"
                  ></input>
                  <label htmlFor="large" className={styles.formRadioLabel}>
                    <span className={styles.formRadioButton}></span>
                    Large tour group
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <Button color="#55c57a" textColor="#fff">
                  Next Step &rarr;
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
