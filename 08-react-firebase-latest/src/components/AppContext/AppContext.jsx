import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AppsContext = createContext(null)
const auth = getAuth(app);

const AppContext = ({children}) => {
    // const [users,setUsers] = useState({})

    const createUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUser = (email,password) =>{

        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const resetUserPassword = (email) =>{

        return sendPasswordResetEmail(auth,email)
    }

    const users = {
        name:'khan zia',
        createUser,
        signUser,
        resetUserPassword
    }

    return (
        <AppsContext.Provider value={users}>
            {children}
        </AppsContext.Provider>
    );{}
};

export default AppContext;