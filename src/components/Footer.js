import React from 'react'
import {Link } from 'react-router-dom';
export default class Footer extends React.Component {
    render(){
        return (
            <div>
                <div class="footer_back">
                    <div class="container-fluid">
                        <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-sm-4 text-sm-left">
                                <img class="footer_logo img-fluid" src="assets/images/Logo.png" alt=""></img>
                                <br />
                                <p><span class="footer_detail">Our Mission is to create a community of friends and family who provide a reliable financial network where everyone can meet their financial goals and become more financially empowered.</span></p>
                                <br />
                                <button class="ask_question">Ask a Question</button>
                            </div>
                            <div class="col-sm-7">
                                <div class="container-fluid">
                                    <div class="row justify-content-between">
                                    <div class="col-sm-4 text-sm-left">
                                        <span class="footer_head">Resources</span>
                                        <span class="footer_menu_options">
                                            
                                            <Link to={{ pathname: '/community' }} >Community</Link> 
                                            </span>
                                        <span class="footer_menu_options">
                                            
                                            <Link to={{ pathname: '/tarms' }} >Terms of Usage</Link> 
                                            </span>
                                        <span class="footer_menu_options">
                                        
                                        <Link to={{ pathname: '/privacy_policy' }} >Privacy Policy</Link>
                                            
                                            </span>
                                        <span class="footer_menu_options">
                                            
                                            <Link to={{ pathname: '/faq' }} >FAQ</Link>
                                          
                                            </span>
                                        <span class="footer_menu_options">
                                            
                                            <Link to={{ pathname: '/contact_us' }} >Contact Us</Link>
                                            </span>
                                    </div>
                                    <div class="col-sm-3 text-sm-left p-0">
                                        <span class="footer_head"> 
                                        
                                        <Link to={{ pathname: '/who_we_are' }} >Contact Us</Link>
                                        </span>
                                        <span class="footer_menu_options">
                                            
                                             <Link to={{ pathname: '/our_valus' }} >Our Values</Link> 
                                            </span>
                                        <span class="footer_menu_options"><a href="https://www.linkedin.com/company/my-susu-inc/jobs/" target="_blank">Careers</a></span>           
                                    </div>
                                    <div class="col-sm-5 text-sm-left">
                                        <span class="footer_head">Contact Us</span>
                                        <span class="footer_menu_options">19670 PO BOX Johnston RI 02919</span>
                                        <span class="footer_phone_mail"><a href="tel:+91-301-100-33946">1-887-2MySusu or 1-877-269-7878</a></span>
                                        <span class="footer_phone_mail"><a href="mailto:info@susu.com">Support@susuinc.com</a></span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <hr class="footer_line" />
                            </div>
                        </div>
                        </div>
                        <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-sm-3 text-sm-left">
                                <span class="Rights_Reserved">Susu 2021, All Rights Reserved</span>
                            </div>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-3 footer_icon"><a href="#"><i class="fab fa-twitter"></i></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#"><i class="fab fa-google"></i></a>
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
