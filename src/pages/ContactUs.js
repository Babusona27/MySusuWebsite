import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class ContactUs extends React.Component {
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
                                <span> Contact Us</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            {/* <p> Savings Within Reach</p> */}
                        </div>
                    </div>	
                </div>
            </section>


				<section className="contact_sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								
								<ul className="contact_info">
									<li><img src="assets/images/phone.png" alt="" /><span><a href="tel:+91-301-100-33946">1-887-2MySusu or 1-877-269-7878</a></span></li>
									<li><img src="assets/images/email.png" alt="" /><span><a href="mailto:Support@susuinc.com">Support@susuinc.com</a></span></li>
									<li><img src="assets/images/location.png" alt="" /><span>19670 PO BOX Johnston RI 02919</span></li>
								</ul>
							</div>
							<div className="col-lg-2"></div>
							<div className="col-lg-6">
								<div className="con_form">

									<label>Name <span style={{ color: 'red' }}>*</span></label>
									<input type="text" placeholder="Type Name" />
									<label>Phone <span style={{ color: 'red' }}>*</span></label>
									<input type="text" placeholder="Type Phone Number" />
									<label>Email Address <span style={{ color: 'red' }}>*</span></label>
									<input type="email" placeholder="Type Email Address" />
									<label>How can we help? <span style={{ color: 'red' }}>*</span></label>
									<textarea rows="3" cols="50">Type Description</textarea>
									<input type="submit" value="Send Message" />

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

