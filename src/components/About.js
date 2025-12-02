import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Adhithe</h2>
      <p className="section-subtitle">
        A textbook-grounded learning platform designed for Indian students
      </p>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            Adhithe is a textbook-grounded learning platform designed for Indian students from classes 5 to 12. It uses <strong>only official NCERT and state-board textbooks</strong> as its reference sources, ensuring accuracy, reliability, and alignment with the school curriculum.
          </p>
          <p className="about-description">
            Students can search for any concept, and the system retrieves the exact textbook content and converts it into clear articles, short audio lessons, concise videos, interactive sandboxes, or runnable code demonstrations. Everything is available in both English and major Indian languages.
          </p>
          <p className="about-description">
            By staying fully rooted in official educational material, Adhithe provides a trustworthy way to learn, revise, and understand subjects without relying on uncertain online information.
          </p>
        </div>
        
        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">📖</div>
            <h3>Official Sources Only</h3>
            <p>NCERT and state-board textbooks as the sole reference</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <h3>Curriculum Aligned</h3>
            <p>Perfectly matches your school syllabus</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎓</div>
            <h3>Classes 5-12</h3>
            <p>Comprehensive coverage for all grade levels</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>100% Reliable</h3>
            <p>No external or unreliable content sources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

