import React, { useEffect, useState } from 'react';
import { useParams , useLocation } from 'react-router-dom';
const Blog = () => {
    // const {title} = useParams()
    const location = useLocation()

    // const [content,setContent] = useState('')
    // const [blogs,setBlogs] = useState([])

    // useEffect(()=>{
    //     fetch('../../../data.json')
    //     .then(res => res.json())
    //     .then(datas => setBlogs(datas))
    // },[])

    // useEffect(()=>{
    //     const blog = blogs.find(ct => ct.title === title)
    //     if(blog){
    //         setContent(blog.content)
    //     }
    // },[blogs])

    return (
        <div>
           <h2>{location.state.author}</h2> 
           <h3>{location.state.title}</h3>
           <p>{location.state.content}</p> 
        </div>
    );
};

export default Blog;