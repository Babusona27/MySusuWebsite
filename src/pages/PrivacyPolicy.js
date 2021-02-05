import React from 'react'
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { EVENT_LIST } from '../api/ApiConfig';
import { motion } from "framer-motion"
export default class PrivacyPolicy extends React.Component {
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

            <motion.div exit={{ opacity: 0 }}>
                <Header />
                <section className="bnr">
                <div className="container">
                    <div className="bg_pic"> <img src="assets/images/bg_1.png" alt="" />	</div>	
                    <div className="row">
                        <div className="col-sm-6"> 
                            <div className="bnr_text">
                                <img src="assets/images/resource_icon.png" alt="" width="35px" />
                                <span> Privacy Policy</span>
                            </div>
                        </div>
                        <div className="col-sm-6"> 
                            <p> DATA WE COLLECT ABOUT YOU</p>
                        </div>
                    </div>	
                </div>
            </section>

            <section className="about_left mar_butn50">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p> This Privacy Policy describes how My Susu Inc. and our affiliates (collectively, “My Susu Inc.,” “we,” and “us”) collect, use, disclose, transfer, store, retain or otherwise process your data when you (“you” ) download the My Susu Inc App through a relevant app store and sign up for a My Susu Inc. account and/or other services through the app or online at https://www.susuinc.com (collectively, “Services”).   																		 																		</p>

                            <p> This Privacy Policy applies to your use of our Services and covers only data collected in connection with your access to and use of our Services. Please read this Privacy Policy carefully. By continuing to interact with our Services, you are consenting to the practices described in this Privacy Policy. The Privacy Policy explains data we collect about you, origins of data we collect about you, how we use your data, when and who we share your data with, cookies and other related systematized tools, third-party analytics, length of time we store your data, user options, California disclosures, security, storage, updates to the policy and contact data. 																										</p>

                            <p> This tool is to be used when you are first considering what the implications are for saving money for college or educational tuition.  You can arrange the worksheet to modifying at which year you begin making the savings payments and in which years deductions are made for tuition.  If you have a negative balance after the tuition payment schedules that means you are not saving and/or earning enough interest to cover the cost of the tuition.  In that event you would have to think about a combonation of saving and potentially taking on some form of college loans to make up for the difference.  You may be able to increase your saving ability by forming or joining a susu group with My Susu Inc.																		 </p>

                            <p> To use the worksheet input data into the colored fields.  You can expand the number of years and make adjustments to the worksheet.  Generally you should make changes in the colored field at the top of the worksheet only.  You may also make changes to the starting year of your savings and etc.																																			</p>
                            <div className="Privacy_head1">
                                <p> DATA WE COLLECT ABOUT YOU </p>
                            </div>

                            <p> We need to collect data about you to provide you with the Services or the support you request. Specifically, we collect (and/or have collected during at least the 6-month period preceding the effective date of this Privacy Policy) the categories of personal data described below. Additionally, you can choose to voluntarily provide data to us. </p>

                            <div className="Privacy_head2">
                                <p> Data You Provide to Access our Services  </p>
                            </div>

                            <p> We collect data you provide when you apply or sign up for a My Susu Inc. account, go through our identity or account verification process, authenticate into your account, communicate with us, answer our surveys, participate in events or promotions offered by us or our partners, or otherwise use our Services. </p>

                            <p> We collect the following categories of data about you when you use our Services, including: </p>

                            <p> Identification data. such as: Your name, email address, zip code, phone number, unique identifier, signature, and authentication credentials (for example, data you use to log into your My Susu Inc account), including Internet Protocol (“IP”) address. </p>

                            <p> Additional Identification Data for Verified Users such as: Your full mailing address; date of birth; government-issued identification, including Social Security number, passport, or driver’s license; and photograph if you choose to share such data in order to send and receive larger payment amounts. </p>

