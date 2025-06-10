import React from 'react';
import './About.css';

const Education = () => {
  return (
    <section className="education-container" id="education">
      <div className="education-content">
        <div className="section-heading">
          <h2 className="emoji-heading">
            <span>🎓</span> Education
          </h2>
          <span className="code-comment">// My academic journey</span>
        </div>
        
        <div className="education-list">
          <div className="education-item">
            <div className="education-header">
              <h3>Master of Science in Computer Science</h3>
              <div className="school-name">Syracuse University</div>
              <div className="location-period">
                <span>📍 Syracuse, NY</span>
                <span>🗓️ 2023 - 2025</span>
              </div>
            </div>
            <div className="education-details">
              <p className="gpa">GPA: 3.0/4.0</p>
              <div className="coursework">
                <p className="code-comment">// Relevant Coursework</p>
                <p>Design and Analysis of Algorithms, Intro to AI, Natural Language Processing, Machine Learning, Computer Vision, Database Management</p>
              </div>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h3>Bachelor of Engineering in Computer Science</h3>
              <div className="school-name">University of Mumbai</div>
              <div className="location-period">
                <span>📍 Mumbai, India</span>
                <span>🗓️ 2019 - 2023</span>
              </div>
            </div>
            <div className="education-details">
              <p className="gpa">GPA: 3.46/4.0</p>
              <div className="coursework">
                <p className="code-comment">// Relevant Coursework</p>
                <p>Object-Oriented Programming, Database Management, Web Development, Computer Networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 