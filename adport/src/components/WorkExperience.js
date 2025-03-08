import React from 'react';
import './WorkExperience.css';

// This component displays Anthony's work experience in a timeline format
const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Project Administrator',
      company: 'Naylor Love',
      type: 'Internship',
      period: 'Nov 2023 - Feb 2024',
      duration: '4 mos',
      location: 'Wellington, Wellington Region, New Zealand',
      skills: ['Communication', 'High Level Administration'],
      logo: '/naylorlovelogo.jpeg', // Make sure to add this image to your public folder
      description: []
    },
    {
      id: 2,
      title: 'Marketing and Web Development Manager',
      company: 'Asian Events Trust',
      type: 'Contract',
      period: '2019 - 2024',
      duration: '5 yrs',
      location: 'Wellington, New Zealand',
      skills: ['Social Media Marketing', 'Digital Designs'],
      logo: '/aet.png', // Make sure to add this image to your public folder
      description: [
        'Marketing and Web Development experience, working on the annual Wellington Lunar New Year festival'
      ]
    },
    {
      id: 3,
      title: 'Front Desk Receptionist',
      company: 'Black Gates Optometrists',
      type: 'Part-time',
      period: 'Dec 2021 - Feb 2022',
      duration: '3 mos',
      location: 'Wellington, New Zealand',
      skills: ['Customer Service', 'Administration'],
      logo: '/blackgateslogo.webp', // Make sure to add this image to your public folder
      description: []
    },
    {
      id: 4,
      title: 'Social Media Manager',
      company: 'Self-employed',
      type: 'Freelance',
      period: '2020 - 2021',
      duration: '1 yr',
      location: 'Wellington, New Zealand',
      skills: ['Social Media Management', 'Content Creation'],
      logo: '/phluxzy.webp', // Make sure to add this image to your public folder
      description: [
        'Social Media Manager for "phluxzy" Gaming Account',
        'Grew Twitch following to 16,000+ followers',
        'Increased Twitter following to 4,500+ followers',
        'Expanded YouTube channel to 2,100+ subscribes by creating 70+ YouTube videos'
      ]
    }
  ];

  return (
    <section className="work-experience-container content-section">
      <div className="work-experience-header">
        <h2 className="work-experience-title">Work Experience</h2>
        <p className="work-experience-subtitle">
          My professional journey and roles I've held over the years
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
            <div className="timeline-item-content">
              <div className="timeline-item-header">
                <div className="company-logo-container">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="company-logo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/company-placeholder.png'; // Fallback image
                      }}
                    />
                  )}
                </div>
                <div className="timeline-item-details">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="job-type">{exp.type}</span>
                  </div>
                  <div className="job-period">
                    <span className="period-dates">{exp.period}</span>
                    <span className="period-duration">{exp.duration}</span>
                  </div>
                  <div className="job-location">{exp.location}</div>
                </div>
              </div>
              
              {exp.description.length > 0 && (
                <div className="job-description">
                  {exp.description.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              )}
              
              {exp.skills.length > 0 && (
                <div className="skills-container">
                  {exp.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;