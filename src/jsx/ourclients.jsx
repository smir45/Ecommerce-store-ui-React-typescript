import React from 'react';
import '../scss/ourclients.scss';

export default function OurClients(){
    return(
        <div className="clients-main-container">
            <h1 className="title-cleints">
                Our Clients
            </h1>
            <div className="logo-section">
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-1"></div></a>
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-2"></div></a>
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-3"></div></a>
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-4"></div></a>
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-5"></div></a>
                <a className="link-pic" href="http://" target="_blank" rel="noopener noreferrer"><div className="logos-6"></div></a>
                
            </div>
        </div>
    );
}