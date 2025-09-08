import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import homoIcon from '../../assets/home-logo.png';
import logoutIcon from '../../assets/logout.svg';
import '../../styles/Navbar.css';
import backIcon from "../../assets/back-icon.png"

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!isAuthPage ? (
        <header className="nav">
          <div className="nav__wrap">
            <Link to="/" className="brand">
              <img src={homoIcon} alt="hub" /> <span>PropBot</span>
            </Link>
            <div
              className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav className={`nav__menu ${menuOpen ? "open" : ""}`}>
              <NavLink to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/buy" className="nav__link" onClick={() => setMenuOpen(false)}>Buy</NavLink>
              <NavLink to="/rent" className="nav__link" onClick={() => setMenuOpen(false)}>Rent</NavLink>
              <NavLink to="/sell" className="nav__link" onClick={() => setMenuOpen(false)}>Sell</NavLink>
              <NavLink to="/about" className="nav__link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/contact" className="nav__link" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
              <NavLink to="/listings" className="nav__link" onClick={() => setMenuOpen(false)}>Listings</NavLink>
              <div className="auth-box">
                <div className="auth-inner-part">
                  <NavLink to="/login" className="login__link">Login</NavLink> /
                  <NavLink to="/signup" className="login__link">Register</NavLink>
                  {user && ( <span className="login__link" onClick={logout}>
                    <img src={logoutIcon} alt="logout" style={{ paddingTop: "5px" }} />
                  </span>
                   )}
                </div>
              </div>

            </nav>
          </div>
        </header>
      ) : (
        <header>
          <div className='about-navbar'>
            <nav className="nav__about">
              <Link to="/" className='back-to-home'>
                <img src={backIcon} alt="back" /> <span>Back to Homepage</span>
              </Link>
              <Link to="/" className="brand">
                <img src={homoIcon} alt="hub" /> <span> PropBot</span>
              </Link>
              <div className="about-us">
                <div className="auth-inner-part">
                  <NavLink to="/about" className="login__link">About Us</NavLink>
                  <span className="login__link" onClick={logout}>
                    <img src={logoutIcon} alt="logout" style={{ paddingTop: "5px" }} />
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )}
    </div>
  );
}
