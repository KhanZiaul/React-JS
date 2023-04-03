import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('../../../data.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])

    function shortContent(content,num){
        if(content.length > 40){
           return content.slice(0,num) + "..."
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
                        <p>{shortContent(blog.content,50)}</p>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Blogs;