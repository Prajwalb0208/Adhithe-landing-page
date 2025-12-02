import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Adhithe
          </h1>
          <p className="hero-description">
            Textbook-grounded learning platform for classes 5–12. Learn from official NCERT and state-board textbooks, converted into clear articles, audio, videos, and interactive content.
          </p>
          <div className="hero-cta">
            <a href="#about" className="btn btn-primary">
              Learn More
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon">📚</div>
            <h3>Official Textbooks</h3>
            <p>NCERT & State Board</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🎯</div>
            <h3>Multiple Formats</h3>
            <p>Articles, Audio, Video</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🌐</div>
            <h3>All Languages</h3>
            <p>English + Indian Languages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




