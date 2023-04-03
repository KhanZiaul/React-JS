import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Blog = () => {
    const {title} = useParams()
    const [content,setContent] = useState('')
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])

    useEffect(()=>{
        const blog = blogs.find(ct => ct.title === title)
        if(blog){
            setContent(blog.content)
        }
    },[blogs])

    return (
        <div>
           <h2>{title}</h2> 
           <p>{content}</p> 
        </div>
    );
};

export default Blog;