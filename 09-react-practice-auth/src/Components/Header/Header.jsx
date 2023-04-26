import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300 px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex gap-5">
                    <Link to='/about'>About Us</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/private'>Private</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;