import React from 'react'
import './App.css';

const Navbar = () => {
    return (
        <>
            <div className='navigationBar'>
                <h3> Logo </h3>
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