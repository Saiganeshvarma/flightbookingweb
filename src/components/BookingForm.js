import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: '',
    classType: ''
  });
  const [errors, setErrors] = useState({});

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
    if (!formData.from) formErrors.from = "Please enter departure location.";
    if (!formData.to) formErrors.to = "Please enter destination.";
    if (!formData.departureDate) formErrors.departureDate = "Please select a departure date.";
    if (!formData.passengers) formErrors.passengers = "Please enter number of passengers.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/results', { state: formData }); // Navigate only if the form is valid
    }
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>From:</label>
            <input
              type="text"
              name="from"
              placeholder="Hyderabad HYD"
              value={formData.from}
              onChange={handleChange}
            />
            {errors.from && <small className="error">{errors.from}</small>}
          </div>
          <div className="form-group">
            <label>To:</label>
            <input
              type="text"
              name="to"
              placeholder="Stockholm STO"
              value={formData.to}
              onChange={handleChange}
            />
            {errors.to && <small className="error">{errors.to}</small>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Departure:</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
            {errors.departureDate && <small className="error">{errors.departureDate}</small>}
          </div>
          <div className="form-group">
            <label>Return:</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Passengers / Class:</label>
            <input
              type="text"
              name="passengers"
              placeholder="1 Passenger Economy"
              value={formData.passengers}
              onChange={handleChange}
            />
            {errors.passengers && <small className="error">{errors.passengers}</small>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="search-flights-btn">Search Flights</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
