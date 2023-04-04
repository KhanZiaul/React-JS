import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const loader = useNavigate()
    return (
        <div>
            <Nav></Nav>
            <div>{loader.state === 'loading' && 'loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;