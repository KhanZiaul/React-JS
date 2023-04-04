import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Show = () => {
    const datas = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-7 my-10'>
            {
                datas.map(data => <Cards key={data.id} data={data}></Cards>)
            }
        </div>
    );
};

export default Show;