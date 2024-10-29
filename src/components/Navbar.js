// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Airline Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Privilege Club</a></li>
      </ul>
      <div className="nav-right">
        <a href="#">Help</a>
        <a href="#">EN</a>
        <a href="#">Login | Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
