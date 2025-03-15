import React from 'react';
import GitHubRepoCard from './GitHubRepoCard';
import './Projects.css';

const Projects = () => {
  const repositories = [
    {
      repoName: "StudyPlanner",
      description: "A C++ command-line calendar system for students to manage academic schedules, events, and study sessions. Developed using agile practices and test-driven development in an environment of 4 developers.",
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
        { name: "CSS", color: "#563d7c" },
        { name: "SQL", color: "#dad8d8" }
      ]
    },
    {
      repoName: "Gym App",
      description: "Developing a full-stack gym app using React & Django",
      repoURL: "https://github.com/anthonyzhdong/gymapp",
      languages: [
        { name: "Python", color: "#4B8BBF" },
        { name: "JavaScript", color: "#f1e05a" },
        { name: "HTML", color: "#e34c26" },
        { name: "CSS", color: "#563d7c" },
        { name: "SQL", color: "#dad8d8" }
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
    },
    {
      repoName: "Blackjack",
      description: "Blackjack using React and JavaScript",
      repoURL: "https://github.com/anthonyzhdong/blackjack",
      languages: [
        { name: "JavaScript", color: "#f1e05a" },
        { name: "HTML", color: "#e34c26" },
        { name: "CSS", color: "#563d7c" }
      ]
    }

    
  ];

  return (
    <section id="projects" className="content-section projects-container">
      <div className="project-header">
        <h2 className="project-title">My Projects</h2>
      </div>
      <div className="projects-description">
        <p>
          Here are some of the projects I've worked on. Each project showcases different skills and technologies I've used in my development journey.
          Feel free to explore the repositories to see the code and learn more about each project.
        </p>
      </div>
      <div className="projects-grid">
        {repositories.map((repo, index) => (
          <GitHubRepoCard
            key={index}
            repoName={repo.repoName}
            description={repo.description}
            repoURL={repo.repoURL}
            languages={repo.languages}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;