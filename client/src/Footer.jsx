import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BrowserRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <nav>
          <a href="#" className="footer-logo">
            <img className="logo-footer" alt="logo" src="src/images/logo.jpg" />
          </a>
          <p className="copyright">
            Copyright &copy; <span className="year">2023</span> by Show some
            REACTion
          </p>
        </nav>

        <nav>
          <p className="footer-heading">Follow us</p>
          <ul className="footer-icons">
            <li>
              <a className="footer-icon" href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className="footer-icon" href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="footer-icon" href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <button className="footer-link">Sign Up</button>
            </li>
            <li>
              <button className="footer-link">Sign In</button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
