// Home.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      let offset = window.pageYOffset;
      document.querySelector('.hero-section').style.backgroundPositionY = offset * 0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize AOS (for scroll animations)
    AOS.init();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: 'url(/src/assets/images/hero-bg.jpg)' }}>
        <h1 data-aos="fade-up">Welcome to StonePedia</h1>
        <p data-aos="fade-up" data-aos-delay="300">Your ultimate source for stone information</p>
        <button className="cta-btn" data-aos="fade-up" data-aos-delay="600">Explore Now</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature" data-aos="fade-up" data-aos-delay="500">
          <img src="/src/assets/images/feature-icon1.png" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>Description for Feature 1</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="700">
          <img src="/src/assets/images/feature-icon2.png" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>Description for Feature 2</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="900">
          <img src="/src/assets/images/feature-icon3.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description for Feature 3</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
