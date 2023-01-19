import React from 'react'
import './App.css';
import logo from './images/logo.jpg'

const Navbar = () => {
    return (
        <>
            <div className='navigationBar'>
                <img className="logo" src={logo}></img>
                <h1> Show some REACTion </h1>
                <div className="navLinks">
                    <a href='/' className='headerLink' id='logIn'> Log in</a>
                    <a href='/' className='headerLink' id='signUp'>Sign up</a>
                </div>
            </div>

        </>
    )
}

export default Navbar;