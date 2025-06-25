import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext'; // ✅ correct path
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar
          onProjectsClick={handleProjectsClick}
          onContactClick={handleContactClick}
        />
        <Hero onProjectsClick={handleProjectsClick} />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
