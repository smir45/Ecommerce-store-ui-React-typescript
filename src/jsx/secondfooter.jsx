import React from "react";
import '../css/secfooter.css';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

 export default function SecFooter(){
     return(
         <div className="secfooter-main-container">
             <Link className="footer-branding-elements" to="/">
             <h1 className="logo-footer"><span  className="branding-footer">Pitch</span>Lab</h1>
             </Link>
             <div className="elements-links-footer">
                 <Link className="footer-links-elements">About</Link>
                 <Link className="footer-links-elements">FAQ</Link>
                 <Link className="footer-links-elements">Terms & Conditions</Link>
                 <Link className="footer-links-elements">Privacy Policy</Link>
                 <Link className="footer-links-elements">Cookie Policy</Link>
                 <Link className="footer-links-elements" to="/career" >Careers</Link>
             </div>
             <div className="social-icons-elements">
                <a href="#" className="footer-social-elements"><FaInstagram/></a>
                <a href="#" className="footer-social-elements"><FaTwitter/></a>
                <a href="#" className="footer-social-elements"><FaFacebookF/></a>
                <a href="#" className="footer-social-elements"><FaYoutube/></a>
             </div>
             <div className="copyrightinfo-footer">
                 <p className="copyright-info">&copy;Pitchlab 2021,&nbsp; All rights reserved.</p>
                 
             </div>
         </div>
    );
 }