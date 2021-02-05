import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
export default class Tarms extends React.Component {
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
                {/* <!--end banner--> */}
                <section className="about_left mar_butn50">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p> Please read this Terms of Usage Agreement (the "Terms") carefully. This website and any other My Susu Incorporated website, application, its affiliates or agents (collectively, the "Site") and the information on it are controlled by My Susu Incorporated. These terms govern the use of the Site and apply to all internet users visiting the Site by access or using the Site in any way, including using the services and resources available or enabled via the Site. By clicking on the "I Accept" button, completing the registration process, and/or browsing the Site or downloading My Susu's mobile application (the "App"), you represent that (1) you have read, understand, and agree to be bound by the terms of usage, (2) you are of legal age to form a binding contract with the company, and (3) you have the authority to enter into the terms of usage personally or on behalf of the company you have named as the user, and to bind that company to the terms of usage. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS OF USAGE, YOU MAY NOT ACCESS OR USE THIS SITE OR THE SERVICES.</p>
                                <p> Acceptance of the Terms of Usage</p>
                                <p> Welcome to My Susu Inc (www.susuinc.com), owned and operated by My Susu Incorporated. (“My Susu Inc”). In these Terms of Usage, “you” and “your” refer to the individual that uses the Service. “We”, “us”, or “our” also refer to My Susu Inc.</p>
                                <p>My Susu Inc, provides an online platform, process and service (the “Service”) that allows users to: connect directly with each other to distributemoney amongst themselves via Rotational Savings Groups.</p>
                                <p>PLEASE BE AWARE THAT THE ARBITRATION AGREEMENT SECTION OF THIS AGREEMENT, BELOW, CONTAINS PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY CLAIMS THAT AROSE OR WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT. IN PARTICULAR, IT CONTAINS AN ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION. (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON YOUR CLAIMS. ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO YOUR USE OF THE SITE WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF THE STATE OF RHODE ISLAND, CONSISTENT WITH THE FEDERAL ARBITRATION ACT, WITHOUT GIVING EFFECT TO ANY PRINCIPLES THAT PROVIDE FOR THE APPLICATION OF THE LAW OF ANY OTHER JURISDICTION. THE UNITED NATIONS CONVENTION ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS IS EXPRESSLY EXCLUDED FROM THIS AGREEMENT.</p>
                                <p>YOU UNDERSTAND AND AGREE THAT MY SUSU INC IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO BETWEEN USERS, AND THAT MY SUSU INC IS NOT A BANK, A MONEY SERVICES BUSINESS, A MONEY TRANSMITTER, OR AN ISSUER OF STORED VALUE PRODUCTS. MY SUSU INC AND THE SERVICE ENABLES USERS TO COMMUNICATE DIRECTLY AND TO DISTRIBUTE FUNDS AMONGST THEMSELVES. MY SUSU INC HAS NO CONTROL OVER THE CONDUCT OF USERS OF THE SERVICE, ANY INFORMATION EXCHANGED BETWEEN USERS, OR ANY SHARING DECISIONS BY OR AMONG USERS, AND REJECTS ALL LIABILITY IN THIS RESPECT.</p>
                                <p>MY SUSU INC DOES NOT REVIEW, ENDORSE, RECOMMEND, VERIFY, EVALUATE, OR OTHERWISE PROVIDE ANY WARRANTY OR GUARANTEE WITH RESPECT TO ANY USER, USER CONTENT, OR USER GROUP. IT IS THE SOLE RESPONSIBILITY OF USERS TO INVESTIGATE THE INFORMATION AVAILABLE ABOUT ANOTHER USER OR A GROUP.</p>
                                <p>Your use of, and participation in, certain Services may be subject to additional terms ("Supplemental Terms") and such Supplemental Terms will either be listed in the Terms or will be presented to you for your acceptance when you sign up to use the Supplemental Service. If the Terms are inconsistent with the Supplemental Terms, the Supplemental Terms shall control with respect to such Service. Any applicable Supplemental Terms are also referred to herein as the "Terms."</p>
                                <p>PLEASE NOTE THAT THE TERMS ARE SUBJECT TO CHANGE BY MY SUSU INC IN ITS SOLE DISCRETION AT ANY TIME. When changes are made, My Susu Inc will make a new copy of the Terms of Usage available at the Site and within the App and any new Supplemental Terms will be made available from within, or through, the affected Service on the Site or within the App. We will also update the "Last Updated" date at the top of the Terms. Any changes to the Terms will be effective immediately for new users of the Site, the App and/or Services and will be effective thirty (30) days after posting notice of such changes on the Site for existing users. My Susu Inc may require you to provide consent to the updated Terms in a specified manner before further use of the Site, the App and/or the Service is permitted. If you do not agree to any changes(s) after receiving a notice of such change(s), you shall stop using the Site, the App and/or the Services. Otherwise, your continued use of the Site, the App and/or Services constitutes your acceptance of such change(s). PLEASE REGULARLY CHECK THE WEBSITE TO VIEW THE THEN-CURRENT TERMS.</p>
                                <p>Definitions</p>
                                <p>“Susu Group or Group” means three or more Users who form a group to use the Service to distributemoney between and among all Users in the same group.
                                    “Content” means text, graphics, images, music, software, audio, video, information or other materials.
                                    “User” means a person who successfully completes My Susu Inc’s registration process.
                                    “Organizer” means a user who arranges a group.
                                    "Collective Content" means all Content on the Site, whether such Content is User Content or My Susu Inc Content.
                                </p>
                                <p>How to Join the Service</p>
                                <p>The Service consists of an online platform, process and service (the “Service”) that allows users to: connect directly with each other to distribute money amongst themselves via a Rotational Savings Group. To become a User and access the Service, you must: (a) successfully complete the online registration process either online or within our mobile application “My Susu” available at www.susinc.com, in app stores, including the Apple iTunes Store and Google Play, (b) agree to the provision of personal identification information, and (c) connect your personal bank or other financial account to the Service.</p>
                                <p>USA Patriot Act Notice</p>
                                <p>Federal law requires My Susu Inc and its Service partners to obtain, verify, and record information that identifies each person who uses the Service.  This information will be used aid AML (anti-money laundering) and terrorist financing along with the government We are required to collect information such as the following from you:</p>
                                <ul>
                                    <li> Your name </li>
                                    <li> Date of birth </li>
                                    <li> Address </li>                                  
                                    <li> Social security number or TIN </li> 
                                </ul>
                                <p>If your identity cannot be verified, we may not be able to provide the Service to you.</p>
                                <div className="Privacy_head2">
                                    <p> How the Service Works </p>
                                </div>
                                <div className="Privacy_head3">
                                    <p> Rotational Savings Groups</p>
                                </div>
                                <p>Money is distributed by and between all Users who have joined a Group. Within a Group, every member contributes the same amount in installments over the life-time of the Group, and every member of a Group withdraws the same amount but at different times. All installment payments are distributed to one member of the Group at the same time that the installment payments are made less My Susu Inc's fee.</p>
                                <p>Groups may be formed by any User who is then termed the “Group Organizer”. A User forming a Susu Group determines the four key characteristics of the Group: (1) the amount to be distributed by each User who joins the Group; (2) the life of the group (measured in months, weeks, or other time period); (3) how many Users there are in the Susu Group; (4) the frequency of payments into the group and payments out of the group.</p>
                                <p>By a joining a Susu group you are authorizing automatic payments for your contributions according to your individual Susu Group.  Failure to contribute funds to a Group at the time and in the amounts that a User agreed to will subject a User to limited or restricted access to the Service, including prohibition of joining more Groups or receiving distributions from any Susu Groups that User has previously joined. A User who has failed to meet his or her Group contribution commitments may authorize more than one attempt to collect funds during the Group setup process. Unsuccessful attempts to facilitate a User’s contribution to their Susu Group for any reason will entitle My Susu Inc to charge an insufficient funds fee, as agreed to by the user during the Group setup process</p>
                                <p>Should a Susu Group member fail to make their scheduled contributions, it will be within the collective Group’s right to opt into taking collections actions against the negligent member.</p>
                                <div className="Privacy_head3">
                                    <p> Service Fees</p>
                                </div>
                                <div className="Privacy_head3">
                                    <p> Rotational Savings Groups</p>
                                </div>
                                <p>The purpose of these Terms is for you to secure access to the Services. All fees set forth within and paid by you under the Terms shall be considered solely in furtherance of this purpose.You agree to pay all fees or charges to your account in accordance with the fees, charges and billing terms in effect at the time a fee or charge is due and payable. You agree to immediately notify My Susu Inc of any changes in your bank account used for payment hereunder. My Susu Inc reserves the right at any time to change its prices and billing methods, either immediately upon posting on Susuinc.com, in the app or by email delivery to you.</p>
                                <p>The facilitation fee for each Susu Group, will be calculated by multiplying the total amount of cash movement for the lifecycle of the group by the fixed facilitation fee rate.  The current fixed facilitation fee rate is 1.5%.  The maximum facilitation fee we will charge is $250.The total fee amount will be divided by the number of distributions, which will equal the total fee assessed upon the amount each user receives at distribution. </p>
                                <p>Example 1: if there are five (5) members in a Susu Group, and they each make monthly paymentsof $50 (Fifty United States Dollars) into their SusuGroup fund, then the total amount of cash movement for the lifecycle of the group is equal to $1,250 ($50 x 5 users equals 250 per month x 5 months equals $1,250), the total facilitation fee is $18.75 for the group ($1,250 x 1.5% equals $18.75) and the fee will be assessed as $3.75 ($18.75 divided by 5 months equals $3.75) deducted from each distribution to the receiving user for the month (resulting in a net distribution to the receiving installment user of $246.25 ($250 – $3.75 equals $246.25). </p>
                                <p></p>
                            </div>
                        </div>
                        {/* <!--end tittle--> */}

                    </div>
                </section>
                


                <Footer />
                {/* <!--end footer--> */}




            </div>
        )
    }
}

