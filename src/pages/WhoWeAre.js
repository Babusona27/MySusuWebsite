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
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    }


    render() {
        return (

            <div>
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
                            {/* <p> Savings Within Reach</p> */}
                        </div>
                    </div>	
                </div>
            </section>

            <section className="about">
                <div className="row">
                    <div className="col-sm-6"> 
                        <div className="about_left">
                            <div className="icon"> <img src="assets/images/icon_1.png" alt="" /></div>
                            <h1> Savings Within Reach</h1>
                            <p> Our Mission is to create a community of friends and family who provide a reliable financial network where everyone can meet their financial goals and become more financially empowered.</p>
                            {/* <a href="#" className="button"> Get Started Now</a> */}
                        </div>
                    </div>
                    <div className="col-sm-6 p-0"> 
                        <div className="about_right">
                            <img src="assets/images/Depositphotos_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="client">
                <div className="container">
                    <div className="row">
                        <h2> Our Story</h2>
                        <p> As a founding team of West African heritage our team grew up seeing “Susu” utilized by our parents, family, community groups, friends and more.  We have seen “Susu” used to build homes, pay for educational expenses, build community infostructure, family planning, vacations and so much more.  Susu is a community savings method that is used throughout West Africa and across the Globe.  Access to traditional financial systems are limited in many countries and wherever there is a need or underserved community of people, people learn to innovate and find methods of empowering each other.  Around the globe “Susu”, which is known by many different names is sometimes the only method of providing a flow of cash flow that allows people to meet long and short-term savings goals.  Whether you live in a modern society or an emerging one saving is traditionally an individualized problem.  As individuals we have to ensure that our spending habits do not contradict our savings goals.  We also have to have discipline to refuse the temptations that we have for dipping into our piggy banks, investment accounts, retirement savings, traditional savings, checking accounts and etc.</p>
                        <p> Our Founder Mr. Roland, who is an entrepreneur and expert in software development was born and raised in Liberia, West Africa, where susu was an integral part of his community. He grew up seeing family and friends who struggled to save utilize this method and come together as a community to achieve their savings goals, and also support each other emotionally and socially. These people were often lower income, marginalized groups who would otherwise not qualify for bank loans or credit through major corporations, and therefore relied on their small tight knit "villages" for support. Mr. Roland decided to expand this method by bringing it to the digital platform and sharing it globally in hopes of reaching many diverse communities worldwide. Mr. Roland's motto is: "Saving is My Susu's goal, but creating trusting and supportive communities worldwide is our vision".  </p>
                        <p> Susu provides accountability and responsibility to others that forces you to save.  It also indiscriminatory as terms are set between the members of the group.  Traditional methods of savings and even lending leave out 50% of Americans each year.  We believed that the other half of Americans who are struggling to save would benefit from this time tested and proven method of savings.  As a software developer Mr. Roland came up with the brilliant concept of merging technology with tradition and providing service available to everyone.</p>
                        <h2 className="second_head"> Our history</h2>
                        <div className="col-sm-6"> 
                            <div className="client_left">
                                <img src="assets/images/arrow.png" alt="" />
                                <h3 className="usehead_posi1"> Founded <br />in 2020</h3>
                                <h3 className="usehead_posi2"> My Susu<br /> App <br />Launched <br />March <br />2021 </h3>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <div className="client_right about_left">
                                <div className="shape1">
                                    
                                    <ul className="use_after1">
                                        <li className="shape1_inner">
                                            <div className="shape1_inner" id="square">
                                                
                                                <div className="d-inline-block" data-toggle="tooltip" title="Tandas">
                                                    <p className="btn btn-primary" type="button" pointerEvents="none">Latin Ameriaca</p>
                                                </div>
                                            </div>
                                            
                                        </li>
                                        <li>
                                        <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Susu">
                                                    <p className="btn btn-primary" type="button">West Africa</p>
                                                </div>  
                                        </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Visi">
                                                    <p className="btn btn-primary" type="button">Gujaratis, India</p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                    </ul>
                                    <ul className="use_after2">
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Paluwagan">
                                                    <p className="btn btn-primary" type="button">Philippines</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Rotational Savings">
                                                    <p className="btn btn-primary" type="button" >America</p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Lenshare">
                                                    <p className="btn btn-primary" type="button">Thai</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Partnerhand">
                                                    <p className="btn btn-primary" type="button">West Indies</p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                    </ul>
                                    <ul className="use_after3">
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Kye">
                                                    <p className="btn btn-primary" type="button">South Korea</p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Ekub">
                                                    <p className="btn btn-primary" type="button">Ethiopia</p>
                                                </div> 
                                            </div>
                                            {/* <p className="for_hover"> Tandas</p> */}
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Chama">
                                                    <p className="btn btn-primary" type="button">Swahili-speaking </p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                       
                                    </ul>
                                    <ul className="use_after4">
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Hagbad">
                                                    <p className="btn btn-primary" type="button">Somalia</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Kameti">
                                                    <p className="btn btn-primary" type="button">Pakistan</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Arisan">
                                                    <p className="btn btn-primary" type="button" disabled>Indonesia</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        
                                    </ul>
                                    <ul className="use_after5">
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Hui">
                                                    <p className="btn btn-primary" type="button">East and Southeast </p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Cuchubál">
                                                    <p className="btn btn-primary" type="button" disabled>Guatemala</p>
                                                </div> 
                                            </div>
                                           
                                        </li>
                                        <li>
                                            <div className="shape1_inner" id="square">
                                            <div className="d-inline-block" data-toggle="tooltip" title="Tanomoshiko">
                                                    <p className="btn btn-primary" type="button" disabled>Cuchubál</p>
                                                </div> 
                                            </div>
                                            
                                        </li>
                                        
                                    </ul>
                                </div>
                                

                                {/* <h1> Lorem ipsum dolor sit ametcing elit</h1>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>	


            
                <Footer />
                {/* <!--end footer--> */}




            </div>
        )
    }
}

