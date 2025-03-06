import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import CV from './components/CV';
import Home from './components/Home';
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
          <Route path="/cv" element={<CV/>} />
          <Route path="/work-experience" element={<ComingSoon title="Work Experience" />} />
          <Route path="/education" element={<ComingSoon title="Education" />} />
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