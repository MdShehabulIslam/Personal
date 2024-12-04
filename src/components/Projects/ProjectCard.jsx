import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  index,
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={styles.imageContainer}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            <motion.a
              href={demo}
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={source}
              className={styles.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <motion.li
              key={id}
              className={styles.skill}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
