import React from 'react';
import { FaGithub, FaPython, FaBriefcase, FaHospital, FaSync, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDocker, SiScikitlearn } from 'react-icons/si';

const techBadges = {
  Python: <FaPython title="Python" />,
  Docker: <SiDocker title="Docker" />,
  'scikit-learn': <SiScikitlearn title="scikit-learn" />,
};

const projects = [
  {
    title: 'CareerTrack',
    description: 'Full-stack job application tracker with spaCy NLP to extract skills from resumes and job descriptions, scoring match quality. Celery + Redis workers for follow-up reminders and analytics; 5 services orchestrated with Docker Compose.',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'spaCy', 'Python'],
    github: 'habit-loop',
    demo: 'https://segnimekonnen7.github.io/segni-portfolio-/habit-loop-demo/index.html',
    icon: <FaBriefcase />,
    metrics: ['Feb 2026', 'Celery', 'pytest'],
    features: [
      '✅ spaCy NLP for skills extraction',
      '✅ Weighted match scoring (required & preferred skills)',
      '✅ Celery + Redis background workers',
      '✅ Docker Compose (5 services)',
      '✅ pytest coverage for auth and match scoring'
    ]
  },
  {
    title: 'EthioClinic',
    description: 'Healthcare queue and scheduling system with REST APIs for patient registration, appointment scheduling, and real-time clinic queue tracking. Redis-backed queue management, JWT auth, and role-based access control.',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Python'],
    github: 'habit-loop',
    demo: 'https://segnimekonnen7.github.io/segni-portfolio-/',
    icon: <FaHospital />,
    metrics: ['Aug 2025', 'REST APIs', 'RBAC'],
    features: [
      '✅ Patient registration & appointment scheduling',
      '✅ Real-time clinic queue tracking',
      '✅ Redis-backed queue management',
      '✅ JWT auth & role-based access control',
      '✅ Containerized with Docker'
    ]
  },
  {
    title: 'Habit Loop',
    description: 'Full-stack habit tracking app (FastAPI + Next.js/TypeScript) with check-in, count, and duration goal types; configurable schedules and streak grace logic. ML backend: RandomForestClassifier (~96% accuracy) for success prediction and reminder recommendations.',
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'scikit-learn', 'Docker', 'Python'],
    github: 'habit-loop',
    demo: 'https://segnimekonnen7.github.io/segni-portfolio-/habit-loop-demo/index.html',
    icon: <FaSync />,
    metrics: ['June 2025', '~96% accuracy', 'Render'],
    features: [
      '✅ Check-in, count, and duration goal types',
      '✅ Configurable schedules & streak grace logic',
      '✅ RandomForestClassifier on 6 behavioral features',
      '✅ ~30% API response time improvement',
      '✅ Deployed on Render via Docker'
    ]
  },
];

const ProjectCard = ({ title, description, tech, github, demo, githubUrl, icon, metrics, features }) => (
  <div className="project-card">
    <div className="project-card-header">
      <div className="project-icon">{icon}</div>
      <div className="project-card-title">{title}</div>
      <div className="project-metrics">
        {metrics.map((metric, index) => (
          <span className="metric-badge" key={index}>{metric}</span>
        ))}
      </div>
    </div>
    <div className="project-card-desc">{description}</div>
    <div className="project-features">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>{feature}</div>
      ))}
    </div>
    <div className="project-card-tech">
      {tech.map((t) => (
        <span className="tech-badge" key={t}>
          {techBadges[t] || <span className="tech-label">{t}</span>}
          <span className="tech-label">{t}</span>
        </span>
      ))}
    </div>
    <div className="project-links">
      <a href={`${githubUrl}/${github}`} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub /> View Code
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer" className="demo-link">
        <FaExternalLinkAlt /> Live Demo
      </a>
    </div>
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
