import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/top-navbar.css';

export default function TopNavbar(){
    return(
        <div className="topbar-main-container">
            <div className="logo"></div>
            <div className="social-icons">
                <FaFacebook className="icons-social-nav" />
                <FaInstagram className="icons-social-nav" />
                <FaTwitter className="icons-social-nav" />
            </div>
        </div>
    );
}