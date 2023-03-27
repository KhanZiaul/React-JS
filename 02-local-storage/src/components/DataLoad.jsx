import React, { useEffect, useState } from 'react';
import ShowData from './ShowData';

const DataLoad = () => {
    const[datas,setData] = useState([]);

    useEffect(() => {
         fetch('data.json')
        .then(res => res.json())
        .then(allData => setData(allData))
    },[]);
    return (
        datas.map((singledata) => <ShowData key={singledata.id} data={singledata}></ShowData>)
    );
};

export default DataLoad;