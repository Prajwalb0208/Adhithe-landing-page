import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  const features = [
    {
      icon: '📚',
      title: 'Textbook-Grounded',
      description: 'All content sourced exclusively from official NCERT and state-board textbooks'
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find any topic instantly with our intelligent search system'
    },
    {
      icon: '📄',
      title: 'Multiple Formats',
      description: 'Articles, audio lessons, videos, interactive sandboxes, and code examples'
    },
    {
      icon: '🌐',
      title: 'Multi-Language',
      description: 'Available in English and all major Indian languages'
    },
    {
      icon: '🎯',
      title: 'Curriculum Aligned',
      description: 'Perfectly matches your school syllabus for classes 5-12'
    },
    {
      icon: '⚡',
      title: 'Fast & Reliable',
      description: 'Quick access to accurate, verified educational content'
    },
    {
      icon: '🔒',
      title: 'Safe & Trusted',
      description: 'No external unreliable sources, only official textbooks'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works seamlessly on desktop, tablet, and mobile devices'
    }
  ];

  return (
    <section className="key-features">
      <h2 className="section-title">Key Features</h2>
      <p className="section-subtitle">
        Everything you need for effective learning
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-card-icon">{feature.icon}</div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;

