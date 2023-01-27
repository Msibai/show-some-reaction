import React from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  window.open("Register", "_self");
}
function goToHome(){
    window.open('/','_self')
}
const Navbar = () => {return (
    <BrowserRouter>
      <>
        <div className="navigationBar">
          <img className="logo" src={logo} onClick={goToHome}></img>
          <h1 className="pageTitle"> Show some REACTion </h1>
          <div className="navLinks">
            <button className="navLink" id="logIn">
              {" "}
              Log in
            </button>
            <button onClick={SignUp} className="navLink" id="signUp">
              Sign up
            </button>{" "}
          </div>
        </div>
      </>
    </BrowserRouter>
  );
};

export default Navbar;
