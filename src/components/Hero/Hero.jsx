import { motion, useAnimation } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

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
          Hi there <motion.span animate={controls} style={{ display: "inline-block" }}>👋</motion.span>, My name is
        </motion.p>
        <motion.h1 variants={itemVariants} className={styles.title}>
          Mohammad Shehabul Islam
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.description}>
          <TypewriterEffect text="I'm a full-stack developer with a passion for problem-solving and commitment to continuous learning." />
        </motion.p>
        <motion.div 
          className={styles.btnContainer}
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className={styles.contactBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            className={styles.downloadBtn}
            href={getImageUrl("resume.pdf")}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <FiDownload />
          </motion.a>
        </motion.div>
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
