import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("education/masters.png")}
              alt="University icon"
            />
            <div className={styles.educationItemText}>
              <h3>Master of Science in Computer Science</h3>
              <p>Memorial University of Newfoundland</p>
              <p>CGPA: 3.44</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("education/bachelors.png")}
              alt="Diploma icon"
            />
            <div className={styles.educationItemText}>
              <h3>Bachelor of Computer Science and Engineering</h3>
              <p>BRAC University</p>
              <p>CGPA: 3.83</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src={getImageUrl("education/school.png")} alt="Diploma icon" />
            <div className={styles.educationItemText}>
              <h3>'O' and 'A' Levels</h3>
              <p>Manarat Dhaka Int. School and College</p>
              <p>IGCSE Cambridge</p>
            </div>
          </li>
        </ul>
        <img
          src={getImageUrl("education/education.png")}
          alt="Education illustration"
          className={styles.educationImage}
        />
      </div>
    </section>
  );
};
