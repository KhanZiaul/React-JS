import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-500 text-white px-10">
                <div className="flex-1">
                    <Link className="btn btn-primary normal-case text-xl">Login Form</Link>
                </div>
                    <div className="flex gap-8">
                        <Link >Profile </Link>
                        <Link>Register</Link>
                        <Link>Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default Header;