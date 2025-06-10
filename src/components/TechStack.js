import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, 
  FaDatabase, FaMobile, FaServer, FaCode, FaTools,
  FaMicrosoft, FaAndroid
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiNextdotjs, SiMongodb, SiPostgresql, SiMysql,
  SiSwift, SiFlutter, SiGitlab, SiVisualstudio, SiJest, SiCypress,
  SiCplusplus, SiLinux, SiApachekafka, SiFirebase
} from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C#", icon: <FaMicrosoft /> },
        { name: "Node.js", icon: <FaNodeJs /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQL Server", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Swift", icon: <SiSwift /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Android", icon: <FaAndroid /> }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitLab", icon: <SiGitlab /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kafka", icon: <SiApachekafka /> },
        { name: "CI/CD", icon: <FaTools /> }
      ]
    }
  ];

  return (
    <section className="section tech-stack-section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p 
          className="section-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Few skills i have learned so far (hope to learn more)
        </motion.p>
        
        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 