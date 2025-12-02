import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Adhithe</h3>
            <p>
              Textbook-grounded learning platform for classes 5-12. 
              Learn from official NCERT and state-board textbooks.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#languages">Languages</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: contact@adhithe.com</li>
              <li>Support: support@adhithe.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#copyright">Copyright Notice</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Adhithe. All rights reserved.</p>
          <p className="footer-note">
            Content sourced from official NCERT and state-board textbooks. 
            Adhithe is not affiliated with NCERT or any state education board.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




