import React from 'react';

const Cards = ({data}) => {
    console.log(data)
    const {name , username , phone , website} =data;
    return (
        <div className='p-5 text-center bg-sky-700 text-white rounded-lg'>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p>User-Name : {username}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
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