import React from 'react';
import "../../index.css";
import Dropdown from '../Dropdown';
import Carousel from '../Carousel';
import Sources from '../Sources';
import Photo from '../Photo';
import Autobio from '../Autobio';
import Grid from '../Grid';
import Footer from '../Footer';
import Navbar from '../Navbar';



const Portfolio = () => {
  return (
    <div >
      <div className='flex h-screen w-full bg-gradient-to-r from-rosered via-rosered to-white '> 
        <div className='w-1/2 h-full flex flex-col lg:flex-none justify-evenly items-center'>
          <Navbar />
          <div className='h-3/4 w-full flex'>
              <ul className='lg:w-auto h-3/4 lg:flex hidden lg:flex-col items-center justify-center m-4'>
                <Dropdown />
              </ul>
              <Sources />
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center overflow-hidden h-screen bg-gradient-to-t from-rosered to-gray'>
            <Carousel />  
        </div>
      </div>

      <Photo />      
      <Autobio />
      <Grid />
      <Footer />
    </div>
  )
}

export default Portfolio;