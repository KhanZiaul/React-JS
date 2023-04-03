import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav className='anchor'>

            {/* Router Normal Link */} 

            {/* <Link className="nav-link" to={'/'}>Home</Link>
            <Link className="nav-link" to={'/contact'}>Contact</Link>
            <Link className="nav-link" to={'/about'}>About</Link> */}

              {/* Router Nav Link */} 

            <NavLink className="nav-link" to={'/'}>Blogs</NavLink>
            <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
            <NavLink className="nav-link" to={'/about'}>About</NavLink>

        </nav>
    );
};

export default Nav;