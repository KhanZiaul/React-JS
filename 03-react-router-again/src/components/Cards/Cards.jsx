import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({data}) => {
    console.log(data)
    const {name , username , phone , website , id} =data;
    return (
        <div className='p-5 text-center bg-sky-700 text-white rounded-lg'>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p>User-Name : {username}</p>
            <p>Phone : {phone}</p>
            <p className='mb-4'>Website : {website}</p>
            <p><Link className='bg-orange-400 px-3 py-2 rounded-xl hover:bg-orange-700' to={`/datas/${id}`}>More Info</Link></p>
        </div>
    );
};

export default Cards;

/**
 * address
: 
{street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company
: 
{name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email
: 
"Sincere@april.biz"
id
: 
1
name
: 
"Leanne Graham"
phone
: 
"1-770-736-8031 x56442"
username
: 
"Bret"
website
: 
"hildegard.org"
[[Prototype]]
: 
Object
 */