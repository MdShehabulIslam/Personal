import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className={styles.container} id="projects">
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className={styles.title}
          variants={titleVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.div className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} index={id} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
