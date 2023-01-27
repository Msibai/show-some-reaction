
import React from 'react'
import './App.css';
import logo from './images/logo.jpg'
import {person} from 'react-icons-kit/ionicons/person';
import {androidPerson} from 'react-icons-kit/ionicons/androidPerson'
import {androidCreate} from 'react-icons-kit/ionicons/androidCreate'
import {androidContact} from 'react-icons-kit/ionicons/androidContact'
import {logOut} from 'react-icons-kit/ionicons/logOut'
import {logIn} from 'react-icons-kit/ionicons/logIn'
import {personAdd} from 'react-icons-kit/ionicons/personAdd'
import {BrowserRouter, Link, useNavigate} from "react-router-dom";
import {Icon} from "react-icons-kit";


function SignUp() {
    window.open("Register", "_self");}
    const goToLogOut = () => {
    }

    function goToLogin() {

        window.open('/Login', '_self');
    }

    function goToProfile(){
        window.open('/', '_self');
    }
    function goToMyPages(){
        window.open('/', '_self');
    }
    function goToHome(){
        window.open('/', '_self');
    }

const Navbar = () => { let auth = true;
    return (
        <BrowserRouter>
        <>
            <div className='navigationBar'>
                <img className='logo' src={logo} onClick={goToHome}></img>
                <h1 className='pageTitle'> Show some REACTion </h1>
                {
                    auth ?
                        <div className='navLinks'>
                            <button onClick={goToMyPages} className="navLink"><span className="nav-icon">  <Icon icon={androidCreate} size={25}></Icon></span> My Pages</button>
                            <button onClick={goToProfile} className="navLink"><span className="nav-icon"> <Icon icon={androidContact} size={25}></Icon></span> My Profile</button>
                            <button onClick={goToLogOut} className="navLink"><span className="nav-icon"><Icon icon={logOut} size={25}></Icon></span> Log out</button>
                            <div className= "user-profile-icon-container"><Icon  className="profile-icon" icon={androidPerson} size={105}></Icon>
                            <h3 className="logged-user" > User </h3></div>

                        </div>
                        :
                        <div className='navLinks'>

                    <button onClick={goToLogin} className="navLink"><span className="nav-icon"><Icon icon={logIn} size={25}></Icon></span> LogIn</button>
                            <button onClick={SignUp} className="navLink"><span className="nav-icon" id="signUp"><Icon icon={personAdd} size={25}></Icon></span> SignUp</button> </div>
                    }

                </div>

</>
        </BrowserRouter>
    )}

export default Navbar;
