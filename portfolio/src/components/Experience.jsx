import React from 'react'
import './Experience.css'
function Experience() {
     const experiences = [
    {
      role: 'Frontend Development Intern',
      company: 'Tech Solutions Pvt. Ltd.',
      duration: 'Jun 2025 - Aug 2025',
      description: [
        'Developed responsive UI components using React and Tailwind CSS',
        'Collaborated with design team to implement user-friendly interfaces',
      ],
    },
    {
      role: 'Web Development Trainee',
      company: 'Digital Academy',
      duration: 'Jan 2025 - Mar 2025',
      description: [
        'Completed intensive training in modern web development technologies',
        'Built multiple projects including e-commerce and dashboard applications',
      ],
    },
  ];
  return (
     <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <p className="experience-duration">{exp.duration}</p>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="experience-description-item">
                    <span className="experience-bullet">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
