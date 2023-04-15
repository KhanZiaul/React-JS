import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const auth = getAuth(app);
    const [successful, setSuccessful] = useState('')

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


    return (
        <>
            <form className='flex flex-col justify-center items-center my-10 gap-3 w-[25%] mx-auto border-2 p-5 bg-slate-300 rounded-md' onSubmit={handleSubmit}>
                <h2 className='text-xl font-medium'>Please sign in</h2>
                <input className='border-2 px-4 py-2 block border-red-400' name='email' type="email" placeholder='Your email' required />
                <br />
                <input className='border-2 px-4 py-2  border-red-400' name='password' type="password" placeholder='Your password' required />
                <p className='py-3 text-green-600'>{successful}</p>
                <button className='px-5 py-3 rounded-lg mt-5 bg-sky-500 text-white'>submit</button>
                <p>don't sign up yet ? please<Link className='text-blue-700 ms-2' to='/signup'>sign up</Link></p>
            </form>
        </>
    );
};

export default SignIn;