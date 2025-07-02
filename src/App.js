import React, { useEffect, useRef, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechSlider from './components/TechSlider';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function AppContent() {
  const { darkMode } = useContext(ThemeContext);

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar
        onProjectsClick={handleProjectsClick}
        onContactClick={handleContactClick}
      />
      <Hero onProjectsClick={handleProjectsClick} />
      {/* Skills / Tech Stack Section */}
      <TechSlider />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
