// Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <header>
            <a className='logo' href="/">Code Chronicles</a>
            <nav>
                <a href="/login">Login</a>
                <a href="/register">Register</a>

            </nav>
        </header>

    );
};

export default Navbar;
