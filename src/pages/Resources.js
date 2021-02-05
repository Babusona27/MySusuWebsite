import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
import { motion } from "framer-motion"
export default class Resources extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

    }



    render() {
        return (

            <motion.div exit={{ opacity: 0 }}>
                <Header />
                <section className="bnr">
                <div className="container">
                    <div className="bg_pic"> <img src="assets/images/bg_1.png" alt="" />	</div>	
                    <div className="row">
                        <div className="col-sm-6"> 
                            <div className="bnr_text">
                                <img src="assets/images/resource_icon.png" alt="" width="35px" />
                                <span> Resources</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <p> General Loan Amortization Worksheet</p>
                        </div>
                    </div>	
                </div>
            </section>

            <div className="main_contain">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <section className="mobilepic_section">
                                <div className="row">
                                    <div className="col-sm-5"> 
                                        <div className="mobilepic1_left"> 
                                            <img src="assets/images/pic_1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-7"> 
                                        <div className="mobilepic1_right"> 
                                            <div className="client_right about_left">
                                                <h1> General Loan Amortization Worksheet</h1>
                                                <p> At My Susu Inc building community and financial education are some of our most important values.  We are committed to providing financial tools both tangible and intangible through our community forums and physical tools that you can use to make informed financial decisions every day.</p>
                                                
                                                <div className="client_butn">
                                                    <a href="General_Lone.html" className="button"> Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            </section>

                            <section className="mobilepic_section">
                            
                                <div className="row">
                                    <div className="col-sm-7"> 
                                        <div className="mobilepic1_right"> 
                                            <div className="client_right about_left">
                                                <h1> General College Savings Worksheet</h1>
                                                <p> At My Susu Inc building community and financial education are some of our most important values.  We are committed to providing financial tools both tangible and intangible through our community forums and physical tools that you can use to make informed financial decisions every day. </p>
                                               
                                                <div className="client_butn">
                                                    <a href="General_College.html" className="button"> Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5"> 
                                        <div className="mobilepic1_left"> 
                                            <img src="assets/images/pic_2.png" alt="" />
                                        </div>
                                    </div>								
                            
                                </div>
                            </section>
                        </div>
                        <div className="col-sm-3 pl-0">
                            <div className="sidebar_sec">
                                <div className="icon_edit"> <i className="fas fa-edit"></i></div>
                                <h2> Resources List</h2>
                                <ul>
                                    <li><span><i className="fas fa-check"></i></span> <a href="General_College.html">  General College Savings Worksheet</a></li>
                                    <li><span><i className="fas fa-check"></i></span> <a href="General_Lone.html"> General Loan Amortization Worksheet </a></li>							
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <Footer />
                {/* <!--end footer--> */}




                </motion.div> 
        )
    }
}

