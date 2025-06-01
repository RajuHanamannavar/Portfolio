import React from 'react';
import './About.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container" data-aos="fade-up">
        <div className="about-description">
          <p>
            I'm a passionate <strong>Frontend Developer</strong> with 3+ years of experience building web applications using React.js.
            I love transforming ideas into beautiful and responsive UIs. I focus on performance, accessibility, and clean code.
          </p>
          <p>
            I’ve worked on enterprise-level applications like <strong>Facility Management System</strong> and <strong>OnPoint</strong> that optimize business workflows.
          </p>
        </div>

        <div className="about-skills">
          <div className="about-skill-card"><FaReact className="about-icon react" /><span>React.js</span></div>
          <div className="about-skill-card"><FaJsSquare className="about-icon js" /><span>JavaScript</span></div>
          <div className="about-skill-card"><FaHtml5 className="about-icon html" /><span>HTML5</span></div>
          <div className="about-skill-card"><FaCss3Alt className="about-icon css" /><span>CSS3</span></div>
          <div className="about-skill-card"><FaCode className="about-icon redux" /><span>Redux</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
