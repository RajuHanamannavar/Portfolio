// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">Feel free to connect with me for collaboration or job opportunities!</p>

      <div className="contact-info" data-aos="fade-up">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:rajuhanamannavar1999@gmail.com">rajuhanamannavar1999@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:9071235286">+91 90712 35286</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/raju-hanamannavar-56a24a352" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
