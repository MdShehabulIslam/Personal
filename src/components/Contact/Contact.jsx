import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      icon: "contact/emailIcon.png",
      alt: "Email icon",
      href: "mailto:shehabul97@gmail.com",
      text: "shehabul97@gmail.com"
    },
    {
      icon: "contact/linkedinIcon.png",
      alt: "LinkedIn icon",
      href: "https://www.linkedin.com/in/mohammad-shehabul-islam-55b7b223a/",
      text: "Mohammad Shehabul Islam"
    },
    {
      icon: "contact/githubIcon.png",
      alt: "Github icon",
      href: "https://github.com/MdShehabulIslam",
      text: "MdShehabulIslam"
    }
  ];

  return (
    <footer id="contact" className={styles.container}>
      <motion.div 
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className={styles.text} variants={itemVariants}>
          <h2>Let's Connect!</h2>
          <p>Feel free to reach out</p>
        </motion.div>

        <div className={styles.contactWrapper}>
          <motion.form 
            className={styles.form}
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="4"
              />
            </motion.div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus && (
              <motion.div
                className={`${styles.submitStatus} ${styles[submitStatus]}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {submitStatus === 'success' ? 
                  "Message sent successfully!" : 
                  "Error sending message. Please try again."}
              </motion.div>
            )}
          </motion.form>

          <motion.ul 
            className={styles.links}
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                className={styles.link}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={getImageUrl(link.icon)} alt={link.alt} />
                </motion.div>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </footer>
  );
};
