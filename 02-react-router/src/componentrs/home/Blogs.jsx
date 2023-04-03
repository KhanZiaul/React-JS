import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Blogs = () => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])

    function shortContent(content,num){
        if(content.length > 100){
           return content.slice(0,num) + "..." ;
        }
        else{
            return content ;
        }
    }

    return (
        <div>
           <h2>Welcome in Blogs</h2>
            {
                blogs.map(blog => {
                    return (
                        <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{shortContent(blog.content,100)}</p>
                       <Link to={blog.title}>Learn more</Link>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Blogs;