                            <p> Financial Data such as: Bank account and payment card numbers you add to your My Susu Inc. account, as well as your My Susu Inc Card number if applicable Contacts Data. In order to provide you with the Service, we will also need to collect data from you about the intended recipient of the payment you request us to make. We will therefore ask you to provide contact details of your intended Susu Group members. You can do this by: (a) manually entering a phone number or email address into the My Susu Inc app; or (b) you can choose to give us access to your phone contacts to facilitate the entry of group member data. We may also ask you to provide limited access to your phone contacts for account verification purposes. You can update your settings to stop sharing your phone contacts with us at any time, although we will always need a group member’s phone number or email address to send an invitation to join a Susu Group to them as requested by you. </p>

                            <p> Transaction Data. When you use our Services to make, accept, or facilitate payments/Susu Groups, we collect data such as: when and where the transactions occur, the names of the transacting parties, a description of the transactions, the payment or transfer amounts, and the devices and payment methods used to complete the transactions. </p>


                            <div className="Privacy_head2">
                                <p> Data You Provide to Enhance Your Experience   </p>
                            </div>

                            <p> You can choose to provide us with additional data to improve your user experience when using our Services: </p>

                            <p> Contacts Data. If you choose to give us access to your phone contacts, we collect the telephone numbers of all your phone contacts to facilitate the entry of Group Members, payment or recipient data. You can update your settings to share your phone contacts with us at any time, although we will always need a group member’s phone number or email address to send an invitation to join a Susu Group to them as requested by you. </p>

                            <p> Other Data You Provide. We collect data that you voluntarily provide to us, including your photograph, if you choose to upload a picture to the Services; survey responses; participation in event, or other prospective marketing forms or devices; suggestions for improvements; referrals; or any other actions you perform on the Services. </p>


                            <div className="Privacy_head2">
                                <p> Data We Collect from Your Use of our Services </p>
                            </div>

                            <p> We collect data about you and the devices you use to access the Services, such as your computer, mobile phone, or tablet. The data that we collect includes: </p>

                            <p> Geolocation Data. The location of your device, including your IP address, device language, and location of your network provider. For more data and to learn how to disable collection of location data from your mobile device, please see below. Device Data. Data about your device, including your hardware model, operating system and version, device name, unique device identifier, mobile network data, and data about the device’s interaction with our Services. If you use an iOS device, we may automatically detect if you have downloaded specific web browsers, so we can ask you which browser you prefer to use to open links from your My Susu Inc App. </p>

                            <p> Internet or other electronic network activity data. Information about how you use and interact with our Services, including your access time, “log-in” and “log-out” data, browser type and language, country and language setting on your device, IP address, the domain name of your internet service provider, other attributes about your browser, mobile device and operating system, any specific page you visit on our platform, content you view, features you use, the date and time of your use of the Services, your search terms, and the website you visited before you visited or used the Services. </p>

                            <p> Interpretations made from any of the data we collect to create a profile about you that may reflect, for example, your preferences, characteristics, and behavior, including for account security purposes or to enhance our Services to you. </p>

                            <div className="Privacy_head2">
                                <p> ORIGINS OF DATA WE COLLECT ABOUT YOU  </p>
                            </div>


                            <p> We collect (and/or have collected during at least the 6-month period preceding the effective date of this Privacy Policy) data about you from the following categories of Origins: </p>


                            <p> You directly, when you submit data to us or allow us to access data, your devices and how you interact with our Services, or affiliates. </p>

                            <p> Other Origins, such as: </p>

                            <p> Identity Verification. Data from third-party verification services (e.g., identity verification agencies and through companies which provide third party analytics (see “Third-Party Analytics” below)), and publicly available Origins. In some circumstances, where lawful, this data can include your government-issued identification number. </p>

