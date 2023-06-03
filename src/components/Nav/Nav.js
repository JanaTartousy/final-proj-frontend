import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../images/dalili.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="logoparent">
          <img className="logo-nav" src={Logo} alt="Logo" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="a" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="a" to="/tours" onClick={closeMenu}>
              Tours
            </Link>
          </li>
          <li>
            <a href="/contact" className="a" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            <Link className="a" to="/profile" onClick={closeMenu}>
              Profile
            </Link>
          </li>

          <div className="navbar-auth-buttons">
            <Link to="/login" className="navbar-auth-button-login">
              Login
            </Link>
            <Link to="/register" className="navbar-auth-button-register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
