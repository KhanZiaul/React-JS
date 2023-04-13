import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log(app)

    const [users,setUser] = useState(null)

    const googleHandler = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log('error ', error)
            })
    }

    const signOutHandler = () => {
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex justify-center gap-10 my-10'>
           {
             users ? <button className='bg-sky-500 text-white px-5 py-3 rounded-md hover:text-sky-700' onClick={signOutHandler}>sign out</button> :  <button className='bg-sky-500 text-white px-5 py-3 rounded-md hover:text-sky-700' onClick={googleHandler}>Log In</button>
           }
        </div>
    );
};

export default Login;