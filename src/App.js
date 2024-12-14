import React from 'react';
import './styles/global.css'; // Import global styles
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
