import React from 'react';

const Resume = () => (
  <div className="resume">
    <h2>Resume</h2>
    <h3>Education</h3>
    <ul>
      <li>
        <strong>B.S. in Computer Information Technology, Minor in Mathematics</strong><br />
        Minnesota State University, Mankato<br />
        Expected Graduation: 2026<br />
        <strong>Dean's List</strong><br />
        <em>Relevant Coursework: Machine Learning, Data Structures, Algorithms, Calculus, Linear Algebra, Probability, Statistics</em>
      </li>
      <li>
        <strong>Andrew Ng's Machine Learning Specialization</strong><br />
        (In Progress)
      </li>
      <li>
        <strong>Machine Learning</strong> (Harvard, no date provided)
      </li>
    </ul>
    <h3>Technical Skills & Accomplishments</h3>
    <ul>
      <li><strong>Machine Learning & AI:</strong> Logistic Regression, Random Forest, K-means Clustering, Latent Dirichlet Allocation, Transfer Learning, Convolutional Neural Networks, TF-IDF Vectorization, Sentiment Analysis, Topic Modeling</li>
      <li><strong>Deep Learning:</strong> TensorFlow, Keras, PyTorch, MobileNetV2, ResNet50, EfficientNet, Data Augmentation, Model Optimization</li>
      <li><strong>Programming & Tools:</strong> Python, NumPy, pandas, scikit-learn, SQL, Git, Jupyter, Flask, Streamlit, Docker, OpenCV, Plotly</li>
      <li><strong>Deployment & DevOps:</strong> Heroku, Streamlit Cloud, REST APIs, Production Deployment, Error Handling, Monitoring</li>
      <li><strong>Data Science:</strong> Data Preprocessing, Feature Engineering, Model Evaluation, Cross-validation, Statistical Analysis</li>
      <li><strong>Achievements:</strong> 100% accuracy in sentiment analysis, 4 production-ready ML applications, Real-time API integration, Advanced ML algorithms implementation</li>
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
    <h3>Leadership & Extracurricular Activities</h3>
    <ul>
      <li>
        <strong>Boy Scout Leader | Boy Scouts of Ethiopia</strong><br />
        2015–2018<br />
        <ul>
          <li>Selected to represent Ethiopia at the 2017 World Scout Jamboree, collaborating with scouts from 100+ countries and developing advanced cross-cultural communication skills.</li>
          <li>Led and mentored teams of scouts during national events and community service projects, fostering teamwork, accountability, and a results-driven mindset.</li>
          <li>Organized and executed team-building exercises and outdoor activities, strengthening group collaboration and trust.</li>
          <li>Demonstrated resilience and adaptability by managing diverse groups in dynamic environments, from large-scale camps to local community initiatives.</li>
        </ul>
      </li>
    </ul>
    <h3>Machine Learning Projects</h3>
    <ul>
      <li>
        <strong>Sentiment Analysis with Twitter Integration</strong><br />
        Production-ready sentiment analysis system achieving 100% accuracy with real-time Twitter integration, REST API endpoints, and comprehensive error handling.<br />
        <em>Tech Stack:</em> Python, Flask, scikit-learn, TF-IDF, Logistic Regression, Twitter API, Docker, Heroku<br />
        <em>Key Achievements:</em> 100% accuracy on test data, 97.6% cross-validation score, Real-time API integration, Production deployment<br />
        <ul>
          <li>Implemented advanced text preprocessing with URL removal, user mention handling, and hashtag processing</li>
          <li>Built REST API with batch processing capabilities and comprehensive error handling</li>
          <li>Deployed on Heroku with Docker containerization for production scalability</li>
          <li>Integrated Twitter API for real-time social media sentiment analysis</li>
        </ul>
      </li>
      <li>
        <strong>Plant Disease Classification System</strong><br />
        Computer vision system using transfer learning with MobileNetV2/ResNet50 for agricultural disease detection with realistic synthetic datasets.<br />
        <em>Tech Stack:</em> Python, TensorFlow, Keras, Transfer Learning, MobileNetV2, OpenCV, Streamlit<br />
        <em>Key Achievements:</em> Transfer learning implementation, 400+ realistic synthetic images, Real-time classification, Production deployment<br />
        <ul>
          <li>Implemented transfer learning with multiple base models (MobileNetV2, ResNet50, EfficientNet)</li>
          <li>Created realistic synthetic dataset generation for plant disease images</li>
          <li>Applied advanced data augmentation techniques for model robustness</li>
          <li>Deployed on Streamlit Cloud with real-time image classification capabilities</li>
        </ul>
      </li>
      <li>
        <strong>ML-Powered Internship Recommendation System</strong><br />
        Intelligent job matching system using ML algorithms for personalized internship recommendations with clustering and topic modeling.<br />
        <em>Tech Stack:</em> Python, Flask, scikit-learn, K-means, LDA, Cosine Similarity, Heroku<br />
        <em>Key Achievements:</em> Clustering algorithms, Topic modeling, Skill extraction, Personalized recommendations<br />
        <ul>
          <li>Implemented K-means clustering for job categorization and Latent Dirichlet Allocation for topic modeling</li>
          <li>Developed automatic skill extraction from job descriptions using NLP techniques</li>
          <li>Built personalized recommendation scoring with weighted algorithms</li>
          <li>Created comprehensive job market insights and trends analysis</li>
        </ul>
      </li>
      <li>
        <strong>ML Interview Preparation Platform</strong><br />
        Comprehensive ML interview preparation platform with progress tracking, personalized recommendations, and mock interview simulations.<br />
        <em>Tech Stack:</em> Python, Streamlit, Pandas, Plotly, NLP, Analytics<br />
        <em>Key Achievements:</em> 500+ questions, Progress tracking, Mock interviews, Performance analytics<br />
        <ul>
          <li>Developed comprehensive question bank with 500+ ML interview questions</li>
          <li>Implemented progress tracking and analytics dashboard with Plotly visualizations</li>
          <li>Created mock interview simulations with performance evaluation</li>
          <li>Built personalized study recommendations based on user performance</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Resume; 