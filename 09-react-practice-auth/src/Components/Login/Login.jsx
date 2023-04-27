import React, { useContext, useRef } from 'react';
import { parentAuth } from '../Auth/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { resetUserPassword, signIn } = useContext(parentAuth)
    const userReference = useRef()
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate();

    const path = location?.state?.from?.pathname || '/about'
    function formSubmit(e) {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        signIn(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(path)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
        e.target.reset()
    }

    function resetPass() {
        const Email = userReference.current.value
        resetUserPassword(Email)
            .then(() => {

                alert('Send Password Reset Email')
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold mb-7">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={formSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={userReference} name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a onClick={resetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;