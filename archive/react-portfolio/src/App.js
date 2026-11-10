import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import CV from './components/CV';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
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
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;