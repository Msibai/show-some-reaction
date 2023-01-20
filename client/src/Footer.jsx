import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <footer className="footer">
                <nav>
                    <a href="#" className="footer-logo">
                        <img className="logo" alt="logo" src="src/images/logo.jpg"/>
                    </a>
                    <p className="copyright">
                        Copyright &copy; <span className="year">2023</span> by Show some REACTion
                    </p>
                </nav>

                <nav>
                    <p className="footer-heading">Follow us</p>
                    <ul className="footer-icons">
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <FaFacebook/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <FaInstagram/>
                            </a>
                        </li>
                        <li>
                            <a className="footer-link" href="#"
                            >
                                <FaTwitter/>
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <p className="footer-heading">Account</p>
                    <ul className="footer-nav">
                        <li><a className="footer-link" href="#">Create account</a></li>
                        <li><a className="footer-link" href="#">Sign in</a></li>
                    </ul>
                </nav>
            </footer>

        </>
    )
}

export default Footer