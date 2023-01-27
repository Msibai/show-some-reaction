import React from 'react'
import './App.css';
import logo from './images/logo.jpg'
import {BrowserRouter, Link, NavLink, useNavigate} from "react-router-dom";




const Navbar = () => {
    return (
        <BrowserRouter>
        <>
            <div className='navigationBar'>
                <img className='logo' src={logo}></img>
                <h1 className='pageTitle'> Show some REACTion </h1>
                <div className='navLinks'>
                    <button  className='navLink' id='logIn'> Log in</button>
                    <Link to='Register'> <button  className='navLink' id='signUp'>Sign up</button> </Link>
                </div>
            </div>

        </>
        </BrowserRouter>
    )
}

export default Navbar;