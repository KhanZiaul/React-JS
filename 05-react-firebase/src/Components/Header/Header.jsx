import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center mt-10 gap-10'>
            <Link className='text-xl font-bold'to='/'>Home</Link>
            <Link className='text-xl font-bold'to='/login'>Login</Link>
        </div>
    );
};

export default Header;