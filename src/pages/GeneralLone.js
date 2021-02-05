import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
import { motion } from "framer-motion"
export default class GeneralLone extends React.Component {
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

            <section className="mobilepic_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"> 
                            <div className="mobilepic1_left"> 
                                <img src="assets/images/Phone_Mockup2.png" alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <div className="mobilepic1_right"> 
                                <div className="client_right about_left">
                                    <h1> General Loan Amortization Worksheet</h1>
                                    <p> You are welcome to browse through the tools available on our website at www.susuinc.com/resources, there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms.	</p>
                                   							
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_left mar_butn50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p> At My Susu Inc building community and financial education are some of our most important values.  We are committed to providing financial tools both tangible and intangible through our community forums and physical tools that you can use to make informed financial decisions every day.  																		</p>

                            <p> You are welcome to browse through the tools available on our website at www.susuinc.com/resources, there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms.																		</p>

                            <p> Whether you are using this particular tool to make a informed decision about a loan that you are considering taking or because you want to understand the lifecycle of current payments that you are making on a loan this worksheet will provide great insights.  If you a pre-loan consider the positive impact joining or creating a Susu Group through My Susu Inc and saving to make a larger down payment, or saving to purchase outright may benefit you financially in relation the years in your potential loan term, interest and fees that you would pay and etc. </p>

                            <p> This Worksheet will show you the effective interest rate for your loan (something not often disclosed), it will show you how each payment you make is allocated to principal and interest, it will illustrate your equity position if relevant, it will calculate the total amount of funds paid for interest over the life of the loan as well.  There is also a data table that shows the variations in the net amount of interest you will pay for a loan at different interest rates.																		</p>

                            <p> To use the worksheet input data from the loan you are considering taking into the colored fields.  If a field is not relavant for your loan input 0.  For the table of varying interest you can make changes only to the fields that contain percentages.  You may make adjustments for the length of time in the worksheet if your payments will exceed 60 months.  There is a worksheet containing a sample for your view.																		</p>
                        </div>
                    </div>
                </div>
            </section>
                <Footer />
                {/* <!--end footer--> */}

                </motion.div> 
        )
    }
}

