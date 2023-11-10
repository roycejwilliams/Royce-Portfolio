import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";



const Photo = () => {



  const slides = [
    './src/images/photo(5).JPG',
    './src/images/photo(6).JPG',
     './src/images/photo(4).JPG',
     './src/images/photo(1).JPG',
     './src/images/photo(8).JPG',
     './src/images/photo(10).JPG',
     './src/images/photo(11).JPG',
     './src/images/photo(12).JPG',
     './src/images/photo(14).JPG',
     './src/images/photo(16).JPG',
     './src/images/photo(17).JPG',
     './src/images/photo(18).JPG',
     './src/images/photo(19).JPG',
  ];

  return (
    
    <div className='bg-rosered h-700 w-full flex flex-col overflow-hidden'>
      {/* Title & Description */}
          <div className='w-full h-1/6  flex justify-center'>
              <div className='w-full h-auto  flex items-center mt-4'>
                <h1 className='text-white  w-full font-regular text-xl lg:text-4xl tracking-widest ml-2 font-clash'>THROUGH MY EYES</h1>
              </div> 
              <div className='h-auto w-full flex justify-center items-center'>
                <h3 className='font-clash font-regular text-xxxs lg:text-sm  text-white text-center uppercase m-4'>"I've always believed that emotions can be conveyed through photographs, but it's really just a fundamental aspect of art."</h3>
              </div>
              
          </div>
 
        {/* Photos */}
           <div className='h-4/6 w-full '> 
              <div className='w-full h-full flex items-center'>
                <div className='flex justify-center items-center h-full w-full'>
                  {slides.map((slide, index) => (
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 300 }}
                      key={index}
                      className="w-72 h-96 rounded-lg shadow-sm absolute cursor-pointer z-10"
                      style={{
                        backgroundImage: `url('${slide}')`,
                        backgroundSize: 'cover',
                        filter: 'brightness(0.6)',
                      }}
                    />
                  ))}
                  <h3 className='text-white font-azeret text-center text-xxs md:text-xs w-3/6 h-fit p-8 absolute z-20'>
                    In my eyes the world is my reflection and perspective. It's so easy to get caught up in what's around you; you forget what really matters. The essence of being and paying attention is a directional signal. A signal that guides us towards a deeper understanding of life and our place in it. These qualities create a compass, helping us navigate through. Whatever it is, see it through.
                  </h3>
                </div>
              </div>
          </div> 

           {/*swipe gestures  */}
           <div className="relative w-full flex justify-center items-center  h-1/6">
              <div className="w-8 h-8 bg-gray-200 shadow-md shadow-black rounded-full absolute animate-swipe"></div>
            </div>
    </div>
  
  )
}

export default Photo;