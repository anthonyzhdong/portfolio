import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Anthony Dong</h1>
          <h2 className="hero-subtitle">Computer Science Graduate</h2>
          <p className="hero-description">
            Passionate about building innovative solutions to real-world problems. 
            I specialize in full-stack development with experience in various 
            programming languages and technologies.
          </p>
          <div className="contact-links">
            <a href="mailto:anthonyzhdong@gmail.com" className="contact-button email">
              <i className="contact-icon email-icon"></i>
              anthonyzhdong@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/anthonyzhdong/" target="_blank" rel="noopener noreferrer" className="contact-button linkedin">
              <i className="contact-icon linkedin-icon"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="section-previews">
        <h2 className="previews-title">Explore My Portfolio</h2>
        
        <div className="preview-cards">
          <Link to="/projects" className="preview-card">
            <div className="preview-content">
              <h3>Projects</h3>
              <p>Check out my recent development work, including web applications, utility tools, and more.</p>
              <span className="preview-link">View Projects →</span>
            </div>
          </Link>
          
          <Link to="/cv" className="preview-card">
            <div className="preview-content">
              <h3>CV</h3>
              <p>Review my qualifications, skills, and professional background.</p>
              <span className="preview-link">View CV →</span>
            </div>
          </Link>
          
          <Link to="/work-experience" className="preview-card">
            <div className="preview-content">
              <h3>Work Experience</h3>
              <p>Learn about my professional journey and the companies I've worked with.</p>
              <span className="preview-link">View Experience →</span>
            </div>
          </Link>
          
          <Link to="/education" className="preview-card">
            <div className="preview-content">
              <h3>Education</h3>
              <p>Details about my academic background and qualifications in Computer Science.</p>
              <span className="preview-link">View Education →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;