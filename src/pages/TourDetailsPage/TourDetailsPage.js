import React from 'react';
import './TourDetailsPage.css';
import Navbar from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer.js';
import TourDetails from '../../components/TourDetails/TourDetails';


function TourDetailsPage() {
  return (

    <div className='tour-details-container'>
      <Navbar/>
      <TourDetails/>
      <Footer/>
    </div>
  )
}

export default TourDetailsPage