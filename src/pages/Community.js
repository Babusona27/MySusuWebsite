import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class Community extends React.Component {
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
                                <span> Community</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            {/* <p> Savings Within Reach</p> */}
                        </div>
                    </div>	
                </div>
            </section>

            <section className="client" style={{paddingBottom:'80px',borderBottom:'1px solid#d7d7d7',position:'relative',}}>
                <div className="side_bg"> 
                        <img src="assets/images/left_shape.png" alt="" />
                </div>
                <div className="container" style={{maxWidth: '850px',}}>
                    
                    <div className="row">
                        <h2> Community Rooom</h2>
                        <p className="change_font"> We value community here at My Susu because we understand that we can achieve so much more when we stand together, share our stories and uplift each other.  Here on our community page, you pose questions for guidance, inquiries about Savings, share your experiences with savings and personal finance matters, and more! We will have our team of experts address your concerns, and you can also be a feature in our Spotlight. </p>
                        <div className="col-sm-6"> 
                            <div className="about_right">
                                <img src="assets/images/Depositphotos.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <div className="about_right">
                                <img src="assets/images/Depositphotos_2.jpg" alt="" />
                            </div>
                        </div>   
                    </div>
                </div>
            </section>

            <section className="client">
                <div className="container" style={{maxWidth: '850px',}}>
                    <div className="row"> 
                        <div className="col-sm-2 d-flex justify-content-center align-items-baseline">
                            <img src="assets/images/dppic.png" alt="" />
                        </div>
                        <div className="col-sm-10">
                            <h2> Meet Yatta, Who uses the Susu method to build her worth</h2>
                            <p> Latest Post: <span style={{color:'#0e9cd9',}} >Yatta </span>  . Moderator 54m ago . lorem ipsum</p>
                            <p> Yatta has been participating in traditional Susu Groups for six years. She has participated in groups with family and close friends. Over the last six years she has been the leader of her Susu Groups where she has kept track of members, funds and facilitated to ensure each group's success. Yatta has never endured any issues with group members and there is great trust in her savings community. Yatta has used her savings from Susu Groups to purchase her home, furnish her home, buy a new car and credits many of her major purchases and financial accomplishments to Susu. Many of her group members have also built houses, made investments, supported initiatives and accomplished things they otherwise felt were impossible using Susu Groups.  Susu has truly helped everyone within her Susu Groups. Yatta is excited to hear about My Susu and believes that the My Susu App will make interactions and communication more seamless and easy for her as the group leader for several Susu Groups. Yatta plans to open new business ventures in the future through the use of Susu! </p>
                            <p> Reply: 1 Kudos: 0 by:<span style={{color:'#0e9cd9',}} >Yatta </span> / Active Member </p>
                            <div class="form-group">
                                
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Comment here"></textarea>
                            </div>
                            <div className="change_align">
                                <button type="submit" class="btn btn-primary">Submit</button>
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

