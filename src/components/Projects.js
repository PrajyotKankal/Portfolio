import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Sunil Phetawale',
    description: 'A responsive website to showcase cultural heritage items and handcrafted products.',
    details: `Built using semantic HTML5, CSS3, and vanilla JavaScript. Features include responsive layout with CSS Grid and Flexbox, smooth user experience, and subtle animations.`,
    image: '/images/pheta.png',
    link: 'https://sunilphetawale.netlify.app/',
  },
  {
    title: 'Imagle',
    description: 'A full-stack Image Request & Approval System tailored for team collaboration.',
    details: `Developed with ReactJS, Node.js, Express, and MongoDB. Includes image uploads with tags, admin-user role-based login, approval workflows, download tracking, and fully responsive modern UI dashboards.`,
    image: '/images/imagle.png',
    link: 'https://github.com/PrajyotKankal/image-approval-system',
  }
];

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <section className="project-wrapper">
      <div className={`project-card ${showDetails ? 'expanded' : ''}`}>
        {project.image && (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
        <div className="project-content">
          <h3>{project.title}</h3>
          <p className="desc">{project.description}</p>
          <div className="buttons">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Site / GitHub
            </a>
            <button onClick={toggleDetails} className="btn btn-secondary">
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
          {showDetails && (
            <div className="project-details visible">
              <p>{project.details}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
