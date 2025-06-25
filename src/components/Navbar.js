import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, currentTheme, onContactClick, onProjectsClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); onProjectsClick(); }}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact</a></li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
