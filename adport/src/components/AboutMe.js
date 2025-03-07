import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('goals');

  // Function to handle tab changes
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  
  return (
    <section className="about-container">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image-placeholder">
            {/* Replace with your actual image */}
            <img src="/aboutme.jpg" alt="Anthony Dong" className="about-image" />
          </div>
        </div>
        
        <div className="about-bio">
          <h3>Anthony Dong</h3>
          <h4>Computer Science Graduate</h4>
          
          <p>
            你好! Hello! I'm Anthony, a Computer Science graduate passionate about developing 
            innovative solutions to real-world problems. My academic journey has equipped me 
            with a strong foundation and I'm eager to apply my skills to create impactful software.
          </p>
          
          <p>
            I enjoy working with various programming languages and technologies, and I'm 
            constantly looking for ways to expand my skillset. My current focus is finding a software development role in either Wellington or Auckland.
          </p>
        </div>
      </div>
      
      {/* Tabs System */}
      <div className="tabs-container">
        <div className="tabs-navigation">
          <button 
            className={`tab-button ${activeTab === 'goals' ? 'active' : ''}`} 
            onClick={() => handleTabChange('goals')}
          >
            My Goals
          </button>
          <button 
            className={`tab-button ${activeTab === 'interests' ? 'active' : ''}`} 
            onClick={() => handleTabChange('interests')}
          >
            Interests
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} 
            onClick={() => handleTabChange('skills')}
          >
            Skills
          </button>
        </div>
        
        {/* Goals Tab Content */}
        <div className={`tab-content ${activeTab === 'goals' ? 'active' : ''}`}>
          <div className="goals-section">
            <div className="goal-item">
              <h4 className="goal-title">
                <span className="goal-icon">🎯</span>
                Career Development
              </h4>
              <p className="goal-content">
                Secure a software development position at a forward-thinking company in Wellington or Auckland
                where I can contribute to meaningful projects and continue to grow my technical skills.
              </p>
            </div>
            
            <div className="goal-item">
              <h4 className="goal-title">
                <span className="goal-icon">📚</span>
                Learning & Growth
              </h4>
              <p className="goal-content">
                Deepen my expertise in full-stack development by mastering advanced React patterns,
                server-side optimization techniques, and expanding my knowledge of cloud architecture.
              </p>
            </div>
            
            <div className="goal-item">
              <h4 className="goal-title">
                <span className="goal-icon">🏃</span>
                Personal Achievement
              </h4>
              <p className="goal-content">
                Complete a full marathon by the end of 2025, building on my half-marathon experiences
                and maintaining a consistent training schedule.
              </p>
            </div>
            
            <div className="goal-item">
              <h4 className="goal-title">
                <span className="goal-icon">🌐</span>
                Community Contribution
              </h4>
              <p className="goal-content">
                Mentor junior developers and contribute to open-source projects that align with my values
                and technical interests, giving back to the development community.
              </p>
            </div>
          </div>
        </div>
        
        {/* Interests Tab Content */}
        <div className={`tab-content ${activeTab === 'interests' ? 'active' : ''}`}>
          <div className="interests-section">
            <div className="interests-grid">
              <div className="interest-card">
                <div className="title-with-icon">
                  <div className="interest-icon dance-icon"></div>
                  <h4>Hip Hop</h4>
                </div>
                <p>
                  I'm a dancer who has been doing Hip Hop for over 8 years. Competing in regional, national and international competitions. 
                  In 2018 I had the opportunity to represent New Zealand in the World Hip Hop Championships in the "Mega-crew" division over in Arizona.
                </p>
              </div>
              
              <div className="interest-card">
                <div className="title-with-icon">
                  <div className="interest-icon volunteer-icon"></div>
                  <h4>Weightlifting</h4>
                </div>
                <p>
                  I've been lifting weights consistently for the past four years.
                </p>
              </div>
              
              <div className="interest-card">
                <div className="title-with-icon">
                  <div className="interest-icon volleyball-icon"></div>
                  <h4>Running</h4>
                </div>
                <p>
                  I've been running for the past year. I've completed two half marathons (2h 10m & 2h 3m) with a goal of running a full marathon by the end of 2025.
                </p>
              </div>
              
              <div className="interest-card">
                <div className="title-with-icon">
                  <div className="interest-icon gaming-icon"></div>
                  <h4>Gaming & Content Creation</h4>
                </div>
                <p>
                  I played fortnite professionally for 3 years and have a passion for content creation.
                  I competed in multiple tournaments reaching top 3 in New Zealand and winning over $16,000 USD in prize money.
                  I streamed on Twitch to over 16,000 followers and had a YouTube channel with over 2,000 subscribers.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Tab Content */}
        <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
          <div className="skills-section">
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <ul className="skills-list">
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <ul className="skills-list">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>EJS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <ul className="skills-list">
                  <li>Git/GitHub</li>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Soft Skills</h4>
                <ul className="skills-list">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Project Management</li>
                  <li>Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;