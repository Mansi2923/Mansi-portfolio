import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Syracuse University',
      location: 'Syracuse, NY',
      period: '2023 - 2025',
      gpa: '3.0/4.0',
      coursework: 'Data Structures, Algorithms, Machine Learning, Computer Vision, Natural Language Processing'
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'University of Mumbai',
      location: 'Mumbai, India',
      period: '2019 - 2023',
      gpa: '3.46/4.0',
      coursework: 'Object-Oriented Programming, Database Management, Web Development, Computer Networks'
    }
  ];

  return (
    <>
      <section className="about-container container" id="about">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              <span className="emoji-heading">👋 About Me</span>
              <span className="code-comment">// Get to know me better ✨</span>
            </h2>
            <div className="about-flex">
              <div className="about-text">
                <div className="social-links">
                  <a href="https://github.com/Mansi2923" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/mansi-sawant-a344161b4" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="mailto:sawantmanasi239@gmail.com" className="social-link">
                    <FaEnvelope /> Email
                  </a>
                </div>
                <span className="code-comment">// My approach to development</span>
                <p>I’m a recent Computer Science graduate from Syracuse University with a solid foundation in full-stack software development and a growing focus on iOS mobile applications. 
                   During my time at Boeing, I contributed to the development of scalable factory automation systems using .NET, C#, and SQL Server. 
                   I worked closely with cross-functional teams to implement microservice based architectures and RESTful APIs, enhancing performance and modularity. Now, I’m channeling my passion into mobile development; especially within the iOS ecosystem building intuitive, user-centered applications using Swift and modern Apple technologies. I aim to bridge backend expertise with elegant mobile experiences that drive real-world impact.</p>
              </div>
              <div className="profile-image-container">
                <img src="/images/profile.jpg" alt="Manasi Sawant" className="profile-image" />
                <a 
                  href="/Manasi_Resume.pdf" 
                  download="Manasi_Sawant_Resume.pdf"
                  className="resume-button"
                >
                  <span>📄</span> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="education-container container" id="education">
        <motion.div 
          className="education-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">
            <span className="emoji-heading">🎓 Education</span>
            <span className="code-comment">// My academic journey</span>
          </h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <div className="school-info">
                    <p className="school-name">{edu.school}</p>
                    <p className="location-period">
                      <span>📍 {edu.location}</span>
                      <span>⏰ {edu.period}</span>
                    </p>
                  </div>
                </div>
                <div className="education-details">
                  <p className="gpa">GPA: {edu.gpa}</p>
                  <div className="coursework">
                    <span className="code-comment">// Relevant Coursework</span>
                    <p>{edu.coursework}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </section>
    </>
  );
};

export default About;