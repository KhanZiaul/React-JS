import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/Firebase';

export const parentAuth = createContext(null)

const Auth = ({children}) => {
    const auth = getAuth(app);

    function createUser(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function resetUserPassword(email){
        return sendPasswordResetEmail(auth, email)
    }



    const info = {
        user:'khan zia',
        createUser,
        resetUserPassword

    }

    return (
        <parentAuth.Provider value={info}>
            {
                children
            }
        </parentAuth.Provider>
    );
};

export default Auth;