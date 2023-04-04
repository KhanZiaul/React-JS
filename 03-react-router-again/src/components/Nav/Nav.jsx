import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='flex justify-around bg-black text-white p-5 cursor-pointer'>
            {/* <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/root">Router</a> */}
            
            <Link to="/">Home</Link>
            <Link to="/datas">Datas</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/root">Router</Link>
        </nav>
    );
};

export default Nav;