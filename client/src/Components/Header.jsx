import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../css/header.css";
import { useState } from "react";
import Navbar from "./Navbar.jsx";

export default function () {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header>
        <div className="header-container">
          <div>
            <Link to="/">
              <img className="header-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="app-title">
            <h1>Show some REACTion</h1>
          </div>
          <div
            className={toggle ? "hamburger-lines clicked" : "hamburger-lines"}
            onClick={() => setToggle(!toggle)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <Navbar toggle={toggle} setToggle={setToggle} />
        </div>
      </header>
    </>
  );
}
