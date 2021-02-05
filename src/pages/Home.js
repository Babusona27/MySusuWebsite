import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
// import { EVENT_LIST } from '../api/ApiConfig';
export default class Home extends React.Component {
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
              <div>
              <Header />
 {/* Full Page Intro */}
 <div class="jumbotron jumbotron-fluid"  style={{ backgroundImage: `url('assets/images/Background.png')`,height: "810px", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div class="container">
       <div class="row justify-content-between mt-5">
          <div class="col-sm-7">
             <p><span class="banner_head"> My Susu Inc the Community Savings Resource</span></p>
             <span class="banner_body">
                <p>Our Mission is to create a community of friends and family who provide a reliable financial network where everyone can meet their financial goals and become more financially empowered.</p>
             </span>
             <div class="row">
                <div class="col-sm-4 text-sm-left"><a href="#"><img src="assets/images/android.png" alt="" height="60px" width="auto"></img></a></div>
                <div class="col-sm-4 text-sm-left p-0"><a href="#"><img src="assets/images/apple.png" alt="" height="60px" width="auto"></img></a></div>
                <div class="col-sm-4"> </div>
             </div>
          </div>
          <div class="col-sm-4"><img class="img-fluid" src="assets/images/Phone Mockup.png" alt=""></img></div>
       </div>
    </div>
 </div>
 <div class="container">
    <div class="row">
       <div class="col-sm-6 text-sm-left about_head_margin">
          <span class="about_head"> Who We Are </span>
          <div class="row use_paddbotm">
             <div class="col-sm-2 text-sm-left p-0"><img class="img-fluid" src="assets/images/Group 2.png" alt="" width="83px" height="83px"></img></div>
             <div class="col-sm-10 text-sm-left"><span class="about_body_head">Our Story</span><br /><span class="about_body_inner">Learn more about us!</span><br /></div>
          </div>
          <div class="row use_paddbotm">
             <div class="col-sm-2 text-sm-left p-0"><img class="img-fluid" src="assets/images/Group 2 (1).png" alt="" width="83px" height="83px"></img></div>
             <div class="col-sm-10 text-sm-left align-items-center">
                <span class="about_body_head">
                   Our Vision
                   </span>
                   <br/>
                   <span class="about_body_inner">Bring Savings</span>
                   
                   </div>
          </div>
          <div class="row use_paddbotm">
             <div class="col-sm-2 text-sm-left p-0"><img class="img-fluid" src="assets/images/Group 2 (2).png" alt="" width="83px" height="83px"></img></div>
             <div class="col-sm-10 text-sm-left"><span class="about_body_head">Our Values</span><br /><span class="about_body_inner">Community, Education, Transparency , Innovation, User Experience, Economic & Cost Effective, Listening & Feedback, Relationship Management</span></div>
          </div>
       </div>
       <div class="col-sm-6">
          <img class="img-fluid" src="assets/images/Group 21.png" alt=""></img>
       </div>
    </div>
 </div>
 {/* About section */}
 <br />
 <br />
 {/* Meet Client section */}
 <div class="container">
    <div class="row">
       <div class="col-sm-5 meetclient_image">
          <img class="img-fluid" src="assets/images/IMG.png" alt=""></img>
       </div>
       <div class="col-sm-7 text-sm-left">
          <span class="about_head"> Bring Savings Within Your Reach</span>
          <div class="about_body_inner">Our Susu Groups bring benefits that extend beyond a group!</div>
          <div class="row">
             <div class="col-md-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/Icon.png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <span class="about_body_head">We pride ourselves on building community</span>          
                   </div>
                </div>
             </div>
             <div class="col-md-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/Icon (1).png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <span class="about_body_head">We leverage globally proven effective methods of saving</span>             
                   </div>
                </div>
             </div>
             <div class="col-sm-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/Icon (2).png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <span class="about_body_head">Our Susu Groups help you save with confidence</span>   
                   </div>
                </div>
             </div>
             <div class="col-sm-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/accountable.png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <div class="about_body_head"> Keeps you accountable for your goals</div>
                   </div>
                </div>
             </div>
             <div class="col-sm-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/financial.png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <div class="about_body_head"> Promotes your financial independence</div>
                   </div>
                </div>
             </div>
             <div class="col-sm-6">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/accesible.png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <div class="about_body_head"> We are accessible for ALL people</div>
                   </div>
                </div>
             </div>
             <div class="col-sm-6 text-align-center">
                <div class="row">
                   <div class="col-sm-4 text-sm-left"><img class="img-fluid" src="assets/images/cash.png" alt="" width="83px"></img></div>
                   <div class="col-sm-8 text-sm-left d-flex align-items-center pl-0">
                      <div class="about_body_head">  Free up cash flow!</div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
 {/* Meet Client section */}
 <br />
 <br />
 {/* Meet Client 2 section */}
 <div class="container">
    <div class="row">
       <div class="meet_clients_second col-sm-6 text-sm-left">
          <span class="about_head">Create a Susu Group Today!</span>
          <br /><br />
          <span class="about_body_inner">We've designed a user friendly avenue for you to start building an amazing community and achieving your financial goals.</span>
          <br /><br />
          <div class="row">
             <div class="col-sm-5 text-sm-left"><a href="#"><img src="assets/images/android.png" alt="" height="60px" width="auto"></img></a></div>
             <div class="col-sm-5 text-sm-left p-0"><a href="#"><img src="assets/images/apple.png" alt="" height="60px" width="auto"></img></a></div>
             <div class="col-sm-2"> </div>
          </div>
       </div>
       <div class="col-sm-1"></div>
       <div class="col-sm-5">
          <img class="img-fluid" src="assets/images/Phone_Mockup2.png" alt=""></img>
       </div>
    </div>
 </div>
 {/* Meet Client 2 section */}
 <br />
 <br />
 <br />
 {/* Instant alert */}
 <div class="container">
    <div class="row">
       <div class="col-sm-5">
          <img class="img-fluid" src="assets/images/IMG2.png" alt=""></img>
       </div>
       <div class="col-sm-1"></div>
       <div class="meet_clients_second col-sm-6 text-sm-left">
          <span class="about_head">Join our Waitlist </span>
          <br /><br />
          <div class="about_body_inner">Get the inside scoop on events, app updates and company news. </div>
          <br /><br />
          <div class="input-group">
             <img style={{ marginTop: "23px", marginLeft: "30px" }} class="sub_pic" src="assets/images/email-84.png" alt="" width="20px" height="15px"></img>
             <input type="email" class="form-control" name="" placeholder="Enter your Email" />
             <span class="input-group-btn">
             <button class="btn" type="submit">Subscribe Now</button>
             </span>
          </div>
       </div>
    </div>
 </div>
 {/* Instant alert */}
 <br />
 <br />
 {/* Resource section */}
 <div class="resource_section">
    <br />
    <br />
    <div class="container-fluid">
       <center><span class="resource_head">Resources</span></center>
       <br />
       <br />
       <div class="container">
          <div class="row">
             <div class="col-sm-6">
                <div class="blog_background">
                   <img class="img-fluid" src="assets/images/susuimg1.jpg" alt=""></img>
                   <br />
                   <br />
                   <p style={{textAlign: 'left'}}><span class="about_body_head">General College Savings Worksheet</span></p>
                   <p style={{textAlign: 'left'}}><span class="about_body_inner">You are welcome to browse through the tools available on our website at www.susuinc.com/resources,there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms. </span></p>
                   <p style={{textAlign: 'left'}}><span class="blog_link"><Link to={{ pathname: '/general_college' }}>Find Out More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></span></p>
                </div>
             </div>
             <div class="col-sm-6">
                <div class="blog_background">
                   <img class="img-fluid" src="assets/images/susuimg2.jpg" alt=""></img>
                   <br />
                   <br />
                   <p style={{textAlign: 'left'}}><span class="about_body_head">General Loan Amortization Worksheet</span></p>
                   <p style={{textAlign: 'left'}}><span class="about_body_inner">You are welcome to browse through the tools available on our website at www.susuinc.com/resources,there may also be more helpful tools and or conversations that you can find through the Community portion of our website at www.susuinc.com/community and/or our social media platforms. </span></p>
                   <p style={{textAlign: 'left'}}><span class="blog_link"><Link to={{ pathname: '/general_lone' }}>Find Out More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></span></p>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* Resource section */}
    <br />
    <br />
    
    <Footer />
 </div>
</div>




          </div>
      )
  }
}



