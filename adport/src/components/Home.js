import React , {useRef} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const portfolioSectionRef = useRef(null);
  
    // Create a function to handle the scroll action
    const scrollToPortfolioSection = () => {
      if (portfolioSectionRef.current) {
        // Scroll to the section with an offset to account for the navbar
        const yOffset = -250; // Small offset to position it nicely
        const y = portfolioSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    };
  return (
    <section className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Anthony Dong</h1>
          <h2 className="hero-subtitle">Computer Science Graduate</h2>
          <p className="hero-description">
           Welcome to my portfolio, Passionate about building innovative solutions to complex problems. 
          </p>
        </div>
      </div>

      <div className="section-previews">
        <h2 
        className="previews-title clickable"
        onClick={scrollToPortfolioSection}
        >
        Explore My Portfolio
        </h2>
        
        <div ref={portfolioSectionRef} className="preview-cards">
          <Link to="/about" className="preview-card">
            <div className="preview-content">
              <h3>About Me</h3>
              <p>Learn more about my background, interests, and goals!</p>
              <span className="preview-link">View About Me →</span>
            </div>
          </Link>
          
          <Link to="/projects" className="preview-card">
            <div className="preview-content">
              <h3>Projects</h3>
              <p>Check out my some coding projects I've developed over the past few years!</p>
              <span className="preview-link">View Projects →</span>
            </div>
          </Link>
          
          <Link to="/cv" className="preview-card">
            <div className="preview-content">
              <h3>CV</h3>
              <p>Review my qualifications, soft skills, and professional background.</p>
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

          <Link to="/contact" className="preview-card">
            <div className="preview-content">
              <h3>Contact Me</h3>
              <p>Get in touch with me for opportunities, collaborations, or just to say hello!</p>
              <span className="preview-link">Contact Me →</span>
            </div>
          </Link>



        </div>
      </div>

      
    </section>
  );
};

export default Home;