import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AppsContext = createContext(null)
const auth = getAuth(app);

const AppContext = ({children}) => {
    // const [users,setUsers] = useState({})

    const createUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const users = {
        name:'khan zia',
        createUser
    }

    return (
        <AppsContext.Provider value={users}>
            {children}
        </AppsContext.Provider>
    );{}
};

export default AppContext;