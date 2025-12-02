import React from 'react';
import './Monetization.css';

const Monetization = () => {
  return (
    <section className="monetization">
      <h2 className="section-title">Monetization</h2>
      <p className="section-subtitle">
        Free access to all learning content. Ads only appear during media playback.
      </p>

      <div className="monetization-content">
        <div className="monetization-info">
          <div className="info-card">
            <h3>Free Learning</h3>
            <p>
              All educational content on Adhithe is completely free. Students can search, 
              read articles, and access all learning materials without any cost.
            </p>
          </div>

          <div className="info-card">
            <h3>Ad-Supported Media</h3>
            <p>
              To keep the platform free, we show advertisements during audio and video playback, 
              as well as in article reading. These ads are carefully curated and do not interfere 
              with the learning experience.
            </p>
          </div>
        </div>

        <div className="ad-examples">
          <h3>Ad Placement Examples</h3>
          <div className="ad-demos">
            <div className="ad-demo-card">
              <h4>Audio Player</h4>
              <div className="audio-demo">
                <div className="audio-controls">
                  <div className="play-btn">▶</div>
                  <div className="audio-info">
                    <p>Lesson: Photosynthesis</p>
                    <div className="progress-bar"></div>
                  </div>
                </div>
                <div className="ad-placeholder audio-ad">
                  <span>Advertisement</span>
                </div>
              </div>
            </div>

            <div className="ad-demo-card">
              <h4>Video Player</h4>
              <div className="video-demo">
                <div className="video-placeholder">
                  <div className="play-icon-large">▶</div>
                </div>
                <div className="ad-placeholder video-ad">
                  <span>Advertisement</span>
                </div>
              </div>
            </div>

            <div className="ad-demo-card">
              <h4>Article Reading</h4>
              <div className="article-demo">
                <div className="article-content">
                  <h5>Sample Article Title</h5>
                  <p>This is a sample paragraph from the article content...</p>
                </div>
                <div className="ad-placeholder article-ad">
                  <span>Advertisement</span>
                </div>
                <div className="article-content">
                  <p>Article continues after the advertisement...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="monetization-note">
          <p>
            <strong>Note:</strong> Ads are only shown during media consumption (audio/video) and 
            within articles. They do not appear in search results, topic listings, or interactive 
            sandboxes. Our goal is to provide free education while maintaining a clean, focused 
            learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Monetization;

