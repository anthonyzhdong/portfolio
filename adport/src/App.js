import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more routes for other sections as you develop them */}
          <Route path="/cv" element={<ComingSoon title="CV" />} />
          <Route path="/work-experience" element={<ComingSoon title="Work Experience" />} />
          <Route path="/education" element={<ComingSoon title="Education" />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

// Simple Home component
const Home = () => {
  return (
    <div className="content-section">
      <h2>Welcome to My Portfolio</h2>
      <p>Use the navigation menu to explore my projects, CV, work experience, and education.</p>
    </div>
  );
};

// Placeholder for sections that aren't implemented yet
const ComingSoon = ({ title }) => {
  return (
    <div className="content-section">
      <h2>{title}</h2>
      <p>This section is coming soon. Please check back later!</p>
    </div>
  );
};

export default App;