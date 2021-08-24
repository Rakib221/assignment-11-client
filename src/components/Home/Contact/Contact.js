import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
// import GoogleIcon from '@material-ui/icons/Google';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="row mt-5 mb-5">
                <div className="col-lg-2">

                </div>
                <div className="mt-5 col-lg-3">
                    <h3 className="contact-logo-name">Mobile World</h3>
                    <p className="contact-company-name"> @ 2021 Technologies PVT Ltd.</p>
                    <div className="contact-icon">
                        <p className="icony"><FacebookIcon className="brand-icon" /></p>
                        <p className="icony"> <TwitterIcon className="brand-icon" /></p>
                        <p className="icony"><YouTubeIcon className="brand-icon" /></p>

                    </div>
                </div>
                <div className="col-lg-2">

                </div>
                <div className="col-lg-3">
                    <h4 className="company">Company</h4>
                    <p className="sub-ti">About us</p>
                    <p className="sub-ti">Career</p>
                    <p className="sub-ti">Privacy Policy</p>
                    <p className="sub-ti">Terms and Condition</p>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center m-3 bg-dark">
                <h4 className="text-white">Developed by Rakib Hasan</h4>
            </div>
        </div>
    );
};

export default Contact;