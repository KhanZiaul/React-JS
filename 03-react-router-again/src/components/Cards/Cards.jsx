import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({data}) => {
    
    const {name , username , phone , website , id} =data;

    const navigate = useNavigate()

    function handler(){
        navigate(`/data/${id}`)
    }

    return (
        <div className='p-5 text-center bg-sky-700 text-white rounded-lg'>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p>User-Name : {username}</p>
            <p>Phone : {phone}</p>
            <p className='mb-4'>Website : {website}</p>
            <div className='flex justify-center items-center gap-5'>                
            <p><Link className='bg-orange-400 px-3 py-2 rounded-xl hover:bg-orange-700' to={`/data/${id}`}>More Info</Link></p>
            <button onClick={handler} className='bg-gray-700 text-white px-3 py-2 rounded-xl hover:bg-gray-900'>More Information</button>
            </div>
        </div>
    );
};

export default Cards;