import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
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

  const aboutItems = [
    {
      icon: "about/aboutIcon.png",
      title: "Background",
      description: "I was born in Bangladesh and moved to Canada in 2021 to pursue my Master's degree in Computer Science",
    },
    {
      icon: "about/hobbyIcon.png",
      title: "Hobby",
      description: "I am an active person who enjoys playing competitive eSports and watching Web series",
    },
    {
      icon: "about/socialIcon.png",
      title: "Social",
      description: "I am a social person that loves to meet new people and make new friends",
    },
  ];

  return (
    <section className={styles.container} id="about">
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
          About Me
        </motion.h2>
        
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.imageWrapper}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={getImageUrl("about/about.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            />
          </motion.div>

          <motion.ul 
            className={styles.aboutItems}
            variants={containerVariants}
          >
            {aboutItems.map((item, index) => (
              <motion.li
                key={index}
                className={styles.aboutItem}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={getImageUrl(item.icon)} 
                    alt={`${item.title} icon`}
                  />
                </motion.div>
                <div className={styles.aboutItemText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};
