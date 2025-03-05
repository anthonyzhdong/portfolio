import React from 'react';
import GitHubRepoCard from './components/GitHubRepoCard';
import Navbar from './components/NavBar';
import './App.css';

function App() {

  const repositories = [
    {
      repoName: "StudyPlanner",
      description: "A C++ command-line calendar system for students to manage academic schedules, events, and study sessions.",
      repoURL: "https://github.com/anthonyzhdong/StudyPlanner",
      languages: [
        { name: "C++", color: "#f34b7d" }
      ]
    },
    {
      repoName: "Flat-Finance-TrackerAWS",
      description: "A full-stack web application for managing shared living expenses which can be deployed using virtualisation",
      repoURL: "https://github.com/anthonyzhdong/Flat-Finance-TrackerAWS",
      languages: [
        { name: "JavaScript", color: "#f1e05a" },
        { name: "EJS", color: "#A52A2A" },
        { name: "CSS", color: "#563d7c" }
      ]
    },
    {
      repoName: "nzbirds",
      description: "A full-stack web application to display native New Zealand birds using React.js",
      repoURL: "https://github.com/anthonyzhdong/nzbirds",
      languages: [
        { name: "JavaScript", color: "#f1e05a" },
        { name: "EJS", color: "#A52A2A" },
        { name: "CSS", color: "#563d7c" },
        { name: "HTML", color: "#e34c26" }
      ]
    },
    {
      repoName: "ANDIE",
      description: "A Non Destructive Image Editor (ANDIE)",
      repoURL: "https://github.com/anthonyzhdong/andie",
      languages: [
        { name: "Java", color: "#b07219" },
      ]
    }

  ];
  return (
    <div className="App">

    <Navbar />
      <main className="repo-container">
        {repositories.map((repo, index) => (
          <GitHubRepoCard
            key={index}
            repoName={repo.repoName}
            description={repo.description}
            repoURL={repo.repoURL}
            languages={repo.languages}
          />
        ))}
      </main>

    </div>
    
  );
}

export default App;
