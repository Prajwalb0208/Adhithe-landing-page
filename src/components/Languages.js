import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    { name: 'English', code: 'en', flag: '🇬🇧' },
    { name: 'Hindi', code: 'hi', flag: '🇮🇳' },
    { name: 'Bengali', code: 'bn', flag: '🇧🇩' },
    { name: 'Telugu', code: 'te', flag: '🇮🇳' },
    { name: 'Marathi', code: 'mr', flag: '🇮🇳' },
    { name: 'Tamil', code: 'ta', flag: '🇮🇳' },
    { name: 'Gujarati', code: 'gu', flag: '🇮🇳' },
    { name: 'Kannada', code: 'kn', flag: '🇮🇳' },
    { name: 'Malayalam', code: 'ml', flag: '🇮🇳' },
    { name: 'Punjabi', code: 'pa', flag: '🇮🇳' },
    { name: 'Odia', code: 'or', flag: '🇮🇳' },
    { name: 'Assamese', code: 'as', flag: '🇮🇳' }
  ];

  return (
    <section className="languages">
      <h2 className="section-title">Available Languages</h2>
      <p className="section-subtitle">
        Learn in your preferred language. All content available in English and major Indian languages.
      </p>

      <div className="languages-grid">
        {languages.map((lang) => (
          <div key={lang.code} className="language-card">
            <div className="language-flag">{lang.flag}</div>
            <h3 className="language-name">{lang.name}</h3>
          </div>
        ))}
      </div>

      <div className="languages-note">
        <p>
          <strong>Note:</strong> All content is automatically translated and available in these languages. 
          The original textbook content is preserved while making it accessible in your preferred language.
        </p>
      </div>
    </section>
  );
};

export default Languages;

