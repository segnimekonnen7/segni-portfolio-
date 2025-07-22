import React from 'react';
import { FaGithub, FaPython } from 'react-icons/fa';
import { SiFlask, SiSpacy, SiStreamlit } from 'react-icons/si';

const techBadges = {
  Python: <FaPython title="Python" />,
  Flask: <SiFlask title="Flask" />,
  spaCy: <SiSpacy title="spaCy" />,
  Streamlit: <SiStreamlit title="Streamlit" />,
  // For 'OpenAI API', 'BeautifulSoup', 'Prompt Engineering', 'GitHub', just use the text label
};

const projects = [
  {
    title: 'AI Internship Finder Bot',
    description: 'Scrapes job platforms, uses NLP to match internships to resumes, and sends real-time alerts.',
    tech: ['Python', 'BeautifulSoup', 'spaCy', 'OpenAI API', 'Flask', 'GitHub'],
    github: 'ai-internship-finder',
  },
  {
    title: 'AI Interview Prep Assistant',
    description: 'Mock interview platform that generates questions using OpenAI’s GPT API, simulates an interviewer, and provides real-time feedback.',
    tech: ['Python', 'OpenAI API', 'Streamlit', 'Prompt Engineering', 'GitHub'],
    github: 'ai-interview-prep',
  },
];

const ProjectCard = ({ title, description, tech, github, githubUrl }) => (
  <div className="project-card">
    <div className="project-card-title">{title}</div>
    <div className="project-card-desc">{description}</div>
    <div className="project-card-tech">
      {tech.map((t) => (
        <span className="tech-badge" key={t}>{techBadges[t] || <span className="tech-label">{t}</span>}<span className="tech-label">{t}</span></span>
      ))}
    </div>
    <a href={`${githubUrl}/${github}`} target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub /> GitHub
    </a>
  </div>
);

const Projects = ({ githubUrl }) => (
  <div className="projects-grid">
    <h2>Projects</h2>
    <div className="projects-flex">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} githubUrl={githubUrl} />
      ))}
    </div>
  </div>
);

export default Projects; 