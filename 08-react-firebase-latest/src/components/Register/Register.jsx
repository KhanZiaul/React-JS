import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppsContext } from '../AppContext/AppContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {name , createUser}= useContext(AppsContext)

    function formSubmit(e) {
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;

        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                userProfileUpdate(userCredential.user, Name)
                userEmailVerification(userCredential.user)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

            e.target.reset()
    }

 
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Register</h1>
                    </div>
                    <form onSubmit={formSubmit}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                </div>
            </div>
        </div>
    );
};

export default Register;