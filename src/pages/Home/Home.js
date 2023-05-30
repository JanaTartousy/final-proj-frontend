import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import PostSection from '../../components/PostSection/PostSection';
import TourSection from '../../components/TourSection/TourSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import Navbar from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer.js';


function Home() {
  return (
    <div className='home-container'>
    <Navbar/>
    <HeroSection/>
    <PostSection/>
    <TourSection/>
    <FeedbackSection/>
    <AboutSection/>
    <Footer/>
    </div>
  )
}

export default Home