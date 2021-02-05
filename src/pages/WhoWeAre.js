import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { motion } from "framer-motion"
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class WhoWeAre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    componentDidMount() {
        if(this.props.location.query!=undefined){
            if(this.props.location.query.position===1){
                window.scrollTo(0, 0);
            }
            if(this.props.location.query.position===2){
                window.scrollTo({
                    top:1100,
                    behavior:'smooth'
                });
            }
        }


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
                                <i className="fas fa-question"></i>
                                <span> Our Story</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <p> Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>	
                </div>
            </section>

            <section className="about">
                <div className="row">
                    <div className="col-sm-6"> 
                        <div className="about_left">
                            <div className="icon"> <img src="assets/images/icon_1.png" alt="" /></div>
                            <h1> Lorem ipsum dolor sit ametcing elit</h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                            <a href="#" className="button"> Get Started Now</a>
                        </div>
                    </div>
                    <div className="col-sm-6 p-0"> 
                        <div className="about_right">
                            <img src="assets/images/bnr.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="client">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"> 
                            <div className="client_left">
                                <img src="assets/images/bnr_2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <div className="client_right about_left">
                                <h1> Lorem ipsum dolor sit ametcing elit</h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                            <li> <i className="fas fa-check-circle"></i> <span> Lorem ipsum dolor sit amet</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="client_butn">
                                    <a href="#" className="button"> Contact Us</a>
                                    <a href="#" className="button"> Ask Question</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	


            <section className="Value_part" id="our_values">
                <div className="container">			
                    <h1 style={{textAlign: 'center'}} > Lorem ipsum dolor sit ametcing elit</h1>
                    <p className="use_margin"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                    <div className="row upper_margin">
                        <div className="col-sm-4">
                            <div className="left_part">
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_1.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_2.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_3.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="middle_part"> <img src="assets/images/value_mob.png" alt="" /> </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="right_part"> 
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_4.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_5.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon_6.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Lorem ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper semnibh.</p>
                                    </div>
                                </div>
                            </div>
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

