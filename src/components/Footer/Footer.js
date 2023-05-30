import React from "react";
import "./Footer.css";
import Logo from "../../images/image.png";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <Link to="/" className="logo">
          <img src={Logo} alt="Dalili-logo" />
        </Link>
      </div>

      <div className="contact-wrapper">
        <h2 className="info-title">Contact Info</h2>
        <ul>
          <li>
            <FaWhatsapp className="contact-icon" /> +961 764 852 71
          </li>
          <li>
            <MdEmail className="contact-icon" /> tartousyjana@gmail.com
          </li>
        </ul>
      </div>
      <div className="footer-pages">
        <div className="links-container">
          <h2 className="link-title">Links</h2>
          <Link to="/" className="small-link">
            Home
          </Link>
          <Link to="/tours" className="small-link">
            Tours
          </Link>
          <Link to="/contact" className="small-link">
            Contact
          </Link>
        </div>

        <div className="icons-container">
          <a
            href="https://instagram.com/jana_tartousy?igshid=MmJiY2I4NDBkZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="single-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/jana.tartousy?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="single-icon"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/jana-tartousy"
            target="_blank"
            rel="noopener noreferrer"
            className="single-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JanaTartousy"
            target="_blank"
            rel="noopener noreferrer"
            className="single-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Created by Jana Tartousy</p>
      </div>
    </div>
  );
}

export default Footer;
