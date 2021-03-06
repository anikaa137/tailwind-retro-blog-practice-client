import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';



function BlogDetailes() {
    const { id } = useParams()
    console.log(id)
    const [blogsdetails, setBologDetails] = useState([]);
    console.log(blogsdetails)
    useEffect(() => {
        fetch(`https://glacial-woodland-81224.herokuapp.com/blogDetails/${id}`)
            .then(res => res.json())
            .then(data => setBologDetails(data))
     },[])
     const { _id, title, Author, email, value, imageURL, date } = blogsdetails;


    return (

<div class="max-w-screen-lg mx-auto">

    <div class="mt-10">

      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight flex flex-col my-auto items-center mb-5">
            {title}
          </h2>
        </div>

        <img src={imageURL} class="w-full object-cover lg:rounded" style={{height:"28em"}}/>
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">

        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            {ReactHtmlParser(value)}

        </div>



      </div>
    </div>



  </div>
    )
}

export default BlogDetailes
