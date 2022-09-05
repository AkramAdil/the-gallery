import React from 'react';
import logo from '../pics/logo.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to='/'><img className="logo"src={logo} alt="logo"/></Link>
    );
};

export default Logo;