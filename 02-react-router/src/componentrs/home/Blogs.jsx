import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])

    return (
        <div>
           <h2>Welcome in Blogs</h2>
            {
                blogs.map(blog => {
                    return (
                        <div>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Blogs;