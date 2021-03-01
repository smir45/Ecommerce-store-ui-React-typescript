import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../css/top-navbar.css";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <div className="topbar-main-container">
      <Link to="/">
        <div className="logo"></div>
      </Link>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/Pitchlab-Pvt-Ltd-102623028539584/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icons-social-nav" />
        </a>
        <a
          href="https://www.instagram.com/pitchlab99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icons-social-nav" />
        </a>

        <FaTwitter className="icons-social-nav" />
      </div>
    </div>
  );
}