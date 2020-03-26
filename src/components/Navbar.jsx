import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className = {classes.nav}>
            <div className = {classes.nav_item}>
                <a className = {`${classes.nav_link} ${classes.nav_link__active}` } href = '#'>Profile</a>
            </div>
            <div className = {classes.nav_item}>
                <a className = {classes.nav_link} href = '#'>Message</a>
            </div>
            <div className = {classes.nav_item}>
                <a className = {classes.nav_link} href = '#'>News</a>
            </div>
            <div className = {classes.nav_item}>
                <a className = {classes.nav_link} href = '#'>Music</a>
            </div>
            <div className = {classes.nav_item}>
                <a className = {classes.nav_link} href = '#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;