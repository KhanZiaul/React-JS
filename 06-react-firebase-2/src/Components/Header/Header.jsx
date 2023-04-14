import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center gap-10 mt-10 text-xl font-bold'>
            <Link className='bg-sky-500 text-white p-3' to='/signin'>Sign In</Link>
            <Link className='bg-sky-500 text-white p-3' to='/signup'>Sign Up</Link>
        </div>
    );
};

export default Header;