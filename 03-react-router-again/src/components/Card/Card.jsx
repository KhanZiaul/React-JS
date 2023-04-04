import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Card = () => {
    const cardInfo = useLoaderData();
    const navigate = useNavigate();
    function handler(){
        navigate(-1);
    }
    console.log(cardInfo);
    return (
             <div className='p-5 text-center bg-sky-700 text-white rounded-lg'>
            <h2 className='text-4xl font-semibold'>{cardInfo.name}</h2>
            <h2 className='font-semibold'>Company : {cardInfo.company.name}</h2>
            <p className='font-semibold'>Catch Phrase : {cardInfo.company.catchPhrase}</p>
            <p className='font-semibold'>BS : {cardInfo.company.bs}</p>
            <button onClick={handler} className='bg-gray-700 text-white px-3 py-2 rounded-xl hover:bg-gray-900'>Go Back</button>
        </div>
    );
};

export default Card;

/**
 * address
: 
{street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company
: 
{name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
 */