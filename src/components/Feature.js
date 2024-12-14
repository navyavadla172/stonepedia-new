import React from 'react';
import './Feature.scss'; // Assuming you already have the correct styles in your SCSS file.

const Feature = () => {
  return (
    <section className="features">
      <div className="feature-container">
        <div className="feature-item">
          <h3 className="feature-heading">Feature 1: Customizable Designs</h3>
          <p className="feature-description">
            Easily customize the design of your pages with our intuitive tools and templates.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-heading">Feature 2: Fast and Reliable</h3>
          <p className="feature-description">
            Enjoy fast load times and reliable performance even during heavy traffic.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-heading">Feature 3: User-Friendly Interface</h3>
          <p className="feature-description">
            Our platform provides an easy-to-use interface, making it perfect for both beginners and experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
