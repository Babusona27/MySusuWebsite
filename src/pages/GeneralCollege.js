import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
import { motion } from "framer-motion"
export default class GeneralCollege extends React.Component {
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
                            <p> General College Savings Worksheet</p>
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
                                    <h1> General College Savings Worksheet</h1>
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
                            <p> At My Susu Inc building community and financial education are some of our most important values.  We are committed to providing financial tools both tangible and intangible through our community forums and physical tools that you can use to make informed financial decisions every day.  																		 																		</p>

                            <p> You are welcome to browse through the tools available on our website at www.susuinc.com/resources, there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms.																											</p>

                            <p> This tool is to be used when you are first considering what the implications are for saving money for college or educational tuition.  You can arrange the worksheet to modifying at which year you begin making the savings payments and in which years deductions are made for tuition.  If you have a negative balance after the tuition payment schedules that means you are not saving and/or earning enough interest to cover the cost of the tuition.  In that event you would have to think about a combonation of saving and potentially taking on some form of college loans to make up for the difference.  You may be able to increase your saving ability by forming or joining a susu group with My Susu Inc.																		 </p>

                            <p> To use the worksheet input data into the colored fields.  You can expand the number of years and make adjustments to the worksheet.  Generally you should make changes in the colored field at the top of the worksheet only.  You may also make changes to the starting year of your savings and etc.																																			</p>
                            
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

