import React, { useEffect, useState } from 'react';

const DataLoad = () => {
    const[datas,setData] = useState([]);

    useEffect(() => {
         fetch('data.json')
        .then(res => res.json())
        .then(allData => setData(allData))
    },[]);
    return (
        datas.map((singledata) => console.log(singledata))
    );
};

export default DataLoad;