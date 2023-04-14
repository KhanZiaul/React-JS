import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [users, setUser] = useState(null)

    const googleHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log('error ', error)
            })
    }

    const githubHandler = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    const signOutHandler = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            }).catch((error) => {
                console.log('error', error.message)
            });
    }

    return (
        <div className='flex justify-center gap-10 my-10'>
            {
                users ? <button className='bg-sky-500 text-white px-5 py-3 rounded-md hover:text-sky-700' onClick={signOutHandler}>sign out</button> :
                    <div className='flex gap-6'>
                        <button className='bg-sky-500 text-white px-5 py-3 rounded-md hover:text-sky-700' onClick={googleHandler}>Log In Google</button>
                        <button className='bg-sky-500 text-white px-5 py-3 rounded-md hover:text-sky-700' onClick={githubHandler}>Log In Github</button>
                    </div>
            }
        </div>
    );
};

export default Login;