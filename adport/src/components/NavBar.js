import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Portfolio</h2>
        </div>
        
        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        
        {/* Navigation links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              href="#about-me" 
              className={activeSection === 'about-me' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('about-me')}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#cv" 
              className={activeSection === 'cv' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('cv')}
            >
              CV
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#work-experience" 
              className={activeSection === 'work-experience' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('work-experience')}
            >
              Work Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('education')}
            >
              Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;