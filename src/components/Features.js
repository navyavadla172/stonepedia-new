// src/components/Features.js

import React from 'react';
import './Features.scss'; // Import SCSS file for styling

const Features = () => {
  return (
    <section className="features">
      <div className="feature-item">
        <h2>Feature 1</h2>
        <p>Description of feature 1 goes here. It could be an explanation of a key service.</p>
      </div>
      <div className="feature-item">
        <h2>Feature 2</h2>
        <p>Description of feature 2 goes here. Another unique feature of the platform.</p>
      </div>
      <div className="feature-item">
        <h2>Feature 3</h2>
        <p>Description of feature 3 goes here. How it benefits users or solves a problem.</p>
      </div>
    </section>
  );
};

export default Features;
