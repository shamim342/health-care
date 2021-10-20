import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div>
           <p className="text-warning fs-3 fw-bold">Blogs Section</p>

            {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;