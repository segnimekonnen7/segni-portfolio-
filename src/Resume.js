import React from 'react';

const Resume = () => (
  <div className="resume">
    <div className="resume-header">
      <h2>Resume</h2>
      <a
        href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
        download
        className="resume-button"
      >
        Download PDF
      </a>
    </div>

    <section className="resume-block">
      <h3>Experience</h3>
      <div className="experience-list">
        <div className="experience-item">
          <div className="experience-header">
            <strong>Django Software Foundation — Open Source Software Developer</strong>
            <span className="experience-meta">Remote · Jun. 2024 – Oct. 2024</span>
          </div>
          <ul>
            <li>Fixed a template parsing bug (PR #19944) in Django's core — invalid numeric literals now raise TemplateSyntaxError at parse time; validated against 1,500+ unit tests.</li>
            <li>Improved Django ORM docs (PR #36657) with a how-to for custom Func, Lookup, and Transform; cross-linked reference and how-to pages for better discoverability.</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <strong>Minnesota State University — Machine Learning Research Assistant</strong>
            <span className="experience-meta">Mankato, MN · Oct. 2025 – Present</span>
          </div>
          <ul>
            <li>Led a 4-person team to build a Python-based AutoML system for insurance prediction, reducing manual modeling time by ~45%.</li>
            <li>Engineered preprocessing and model comparison pipelines with pandas and scikit-learn; evaluated 4 ML algorithms with ~8% accuracy improvement over baseline.</li>
            <li>Containerized workflows with Docker, cutting environment setup time by ~40%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <strong>Outamation — Software Engineering Extern</strong>
            <span className="experience-meta">Remote · Dec 2025 – Jan 2026</span>
          </div>
          <ul>
            <li>Processed 500+ mortgage document blobs using Python-based OCR workflows, achieving ~92% extraction accuracy across multiple formats.</li>
            <li>Implemented parsing and validation for 20+ extracted fields (~95% accuracy), reducing backend processing errors by ~35%.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="resume-block">
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        <div className="skill-row"><strong>Languages:</strong> Python, JavaScript, SQL (PostgreSQL)</div>
        <div className="skill-row"><strong>Backend:</strong> FastAPI, REST APIs, SQLAlchemy, Docker, Redis, WebSockets</div>
        <div className="skill-row"><strong>Frontend:</strong> React</div>
        <div className="skill-row"><strong>Tools:</strong> Git, GitHub, Linux, Render</div>
        <div className="skill-row"><strong>Libraries:</strong> pandas, NumPy, scikit-learn</div>
      </div>
    </section>

    <section className="resume-block">
      <h3>Education</h3>
      <div className="education-item">
        <strong>Bachelor of Science in Computer Science, Minor in Mathematics</strong>
        <div className="education-meta">Minnesota State University, Mankato · Expected Dec. 2026</div>
        <p className="education-details">Dean's List · Dean's Scholarship Recipient</p>
        <em>Data Structures & Algorithms, Database Systems, Machine Learning, Linear Algebra, Web Development, Cloud Computing</em>
      </div>
    </section>
  </div>
);

export default Resume;
