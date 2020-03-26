import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-item'>
                <a className='nav-link' href='#'>Profile</a>
            </div>
            <div className='nav-item'>
                <a className='nav-link' href='#'>Message</a>
            </div>
            <div className='nav-item'>
                <a className='nav-link' href='#'>News</a>
            </div>
            <div className='nav-item'>
                <a className='nav-link' href='#'>Music</a>
            </div>
            <div className='nav-item'>
                <a className='nav-link' href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;