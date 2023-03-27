import React from 'react';
import LocalStorage from './LocalStorage';

const ShowData = (props) => {
    const {id,name,company,gender} = props.data;

    const handlerToCart = (id) => {
        LocalStorage(id);
    }

    return (
        <div style={{border:'2px solid red', padding:'10px',textAlign:'center',margin:'10px'}}>
            <h2>Name - {name}</h2>
            <h3>id - {id}</h3>
            <h4>Company - {company}</h4>
            <h5>Gender - {gender}</h5>
            <button onClick={() => handlerToCart(id)}>Add To localStorage</button>
        </div>
    );
};

export default ShowData;