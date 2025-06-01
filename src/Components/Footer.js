// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>© {new Date().getFullYear()} Raju Hanamannavar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
