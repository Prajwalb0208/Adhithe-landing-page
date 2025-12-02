import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import Languages from './components/Languages';
import SafetyTrust from './components/SafetyTrust';
import Monetization from './components/Monetization';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <KeyFeatures />
      <Languages />
      <SafetyTrust />
      <Monetization />
      <Footer />
    </div>
  );
}

export default App;




