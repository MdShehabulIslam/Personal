import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aboutIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
                I was born in Bangladesh and moved to Canada in 2021 to pursue
                my Master's degree in Computer Science
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hobbyIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobby</h3>
              <p>
                I am an active person who enjoys playing competitive eSports and
                watching Web series
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/socialIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Social</h3>
              <p>
                I am a social person that loves to meet new people and make new
                friends
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