                            <p> Credit, Compliance, and Fraud. Data about you from third parties for any credit investigation, credit eligibility, identity or account verification process, fraud detection process, or collection procedure, or as may otherwise be required by applicable law. This includes, without limitation, the receipt and exchange of account or credit-related data with any credit reporting agency or credit bureau, where lawful, and any person or corporation with whom you have had, currently have, or may have a financial relationship, including without limitation past, present, and future places of employment, financial institutions, and personal reporting agencies. </p>


                            <div className="Privacy_head2">
                                <p> HOW WE USE YOUR DATA </p>
                            </div>	

                            <p> We may collect, use and share data about you for the following reasons: </p>

                            <div className="Privacy_head3">
                                <p> Providing, Improving, and Developing our Services: </p>
                            </div>

                            <ul>
                                <li> Determining whether the Services are available in your country. </li>
                                <li> Processing or recording payment transactions or money transfers. </li>
                                <li> Creating Susu Groups </li>
                                <li> Providing you with the My Susu Inc services and features you choose to use; </li>
                                <li> Displaying your historical transaction data; </li>
                                <li> Connecting you with people you already know; </li>
                                <li> Providing, maintaining and improving our Services; </li>
                                <li> Developing new products and services; </li>
                                <li> Delivering the data and support you request through the use of our Services; </li>
                                <li> Delivering the data and support you request through the use of our Services; </li>
                                <li> Measuring, tracking and analyzing trends and usage in connection with your use or the performance of our Services; and </li>
                                <li> Otherwise providing you with the products and features you choose to use. </li>

                            </ul>


                            <div className="Privacy_head3">
                                <p> Communicating with You About our Services </p>
                            </div>

                            <ul>
                                <li> Sending you surveys and getting your feedback about our Services; and </li>
                                <li> Sending you data we think you may find useful or which you have requested from us about our products and services. </li>						
                            </ul>

                            <div className="Privacy_head3">
                                <p> Protecting our Services and Maintaining a Trusted Environment </p>
                            </div>

                            <ul>
                                <li>Conducting investigations, complying with and enforcing any applicable laws, regulations, legal requirements, and industry standards, and responding to lawful requests for data from the government or to valid legal process; </li>
                                <li> Contacting you to resolve disputes, collect fees and help you with our Services; </li>
                                <li> Debugging to identify and fix errors that impair how our Services function; </li>
                                <li> Making sure you follow our Terms of Usage or other applicable agreements or policies; </li>
                                <li> Investigating, detecting, preventing, recovering from, or reporting fraud, misrepresentations, security breaches or incidents, other potentially prohibited, malicious, or illegal activities, or to otherwise help protect your account, including to dispute chargebacks on your behalf; </li>
                                <li> Protecting your, our, or our other customers’ rights or property, or the security or integrity of our Services;  </li>
                                <li> Verifying or maintaining the quality and safety of our Services; and </li>
                                <li> Verifying your identity (e.g., through government-issued identification numbers). </li>
                                                    
                            </ul>

                            <div className="Privacy_head3">
                                <p> Advertising and Marketing  </p>
                            </div>

                            <p> Marketing our Services to you and communicating with you about opportunities, products, services, events, promotions, discounts, incentives, surveys, and rewards offered by us and select partners. </p>

                            <p> If we send you marketing emails, each email will have instructions on how you can “opt out” of getting future marketing from us. </p>

                            <div className="Privacy_head3">
                                <p> Other Uses </p>
                            </div>

                            <p> For any other reason we may tell you about from time to time. </p>

                            <div className="Privacy_head2">
                                <p> WHEN AND WITH WHOM WE SHARE YOUR DATA  </p>
                            </div>

                            <p> We may share the data described in the “Data We Collect About You” section with the following categories of service providers and third parties: </p>

                            <p> With Other Users of our Services with Whom You Interact </p>

                            <ul>
                                <li> With other users of our Services with whom you interact through your own use of our Services. For example, we may share data with the person(s) with whom you transact when you make or accept a participation in a Susu Group using our Services. This helps them know they’re getting activity origination from you (or that you requested an activity from them). </li>
                            </ul>

