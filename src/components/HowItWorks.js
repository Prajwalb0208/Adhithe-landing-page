import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [demoTopic, setDemoTopic] = useState('Photosynthesis');
  const [selectedFormat, setSelectedFormat] = useState('article');

  const formats = [
    { id: 'article', name: 'Article', icon: '📄' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'video', name: 'Video', icon: '🎥' },
    { id: 'sandbox', name: 'Sandbox', icon: '🔬' },
    { id: 'code', name: 'Code', icon: '💻' }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        Simple three-step process to get the content you need
      </p>

      <div className="how-it-works-steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Search a Topic</h3>
          <p>Enter any concept or topic you want to learn about</p>
          <div className="step-demo">
            <input
              type="text"
              placeholder="e.g., Photosynthesis, Quadratic Equations..."
              value={demoTopic}
              onChange={(e) => setDemoTopic(e.target.value)}
              className="demo-input"
            />
          </div>
        </div>

        <div className="step-arrow">→</div>

        <div className="step">
          <div className="step-number">2</div>
          <h3>System Fetches Textbook</h3>
          <p>Our system finds the exact content from official NCERT or state-board textbooks</p>
          <div className="step-demo">
            <div className="textbook-preview">
              <div className="textbook-icon">📚</div>
              <p>NCERT Science Class 10</p>
              <span>Chapter 6: Life Processes</span>
            </div>
          </div>
        </div>

        <div className="step-arrow">→</div>

        <div className="step">
          <div className="step-number">3</div>
          <h3>Choose Your Format</h3>
          <p>Get the content in the format that works best for you</p>
          <div className="format-selector">
            {formats.map(format => (
              <button
                key={format.id}
                className={`format-btn ${selectedFormat === format.id ? 'active' : ''}`}
                onClick={() => setSelectedFormat(format.id)}
              >
                <span className="format-icon">{format.icon}</span>
                <span>{format.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-output">
        <h3>Sample Output</h3>
        <div className="output-preview">
          {selectedFormat === 'article' && (
            <div className="article-preview">
              <h4>Photosynthesis</h4>
              <p>Photosynthesis is the process by which plants make their own food using sunlight, water, and carbon dioxide. This process occurs in the chloroplasts of plant cells...</p>
            </div>
          )}
          {selectedFormat === 'audio' && (
            <div className="audio-preview">
              <div className="audio-player">
                <div className="play-button">▶</div>
                <div className="audio-info">
                  <p>Audio Lesson: Photosynthesis</p>
                  <div className="audio-progress"></div>
                </div>
              </div>
            </div>
          )}
          {selectedFormat === 'video' && (
            <div className="video-preview">
              <div className="video-placeholder">
                <div className="play-icon">▶</div>
                <p>Video: Understanding Photosynthesis</p>
              </div>
            </div>
          )}
          {selectedFormat === 'sandbox' && (
            <div className="sandbox-preview">
              <div className="sandbox-content">
                <h4>Interactive Experiment</h4>
                <p>Explore how different factors affect photosynthesis...</p>
                <button className="btn btn-primary">Launch Sandbox</button>
              </div>
            </div>
          )}
          {selectedFormat === 'code' && (
            <div className="code-preview">
              <pre><code>{`// Photosynthesis Simulation
function photosynthesis(light, water, co2) {
  if (light > 0 && water > 0 && co2 > 0) {
    return {
      glucose: light * water * co2,
      oxygen: light * water
    };
  }
  return null;
}`}</code></pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

