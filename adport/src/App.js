import React from 'react';
import GitHubRepoCard from './components/GitHubRepoCard';
import './App.css';

function App() {

  const repositories = [
    {
      repoName: "react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      repoURL: "https://github.com",
      languages: [
        { name: "JavaScript", color: "#000000" },
        { name: "HTML", color: "#2b7489" },
        { name: "CSS", color: "#563d7c" }
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