                            <p> With our Affiliates </p>

                            <ul>
                                <li> With our corporate affiliates, for the reasons outlined above. For example, we may share your data internally to understand how you engage with My Susu Inc. company products to help make our Services better for you and for everyone, and to help us build Services tailored to your preferences. </li>
                            </ul>

                            <p> With our Service Providers </p>
                            <ul>
                                <li> With service providers who help us provide, maintain, and improve our Services (e.g., vendors who help us with fraud prevention, identity verification, and fee collection services), as well as financial institutions, payment networks, payment card associations, credit bureaus, brokers, and other entities in connection with your payment, money transfer process, activities, or otherwise to help us provide the Services; </li>
                                <li> With service providers that help us run our advertising campaigns, events, special offers, or other events or activities. </li>
                                
                            </ul>

                            <p> Business Transfers and Corporate Changes </p>
                            <ul>
                                <li> To a subsequent owner, co-owner, or operator of one or more of the Services; or </li>
                            </ul>

                            <p>If we attempt a corporate merger, consolidation, or restructuring (including during due diligence and negotiation of these); the sale of substantially all of our stock and/or assets; the financing, acquisition, divestiture, or dissolution of all or a portion of our business; or other corporate change. </p>

                            <p> Safety and Compliance with Law </p>

                            <ul>
                                <li>If we believe that disclosure is reasonably necessary (i) to comply with any applicable law, regulation, legal process or governmental request (e.g., from creditors, tax authorities, law enforcement agencies, in response to a garnishment, levy, or lien Policy, etc.); (ii) to establish, exercise or defend our legal rights; (iii) to enforce or comply with our Terms of Usage or other applicable agreements or policies; (iv) to protect our rights  or users rights or property, or the security or integrity of our Services; (v) for an investigation of suspected or actual illegal activity; or (vi) to protect us, users of our Services or the public from harm, fraud, or potentially prohibited or illegal activities. </li>
                            </ul>

                            <p> With Your Consent </p>
                            <ul>
                                <li> With your consent. For example: 
                                    <ul>
                                        <li> At your direction or as described at the time you agree to share; </li>
                                        <li> When you authorize a third party application or website to access your data. </li>
                                    </ul>
                                </li>
                            </ul>

                            <p> With Others </p>
                            <ul>
                                <li> With other companies who deliver services on our behalf, including via the use of cookies and similar automated technologies, and third party analytics. </li>
                            </ul>
                            <p> Aggregated and Anonymized Data </p>
                            <ul>
                                <li> We also may share (within our group of affiliates, or with service providers or other third parties) aggregated and anonymized data that does not specifically identify you or any individual user of our Services. </li>
                            </ul>

                            <div className="Privacy_head2">
                                <p> COOKIES AND OTHER SIMILAR AUTOMATED TECHNOLOGIES   </p>
                            </div>

                            <p> When you interact with our online services, or open emails we send you, we may obtain certain data using automated technologies, such as cookies, web server logs, web beacons, and other technologies. A “cookie” is a text file that websites send to a visitor’s computer or other internet-connected device to uniquely identify the visitor’s browser or to store data or settings in the browser. A “web beacon,” also known as an internet tag, pixel tag, or clear GIF, is a tiny graphic image that may be used in our websites or emails. </p>

                            <p> We use these automated technologies to collect your device data, internet activity data, and inferences as described above. These technologies help us to: </p>

                            <ul>
                                <li> Remember your data so you do not have to re-enter it; </li>
                                <li> Track and understand how you use and interact with our online services and emails;  </li>
                                <li> Tailor our online services to your preferences. </li>
                                <li> Measure how useful and effective our services and communications are to you; and  </li>
                                <li> Otherwise manage and enhance our products and services.  </li>
                            </ul>

