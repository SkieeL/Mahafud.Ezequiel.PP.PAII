import React from 'react';
import '../stylesheets/Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    return ( 
        <header>
            <img alt='Logo Valorant' src={logo}></img>
        </header>
    );
}

export default Header;