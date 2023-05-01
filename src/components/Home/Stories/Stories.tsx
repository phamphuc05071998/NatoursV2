import React from "react";
import AnimatedHeading from "../../UI/Heading/AnimatedHeading";
import styles from "./Stories.module.scss";
import "./../../globalStyles/GlobalStyles.scss";
import person from "./../../../assets/img/nat-8.jpg";
import person2 from "./../../../assets/img/nat-9.jpg";
import video from "./../../../assets/img/video.mp4";
import video2 from "./../../../assets/img/video.webm";
const Stories: React.FC = () => {
  return (
    <section className={styles.storiesSection}>
      <div className={styles.bgVideo}>
        <video className={styles.bgVideoContent} autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
          <source src={video2} type="video/webm"></source>
          Your browser is not supported
        </video>
      </div>
      <AnimatedHeading center marginTop="6rem">We make people genuinely happy</AnimatedHeading>
      <div className="row">
        <div className={styles.story}>
          <figure className={styles.storyShape}>
            <img
              className={styles.storyImage}
              src={person}
              alt="Person on a tour"
            />
            <figcaption className={styles.storyCaption}>Mary Smith</figcaption>
          </figure>
          <div className={styles.storyText}>
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever width my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              molestiae neque perferendis reprehenderit laboriosam amet
              adipisicing elit. Nemo molestiae neque perferendis reprehenderit
              laboriosam ametadipisicing elit. Nemo molestiae neque perferendis
              reprehenderit laboriosam ametalias{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={styles.story}>
          <figure className={styles.storyShape}>
            <img
              className={styles.storyImage}
              src={person2}
              alt="Person on a tour"
            />
            <figcaption className={styles.storyCaption}>Jack Wilson</figcaption>
          </figure>
          <div className={styles.storyText}>
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              molestiae neque perferendis reprehenderit laboriosam amet
              adipisicing elit. Nemo molestiae neque perferendis reprehenderit
              laboriosam ametadipisicing elit. Nemo molestiae neque perferendis
              reprehenderit laboriosam ametalias{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-small">
        <a href="#" className="btn-text">
          Read our story &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
