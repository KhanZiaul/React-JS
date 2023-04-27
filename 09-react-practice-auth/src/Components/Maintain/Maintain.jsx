import React, { useContext } from 'react';
import { parentAuth } from '../Auth/Auth';
import { Navigate } from 'react-router-dom';

const Maintain = ({ children }) => {
    const { isUser , isLoading} = useContext(parentAuth)
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    if (isUser) {
        return children ;
    }

    return <Navigate to='/login'> </Navigate>
};

export default Maintain;