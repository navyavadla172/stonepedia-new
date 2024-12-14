import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Fix for React 18: Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you're not using reportWebVitals, remove or comment out this line
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();  // You can remove this if not using Web Vitals
