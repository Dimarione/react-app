import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-item'>
                <a className='nav-item_link' href='#'>Profile</a>
            </div>
            <div className='nav-item'>
                <a className='nav-item_link' href='#'>Message</a>
            </div>
            <div className='nav-item'>
                <a className='nav-item_link' href='#'>News</a>
            </div>
            <div className='nav-item'>
                <a className='nav-item_link' href='#'>Music</a>
            </div>
            <div className='nav-item'>
                <a className='nav-item_link' href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;