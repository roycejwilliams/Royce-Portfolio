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
        <div className='w-2/4 flex lg:flex-none justify-center items-center'>
          <div className='w-2/3 h-full inline'>
            <Navbar />
            <ul className='w-auto h-3/4  flex flex-col items-center justify-center m-4'>
              <Dropdown />
            </ul>
          </div>
            <Sources />
        </div>
        <div className='w-2/4 flex justify-center items-center overflow-hidden h-screen bg-gradient-to-t from-rosered to-gray'>
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