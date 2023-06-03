import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

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

  if (!tour) {
    return <p className="loading-message">Loading tour details...</p>;
  }

  return (
    <div className="tour-details-wrapper">
        <h2>Tour Details</h2>
      <div className="tour-details">
        <img className="detailed-img" src={tour.image} alt="Tour" />
      <div className="tour-info">
        <p><span>Title:</span> {tour.title}</p>
        <p><span>Location:</span> {tour.location}</p>
        <p><span>Price:</span> {tour.price}$</p>
        <p><span>Description:</span> {tour.description}</p>
        <p><span>Date:</span> {tour.date}</p>
        <p><span>Departure Hour:</span> {tour.departure_hour}</p>
        <p><span>Return Hour:</span> {tour.return_hour}</p>
        <p><span>Instruction:</span> {tour.instruction}</p>
      </div>
      </div>
    </div>
  );
}

export default TourDetails;
