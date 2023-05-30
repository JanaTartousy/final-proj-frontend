import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/dalili.png';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Dalili Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <div className="navbar-auth-buttons">
        <Link to="/login" className="navbar-auth-button-login">Login</Link>
        <Link to="/register" className="navbar-auth-button-register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
