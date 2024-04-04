import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

import image1 from '/public/images/photo(5).jpg';
import image2 from '/public/images/photo(6).jpg';
import image3 from '/public/images/photo(4).jpg';
import image4 from '/public/images/photo(1).jpg';
import image5 from '/public/images/photo(8).jpg';
import image6 from '/public/images/photo(10).jpg';
import image7 from '/public/images/photo(11).jpg';
import image8 from '/public/images/photo(12).jpg';
import image9 from '/public/images/photo(14).jpg';
import image10 from '/public/images/photo(16).jpg';
import image11 from '/public/images/photo(17).jpg';
import image12 from '/public/images/photo(18).jpg';
import image13 from '/public/images/photo(19).jpg';

const Photo = () => {



  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13
  ];

  return (
    
    <div className='bg-rosered h-screen w-full flex flex-col overflow-hidden -mb-1'>
      {/* Title & Description */}
          <div className='w-full h-200 flex justify-center'>
              <div className='w-1/2 h-auto  flex items-center mt-4'>
                <h1 className='text-white  w-full font-regular text-lg lg:text-4xl tracking-widest ml-2 font-clash'>THROUGH MY EYES</h1>
              </div> 
              <div className='h-auto w-1/2 flex justify-center items-center'>
                <h3 className='font-clash font-regular text-xxs lg:text-sm  text-white text-center uppercase'>"I've always believed that emotions can be conveyed through photographs, but it's really just a fundamental aspect of art."</h3>
              </div>
          </div>
 
        {/* Photos */}
           <div className='h-full w-full flex flex-col justify-center items-center'> 
              <div className='w-full h-full  flex justify items-center'>
                <div className='flex justify-center items-center h-full w-full'>
                  {slides.map((slide, index) => (
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 450}}
                      key={index}
                      className="w-2/3 h-2/4 md:w-2/4 md:h-500 lg:w-1/3 rounded-lg shadow-sm absolute cursor-pointer z-10"
                      style={{
                        backgroundImage: `url('${slide}')`,
                        backgroundSize: 'cover',
                        filter: 'brightness(0.5)',
                      }}
                    />
                  ))}
                  <h3 className='text-white font-azeret uppercase font-medium tracking-widest text-center text-xxs md:text-xs w-3/6 h-fit absolute z-20 opacity-75'>
                    In my eyes the world is my reflection and perspective. It's so easy to get caught up in what's around you; you forget what really matters. The essence of being and paying attention is a directional signal. A signal that guides us towards a deeper understanding of life and our place in it. These qualities create a compass, helping us navigate through. Whatever it is, see it through.
                  </h3>
                </div>
              </div>
               {/*swipe gestures  */}
            <div className="relative w-full flex justify-center items-center h-50">
              <div className="w-8 h-8 bg-gray-200 shadow-md shadow-black rounded-full absolute animate-swipe"></div>
            </div>
          </div> 

          
    </div>
  
  )
}

export default Photo;