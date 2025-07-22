import React from 'react';
import './App.css';
import Resume from './Resume';
import Projects from './Projects';
import { FaEnvelope, FaLinkedin, FaGithub, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiDocker, SiJupyter, SiFlask, SiStreamlit } from 'react-icons/si';

const LINKEDIN_URL = 'https://www.linkedin.com/in/your-linkedin'; // TODO: Replace with your real LinkedIn
const GITHUB_URL = 'https://github.com/your-github'; // TODO: Replace with your real GitHub

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
        <h1 className="hero-title">Aspiring Machine Learning Engineer</h1>
        <p className="hero-tagline">Passionate about AI-driven solutions | Backend Dev | Building tools that solve real problems</p>
      </section>
      <hr className="section-divider" />
      <section id="about" className="section">
        <h2>About</h2>
        <p>I'm a junior Computer Information Technology student at Minnesota State University, Mankato, with a focus on backend development and applied machine learning. I'm currently completing the Andrew Ng Machine Learning Specialization and building AI-powered tools such as an internship finder and interview assistant. I’m seeking a machine learning internship where I can apply my technical skills, creativity, and passion for real-world problem-solving.</p>
        <div className="learning-now">
          <span role="img" aria-label="books">📚</span> Currently diving deeper into PyTorch and deployment with Docker.
        </div>
      </section>
      <hr className="section-divider" />
      <section id="techstack" className="section tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <div className="tech-icon-label"><FaPython title="Python" /><span>Python</span></div>
          <div className="tech-icon-label"><SiTensorflow title="TensorFlow" /><span>TensorFlow</span></div>
          <div className="tech-icon-label"><SiPytorch title="PyTorch" /><span>PyTorch</span></div>
          <div className="tech-icon-label"><FaGitAlt title="Git" /><span>Git</span></div>
          <div className="tech-icon-label"><SiDocker title="Docker" /><span>Docker</span></div>
          <div className="tech-icon-label"><SiJupyter title="Jupyter" /><span>Jupyter</span></div>
          <div className="tech-icon-label"><SiFlask title="Flask" /><span>Flask</span></div>
          <div className="tech-icon-label"><SiStreamlit title="Streamlit" /><span>Streamlit</span></div>
        </div>
      </section>
      <hr className="section-divider" />
      <section id="resume" className="section">
        <Resume />
        <a href="/resume.pdf" download className="resume-button">Download Resume</a>
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
        <p>Email: segnimekonnen7@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
