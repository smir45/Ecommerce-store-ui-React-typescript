import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="background-sec">
        <div className="text-title">
        </div>

        <div className="nvabar-components-main-container">
          <div className="navbar-mid-components">
            <div className="mid-1">
              <h1 className="pitchlab">Pitchlab</h1>
            <div className="caption-heading">
              <h1>Innovate better,<br/>
              <span className="heading-color">faster.</span></h1>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, officia labore qui voluptatum eos perspiciatis quam beatae ab consequuntur vero fugit dolor iure autem delectus dicta sapiente quae, quibusdam alias.</p>
              <Link className="get-started" to="/contact">Get Started</Link>
            </div>
            </div>
            <div className="mid-2"></div>
          </div>
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
