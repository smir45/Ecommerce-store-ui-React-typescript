import React from "react";
import "../css/navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="background-sec">
          <h1 className="title">Pitchlab</h1>
          <div className="navlinks">
            <Link className="navbar-links" id="Active" to="/">Home</Link>
            <Link className="navbar-links" to="/seivices">Services</Link>
            <Link className="navbar-links" to="/careers">Careers</Link>
            <Link className="navbar-links" to="/contact">Contact</Link>
          </div>
          <div className="trial"></div>
      </div>
      
    </div>

  );
}
