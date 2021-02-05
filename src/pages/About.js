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

            <motion.div exit={{ opacity: 0 }}>
                <Header />
                {/* <!--end banner--> */}
                <section className="upcoming_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="tittle">
                                    <h3>About Page </h3>
                                    <h5>About Page About Page About Page About Page About Page </h5>
                                </div>
                            </div>
                        </div>
                        {/* <!--end tittle--> */}

                    </div>
                </section>
                


                <Footer />
                {/* <!--end footer--> */}




                </motion.div> 
        )
    }
}

