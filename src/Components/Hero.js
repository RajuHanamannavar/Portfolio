// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../Assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero"> {/* ✅ fixed ID */}
      <div className="hero-content" data-aos="fade-right">
        <h1>Hi, I'm <span>Raju Hanamannavar</span></h1>
        <h2>Frontend Developer</h2>
        <p>I build responsive and beautiful web interfaces using React.js</p>
        <a href="#contact" className="cta-btn">Contact Me</a>

        <div className="hero-buttons" data-aos="fade-up">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/resume.pdf" className="btn" download>Download Resume</a>
        </div>
      </div>

      <div className="hero-image" data-aos="zoom-in">
        <img src={heroImage} alt="Raju Hanamannavar" />
      </div>
    </section>
  );
};

export default Hero;
