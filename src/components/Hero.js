import React from 'react';
import './Hero.scss'; // Import your CSS file

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Stonepedia</h1>
        <p>Explore the world of stones and minerals.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
