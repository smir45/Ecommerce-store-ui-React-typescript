import React from 'react';
import SecondNavbar from './navbar-secondary';
import '../css/contact.css';
import { FaPaperPlane } from 'react-icons/fa';
import SecFooter from './secondfooter';

export default function Contact(){
    return(
        <div className="contact-main-container">
            <SecondNavbar/>
            <div className="input-form-group">
                <div className="text-section">
                    <h1 className="title">
                        Get in touch with us.
                    </h1>
                    <p className="desc">
                        Please drop us your details. We'll get back to you.
                    </p>
                </div>
                <div className="line-div"></div>
                <form action="" method="post">
                    <input className="input-box" type="text" name="name" id="name" placeholder="Name" required /><br/>
                    <input className="input-box" type="email" name="email" id="email" placeholder="Email" required/><br/>
                    <input className="input-box" type="text" name="subject" id="subject" placeholder="Subject" required/><br/>
                    <textarea name="message" id="message" cols="80" rows="10" placeholder="Message" ></textarea><br/>
                    <button type="submit" className="button-submit" >Send&nbsp;&nbsp;<FaPaperPlane/></button>

                </form>
            </div>
            <SecFooter/>
        </div>
    );
}