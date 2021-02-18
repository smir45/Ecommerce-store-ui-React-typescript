import React from 'react';
import TopNavbar from './topnavber';
import Navbar from './navbar';
import HomeService from './homeservices';
import OurClients from './ourclients';

export default function Home(){
    return(
        <div className="home-main-container">
            <TopNavbar/>
            <Navbar />
            <HomeService />
            <OurClients/>
        </div>
    );
}