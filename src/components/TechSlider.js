import React from 'react';
import './TechSlider.css';

import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/js.png';
import reactLogo from '../assets/logos/react.png';
import nodeLogo from '../assets/logos/node.png';
import mongoLogo from '../assets/logos/mongodb.png';
import gitLogo from '../assets/logos/git.png';
import vscodeLogo from '../assets/logos/vscode.png';

const techLogos = [
  { name: 'HTML5', src: htmlLogo },
  { name: 'CSS3', src: cssLogo },
  { name: 'JavaScript', src: jsLogo },
  { name: 'React', src: reactLogo },
  { name: 'Node.js', src: nodeLogo },
  { name: 'MongoDB', src: mongoLogo },
  { name: 'Git', src: gitLogo },
  { name: 'VS Code', src: vscodeLogo },
];

const TechSlider = () => {
  return (
    <section className="tech-slider-section">
      <h2 className="slider-heading">My Skill Stack</h2>

      {/* Gradient Masks */}
      <div className="slider-mask left" />
      <div className="slider-mask right" />

      {/* Scrollable Container */}
      <div className="slider-container">
        <div className="slider-track">
          {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo.src} alt={logo.name} className="tech-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
