import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar-secondary.scss';

export default function SecondNavbar(){
    return(
        <div className="secondnvabar-main-container">
            <div className="logo-container">
                <a href="https://pitchlab.net/"><div className="logo-secondary"></div></a>
            </div>
            <div className="nav-links-secondary">
                <div className="navbar-links-inner">

                <Link className="second-navlinks" to="/">Home</Link>
                <Link className="second-navlinks" to="/service">Service</Link>
                <Link className="second-navlinks" to="/career">career</Link>
                <Link className="second-navlinks" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}