import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {
    const cardInfo = useLoaderData();
    console.log(cardInfo);
    return (
             <div className='p-5 text-center bg-sky-700 text-white rounded-lg'>
            <h2 className='text-4xl font-semibold'>{cardInfo.name}</h2>
            <h2 className='font-semibold'>Company : {cardInfo.company.name}</h2>
            <p className='font-semibold'>Catch Phrase : {cardInfo.company.catchPhrase}</p>
            <p className='font-semibold'>BS : {cardInfo.company.bs}</p>
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