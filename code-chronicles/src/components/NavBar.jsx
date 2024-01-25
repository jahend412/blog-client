// Navbar.js
import { Link } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
    return (
        <header>
            <Link to="/">Code Chronicles</Link>
            <nav>
                <Link to="/login">Login </Link>
                <Link to="/register">Register</Link>

            </nav>
        </header>

    );
};

export default Navbar;
