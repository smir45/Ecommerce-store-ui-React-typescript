import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="background-sec">
        <div className="text-title">
          <h1 className="title">Pitchlab</h1>
        </div>

        <div className="nvabar-components-main-container">
          <div className="navbar-mid-components"></div>
          <div className="navbar-section-bottom-container">
            <div className="nav-links-container">
              <Link className="navbarlinks" to="/">
                Home
              </Link>
              <Link className="navbarlinks" to="/service">
                Service
              </Link>
              <Link className="navbarlinks" to="/career">
                Career
              </Link>
              <Link className="navbarlinks" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
