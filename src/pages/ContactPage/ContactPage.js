import React from 'react';
import ContactHero from '../../components/ContactHero/ContactHero.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import Navbar from '../../components/Nav/Nav.js';
import Footer from '../../components/Footer/Footer.js';
import './ContactPage.css';

function ContactPage() {
 

  return (
    <div className="contact-page-container">
      <Navbar/>
      <ContactHero/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default ContactPage;
