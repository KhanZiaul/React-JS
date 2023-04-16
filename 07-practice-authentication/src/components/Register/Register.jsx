import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const Register = () => {

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    function googleHandler() {
        console.log('click')

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user)
            }).catch((error) => {

                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Register</h1>
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div>
                                <p><small>Already have an account ? </small> <Link to='/login' className='text-blue-600 underline hover:text-blue-800 cursor-pointer'>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-between items-center gap-20 my-10'>
                        <img onClick={googleHandler} className='w-16 h-16 border-2 border-red-500 cursor-pointer hover:border-red-900' src="https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                        <img className='w-16 h-16 border-2 border-red-500 cursor-pointer hover:border-red-900' src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;