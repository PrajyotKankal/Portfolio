import React, { useContext } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

import bulbOn from '../assets/bulb-on.png';  // Make sure you have separate on/off images
import bulbOff from '../assets/bulb-off.png';

const Hero = ({ onProjectsClick }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="hero-container">
      {/* Theme toggle bulb */}
      <button className="bulb-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <img
          src={darkMode ? bulbOn : bulbOff}
          alt={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          className="bulb-icon"
        />
      </button>

      {/* Left side image */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/prajyot.png" alt="Prajyot Kankal portrait" />
      </motion.div>

      {/* Right side text */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            WEB DEVELOPER
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          A passionate web developer blending creativity with code to build modern, responsive experiences.
        </motion.p>

        {/* Animated down arrow */}
        <motion.div
          className="arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ⬇️
        </motion.div>

        {/* Info card */}
        <motion.div
          className="info-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="about">
            <h3>ABOUT ME</h3>
            <p>
              I'm a developer who turns ideas into clean, interactive digital experiences. Currently working at Wipro,
              I specialize in React, JavaScript, and modern frontend ecosystems.
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
</p>         </div>

          <div className="socials">
            <span>FOLLOW ME</span>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/prajyot-kankal-89472b1ba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/PrajyotKankal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
