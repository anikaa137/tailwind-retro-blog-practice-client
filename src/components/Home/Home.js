import React from 'react'
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Banner from "../Banner/Banner"
function Home() {
    return (
        <div>
     <Navbar />
      <Banner />
      <Blog />
      <Footer/>
        </div>
    )
}

export default Home;
