import React from "react";
import "../scss/banner.scss";
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="banner-main-container">
      
      <div className="banner-elements">
        <h1 className="title-banner">Are You Ready To grow Online.?</h1>
        <div className="subtitle-banner-div">
          <p className="subtitle">
            Schedule a FREE consultation so we can dive deeper to understand
            your business goals and see if Pitchlab is the right partner for your
            business.
          </p>
        </div>
        <div className="button">
          <Link className="btn-banner" to="/contact">
            Leave us a Message
          </Link>
        </div>
      </div>
    </div>
  );
}
