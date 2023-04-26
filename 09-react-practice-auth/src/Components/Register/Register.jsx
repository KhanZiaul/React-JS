import React, { useContext } from 'react';
import { parentAuth } from '../Auth/Auth';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(parentAuth)

    function formSubmit(e) {
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                userProfile(Name, userCredential.user)
                verificationUser(userCredential.user)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        e.target.reset()
    }

    function userProfile(name, user) {
        updateProfile(user, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
        });
    }

    function verificationUser(user) {
        sendEmailVerification(user)
            .then(() => {
                alert('Email Varification Send')
            });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold mb-7">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={formSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;