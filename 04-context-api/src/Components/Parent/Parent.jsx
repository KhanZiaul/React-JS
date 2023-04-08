import React from 'react';
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister';
const Parent = () => {
    return (
        <div className='border-2 p-4 border-red-400'>
            <h2 className='text-center'>This is Parent</h2>
            <div className='flex justify-evenly my-3 gap-5'>
            <Myself></Myself>
            <Sister></Sister>
            </div>
        </div>
    );
};

export default Parent;