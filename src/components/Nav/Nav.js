import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../images/dalili.png";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Logout } from "@mui/icons-material";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const userData = useAuthUser();
  const signOut = useSignOut();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    signOut();
    navigate("/login");
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
          {userData()?.role === "user" && (
            <li>
              <Link className="a" to="/profile" onClick={closeMenu}>
                Profile
              </Link>
            </li>
          )}
          {userData()?.username ? (
            <>
              <a className="user">{userData().username}</a>
              <Logout onClick={handleLogout} 
              sx={{
                fontSize:"25px",
                color: "var(--secondary)",
                "&:hover": {
                 color: "var(--accent)"
                },
              }}/>
            </>
          ) : (
            <div className="navbar-auth-buttons">
              <Link to="/login" className="navbar-auth-button-login">
                Login
              </Link>
              <Link to="/register" className="navbar-auth-button-register">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
