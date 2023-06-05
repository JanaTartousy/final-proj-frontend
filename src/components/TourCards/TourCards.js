import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TourCards.css";

function TourCards() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/tour`);
      setTours(response.data.docs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="tour-card-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        tours.map((tour) => (
          <div className="tour-card" key={tour._id}>
            <img
              className="tour-card-image"
              src={`https://dalili-app-backend.onrender.com/${tour.image}`}
              alt="Tour"
            />
            {console.log(tour.image)}
            <div className="tour-card-content">
              <h2 className="tour-card-title">{tour.title}</h2>
              <p className="tour-card-description">{tour.description}</p>
              <Link
                to={`/tour-details/${tour._id}`}
                className="tour-card-button"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TourCards;
