import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className={styles.header}>
          Hi there 👋, My name is
        </motion.p>
        <motion.h1 variants={itemVariants} className={styles.title}>
          Mohammad Shehabul Islam
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.description}>
          I&apos;m a full-stack developer with a passion for problem-solving and
          commitment to continuous learning.
        </motion.p>
        <div className={styles.btnContainer}>
          <motion.a
            href="#contact"
            className={styles.contactBtn}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/resume/resume.pdf"
            download="Mohammad_Shehabul_Islam_Resume.pdf"
            className={styles.resumeBtn}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
            <FiDownload className={styles.downloadIcon} />
          </motion.a>
        </div>
      </motion.div>
      <motion.img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
