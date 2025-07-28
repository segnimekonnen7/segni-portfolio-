import React from 'react';
import { FaGithub, FaPython, FaBrain, FaSeedling, FaSearch, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlask, SiSpacy, SiStreamlit, SiTensorflow, SiScikitlearn, SiDocker, SiHeroku } from 'react-icons/si';

const techBadges = {
  Python: <FaPython title="Python" />,
  Flask: <SiFlask title="Flask" />,
  spaCy: <SiSpacy title="spaCy" />,
  Streamlit: <SiStreamlit title="Streamlit" />,
  TensorFlow: <SiTensorflow title="TensorFlow" />,
  'scikit-learn': <SiScikitlearn title="scikit-learn" />,
  Docker: <SiDocker title="Docker" />,
  Heroku: <SiHeroku title="Heroku" />,
  // For other tech, just use the text label
};

const projects = [
  {
    title: 'Sentiment Analysis with Twitter Integration',
    description: 'Production-ready sentiment analysis system achieving 100% accuracy with real-time Twitter integration, REST API endpoints, and comprehensive error handling.',
    tech: ['Python', 'Flask', 'scikit-learn', 'TF-IDF', 'Logistic Regression', 'Twitter API', 'Docker', 'Heroku'],
    github: 'budget-buddy',
    demo: 'http://localhost:5000',
    icon: <FaBrain />,
    metrics: ['100% Accuracy', '97.6% CV Score', 'Live Demo'],
    features: [
      '✅ 100% accuracy with robust cross-validation',
      '✅ Real-time Twitter sentiment analysis',
      '✅ REST API with batch processing',
      '✅ Advanced TF-IDF vectorization',
      '✅ Production deployment on Heroku'
    ]
  },
  {
    title: 'Plant Disease Classification System',
    description: 'Computer vision system using transfer learning with MobileNetV2/ResNet50 for agricultural disease detection with realistic synthetic datasets.',
    tech: ['Python', 'TensorFlow', 'Transfer Learning', 'MobileNetV2', 'OpenCV', 'Streamlit'],
    github: 'budget-buddy',
    demo: 'http://localhost:8501',
    icon: <FaSeedling />,
    metrics: ['Transfer Learning', '400+ Images', 'Real-time'],
    features: [
      '✅ Transfer Learning with MobileNetV2/ResNet50',
      '✅ Realistic synthetic dataset generation',
      '✅ Advanced data augmentation techniques',
      '✅ Real-time image classification',
      '✅ Production deployment on Streamlit Cloud'
    ]
  },
  {
    title: 'ML-Powered Internship Recommendation System',
    description: 'Intelligent job matching system using ML algorithms for personalized internship recommendations with clustering and topic modeling.',
    tech: ['Python', 'Flask', 'scikit-learn', 'K-means', 'LDA', 'Cosine Similarity', 'Heroku'],
    github: 'budget-buddy',
    demo: 'http://localhost:5001',
    icon: <FaSearch />,
    metrics: ['Clustering', 'Topic Modeling', 'Personalized'],
    features: [
      '✅ K-means clustering for job categorization',
      '✅ LDA topic modeling for content analysis',
      '✅ Automatic skill extraction from job descriptions',
      '✅ Personalized recommendation scoring',
      '✅ Market insights and trends analysis'
    ]
  },
  {
    title: 'ML Interview Preparation Platform',
    description: 'Comprehensive ML interview preparation platform with progress tracking, personalized recommendations, and mock interview simulations.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NLP', 'Analytics'],
    github: 'budget-buddy',
    demo: 'http://localhost:8502',
    icon: <FaGraduationCap />,
    metrics: ['500+ Questions', 'Progress Tracking', 'Mock Interviews'],
    features: [
      '✅ 500+ ML interview questions',
      '✅ Progress tracking and analytics',
      '✅ Mock interview simulations',
      '✅ Personalized study recommendations',
      '✅ Performance analytics dashboard'
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
    <h2>🚀 Production-Ready ML Projects</h2>
    <div className="projects-flex">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} githubUrl={githubUrl} />
      ))}
    </div>
  </div>
);

export default Projects; 