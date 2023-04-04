import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <h2 className='text-6xl text-sky-700 text-center my-5'>Welcome</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;