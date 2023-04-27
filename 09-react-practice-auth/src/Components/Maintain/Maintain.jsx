import React, { useContext } from 'react';
import { parentAuth } from '../Auth/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const Maintain = ({ children }) => {

    const location = useLocation()
    console.log(location)

    const { isUser, isLoading } = useContext(parentAuth)
    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (isUser) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace={true}> </Navigate>
};

export default Maintain;