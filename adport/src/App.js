import React from 'react';
import GitHubRepoCard from './components/GitHubRepoCard';
import './App.css';

function App() {

  const repositories = [
    {
      repoName: "react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      repoURL: "https://github.com",
      language: "JavaScript",
      languageColour: "#f1e05a"
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
            repoUrl={repo.repoURL}
            language={repo.language}
            languageColor={repo.languageColour}
          />
        ))}
      </main>
    </div>
    
  );
}

export default App;
