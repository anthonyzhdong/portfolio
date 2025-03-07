import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <h2>Portfolio</h2>
        </Link>
        
        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        
        {/* Navigation links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>

        <li className="nav-item">
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/about" 
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/cv" 
              className={isActive('/cv') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              CV
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/work-experience" 
              className={isActive('/work-experience') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Work Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/education" 
              className={isActive('/education') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact Me!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;