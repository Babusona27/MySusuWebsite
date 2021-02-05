import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
import { motion } from "framer-motion"
export default class ResourceInner extends React.Component {
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
                    <div class="bg_pic"> <img src="assets/images/bg_1.png" alt="" />	</div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="bnr_text">
                            <img src="assets/images/resource_icon.png" alt="" width="35px" />
                            <span> Resources</span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <p> General College Savings Worksheet</p>
                        </div>
                    </div>
                </div>
                </section>
                <section class="mobilepic_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mobilepic1_left"> 
                            <img src="assets/images/Phone_Mockup2.png" alt="" width="100%" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mobilepic1_right">
                            <div class="client_right about_left">
                                <h1> General Loan Amortization Worksheet</h1>
                                <p> You are welcome to browse through the tools available on our website at www.susuinc.com/resources, there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms.	</p>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul>
                                        <li> <i class="fas fa-check"></i> <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                                        <li> <i class="fas fa-check"></i> <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section class="about_left mar_butn50">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor bibendum odio, eu pellentesque sapien mollis nec. Donec vel orci non ligula egestas pretium. Praesent a sapien eget leo molestie ultrices quis nec orci. Vestibulum bibendum consequat justo, vitae volutpat diam dapibus eget. Pellentesque quis hendrerit lacus, quis feugiat ipsum. Mauris sit amet tempor elit. Morbi rutrum malesuada arcu, eleifend finibus justo tristique vitae. In hac habitasse platea dictumst. </p>
                            <p> Phasellus a convallis orci, vitae tempor nulla. Donec leo nunc, molestie lobortis convallis a, interdum non quam. Ut ultrices ex vel consequat rhoncus. Ut tincidunt nisl congue sollicitudin sollicitudin. In sodales erat ac nisl ullamcorper, at ornare quam molestie. Fusce ullamcorper non metus eget vulputate. Curabitur nec elementum neque. Aliquam elit nisi, viverra a iaculis a, hendrerit ut mi. Nullam massa arcu, consectetur eget nibh sit amet, luctus bibendum arcu.</p>
                            <p> Cras fermentum tristique arcu vel mollis. Nulla quis urna diam. Integer vitae sodales lorem. Nulla facilisi. Fusce sit amet vehicula augue. Sed sed lacinia turpis, mollis ullamcorper purus. Etiam aliquet ullamcorper ligula sit amet dictum. Donec sit amet eros at enim fringilla varius. Aliquam dictum ex ligula. Aenean id felis leo. Suspendisse condimentum odio purus, non vestibulum mi semper vitae. In interdum eget quam eu placerat. </p>
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


