import React from 'react';

const Resume = () => (
  <div className="resume">
    <h2>Resume</h2>
    <h3>Education</h3>
    <ul>
      <li>
        <strong>B.S. in Computer Information Technology</strong><br />
        Minnesota State University, Mankato<br />
        Expected Graduation: 2026<br />
        <strong>Dean’s List</strong>
      </li>
      <li>
        <strong>Andrew Ng’s Machine Learning Specialization</strong><br />
        (In Progress)
      </li>
      <li>
        <strong>Machine Learning</strong> (Harvard, no date provided)
      </li>
    </ul>
    <h3>Skills & Accomplishments</h3>
    <ul>
      <li>Python, NumPy, pandas, scikit-learn, PyTorch, TensorFlow, Keras, SQL, Git, Jupyter, Flask, Streamlit, Docker, Google Colab, Data Analysis, Feature Engineering, Supervised/Unsupervised Learning, Model Evaluation, Linear Algebra, Probability, Statistics, Cross-validation, OOP</li>
      <li>Completed 2 major AI projects in under 4 months</li>
      <li>Led a group project to successful deployment</li>
      <li>Strong communication and teamwork skills</li>
    </ul>
    <h3>Work Experience</h3>
    <ul>
      <li>
        <strong>Open Source Contributor – Omdena</strong><br />
        Remote · Jan 2025 – Mar 2025<br />
        Contributed to a global AI-for-good project with Omdena focused on natural language processing to improve access to education in underserved communities. Collaborated with a team of data scientists and engineers to preprocess text data, tune models, and deliver insights using Python and scikit-learn. Actively participated in sprint reviews, Git-based collaboration, and team discussions.<br />
        <em>Tech Used:</em> Python, NLP, scikit-learn, Git, Jupyter, Google Colab, GitHub
      </li>
    </ul>
    <h3>Experience & Projects</h3>
    <ul>
      <li>
        <strong>AI Internship Finder Bot</strong><br />
        Scrapes job platforms, uses NLP to match internships to resumes, and sends real-time alerts.<br />
        <em>Tech Stack:</em> Python, BeautifulSoup, spaCy, OpenAI API, Flask, GitHub
      </li>
      <li>
        <strong>AI Interview Prep Assistant</strong><br />
        Mock interview platform that generates questions using OpenAI’s GPT API, simulates an interviewer, and provides real-time feedback.<br />
        <em>Tech Stack:</em> Python, OpenAI API, Streamlit, Prompt Engineering, GitHub
      </li>
    </ul>
  </div>
);

export default Resume; 