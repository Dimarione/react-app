import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className = {classes.header}>
            <img className = {classes.logo_img} src = 'https://upload.wikimedia.org/wikipedia/commons/1/1c/DC_Comics_logo.png'
                 alt = 'logo'/>
        </header>
    );
}

export default Header;