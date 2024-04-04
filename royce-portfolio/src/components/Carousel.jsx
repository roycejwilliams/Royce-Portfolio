import React, { useEffect, useRef } from 'react';

import image1 from '/public/images/LEMA-website-portfolio.jpg';
import image2 from '/public/images/wigroup-portfolio.jpg'; 
import image3 from '/public/images/rvtl-mix-cover.jpg';
import image4 from '/public/images/rvtl-story.jpg';
import video1 from '/public/videos/revital.mp4';
import image5 from '/public/images/revital-mix.jpg';
import image6 from '/public/images/bien-aimé.jpg';



const Carousel = () => {


    const slides = [
        image1,
        image2,
        image3,
        image4,
        video1,
        image5,
        image6
    ];

    useEffect(() => {
      const init = () => {
        let ul = document.getElementById('picture');
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      };
  
      init();
    }, []);

    return (
      <div className='grid grid-cols justify-center items-center max-h-[90%] '>
        <div id='picture' className='flex flex-col flex-nowrap justify-center items-center gap-8 my-8 max-w-none animate-infinite-scroll p-2'>
          {slides.map((slide, index) => (
            <div
            key={index}
            className=" w-44 h-28 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl shadow-xl" // Adjusted height to match width
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundSize: 'cover', // Changed to 'cover' for better image fitting
            }}
          >          
              {index === 4 && (
                <video
                  className='w-48 h-32 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl shadow-xl object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={slide} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
  
  
  
  
  
  