import React from 'react';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <DetailsSection />
      <Footer />
    </div>
  );
}

export default App;

