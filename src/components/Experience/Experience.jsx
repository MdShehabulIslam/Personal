import React from "react";
import { motion } from "framer-motion";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className={styles.container} id="experience">
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
          Experience
        </motion.h2>

        <motion.div 
          className={styles.skills}
          variants={containerVariants}
        >
          {skills.map((skill, id) => (
            <motion.div
              key={id}
              className={styles.skill}
              variants={skillVariants}
              whileHover="hover"
            >
              <motion.div 
                className={styles.skillImageContainer}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </motion.div>
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul 
          className={styles.history}
          variants={containerVariants}
        >
          {history.map((historyItem, id) => (
            <motion.li
              key={id}
              className={styles.historyItem}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={styles.historyImageContainer}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
              </motion.div>
              <motion.div 
                className={styles.historyItemDetails}
                variants={itemVariants}
              >
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p className={styles.duration}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul className={styles.experiences}>
                  {historyItem.experiences.map((experience, id) => (
                    <motion.li 
                      key={id}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {experience}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
