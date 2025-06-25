import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-modern" id="contact">
      <h2>Let’s Connect</h2>
      <p>
        I'm currently open to new opportunities, collaborations, or simply connecting with like-minded individuals.
        Feel free to reach out!
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:prajyotkankal9@gmail.com"
          className="contact-btn"
          aria-label="Send an email to Prajyot"
        >
          📧 Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/prajyot-kankal-89472b1ba"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Prajyot's LinkedIn profile"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/PrajyotKankal"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Prajyot's GitHub repositories"
        >
          👨‍💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
