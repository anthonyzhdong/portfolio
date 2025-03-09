import React from 'react';
import './Education.css';

// This component displays Anthony's education in a timeline format
const Education = () => {
  const educationHistory = [
    {
      id: 1,
      institution: 'University of Otago',
      degree: 'Bachelor of Science in Computer Science',
      period: '2020 - 2023',
      location: 'Dunedin, New Zealand',
      achievements: [
        'Completed with strong academic standing',
        'University Scholarship recipient'
      ],
      logo: '/otagologo.jpeg', // Add this image to your public folder
    },
    {
      id: 2,
      institution: 'Hutt International Boys School',
      degree: 'Secondary Education',
      period: '2014 - 2019',
      location: 'Upper Hutt, Wellington, New Zealand',
      achievements: [
        'NCEA Level 1 & 2 endorsed with Excellence',
        'NCEA Level 3 endorsed with Merit',
        'Participated in various extracurricular activities'
      ],
      logo: '/hibslogo.png', // Add this image to your public folder
    }
  ];

  return (
    <section className="education-container content-section">
      <div className="education-header">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          My academic journey and qualifications
        </p>
      </div>

      <div className="timeline">
        {educationHistory.map((edu) => (
          <div className="timeline-item" key={edu.id}>
            <div className="timeline-item-content">
              <div className="timeline-item-header">
                <div className="institution-logo-container">
                  {edu.logo && (
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`} 
                      className="institution-logo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/education-placeholder.png'; // Fallback image
                      }}
                    />
                  )}
                </div>
                <div className="timeline-item-details">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <div className="degree-info">
                    <span className="degree-name">{edu.degree}</span>
                  </div>
                  <div className="education-period">
                    <span className="period-dates">{edu.period}</span>
                  </div>
                  <div className="education-location">{edu.location}</div>
                </div>
              </div>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="achievements-container">
                  <h4 className="achievements-title">Achievements & Activities</h4>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;