import React from "react";
import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const educationData = [
    {
      icon: "education/masters.png",
      alt: "University icon",
      degree: "Master of Science in Computer Science",
      institution: "Memorial University of Newfoundland",
      grade: "CGPA: 3.44",
    },
    {
      icon: "education/bachelors.png",
      alt: "Diploma icon",
      degree: "Bachelor of Computer Science and Engineering",
      institution: "BRAC University",
      grade: "CGPA: 3.83",
    },
    {
      icon: "education/school.png",
      alt: "Diploma icon",
      degree: "'O' and 'A' Levels",
      institution: "Manarat Dhaka Int. School and College",
      grade: "IGCSE Cambridge",
    },
  ];

  return (
    <section className={styles.container} id="education">
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className={styles.title}
          variants={itemVariants}
        >
          Education
        </motion.h2>

        <div className={styles.contentWrapper}>
          <motion.ul 
            className={styles.educationItems}
            variants={containerVariants}
          >
            {educationData.map((item, index) => (
              <motion.li
                key={index}
                className={styles.educationItem}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={getImageUrl(item.icon)}
                    alt={item.alt}
                  />
                </motion.div>
                <motion.div 
                  className={styles.educationItemText}
                  variants={itemVariants}
                >
                  <h3>{item.degree}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                  <p className={styles.grade}>{item.grade}</p>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className={styles.imageWrapper}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={getImageUrl("education/education.png")}
              alt="Education illustration"
              className={styles.educationImage}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
