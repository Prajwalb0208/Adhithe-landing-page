import React from 'react';
import './SafetyTrust.css';

const SafetyTrust = () => {
  const trustPoints = [
    {
      icon: '📖',
      title: 'Textbook-Sourced Only',
      description: 'Every piece of content comes directly from official NCERT and state-board textbooks. No external or unreliable sources.'
    },
    {
      icon: '✅',
      title: 'Verified Accuracy',
      description: 'All content is verified against official educational standards to ensure 100% accuracy and reliability.'
    },
    {
      icon: '🎓',
      title: 'Curriculum Compliant',
      description: 'Perfectly aligned with your school curriculum, so you learn exactly what you need for exams.'
    },
    {
      icon: '🔒',
      title: 'Safe Learning Environment',
      description: 'No ads in learning content, no external links, and no unreliable information sources.'
    }
  ];

  return (
    <section className="safety-trust">
      <h2 className="section-title">Safety & Trust</h2>
      <p className="section-subtitle">
        Your learning is our priority. We ensure accuracy, safety, and reliability in everything we provide.
      </p>

      <div className="trust-grid">
        {trustPoints.map((point, index) => (
          <div key={index} className="trust-card">
            <div className="trust-icon">{point.icon}</div>
            <h3 className="trust-title">{point.title}</h3>
            <p className="trust-description">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="trust-guarantee">
        <div className="guarantee-content">
          <h3>Our Commitment</h3>
          <p>
            Adhithe is committed to providing a safe, accurate, and trustworthy learning experience. 
            We use only official educational materials as our source, ensuring that students receive 
            reliable information that aligns with their curriculum. No external content, no unreliable 
            sources, just verified textbook knowledge made accessible in multiple formats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetyTrust;




