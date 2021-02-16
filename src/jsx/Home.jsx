import React from 'react';
import TopNavbar from './topnavber';
import Navbar from './navbar';

export default function Home(){
    return(
        <div className="home-main-container">
            <TopNavbar/>
            <Navbar />
        </div>
    );
}