import React, { useEffect } from "react";
import "./HeroSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heroimg from "../../images/saint.webp";
import Hero1img from "../../images/tyre.jpeg";
import Hero2img from "../../images/melkite.webp";
import Hero3img from "../../images/rocks.webp";

export default function Hero() {
  useEffect(() => {
    // Initialize the slider or add any necessary settings
  }, []);

  const sliderSettings = {
    dots: false, // Remove navigation dots
    arrows: false, // Hide navigation arrows
    infinite: true, // Enable infinite looping
    autoplay: true, // Autoplay the carousel
    speed:  2000, // Autoplay speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div className="carousel-container">
      <section className="hero">
        <Slider {...sliderSettings} className="hero-carousel">
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero1img})` }}
            >
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Heroimg})` }}
            >
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero2img})` }}
            >
            </div>
          </div>
          <div>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${Hero3img})` }}
            ></div>
          </div>
        </Slider>
       {/* <div className="hero-content"> */}
        <h1>Travel with the Experts Today!</h1>
       {/* </div> */}
      </section>
    </div>
  );
}

