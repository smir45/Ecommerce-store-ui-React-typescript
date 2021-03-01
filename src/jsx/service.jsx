import React from 'react';
import SecondNavbar from './navbar-secondary';
import '../css/service.css';

export default function Service(){
    return(
        <div className="service-main-container">
            <SecondNavbar/>
            <div className="background-section">
                <div className="pitchlab-watermark"></div>
            </div>
        </div>
    );
}