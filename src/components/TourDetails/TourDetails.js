import React from "react";
import { useParams } from "react-router-dom";

function TourDetails() {
  const { tourId } = useParams();

  // Fetch the tour details using the tourId and display the information

  return (
    <div>
      <h2>Tour Details</h2>
      <p>Tour ID: {tourId}</p>
      {/* Display the remaining tour details here */}
    </div>
  );
}

export default TourDetails;
