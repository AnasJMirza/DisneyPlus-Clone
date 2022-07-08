import React from 'react';
import './Navbar.css';

import logo from '../../assets/images/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar-body'>
            <div className='navbar-logo'>
                <img src={logo} alt="Disney+" />
            </div>

            <div className='navbar-login-button'>
                Login
            </div>
        </div>
    );
};

export default Navbar;