import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AppsContext = createContext(null)
const auth = getAuth(app);

const AppContext = ({ children }) => {
    const [loginEmail, setloginEmail] = useState({})

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetUserPassword = (email) => {

        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setloginEmail(user)
        });

        return ()=>{
            unsubscribe()
        }
    }, [])

    function logOut(){

        return signOut(auth) ;
    }

    const users = {
        loginEmail,
        createUser,
        signUser,
        resetUserPassword,
        logOut
    }

    return (
        <AppsContext.Provider value={users}>
            {children}
        </AppsContext.Provider>
    ); { }
};

export default AppContext;