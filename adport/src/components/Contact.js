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

      <div className="contact-content">
        <div className="contact-card">
          <h3>Get In Touch</h3>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon-container">
                <div className="contact-icon email-icon"></div>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:anthonyzhdong@gmail.com">anthonyzhdong@gmail.com</a>
                <p>I typically respond within 24-48 hours</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-container">
                <div className="contact-icon linkedin-icon"></div>
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/anthonyzhdong" target="_blank" rel="noopener noreferrer">linkedin.com/in/anthonyzhdong</a>
                <p>Connect with me professionally</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-container">
                <div className="contact-icon github-icon"></div>
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/anthonyzhdong" target="_blank" rel="noopener noreferrer">github.com/anthonyzhdong</a>
                <p>Check out my code repositories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send Me a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;