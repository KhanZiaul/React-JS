import React from 'react';

const SignUp = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const Email = e.target.email.value ;
        const Password = e.target.password.value ;
        console.log(Email,Password)
        e.target.reset()
    }


    return (
        <>
        <form className='flex flex-col justify-center items-center my-10 gap-3 w-[25%] mx-auto border-2 p-5 bg-slate-300 rounded-md' onSubmit={handleSubmit}>
            <h2 className='text-xl font-medium'>Please Login</h2>
            <input className='border-2 px-4 py-2 block border-red-400' name='email' type="email" placeholder='Your email' />
            <br />
            <input className='border-2 px-4 py-2  border-red-400' name='password' type="password" placeholder='Your password' />
            <button className='px-5 py-3 rounded-lg mt-5 bg-sky-500 text-white'>submit</button>
        </form>
        </>
    );
};

export default SignUp;