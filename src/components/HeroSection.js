// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import background from '../assets/background.jpg';
import BookingForm from './BookingForm';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1>Light up your Diwali with exclusive savings</h1>
          <p>Fly with us and save up to 25%</p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default HeroSection;
