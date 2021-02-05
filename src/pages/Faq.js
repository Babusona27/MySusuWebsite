import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class Faq extends React.Component {
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
                                <i className="fas fa-question"></i>
                                <span> Faq</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <p> Frequently Asked Queries</p>
                        </div>
                    </div>	
                </div>
            </section>

            <section className="contact_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7"> 
                            <div className="contact_left">
                                <h1> Learn about the frequently asked question</h1>
                                <p> Efficiently productivate reliable paradigms before ubiquitous models. 
                                Continually utilize frictionless expertise with tactical relationships. Phosfluorescently incentivize low-risk high-yield opportunities before sticky synergy. Still have questions? </p>
                                <div className="bs-example">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseOne">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Lorem ipsum dolor sit amet ?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>									
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                                        <div className="left_cont">
                                                            <img src="assets/images/ac_logo.png" alt="" /> Lorem ipsum dolor sit amet ?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Lorem ipsum dolor sit amet ?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ullamcorper sem, ac pellentesque nibh. Maecenas mollis semper eros vitae iaculis. Fusce porttitor condimentum eros ac vehicula. Nullam ac vehicula ligula. Mauris quis elementum dolor. Mauris eget dapibus erat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-0">
                            <div className="contact_right"> 
                                <img src="assets/images/bnr_3.png" alt="" />
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

