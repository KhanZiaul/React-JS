import React, { createContext } from 'react';
import Parent from '../Parent/Parent';
import CousinFather from '../CousinFather/CousinFather';

export const GoldRing = createContext('gold') ;

const GrandParent = () => {

    return (

        <GoldRing.Provider value='Diamond'>
        <div className='border-2 p-4 border-red-400'>
            <h2 className='text-center my-3'>Grand Parent</h2>
            <div className='flex justify-evenly'>
            <Parent></Parent>
            <CousinFather></CousinFather>
            </div>
        </div>
        </GoldRing.Provider>
    );
};

export default GrandParent;