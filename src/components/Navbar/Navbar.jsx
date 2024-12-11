import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a 
        className={styles.title} 
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.a>
      <div className={styles.menu}>
        <motion.img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <AnimatePresence>
          {(menuOpen || window.innerWidth > 830) && (
            <motion.ul
              className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
