import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image-placeholder">
            {/* Replace with your actual image */}
            <span>Your Photo</span>
          </div>
        </div>
        
        <div className="about-bio">
          <h3>Anthony Dong</h3>
          <h4>Computer Science Graduate</h4>
          
          <p>
            Hello! I'm Anthony, a Computer Science graduate passionate about developing 
            innovative solutions to complex problems. My academic journey has equipped me 
            with a strong foundation in software development, algorithms, and system design.
          </p>
          
          <p>
            I enjoy working with various programming languages and technologies, and I'm 
            constantly expanding my skillset to stay current with industry trends. My 
            approach to development focuses on creating clean, efficient, and maintainable code.
          </p>
          
          <div className="contact-info">
            <a href="mailto:your.email@example.com" className="contact-link">
              <i className="contact-icon email-icon"></i>
              your.email@example.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="contact-icon linkedin-icon"></i>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      
      <div className="interests-section">
        <h3 className="interests-title">Personal Interests</h3>
        
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon dance-icon"></div>
            <h4>Dancing</h4>
            <p>
              I'm an enthusiastic dancer who enjoys expressing myself through movement and rhythm. 
              Dancing has taught me discipline, creativity, and the value of consistent practice.
            </p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon volunteer-icon"></div>
            <h4>Volunteering</h4>
            <p>
              Community engagement is important to me. I regularly participate in volunteering 
              activities with local organizations focused on technology education and community support.
            </p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon volleyball-icon"></div>
            <h4>Volleyball</h4>
            <p>
              When I'm not coding, you can find me on the volleyball court. I enjoy the 
              team dynamics and competitive spirit of the sport, which reinforces my 
              collaborative approach to work.
            </p>
          </div>
          
          <div className="interest-card">
            <div className="interest-icon gaming-icon"></div>
            <h4>Gaming & Content Creation</h4>
            <p>
              I'm deeply interested in video games and content creation, exploring the intersection 
              of technology, storytelling, and community building through gaming streams and tutorials.
            </p>
          </div>
        </div>
      </div>
      
      <div className="skills-section">
        <h3 className="skills-title">Technical Skills</h3>
        
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
    </section>
  );
};

export default AboutMe;