                            <p> We may set some of these automated technologies ourselves, but others may be set by third parties who deliver services on our behalf. For example, we may use other companies’ web analytics services which use automated technologies to help us evaluate how customers use of our websites. </p>

                            <p> Your browser can alert you when cookies are placed on your device, and how you can stop or disable them via your browser settings. Please note, however, that without cookies all of the features of our online services may not work properly. If you use a mobile device, you can manage how your device and browser share certain device data by changing the privacy and security settings on your mobile device. You can learn more about cookies and how to manage your preferences by visiting <a href="http://www.allaboutcookies.org/">http://www.allaboutcookies.org.</a> </p>


                            <div className="Privacy_head2">
                                <p> HOW LONG WE KEEP YOUR DATA  </p>
                            </div>

                            <p> We generally keep your data as long as reasonably necessary to provide you the Services or to comply with applicable law. However, even after you deactivate your account, we can retain copies of data about you and any transactions or Services in which you may have participated for a period of time that is consistent with applicable law, applicable statute of limitations or as we believe is reasonably necessary to comply with applicable law, regulation, legal process, or governmental request, to detect or prevent fraud, to collect fees owed, to resolve disputes, to address problems with our Services, to assist with investigations, to enforce our Terms of Usage or other applicable agreements or policies, or to take any other actions consistent with applicable law. </p>




                            <div className="Privacy_head2">
                                <p> YOUR CHOICES </p>
                            </div>	

                            <p> Personal Data <br />You can access, change, or correct data that you have provided by logging into your My Susu Inc account at any time or by making a request to us using the contact details below. We will need to verify your identity before granting access or otherwise changing or correcting your data. </p> 

                            <p> Deactivating Your Account </p>

                            <p> If you wish to deactivate your account, you can do so at any time by logging into your My Susu Inc. account and visiting the support section of https://www.susuinc.com. </p>

                            <p> If you would like to have your account closed permanently, please contact us at https://www.susuinc.com. </p>

                            <p> Location Data </p>

                            <p> In order to provide certain Services, we may require access to location data, including precise geolocation data collected from your device. If you do not consent to collection of this data, certain Services will not function properly and you will not be able to use those Services. You can stop our collection of location data at any time by changing the preferences on your mobile device. If you do so, some of our mobile applications may no longer function. You also may stop our collection of location data via mobile application by following the standard uninstall process to remove My Susu Inc mobile applications from your device. </p>

                            <p> Do Not Track </p>

                            <p> Certain web browsers allow you to instruct your browser to respond to Do Not Track (“DNT”) signals to website you visit, informing those sites that you do not want your online activities to be tracked. At this time, our websites may not be designed to respond to DNT signals or similar mechanisms from browsers. </p>
        
                            <p> Promotional Communications </p>

                            <p> You can opt out of receiving in-app push notifications containing promotional messages from us by following the instructions on screen or by following the instructions in those messages. If you decide to opt out, we may still send you non-promotional communications in-app, or via email and text, such as transaction receipts and messages about your account, or our processing of your data in accordance with the provision of our Services. </p>

                            <div className="Privacy_head2">
                                <p> RIGHTS OF CALIFORNIA RESIDENTS  </p>
                            </div>

                            <p> If you live in California, the following additional rights apply to you. </p>	

                            <p> Right to Know</p>

                            <p> You may have the right to request, up to twice in a 12-month period, to see the following data about the personal data we have collected about you during the past 12 months: </p>

                            <ul>
                                <li> The categories and specific pieces of personal data we have collected about you; </li>
                                <li> The categories of Origins from which we collected the personal data; </li>
                                <li> The business or commercial purpose for which we collected the personal data; </li>
                                <li> The categories of third parties with whom we shared the personal data; and </li>
                                <li> The categories of personal data about you that we disclosed for a business purpose, and the categories of third parties to whom we disclosed that data for a business purpose. </li>
                            </ul>

