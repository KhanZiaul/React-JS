import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav className='anchor'>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    );
};

export default Nav;