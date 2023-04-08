import React from 'react';
import CousinBoyfriend from '../CousinBoyfriend/CousinBoyfriend';

const CousinSister = () => {
    return (
        <div  className='border-2 p-4 border-red-400'>
            <h2 className='text-center mb-2'>This is Cousin Sister</h2>
            <CousinBoyfriend></CousinBoyfriend>
        </div>
    );
};

export default CousinSister;