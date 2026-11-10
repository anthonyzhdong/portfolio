import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-header">
        <h2 className="contact-page-title">Contact Me</h2>
        <p className="contact-subtitle">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the methods below!
        </p>
      </div>

      <div className="contact-boxes">
        <div className="contact-box">
        <div className="contact-box-icon">
            <img src="/email.png" alt="Gmail" className="icon-image" />
          </div>
          <a href="mailto:anthonyzhdong@gmail.com" className="contact-link">
            anthonyzhdong@gmail.com
          </a>
          <p className="contact-description">
            For professional inquiries and opportunities, email is the best way to reach me.
          </p>
        </div>

        <div className="contact-box">
          <div className="contact-box-icon linkedin-icon"></div>
          <a 
            href="https://linkedin.com/in/anthonyzhdong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/anthonyzhdong
          </a>
          <p className="contact-description">
            Connect with me on LinkedIn for professional networking, career history or professional achievements.
          </p>
        </div>

        <div className="contact-box">
          <div className="contact-box-icon github-icon"></div>
          <a 
            href="https://github.com/anthonyzhdong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/anthonyzhdong
          </a>
          <p className="contact-description">
            Visit my GitHub profile to see my code repositories for current and past projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;