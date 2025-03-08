import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import CV from './components/CV';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<ComingSoon title="Education" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}



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