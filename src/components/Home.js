import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="home-section">
      <div className="container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="code-comment">// Hello World! 👋</span>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            I'm Manasi Sawant
          </motion.h1>
          <h2 className="subtitle">Software Developer</h2>
          <p className="description">
            Recent Computer Science Graduate from SU 🍊. I am open to new SWE opportunities, specifically iOS development or full stack roles.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('projects')}
            >
              <span className="code-line">viewMyWork()</span> 
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              <span className="code-line">getInTouch()</span> 
            </button>
          </div>
        </motion.div>

        {/* Hero Circles Design */}
        <div className="hero-circles">
          <div className="hero-circle hero-circle-main">
            <img src="/images/mansi.png" alt="Manasi Sawant" className="hero-profile-img" />
          </div>
          <motion.div
            className="hero-circle hero-circle-small1"
            initial={{ scale: 1, y: 0, x: 0 }}
            animate={{ scale: [1, 1.15, 1], y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="hero-circle hero-circle-small2"
            initial={{ scale: 1, y: 0, x: 0 }}
            animate={{ scale: [1, 1.1, 1], y: [0, 15, 0], x: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="hero-circle hero-circle-small3"
            initial={{ scale: 1, y: 0, x: 0 }}
            animate={{ scale: [1, 1.2, 1], y: [0, 10, 0], x: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => scrollToSection('about')}
        >
          <span className="code-comment">// Scroll down for more</span>
          <div className="arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;