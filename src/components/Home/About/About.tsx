import React from "react";
import styles from "./About.module.scss";
import "./../../globalStyles/GlobalStyles.scss";
// import "./../../sass/base/_typography.scss"
import nat1 from "./../../../assets/img/nat1.jpg";
import nat1Large from "./../../../assets/img/nat-1-large.jpg";
import nat2 from "./../../../assets/img/nat2.jpg";
import nat2Large from "./../../../assets/img/nat-2-large.jpg";
import nat3 from "./../../../assets/img/nat3.jpg";
import nat3Large from "./../../../assets/img/nat-3-large.jpg";

export const About: React.FC = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            laborum culpa ipsum consequatur ullam earum at fuga consectetur
            minus, magni sequi odit quia repudiandae ducimus itaque harum quae
            sint nihil!
          </p>{" "}
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            laborum culpa ipsum consequatur ullam earum at fuga consectetur
            minus, magni sequi odit quia repudiandae ducimus itaque harum quae
            sint nihil!
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className={styles.composition}>
            <img
              src={nat1}
              srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="nature"
              className={`${styles.compositionPhoto} ${styles.compositionPhoto1}`}
            ></img>
            <img
              src={nat2}
              srcSet={`${nat2} 300w, ${nat2Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="nature"
             
              className={`${styles.compositionPhoto} ${styles.compositionPhoto2}`}
            ></img>
            <img
              src={nat3}
              srcSet={`${nat3} 300w, ${nat3Large} 1000w`}
              sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
              alt="nature"
            
              className={`${styles.compositionPhoto} ${styles.compositionPhoto3}`}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
