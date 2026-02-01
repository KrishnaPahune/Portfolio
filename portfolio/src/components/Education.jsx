import React from 'react'
import './Education.css'
function Education() {
    const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'ABC College of Engineering',
      year: '2021 - 2025',
      percentage: 'CGPA: 8.5/10',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'XYZ Junior College',
      year: '2019 - 2021',
      percentage: '85.5%',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'PQR High School',
      year: '2019',
      percentage: '88.2%',
    },
  ];
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
              </div>
              <div className="education-details">
                <span className="education-year">{edu.year}</span>
                <span className="education-percentage">{edu.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
