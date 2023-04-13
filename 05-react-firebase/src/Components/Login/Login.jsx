import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const googleHandler = () => {
        console.log('clock')
    }

    return (
        <div>
            <button onClick={googleHandler}>Log In</button>
        </div>
    );
};

export default Login;