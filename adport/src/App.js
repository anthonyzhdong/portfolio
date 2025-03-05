import React from 'react';
import GitHubRepoCard from './components/GitHubRepoCard';
import './App.css';

function App() {

  const repositories = [
    {
      repoName: "Study Planner",
      description: "A C++ command-line calendar system for students to manage academic schedules, events, and study sessions.",
      repoURL: "https://github.com/anthonyzhdong/StudyPlanner",
      languages: [
        { name: "C++", color: "#f34b7d" }
      ]
    }
  ];
  return (
    <div className="App">
      <h1> anthony portfolio </h1>
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
