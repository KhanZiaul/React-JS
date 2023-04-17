import React, { useContext } from 'react';
import { AppsContext } from '../AppContext/AppContext';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {loginEmail , loading} = useContext(AppsContext)

    if(loading){
        
        return <progress className="progress w-56"></progress>
    }

    if(loginEmail) {

        return children ;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRouter;