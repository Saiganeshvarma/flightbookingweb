import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FlightResults.css';

const FlightResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {}; // Get the data passed from BookingForm

  const flights = [
    { id: 1, airline: 'Tata Airways', from: formData.from, to: formData.to, date: formData.departureDate, price: '$500' },
    { id: 2, airline: 'Kingfisher Airlines', from: formData.from, to: formData.to, date: formData.departureDate, price: '$520' },
    { id: 3, airline: 'SpiceJet', from: formData.from, to: formData.to, date: formData.departureDate, price: '$480' },
    { id: 4, airline: 'IndiGo', from: formData.from, to: formData.to, date: formData.departureDate, price: '$530' },
    { id: 5, airline: 'Air India', from: formData.from, to: formData.to, date: formData.departureDate, price: '$550' },
    { id: 6, airline: 'Go First', from: formData.from, to: formData.to, date: formData.departureDate, price: '$505' },
    { id: 7, airline: 'Vistara', from: formData.from, to: formData.to, date: formData.departureDate, price: '$540' },
    { id: 8, airline: 'AirAsia India', from: formData.from, to: formData.to, date: formData.departureDate, price: '$495' },
    { id: 9, airline: 'Qatar Airways', from: formData.from, to: formData.to, date: formData.departureDate, price: '$700' },
    { id: 10, airline: 'Emirates', from: formData.from, to: formData.to, date: formData.departureDate, price: '$750' },
  ];

  const handleBookFlight = (flight) => {
    navigate('/ticket', { state: { ...formData, ...flight } }); // Pass flight data to Ticket page
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flight-results">
      <h2>Available Flights</h2>
      <button className="back-button" onClick={handleBack}>Back</button>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <div>
              <strong>Airline:</strong> {flight.airline} 
              <strong> From:</strong> {flight.from} 
              <strong> To:</strong> {flight.to} 
              <strong> Date:</strong> {flight.date} 
              <strong> Price:</strong> {flight.price}
            </div>
            <button onClick={() => handleBookFlight(flight)}>Book Flight</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResults;
