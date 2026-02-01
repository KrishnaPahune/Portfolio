import React from 'react'
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css'
function Projects() {
  const projects = [
    {
      title: 'E-Commerce Product Page',
      description: 'Responsive product page with cart functionality and dynamic pricing',
      techStack: ['React', 'JavaScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location search and 5-day forecast',
      techStack: ['React', 'API Integration', 'CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Manager App',
      description: 'Todo application with CRUD operations and local storage',
      techStack: ['React', 'JavaScript', 'LocalStorage'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills',
      techStack: ['React', 'Tailwind CSS', 'Responsive Design'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} className="project-link">
                  <Github size={18} />
                  Code
                </a>
                <a href={project.liveUrl} className="project-link">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
