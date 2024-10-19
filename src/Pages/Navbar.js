/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Navbar.css';
import '../styles/all.css';
import '../App.css';
import { Link } from 'react-router-dom';




export default function Navbar(props) {
    return (
            <>
                {/* Navbar */}
                <nav id="navbar">
                    <ul className="navbar-items flexbox-col">
                        <li className="navbar-logo flexbox-left">
                            <a className="navbar-item-inner flexbox">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    viewBox="0 0 1438.88 1819.54"
                                >
                                    <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
                                    <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
                                </svg>
                            </a>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <a className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-magnifying-glass"></i>
                                </div>
                                <span className="link-text">Search</span>
                            </a>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <Link to='/Home' className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-home"></i>
                                </div>
                                <span className="link-text">Home</span>
                            </Link>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <Link to='/Projects' className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-folder"></i>
                                </div>
                                <span className="link-text">Projects</span>
                            </Link>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <Link to='/Dashboard' className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-chart-pie"></i>
                                </div>
                                <span className="link-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <Link to='/Teams' className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-screen-users"></i>
                                </div>
                                <span className="link-text">Our Team</span>
                            </Link>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <Link to='/Contact' className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-message-lines"></i>
                                </div>
                                <span  className="link-text">Contact Us</span>
                            </Link>
                        </li>
                        <li className="navbar-item flexbox-left">
                            <a className="navbar-item-inner flexbox-left">
                                <div className="navbar-item-inner-icon-wrapper flexbox">
                                <i className="fa-light fa-user-plus"></i>
                                </div>
                                <span className="link-text">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Main */}
                {/* <main id="main" className="flexbox-col">

                </main> */}
                <div>
                    {props.location}
                </div>
            </>
    );
}
