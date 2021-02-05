import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class OurValus extends React.Component {
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

            <div>
                <Header />
                <section className="bnr">
                <div className="container">
                    <div className="bg_pic"> <img src="assets/images/bg_1.png" alt="" />	</div>	
                    <div className="row">
                        <div className="col-sm-6"> 
                            <div className="bnr_text">
                                <img src="assets/images/resource_icon.png" alt="" width="35px" />
                                <span> Our Valus</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            {/* <p> General Loan Amortization Worksheet</p> */}
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
                            
                        </div>
                    </div>
                    <div className="col-sm-6 p-0"> 
                        <div className="about_right">                       
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-n8wdjd2GiA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                       
                        </div>
                    </div>
                </div>
            </section>

            <section className="Value_part" id="our_values">
                <div className="container">			
                    <h1 style={{textAlign: 'center'}} > Community Values</h1>
                    {/* <p className="use_margin"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p> */}
                    <div className="row upper_margin">
                        <div className="col-sm-4">
                            <div className="left_part">
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon1.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Education</h4>
                                        <p> Providing personal financial tools and community to help improve our users financial independence and help them save more effectively</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon2.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Transparency </h4>
                                        <p>Always explaining our service offerings, providing insight into our processes and being transparent </p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon3.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Economic</h4>
                                        <p>Commitment to being aware of economic issues around the nation and providing service at a price point available to everyone</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon4.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Feedback</h4>
                                        <p>Commitment to listening to the feedback from our users to incorporate into continued development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="middle_part"> <img src="assets/images/Depositphotos.jpg" alt="" style={{marginBottom:'10px'}}/> </div>
                            <div className="middle_part"> <img src="assets/images/Depositphotos_2.jpg" alt="" /> </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="right_part"> 
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon5.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Community</h4>
                                        <p>Providing a network of support where our users can find guidance for everyday personal financial matters</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon6.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> Innovation</h4>
                                        <p>Commitment to always improving our platform </p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon7.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4> User Experience</h4>
                                        <p>Commitment to making the user experience seamless and user friendly</p>
                                    </div>
                                </div>
                                <div className="left_part_inner"> 
                                    <div className="icon"> <img src="assets/images/vicon8.png" alt="" /></div>
                                    <div className="text"> 
                                        <h4>Relationship Management</h4>
                                        <p>Proving the best customer service for reliability and personability </p>
                                    </div>
                                </div>
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

