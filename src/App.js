import React from 'react';
import './App.css';
import Resume from './Resume';
import Projects from './Projects';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaGitAlt, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiDocker, SiJupyter, SiFlask, SiStreamlit, SiScikitlearn, SiHeroku, SiOpencv } from 'react-icons/si';

const LINKEDIN_URL = 'https://www.linkedin.com/in/segni-mekonnen-16928125b'; // Updated to real LinkedIn
const GITHUB_URL = 'https://github.com/segnimekonnen7'; // Updated to real GitHub

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('techstack')}>Tech Stack</li>
          <li onClick={() => scrollToSection('resume')}>Resume</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
      <section id="hero" className="hero-section section">
        <h1 className="hero-title">Backend Software Engineer</h1>
        <p className="hero-tagline">Python · FastAPI · PostgreSQL · Docker | Building scalable APIs and full-stack applications</p>
      </section>
      <hr className="section-divider" />
      <section id="about" className="section">
        <h2>About</h2>
        <p>Computer Science student with a Mathematics minor at Minnesota State University, Mankato. I build scalable backend systems and full-stack applications with Python, FastAPI, and React. I have open-source experience with the Django Software Foundation and have led ML research teams. I'm seeking backend engineering internships where I can apply my skills in APIs, databases, and deployment.</p>
        <div className="learning-now">
          <span role="img" aria-label="books">🚀</span> Focused on production systems, REST APIs, and ML integration.
        </div>
      </section>
      <hr className="section-divider" />
      <section id="techstack" className="section tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <div className="tech-icon-label"><FaPython title="Python" /><span>Python</span></div>
          <div className="tech-icon-label"><SiTensorflow title="TensorFlow" /><span>TensorFlow</span></div>
          <div className="tech-icon-label"><SiPytorch title="PyTorch" /><span>PyTorch</span></div>
          <div className="tech-icon-label"><SiScikitlearn title="scikit-learn" /><span>scikit-learn</span></div>
          <div className="tech-icon-label"><FaBrain title="Machine Learning" /><span>ML/AI</span></div>
          <div className="tech-icon-label"><SiFlask title="Flask" /><span>Flask</span></div>
          <div className="tech-icon-label"><SiStreamlit title="Streamlit" /><span>Streamlit</span></div>
          <div className="tech-icon-label"><SiDocker title="Docker" /><span>Docker</span></div>
          <div className="tech-icon-label"><SiHeroku title="Heroku" /><span>Heroku</span></div>
          <div className="tech-icon-label"><SiOpencv title="OpenCV" /><span>OpenCV</span></div>
          <div className="tech-icon-label"><FaGitAlt title="Git" /><span>Git</span></div>
          <div className="tech-icon-label"><SiJupyter title="Jupyter" /><span>Jupyter</span></div>
        </div>
      </section>
      <hr className="section-divider" />
      <section id="resume" className="section">
        <Resume />
      </section>
      <hr className="section-divider" />
      <section id="projects" className="section">
        <Projects githubUrl={GITHUB_URL} />
      </section>
      <hr className="section-divider" />
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-icons">
          <a href="mailto:segnimekonnen7@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon email"><FaEnvelope /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-icon linkedin"><FaLinkedin /></a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-icon github"><FaGithub /></a>
        </div>
        <p>(571) 502-1555 · segnimekonnen7@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
