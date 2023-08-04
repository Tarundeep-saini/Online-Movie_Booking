import React from 'react';
import './NavBarCss.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          MovieBooking
        </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#movies" className="navbar-link">
            Movies
          </a>
        </li>
        <li className="navbar-item">
          <a href="/cinemas" className="navbar-link">
            Cinemas
          </a>
        </li>
        <li className="navbar-item">
          <a href="/bookings" className="navbar-link">
            Bookings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
