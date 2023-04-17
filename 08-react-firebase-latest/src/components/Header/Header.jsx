import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppsContext } from '../AppContext/AppContext';

const Header = () => {

    const { loginEmail } = useContext(AppsContext)

    return (
        <div>
            <div className="navbar bg-slate-500 text-white px-10">
                <div className="flex-1">
                    <Link className="btn btn-primary normal-case text-xl">Login Form</Link>

                </div>
                <div className="flex gap-8">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                    <Link>Profile </Link>
                    <div>
                        {loginEmail ?
                            <div className='flex items-center gap-5'>
                                <p>{loginEmail.email}</p>
                                <button className='bg-sky-700 px-4 py-2 rounded-md'>Sign Out</button>
                            </div>
                            :
                            <Link to='/login' className='bg-sky-700 px-4 py-2 rounded-md'>Log in</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;