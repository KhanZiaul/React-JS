import React, { useContext } from 'react';
import { GoldRing } from '../GrandParent/GrandParent';

const CousinBoyfriend = () => {
    const ring = useContext(GoldRing)
    return (
        <div className='border-2 p-4 border-red-400'>
            <h2>Boy Friend : {ring}</h2>
        </div>
    );
};

export default CousinBoyfriend;