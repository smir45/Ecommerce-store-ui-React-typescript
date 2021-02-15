import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../css/top-navbar.css';

export default function TopNavbar(){
    return(
        <div className="topbar-main-container">
            <div className="logo-section">
                <div className="logo"></div>
            </div>
            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
            </div>
        </div>
    );
}