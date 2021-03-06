import React, { useEffect } from 'react'
import { useState } from 'react';
import BlogCard from "../BlogCard/BlogCard"

function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://glacial-woodland-81224.herokuapp.com/blogs")
            .then((res) => res.json())
        .then((data)=> setBlogs(data))
    },[setBlogs])


    return (
        <main class="px-3">
              <div class="text-4xl sm:text-5xl text-center my-10">What type of food do you like?</div>

              <div class="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">

                {
                     blogs.length > 0 &&
                    blogs.map((blog) => (
                         <BlogCard blog={blog}></BlogCard>
                     ))
                    }
              </div>
            </main>
    )
}

export default Blog;
