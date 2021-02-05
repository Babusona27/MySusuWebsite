import React from 'react'
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    componentDidMount(){

    }
    render() {

        return (
            <div>
                {/* Navbar */}
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                    <div className="container">
                        {/* Brand */}
                        <Link to={{ pathname: '/' }}><img className="site_logo" src="assets/images/Logo.png" width="94px" alt=""></img><img className="site_logo_mobile" src="assets/images/Logo.png"></img></Link>
                        {/* Collapse */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        {/* <img src="assets/https://img.icons8.com/material-rounded/24/000000/menu--v3.png"/> */}
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        {/* Links */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left */}
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                {/* <a style="color: #474C79;" className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                                </a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a style={{ color: '#474C79' }} className="nav-link" href="index.html">Home</a> */}
                                <Link to={{ pathname: '/' }} className="nav-link" style={{ color: '#474C79' }}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a style={{ color: '#474C79' }} className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" target="_blank">Who We Are</a> */}
                                <Link to={{ pathname: '/' }} className="nav-link dropdown-toggle" style={{ color: '#474C79' }}>Who We Are</Link>
                                <div className="dropdown-menu show">
                                    {/* <a href="Who_we_are.html" className="dropdown-item"> Out Story</a> */}
                                    <Link  to={{ pathname: '/who_we_are' }} className="dropdown-item">Our Story</Link>
                                    {/* <a href="Who_we_are.html#our_values" className="dropdown-item"> Our Values</a> */}
                                    <Link  to={{ pathname: '/our_valus'  }} className="dropdown-item">Our Values</Link>               
                                </div>
                            </li>
                            <li className="nav-item">
                                {/* <a style={{ color: '#474C79' }} className="nav-link" href="Resources.html">Resources</a> */}
                                <Link to={{ pathname: '/resources' }} className="nav-link" style={{ color: '#474C79' }}>Resources</Link>
                            </li>
                            <li className="nav-item">
                               
                                <Link to={{ pathname: '/community' }} className="nav-link" style={{ color: '#474C79' }}>Community</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a style={{ color: '#474C79' }} className="nav-link" href="faq.html">FAQ</a> */}
                                <Link to={{ pathname: '/faq' }} className="nav-link" style={{ color: '#474C79' }}>FAQ</Link>
                            </li>
                            </ul>
                            {/* Right */}
                            <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a href="#"><img src="assets/images/android.png" alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><img src="assets/images/apple.png" alt="" /></a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
            </div>

        )
    }
}
