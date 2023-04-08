import React from 'react';
import CousinBrother from '../CousinBrother/CousinBrother'
import CousinSister from '../CousinSister/CousinSister'

const CousinFather = () => {
    return (
        <div className='border-2 p-4 border-red-400'>
            <h2>Cousin Father</h2>
            <div className='flex justify-evenly my-3 gap-4'>
                <CousinBrother></CousinBrother>
                <CousinSister></CousinSister>
            </div>
        </div>
    );
};

export default CousinFather;