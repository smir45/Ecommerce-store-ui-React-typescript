import React from 'react';
import TopNavbar from './topnavber';
import Navbar from './navbar';
import HomeService from './homeservices';
import OurClients from './ourclients';
import Banner from './banner';
import SecFooter from './secondfooter';

export default function Home(){
    return(
        <div className="home-main-container">
            <TopNavbar/>
            <Navbar />
            <HomeService />
            <OurClients/>
            <Banner/>
            <SecFooter/>
        </div>
    );
}