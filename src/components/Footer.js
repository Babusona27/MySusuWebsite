import React from 'react'
import {Link } from 'react-router-dom';
export default class Footer extends React.Component {
    render(){
        return (
            <div>
                <div className="footer_back">
                    <div className="container-fluid">
                        <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-4 text-sm-left">
                                <img className="footer_logo img-fluid" src="assets/images/Logo.png" alt=""></img>
                                <br />
                                <p><span className="footer_detail">Our Mission is to create a community of friends and family who provide a reliable financial network where everyone can meet their financial goals and become more financially empowered.</span></p>
                                <br />
                                <button className="ask_question">Ask a Question</button>
                            </div>
                            <div className="col-sm-7">
                                <div className="container-fluid">
                                    <div className="row justify-content-between">
                                    <div className="col-sm-4 text-sm-left">
                                        <span className="footer_head">Resources</span>
                                        <span className="footer_menu_options"><a href="#">Community</a></span>
                                        <span className="footer_menu_options"><a href="#">Terms of Usage</a></span>
                                        <span className="footer_menu_options"><a href="Privacy_Policy.html">Privacy Policy</a></span>
                                        <span className="footer_menu_options"><a href="faq.html">FAQ</a></span>
                                    </div>
                                    <div className="col-sm-3 text-sm-left p-0">
                                        <span className="footer_head"> Our Story</span>
                                        <span className="footer_menu_options"><a href="Who_we_are.html#our_values">Our Values</a></span>
                                        <span className="footer_menu_options"><a href="#">Careers</a></span>           
                                    </div>
                                    <div className="col-sm-5 text-sm-left">
                                        <span className="footer_head">Contact Us</span>
                                        <span className="footer_menu_options">Our Address  (p. O. Box once available</span>
                                        <span className="footer_phone_mail"><a href="tel:+91-301-100-33946">+91-301-100-33946</a></span>
                                        <span className="footer_phone_mail"><a href="mailto:info@susu.com">Support@susuinc.com</a></span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <hr className="footer_line" />
                            </div>
                        </div>
                        </div>
                        <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-3 text-sm-left">
                                <span className="Rights_Reserved">Susu 2021, All Rights Reserved</span>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-3 footer_icon"><a href="#"><i className="fab fa-twitter"></i></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#"><i className="fab fa-google"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Footer */}
                </div>
            </div>

    
        )
    }
}
