import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log(app)

    const googleHandler = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => {
            console.log('error ', error)
    })
    }

    const signOutHandler = () =>{


    }
    return (
        <div>
            <button onClick={googleHandler}>Log In</button>
            <button onClick={signOutHandler}>sign out</button>
        </div>
    );
};

export default Login;