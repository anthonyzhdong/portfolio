import React from 'react';
import './WorkExperience.css';

// This component displays Anthony's work experience in a timeline format
const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Technical Support',
      company: 'Savvy Up',
      type: 'Casual',
      period: 'April 2024 - Present',
      duration: 'Ongoing',
      location: 'Wellington, New Zealand',
      skills: ['Communication', 'Technical Support'],
      logo: '/savvyuplogo.png', // Make sure to add this image to your public folder
      description: ['Suppporting the maintainence and administration of the Savvy Up website and courses.']
    },
    {
      id: 2,
      title: 'Project Administrator',
      company: 'Naylor Love',
      type: 'Internship',
      period: 'Nov 2023 - Feb 2024',
      duration: '4 mos',
      location: 'Wellington, New Zealand',
      skills: ['Communication', 'High Level Administration'],
      logo: '/naylorlovelogo.jpeg', // Make sure to add this image to your public folder
      description: ['Assisted in managing and overseeing construction projects, including the James Cook Hotel and Wellington Town Hall. Collaborated with a team to supervise general operations, ensuring adherence to all procedures. Effectively communicated with private clients and internal divisions. Supported project scheduling and documentation tasks.']
    },
    {
      id: 3,
      title: 'Marketing and Web Development Manager',
      company: 'Asian Events Trust',
      type: 'Contract',
      period: '2019 - 2024',
      duration: '5 yrs',
      location: 'Wellington, New Zealand',
      skills: ['Social Media Marketing', 'Digital Designs'],
      logo: '/aet.png', // Make sure to add this image to your public folder
      description: [
        'Collaborated with a team to develop the marketing strategy and website for Wellington’s annual Lunar New Year Festival. Responsibilities included designing and distributing marketing materials, organising social media advertising campaigns on various platforms, and creating and maintaining the festival website.'
      ]
    },
    {
      id: 4,
      title: 'Front Desk Receptionist',
      company: 'Black Gates Optometrists',
      type: 'Part-time',
      period: 'Dec 2021 - Feb 2022',
      duration: '3 mos',
      location: 'Wellington, New Zealand',
      skills: ['Customer Service', 'Administration'],
      logo: '/blackgateslogo.webp', // Make sure to add this image to your public folder
      description: ['Assisted with daily administrative tasks and managed appointment scheduling for patients at an optometry clinic. Provided excellent customer service, ensuring a positive experience for all patients']
    },
    {
      id: 5,
      title: 'Social Media Manager',
      company: 'Self-employed',
      type: 'Freelance',
      period: '2020 - 2021',
      duration: '1 yr',
      location: 'Wellington, New Zealand',
      skills: ['Social Media Management', 'Content Creation'],
      logo: '/phluxzy.webp', // Make sure to add this image to your public folder
      description: [
        'Managed social media marketing for a personal gaming account, achieving significant growth across multiple platforms by increasing Twitch following to 16,000 followers, expanding Twitter following to 4,500 followers, and growing YouTube subscribers to 2,150 by creating and editing over 70 videos. Additionally, represented gaming agencies FURY Australia, Team Process, and Overt in regular tournaments.'
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