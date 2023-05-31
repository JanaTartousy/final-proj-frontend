import React from 'react';
import "./TourHero.css";
// import Video from "../../images/hero-video.mp4"
import image from "../../images/tours.png"

function TourHero() {
  return (
    <div className='tour-hero-container'>
        <img src={image} alt="" />
        {/* <img src={image} alt=''/> */}
        <h1>Join Our Tours</h1>
    </div>
  )
}

export default TourHero