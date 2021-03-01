import React from 'react';
import SecondNavbar from './navbar-secondary';
import SecFooter from './secondfooter';
import '../css/careers.css';

export default function Careers(){
    return(
        <div className="careers-main-container">
            <section className="navbar-sec">
                <SecondNavbar/>
            </section>
            <section className="mid-body">
                <div className="careers-1">
                    <h3 className="position-role">Front End Developer (React)</h3>
                    <a className="apply-btn" href="mailto:info@pitchlab.net">Apply Now</a>
                </div>
                <div className="careers-1">
                    <h3 className="position-role">Back End Developer</h3>
                    <a className="apply-btn" href="mailto:info@pitchlab.net">Apply Now</a>
                </div>
                <div className="careers-1">
                    <h3 className="position-role">Android &amp; ios Developer</h3>
                    <a className="apply-btn" href="mailto:info@pitchlab.net">Apply Now</a>
                </div>
                <div className="careers-1">
                    <h3 className="position-role">Java Developer</h3>
                    <a className="apply-btn" href="mailto:info@pitchlab.net">Apply Now</a>
                </div>
                <div className="careers-1">
                    <h3 className="position-role">Full Stack Developer (MEAN)</h3>
                    <a className="apply-btn" href="mailto:info@pitchlab.net">Apply Now</a>
                </div>
            </section>

            <section className="footer">
                <SecFooter/>
            </section>
        </div>
    );
}