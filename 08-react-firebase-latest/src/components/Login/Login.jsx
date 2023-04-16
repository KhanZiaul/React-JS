import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppsContext } from '../AppContext/AppContext';

const Login = () => {
    const { signUser, resetUserPassword } = useContext(AppsContext)
    const [successfully, setSuccessfully] = useState('')
    const userRef = useRef()

    function formSubmit(e) {
        e.preventDefault()
        setSuccessfully('')
        const Email = e.target.email.value;
        const Password = e.target.password.value;

        signUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setSuccessfully('Successfully Done')

            })
            .catch((error) => {
                const errorCode = error.code;

            });

        e.target.reset()
    }

    function fogotPassword() {
        if (!userRef.current.value) {
            alert('Please Enter Email')
            return;
        }

        const email = userRef.current.value;
        
        resetUserPassword(email)
            .then(() => {
                alert('Password Reset Email Send')
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Login</h1>
                    </div>
                    <form onSubmit={formSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={userRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" onClick={fogotPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div>
                                <p><small>Are you new ? </small> <Link to='/register' className='text-blue-600 underline hover:text-blue-800 cursor-pointer'>Register</Link></p>
                            </div>
                            <div >
                                <p className='text-green-600'>{successfully}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;