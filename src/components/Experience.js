import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experience = {
    title: "Programmer Analyst",
    company: "The Boeing Company",
    location: "Bangalore, Karnataka, India",
    period: "October 2021 - July 2023",
    achievements: [
      "Developed and maintained factory automation applications using .NET Framework, .NET Core, and Microsoft SQL Server, collaborating with global cross-functional teams to deliver scalable solutions.",
      "Spearheaded adoption of Microservice architecture, resulting in a 5-6% increase in operational efficiency and a 10-15% improvement in user experience for Smart Factory Applications.",
      "Implemented Application Performance Monitoring (APM) tools like SonarQube and Splunk, improving application performance and reducing downtime by 20%.",
      "Identified and resolved UI bugs to increase Smart Factory Application user experience by 10-15%.",
      "Designed and deployed RESTful APIs to facilitate seamless integration between microservices, enhancing system modularity and scalability."
    ]
  };

  return (
    <section className="experience-section">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="emoji-heading">💼 Experience</span>
            <span className="code-comment">// Where I've worked</span>
          </h2>

          <div className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">
                <span className="code-line">const role = "</span>
                {experience.title}
                <span className="code-line">";</span>
              </h3>
              <div className="experience-company">
                <span className="code-line">company: "</span>
                {experience.company}
                <span className="code-line">"</span>
              </div>
              <div className="experience-meta">
                <span className="location">📍 {experience.location}</span>
                <span className="period">⏰ {experience.period}</span>
              </div>
            </div>

            <div className="experience-achievements">
              <span className="code-comment">// Key Achievements</span>
              <ul className="achievements-list">
                {experience.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="bullet">▹</span>
                    {achievement}
                  </motion.li>
                ))}
        </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;