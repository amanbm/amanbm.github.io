// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Sarah & Aman</h1>
      <p className="hero-subtitle">You're invited to celebrate our wedding</p>
      <div className="date-container">
        <h3>Friday, December 20, 2024</h3>
        <h3>Saturday, December 21, 2024</h3>
        <h3>Sunday, December 22, 2024</h3>
        <p>Seattle, Washington</p>
      </div>
    </div>
  );
};

export default HeroSection;

