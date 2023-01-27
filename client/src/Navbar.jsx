import React from 'react'
import './App.css';
import logo from './images/logo.jpg'
import {Link} from "react-router-dom";

const Navbar = () => {
    function goToLogin(){
        window.open('/Login','_self');
    }

    return (
        <>
            <div className='navigationBar'>
                <img className='logo' src={logo}></img>
                <h1 className='pageTitle'> Show some REACTion </h1>
                <div className='navLinks'>
                    <button onClick={goToLogin} className="navLink"> LogIn</button>

                </div>
            </div>

        </>
    )
}

export default Navbar;