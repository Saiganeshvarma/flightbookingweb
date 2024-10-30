import React from 'react';
import { useLocation } from 'react-router-dom';
import './Ticket.css';

const Ticket = () => {
  const location = useLocation();
  const ticketData = location.state; // Retrieve both form data and selected flight data

  return (
    <div className="ticket">
      <h2>Your Ticket</h2>
      <div><strong>Passenger(s):</strong> {ticketData.passengers}</div>
      <div><strong>From:</strong> {ticketData.from}</div>
      <div><strong>To:</strong> {ticketData.to}</div>
      <div><strong>Departure Date:</strong> {ticketData.departureDate}</div>
      <div><strong>Return Date:</strong> {ticketData.returnDate || 'N/A'}</div>
      <div><strong>Class:</strong> {ticketData.classType || 'Economy'}</div>
      <div><strong>Airline:</strong> {ticketData.airline}</div>
      <div><strong>Price:</strong> {ticketData.price}</div>
      <div><strong>Ticket ID:</strong> {`TICKET-${ticketData.id}`}</div>
    </div>
  );
};

export default Ticket;