import React from 'react';
import Parent from '../Parent/Parent';
import CousinFather from '../CousinFather/CousinFather';

const GrandParent = () => {
    return (
        <div className='border-2 p-4 border-red-400'>
            <h2 className='text-center my-3'>Grand Parent</h2>
            <div className='flex justify-evenly'>
            <Parent></Parent>
            <CousinFather></CousinFather>
            </div>
        </div>
    );
};

export default GrandParent;