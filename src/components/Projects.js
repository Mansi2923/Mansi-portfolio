import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "DeployWatch - CI/CD Deployment Tracker",
      description: "A real-time dashboard for tracking application deployments across different environments with GitHub/GitLab webhook integration and Kubernetes-native deployment.",
      image: "/images/Deploy.png",
      technologies: ["React", "Redux", "Go", "Kubernetes", "Terraform", "REST API"],
      keyFeatures: ["Real-time deployment tracking", "Multi-environment support", "Webhook integration", "K8s-native"],
      date: "2024",
      github: "https://github.com/Mansi2923/DeployWatcher",
      demo: "https://deploywatch-demo.vercel.app",
      status: "New",
    },
    {
      title: "Tech Doc Search Bot",
      description: "A full-stack documentation search and management platform that helps developers find and manage technical documentation efficiently.",
      image: "/images/TechBot.png",
      technologies: ["Next.js", "GraphQL", "Prisma", "Turborepo", "TypeScript", "Tailwind CSS"],
      keyFeatures: ["Full-text & semantic search", "Admin dashboard", "Analytics", "User feedback"],
      date: "2024",
      github: "https://github.com/Mansi2923/tech-doc-search-bot",
      demo: "https://tech-doc-search-bot.vercel.app",
      status: "New",
    },
    {
      title: "MovieListApp",
      description: "A modern iOS application that helps movie enthusiasts discover, search, and organize their favorite films with a beautiful interface.",
      image: "/images/MovieApp.png",
      technologies: ["Swift", "SwiftUI", "Firebase", "TMDB API"],
      keyFeatures: ["Real-time sync", "Movie discovery", "Watchlist", "Dark mode"],
      date: "2024",
      github: "https://github.com/Mansi2923/Movie-App",
      demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
      status: "New",
    },
    {
      title: "IMAPGINE",
      description: "An intelligent mind map generation tool that transforms text into visual mind maps using advanced NLP techniques.",
      image: "/images/Imapgine.png",
      technologies: ["NLP", "NLTK", "CNN", "NLU", "AI", "gTTS", "Flask"],
      keyFeatures: ["Auto mind maps", "Text-to-speech", "Interactive viz", "Custom layouts"],
      date: "May 2021",
      github: "https://github.com/Mansi2923/IMAPGINE",
      demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    },
    {
      title: "On Road Vehicle Breakdown Assistance",
      description: "An Android application that connects users with nearby mechanics during vehicle breakdowns for immediate assistance.",
      image: "/images/breakdown-assist.png",
      technologies: ["Android Studio", "Flutter", "Firebase", "GPS", "Google Play Services"],
      keyFeatures: ["GPS tracking", "Emergency assistance", "Mechanic ratings", "Offline mode"],
      date: "May 2020",
      github: "https://github.com/Mansi2923/Vehicle-Breakdown-App",
      demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    },
    {
      title: "Thrive",
      description: "A comprehensive personal development iOS app that helps users track and improve their lives through various wellness features.",
      image: "/images/Thrive.png",
      technologies: ["SwiftUI", "Firebase", "CoreData", "MVVM"],
      keyFeatures: ["Planner", "Habit tracker", "Mood journal", "Cloud sync"],
      date: "2024",
      github: "https://github.com/Mansi2923/Thrive-",
      demo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="section-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Some of my work includes both academic and personal projects.
        </motion.p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              tabIndex={0}
              aria-labelledby={`project-title-${index}`}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title} project`} 
                  className="project-image" 
                />
                {project.status === "New" && <span className="project-status-badge">New</span>}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title" id={`project-title-${index}`}>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  {project.keyFeatures && project.keyFeatures.map((feature) => (
                    <span key={feature} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.technologies && project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link btn btn-outline" aria-label={`View ${project.title} code on GitHub`}>Code</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link btn btn-primary" aria-label={`View live demo of ${project.title}`}>Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;