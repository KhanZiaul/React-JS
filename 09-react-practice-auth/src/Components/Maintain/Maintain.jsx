import React, { useContext } from 'react';
import { parentAuth } from '../Auth/Auth';
import { Navigate } from 'react-router-dom';

const Maintain = ({ children }) => {
    const { isUser } = useContext(parentAuth)
    if (isUser) {
        return children ;
    }

    return <Navigate to='/login'> </Navigate>
};

export default Maintain;