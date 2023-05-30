import React from 'react';
import "./TourHero.css";
import Video from "../../images/hero-video.mp4"
// import image from "../../images/tours.png"

function TourHero() {
  return (
    <div className='tour-hero-container'>
        <video src={Video} alt="" controls/>
        {/* <img src={image} alt=''/> */}
        <h1>Join Our Tours</h1>
    </div>
  )
}

export default TourHero