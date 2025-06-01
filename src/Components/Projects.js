// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Facility Management System',
    description: 'Manage office spaces with visual UI, seat tracking, and resource reports.',
    tech: 'HTTML, CSS, JavaScript, React js, Redux',
    link: 'https://github.com/yourname/facility-management',
  },
  {
    title: 'OnPoint',
    description: 'Track vendor work, manage fund release, and monitor project budgets.',
    tech: 'React JS, JavaScript, HTML, CSS',
    link: 'https://github.com/yourname/onpoint',
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" data-aos="zoom-in" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
