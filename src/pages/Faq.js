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
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What is a Susu Group and What is rotational savings?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>									
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>Susu is a community approach to savings, where there is accountability to all members of the group. Each member contributes on a rotating basis an agreed upon amount of funds, and each member takes a turn in receiving the pool of funds. Through this community approach many people are able to achieve their savings goals.</p>
                                                    <p>Watch our introduction to Susu Groups for more information. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                                        <div className="left_cont">
                                                            <img src="assets/images/ac_logo.png" alt="" /> How Does a Susu Group work?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>In a susu group the members agree on a set contribution amount, contribution frequency and other factors such as the order in which each member receives funds and etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Can I receive a contribution before making one?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> Each member of your Susu Group must make a contribution before they can receive funds.  Your contribution is an illustration of your obligation and commitment to your Susu Group and your fellow group members savings success.  In the interest of upholding the security of our users, your group members and our platform we do not allow users to come in and just receive funds with making their contributions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading4">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapse4">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Why should I link a bank account?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> My Susu Inc makes the process of managing and participating a Susu Group seamless.  For a great experience facilitating your group we make it all automatic. All contributions and payouts are automatically debited and credited to our users bank accounts, so you coordinate individual payments. We will provide notifications to youfor all activity that involves your payments and receipts. In order to accomplish this, we use a payment processor to establish a connection with your checking account at your bank.we are leveraging Dwolla to provide seamless payments for ourcustomers. Learn more at www.dwolla.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading5">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapse5">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Why Is my account blocked?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> If you fail to make your schedule contribution your account will be blocked until you resolve it.  This is one measure that helps protect your group members and our community of users. More information is available in our terms of usage</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading6">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapse6">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Why do you need my social and other information?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> Personal information is used to validate the identity of our users to protect everyone on the platform, as part of linking your bank account to our system an  identity check called Know Your Customerfor which an SSN is required. Additionally, we may report our user's payment history to credit bureaus to help them build their credit or to collections as apart of the process of resolving delinquencies.  We understand the value of your secure information, and we use industry standard encryption to store yourinformation securely.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree7">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree7">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Can I build credit through participating in a SUSU Group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree7" className="collapse" aria-labelledby="headingThree7" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>	My Susu Inc may work directly with the credit bureaus. Data that is reported may include your contributions to your group as payments which demonstrates your ability to pay your commitments. This works in the same way as committing to pay a utility bill. By making your contributions on time, it will impact your credit score positively. Conversely, if you are delinquent in making your contributions this will impact your credit score negatively, so be sure to cover your contribution at the scheduled times and start building your credit!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree8">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree8">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What fees does My Susu Inc Charge?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree8" className="collapse" aria-labelledby="headingThree8" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> The facilitation fee for each Susu Group, will be calculated by multiplying the total amount of cash movement for the lifecycle of the group by the fixed facilitation fee rate.  The current fixed facilitation fee rate is 1.5% and will not exceed $250.  The total fee amount will be divided by the number of distributions, which will equal the total fee assessed upon the amount each user receives at distribution. </p>
                                                    <p> Example 1: if there are five (5) members in a Susu Group, and they each make monthly payments of $50 (Fifty United States Dollars) into their Susu Group fund, then the total amount of cash movement for the lifecycle of the group is equal to $1,250 ($50 x 5 users equals 250 per month x 5 months equals $1,250), the total facilitation fee is $18.75 for the group ($1,250 x 1.5% equals $18.75) and the fee will be assessed as $3.75 ($18.75 divided by 5 months equals $3.75) deducted from each distribution to the receiving user for the month (resulting in a net distribution to the receiving installment user of $246.25 ($250 – $3.75 equals $246.25). </p>
                                                    <p> There will also be a $15 returned item fee assessed if a user fails to complete any contractual installments.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree9">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree9">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How does My Susu protect my information?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree9" className="collapse" aria-labelledby="headingThree9" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> We use industry standards to protect and encrypt your information</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree10">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree10">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Does My Susu Inc operate outside of the USA?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree10" className="collapse" aria-labelledby="headingThree10" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> We currently offer services within the USA only.  You may use the application abroad, however we do not guarantee that the app will function to its full capability when you are traveling.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree11">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree11">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What do I need in order to create an account?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree11" className="collapse" aria-labelledby="headingThree11" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> To create an account you must be over the age of 18, have a valid SSN and a bank account to use for your contributions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree12">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree12">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How do I receive funds on my scheduled receive date?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree12" className="collapse" aria-labelledby="headingThree12" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> We partner with Dwolla to make your experience seamless.  Your funds will be automatically deposited into your account at the scheduled timeframe.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree13">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree13">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What methods of payment can I use to participate in a group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree13" className="collapse" aria-labelledby="headingThree13" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> You must have a bank account to use our platform. We pride ourselves on helping you reach your goals and ultimately financial independence.  Therefore it fits within our values to not allow the use of other methods such as credit cards to join a group.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree14">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree14">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How do I report concerns?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree14" className="collapse" aria-labelledby="headingThree14" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> a.	To report general concerns please email support@susuinc.com.  For privacy concerns please email privacy@susuinc.com.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree15">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree15">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What happens when a group member defaults on payments?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree15" className="collapse" aria-labelledby="headingThree15" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> If a group member defaults on payment the group reserves the right to have My Susu Inc report the delinquency to the credit bureaus and to take collections actions against the member. We will attempt to settle the missed payment with the user 2-3 times and we will block the users account prior to taking elevated steps.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree16">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree16">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How can I see my transaction history?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree16" className="collapse" aria-labelledby="headingThree16" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    {/* <p> Each member of your Susu Group must make a contribution before they can receive funds.  Your contribution is an illustration of your obligation and commitment to your Susu Group and your fellow group members savings success.  In the interest of upholding the security of our users, your group members and our platform we do not allow users to come in and just receive funds with making their contributions.</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree17">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree17">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How do I review details related to my group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree17" className="collapse" aria-labelledby="headingThree17" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    {/* <p> Each member of your Susu Group must make a contribution before they can receive funds.  Your contribution is an illustration of your obligation and commitment to your Susu Group and your fellow group members savings success.  In the interest of upholding the security of our users, your group members and our platform we do not allow users to come in and just receive funds with making their contributions.</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree18">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree18">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How do I create a group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree18" className="collapse" aria-labelledby="headingThree18" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    {/* <p> Each member of your Susu Group must make a contribution before they can receive funds.  Your contribution is an illustration of your obligation and commitment to your Susu Group and your fellow group members savings success.  In the interest of upholding the security of our users, your group members and our platform we do not allow users to come in and just receive funds with making their contributions.</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree19">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree19">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What responsibilities does a group leader have?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree19" className="collapse" aria-labelledby="headingThree19" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> The group leader creates the group, invites members, sets the savings goal of the group, the receiving order, the frequency, and keep watch over the groups chatroom</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree20">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree20">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How can I join a susu group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree20" className="collapse" aria-labelledby="headingThree20" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    {/* <p> The group leader creates the group, invites members, sets the savings goal of the group, the receiving order, the frequency, and keep watch over the groups chatroom</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree21">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree21">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How long will my group last?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree21" className="collapse" aria-labelledby="headingThree21" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> Your group will last until the last member receives their payout which is determined by the frequency set at the beginning of your group by the group leader.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree22">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree22">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> How can I renew my susu group?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree22" className="collapse" aria-labelledby="headingThree22" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    {/* <p> The group leader creates the group, invites members, sets the savings goal of the group, the receiving order, the frequency, and keep watch over the groups chatroom</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree23">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree23">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> Who is My Susu Inc’s banking partner?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree23" className="collapse" aria-labelledby="headingThree23" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> We are partnered with Dwolla Inc for further information please review the terms of service for Dwolla.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree24">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree24">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What are the terms of usage?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree24" className="collapse" aria-labelledby="headingThree24" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> Link to the terms?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree25">
                                                <h2 className="mb-0">
                                                    <div className="d_flex-use collapsed" data-toggle="collapse" data-target="#collapseThree25">
                                                        <div className="left_cont"><img src="assets/images/ac_logo.png" alt="" /> What is the privacy policy?</div>
                                                        <div className="right_cont"> <i className="fa fa-plus"></i></div>
                                                    </div>                   
                                                </h2>
                                            </div>
                                            <div id="collapseThree25" className="collapse" aria-labelledby="headingThree25" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p> Link to the policy</p>
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
