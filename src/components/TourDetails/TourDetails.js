import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/tour/${id}`
        );
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour details:", error);
      }
    };

    fetchTourDetails();
  }, [id]);

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API call here
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
    });
  };

  if (!tour) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="tour-details-wrapper">
      <h2>Tour Details</h2>
      <div className="tour-details">
        <img
          className="detailed-img"
          src={`https://dalili-app-backend.onrender.com${tour.image}`}
          alt="Tour"
        />
        <div className="tour-info">
          <p>
            <strong>{tour.title}</strong>
          </p>
          <p>
            <span>Location:</span> {tour.location}
          </p>
          <p>
            <span>Price:</span> {tour.price}$
          </p>
          <p>
            <span>Description:</span> {tour.description}
          </p>
          <p>
            <span>Date:</span> {tour.date}
          </p>
          <p>
            <span>Departure Hour:</span> {tour.departure_hour}
          </p>
          <p>
            <span>Return Hour:</span> {tour.return_hour}
          </p>
          <p>
            <span>Instruction:</span> {tour.instruction}
          </p>
          <button className="book-button" onClick={handleFormToggle}>
            Book Tour
          </button>
          {isFormOpen && (
            <div className="popup-form">
              <div className="popup-form-content">
                <h3>Booking Form</h3>
                <form onSubmit={handleSubmit}>
                  <label>
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Phone Number:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Location:
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
                <button className="popup-close" onClick={handleFormToggle}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
