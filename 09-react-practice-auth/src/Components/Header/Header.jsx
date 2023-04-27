import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { parentAuth } from '../Auth/Auth';

const Header = () => {
    const { isUser, logOut } = useContext(parentAuth)

    function logOutHandler() {
        logOut().then(() => {
        }).catch((error) => {
        });
    }
    return (
        <div>
            <div className="navbar bg-base-300 px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex gap-5">
                    {
                        isUser ?
                            <div className='flex items-center gap-5'>
                                <p> {isUser.email}</p>
                                <button onClick={logOutHandler} className='px-4 py-2 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-900'>sign out</button>
                            </div>
                            :
                            <Link to='/login'>
                                <button className='px-4 py-2 rounded-xl bg-blue-600 text-white cursor-pointer hover:bg-blue-900'>sign in</button>
                            </Link>
                    }
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