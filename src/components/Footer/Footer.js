import React from 'react'
import logo from '../../images/logo.jpg'
import '../Footer/Footer.css'
import facebookIcon from '../../icons/facebook.svg'
import instaIcon from '../../icons/insta.svg'
import twitterIcon from '../../icons/twitter.svg'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div id="footer">
            <footer className="footer notranslate">
                <div className="container">
                    <div className="row">
                        <div className="footer-col first">
                            <div className="flex">
                                <img
                                    src={logo}
                                    height={75}
                                    width={75}
                                    alt=""
                                    style={{ borderRadius: "100%" }}
                                />
                                <h4 className="white-txt my-auto ms-2 font-weight-bold">
                                    KANNADA VEDIKE
                                </h4>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p>
                                        NH 66, Srinivasnagar
                                        <br /> Surathkal, Mangalore
                                        <br /> Karnataka 575025
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="white-txt"> 8989898989</span>
                                        <br />{" "}
                                        <a className="white-txt" href="mailto:kannadavedike@nitk.ac.in">
                                            kannadavedike@nitk.ac.in
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="index.html#about">About us</a>
                                </li>
                                <li>
                                    <a href="events.html">Events</a>
                                </li>
                                <li>
                                    <a href="social.html">Social Activities</a>
                                </li>
                                <li>
                                    <a href="#">alumni</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="https://m.facebook.com/kannadavedikenitk/" target="_blank">
                                    <img src={facebookIcon} alt="" height={40} width={40} />
                                </a>
                                <a
                                    href="https://www.instagram.com/kannadavedike_nitk/"
                                    target="_blank"
                                >
                                    <img src={instaIcon} alt="" height={40} width={40} />
                                </a>
                                <a href="https://twitter.com/kv_nitk" target="_blank">
                                    <img src={twitterIcon} alt="" height={40} width={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="lstFooter" className="flex notranslate">
                <span style={{ color: "#afafaf" }}>
                    Copyright All Rights Reserved 2021, Kannada Vedike
                </span>
                <span style={{ color: "#afafaf" }}>
                    Made with ❤️ by
                    <a href="https://github.com/SaikiranPatil" target="_blank">
                        KV Web Team
                    </a>
                </span>
            </div>
        </div>

    )
}

export default Footer