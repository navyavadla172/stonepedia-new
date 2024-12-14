import React from 'react';
import homeIcon from '../assets/images/home-icon.jpg';
import userIcon from '../assets/images/user-icon.jpg';
import contactIcon from '../assets/images/contact-icon.jpg';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><img src={homeIcon} alt="Home" className="nav-icon" /></li>
      <li><img src={userIcon} alt="User" className="nav-icon" /></li>
      <li><img src={contactIcon} alt="Contact" className="nav-icon" /></li>
    </ul>
  </nav>
);

export default Navbar;
