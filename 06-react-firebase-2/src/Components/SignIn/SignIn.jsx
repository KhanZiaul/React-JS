import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const SignIn = () => {

    const auth = getAuth(app);
    const [successful, setSuccessful] = useState('')

    const emailRef = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        setSuccessful('')
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, Password)

        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSuccessful('Successfully done')
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setSuccessful('')
            });

        e.target.reset()
    }

    const resetPasswordHandler = () => {

        const email = emailRef.current.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Checkout your Email')
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        console.log(emailRef.current.value)
    }

    return (
        <>
            <form className='flex flex-col justify-center items-center my-10 gap-3 w-[25%] mx-auto border-2 p-5 bg-slate-300 rounded-md' onSubmit={handleSubmit}>
                <h2 className='text-xl font-medium'>Please sign in</h2>
                <input ref={emailRef} className='border-2 px-4 py-2 block border-red-400' name='email' type="email" placeholder='Your email' required />
                <br />
                <input className='border-2 px-4 py-2  border-red-400' name='password' type="password" placeholder='Your password' required />
                <p className='py-3 text-green-600'>{successful}</p>
                <button className='px-5 py-3 rounded-lg mt-5 bg-sky-500 text-white'>submit</button>
                <p>are you forget password ? <button className='text-blue-500 underline hover:text-blue-700' onClick={resetPasswordHandler}>Reset password</button></p>
                <p>don't sign up yet ? please<Link className='text-blue-700 ms-2' to='/signup'>sign up</Link></p>
            </form>
        </>
    );
};

export default SignIn;