                            <p> To request the specific pieces of personal data we have collected about you, see “How to exercise your rights” below. You may find all of the other data listed above in this Privacy Policy. </p>

                            <p> California law gives you the right to ask if we disclose your personal data to third parties for their direct marketing purposes (we do not disclose your personal data for others’ direct marketing purposes). It also gives you the right to ask if we sell your personal data to third parties (we do not sell your personal data), and if we did (which we don’t), you’d have the right to opt out of such sales.</p>

                            <p> Right of Deletion </p>

                            <p> You have the right to ask us to delete the personal data we have collected from you (subject to exceptions the law provides). Please note that you may no longer be able to use our Services if you delete your personal data. </p>

                            <p> Right of Non-Discrimination </p>

                            <p> You have the right to not be discriminated against if you exercise these privacy rights. We will not discriminate against you, deny, charge different prices for, or provide a different quality of goods or services if you choose to exercise these rights. </p>

                            <p> How to Exercise Your Rights </p>

                            <p> If you live in California and would like to send us a request to exercise one of your above rights, you may do so online at https://www.susuinc.com, or by contacting us as indicated in the “How to Contact Us” section below. </p>

                            <p> To help protect your privacy and maintain security, we take steps to verify your identity and will require you to be logged in to your My Susu Inc. account before granting you access to your personal data or complying with your request. </p>

                            <p> You may designate an authorized agent to make a request on your behalf as permitted under law, though before we process that request, we will require that you provide the authorized agent written permission to do so and verify your identity directly with us.</p>

                            <p> To the extent permitted by applicable law, we may charge a reasonable fee to comply with your request. </p>

                            <div className="Privacy_head2">
                                <p> CHILDREN’S PERSONAL DATA  </p>
                            </div>

                            <p> Our Services are general audience services not directed at children under the age of 13. All End Users that are created, with the exception of Receive Only, must be at least 18 years old in order to create an account. If we learn that any data we collect has been provided by a child under the age of 13, we will promptly delete that data. </p>

                            <div className="Privacy_head2">
                                <p> HOW WE SECURE DATA  </p>
                            </div>

                            <p> We take reasonable measures, including administrative, technical, and physical safeguards, to protect your data from loss, theft, and misuse, and unauthorized access, disclosure, alteration, and destruction. Nevertheless, the internet is not a 100% secure environment, and we cannot guarantee absolute security of the transmission or storage of your data. We hold data about you both at our own premises and with the assistance of third-party service providers. </p>

                            <p> For more data about our security practices, please visit https://www.susuinc.com. </p>


                            <div className="Privacy_head2">
                                <p> STORAGE AND PROCESSING  </p>
                            </div>

                            <p> We may use third-party service providers to, process and store your data in the United States, and other countries. </p>

                            <div className="Privacy_head2">
                                <p> CHANGES TO THIS PRIVACY POLICY   </p>
                            </div>

                            <p> We may amend this Privacy Policy from time to time by posting a revised version and updating the “Effective Date” above. The revised version will be effective on the “Effective Date” listed. We will provide you with reasonable prior Policy of material changes in how we use your data, including by email, if you have provided one. If you disagree with these changes, you may cancel your account at any time. If you keep using our Services, you consent to any amendment of this Privacy Policy.  </p>

                            <div className="Privacy_head2">
                                <p> HOW TO CONTACT US </p>
                            </div>

                            <p> Please contact our privacy team with any questions or concerns regarding this Privacy Policy: My Susu Inc at privacy@susuinc.com  </p>

                            <p> If you have any questions or concerns regarding our Privacy Policy, or if you believe our privacy Policy or applicable laws relating to the protection of your personal data have not been respected, you may file a complaint with our privacy team listed above. We will respond to let you know when you can expect a further response. We may request additional details from you regarding your concerns and may need to engage or consult with other parties in order to investigate and address your issue. We may keep records of your request and any resolution. </p>
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

