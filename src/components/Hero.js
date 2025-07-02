import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import './Hero.css';

import bulbOn from '../assets/bulb-on.png';
import bulbOff from '../assets/bulb-off.png';

const Hero = ({ onProjectsClick }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.section
      className="hero-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Theme Toggle Bulb */}
      <button className="bulb-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <img
          src={darkMode ? bulbOn : bulbOff}
          alt={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          className="bulb-icon"
        />
      </button>

      {/* Left Portrait with Tilt */}
      <motion.div
        className="hero-left tilt-card"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/prajyot.png" alt="Prajyot Kankal portrait" />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="logo">💻 Prajyot Kankal</div>

        <h1>
          Hi, I'm Prajyot!
          <br />
          <motion.span
            className="role-text"
            animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, -20] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Web Developer
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          A passionate web developer blending creativity with code to build modern, responsive experiences.
        </motion.p>

        {/* Scroll Down Icon */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-angle-double-down"></i>
        </motion.div>

       

        {/* Info Card */}
        <motion.div
          className="info-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="about">
            <h3>ABOUT ME</h3>
            <p>
              I'm a developer who turns ideas into clean, interactive digital experiences.
              Currently working at Wipro, I specialize in MERN, JavaScript, and modern frontend ecosystems.
            </p>
          </div>

          <div className="work">
            <h3>MY WORK</h3>
            <p>
              From responsive sites to refined UI/UX, my work reflects both technical skill and creative vision.
            </p>
            <p className="resume-text">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                📄 View My Resume
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="socials">
            <span>FOLLOW ME</span>
            <ul className="social-icons">
              <li data-tooltip="LinkedIn" style={{ "--bg": "#0077b5" }}>
                <a
                  href="https://www.linkedin.com/in/prajyot-kankal-89472b1ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li data-tooltip="GitHub" style={{ "--bg": "#0d1117" }}>
                <a
                  href="https://github.com/PrajyotKankal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li data-tooltip="Instagram" style={{ "--bg": "#e1306c" }}>
                <a
                  href="https://www.instagram.com/mr.prajxot"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            
          </div>
        </motion.div>
      </motion.div>
      
      
    </motion.section>
  );
};

export default Hero;
