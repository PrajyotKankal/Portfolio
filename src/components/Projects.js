import React, { useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Sunil Phetawale',
    description: 'Responsive website showcasing cultural items and handcrafted products.',
    image: '/images/pheta.png',
    link: 'https://sunilphetawale.netlify.app/',
  },
  {
    title: 'Imagle',
    description: 'Secure internal image access system with role-based permissions.',
    image: '/images/imagle.png',
    link: 'https://github.com/PrajyotKankal/image-approval-system',
  },
  {
    title: 'Arnavi Color Studio',
    description: 'Modern React website for a photography studio with elegant galleries.',
    image: '/images/arnavi-color-studio.png',
    link: 'https://github.com/PrajyotKankal/Arnavi-Color-Studio',
  }
];

const Projects = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('dragging');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('dragging');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div
        ref={scrollRef}
        className="projects-scroll"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div className="project-card-wrapper" key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
