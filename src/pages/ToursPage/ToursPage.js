import React from 'react';
import TourCards from "../../components/TourCards/TourCards.js";
import TourHero from '../../components/TourHero/TourHero.js';
import Navbar from '../../components/Nav/Nav.js';
import Footer from '../../components/Footer/Footer.js';


function ToursPage() {
  return (
    
     <main className="page-content">
      <Navbar/>
      <TourHero/>
      <TourCards/>
      <Footer/>
    </main>
  );
};


export default ToursPage