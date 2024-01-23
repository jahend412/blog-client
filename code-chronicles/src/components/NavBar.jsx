// Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav>
                <a className='logo' href="/">Code Chronicles</a>
                <div id="nav-1">
                    <a className='login' href="/login">Login</a>
                    <a className='register' href="/register">Register</a>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;
