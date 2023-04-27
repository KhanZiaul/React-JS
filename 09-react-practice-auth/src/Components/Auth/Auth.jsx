import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';

export const parentAuth = createContext(null)

const Auth = ({ children }) => {

    const auth = getAuth(app);

    const [isUser, setIsUser] = useState({})
    const [isLoading, setloading] = useState(true)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function resetUserPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function signIn(email, password) {

        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {

        return signOut(auth)
    }

    const info = {
        isUser,
        isLoading,
        createUser,
        resetUserPassword,
        signIn,
        logOut
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsUser(user)
            setloading(false)
        });
        return  ()=>{
            unsubscribe()
        }
    },[])

    return (
        <parentAuth.Provider value={info}>
            {
                children
            }
        </parentAuth.Provider>
    );
};

export default Auth;