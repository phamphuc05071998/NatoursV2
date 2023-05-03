import React from "react";
import styles from "./Popup.module.scss";
import "./../../globalStyles/GlobalStyles.scss";
import picture1 from "./../../../assets/img/nat-8.jpg";
import picture2 from "./../../../assets/img/nat-9.jpg";
import AnimatedHeading from "../../UI/Heading/AnimatedHeading";
import Button from "../../UI/Button";
const Popup = () => {
  return (
    <div className={styles.popup} id="popup">
      <div className={styles.popupContainer}>
        <div className={styles.popupLeft}>
          <img className={styles.popupImage} src={picture1} alt="person"></img>
          <img className={styles.popupImage} src={picture2} alt="person"></img>
        </div>
        <div className={styles.popupRight} >
            <a className={styles.popupClose} href="#section-tour" >&times;</a>
          <AnimatedHeading marginBottom="2rem">
            Start booking now
          </AnimatedHeading>
          <h3 className="heading-tertiary u-margin-bottom-small ">
            important - please read the term and condition first
          </h3>

          <div className={styles.popupParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc. Et ultrices neque ornare aenean euismod elementum. Volutpat diam ut venenatis tellus. Tristique et egestas quis ipsum suspendisse ultrices. Nunc eget lorem dolor sed. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Augue mauris augue neque gravida. Dignissim diam quis enim lobortis scelerisque. Et netus et malesuada fames ac turpis egestas. Quis ipsum suspendisse ultrices gravida. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Vitae turpis massa sed elementum tempus egestas sed sed risus. Ac tortor dignissim convallis aenean et. Hac habitasse platea dictumst vestibulum.
          spendisse ultrices. Nunc eget lorem dolor sed. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Augue mauris augue neque gravida. Dignissim diam quis enim lobortis scelerisque. Et netus et malesuada fames ac turpis egestas. Quis ipsum suspendisse ultrices gravida. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Vitae turpis massa sed elementum tempus egestas sed sed risus. Ac tortor dignissim convallis aenean et. Hac habitasse platea dictumst vestibulum.
          </div>

          <Button color="#55c57a" textColor="#fff">
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
