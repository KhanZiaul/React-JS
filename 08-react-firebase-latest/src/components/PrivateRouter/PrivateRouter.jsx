import React, { useContext } from 'react';
import { AppsContext } from '../AppContext/AppContext';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {loginEmail} = useContext(AppsContext)

    if(loginEmail) {

        return children ;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRouter;