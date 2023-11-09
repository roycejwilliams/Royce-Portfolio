import React, { useEffect, useRef } from 'react';


const Carousel = () => {


    const slides = [
      './src/images/LEMA-website-portfolio.jpg',
      './src/images/wigroup-portfolio.jpg',
       './src/images/revital-reflections.png',
       './src/images/TXEA-Seal.jpg',
       './src/videos/revital-preview.mp4',
       './src/images/Oni-Real-Estate.png',
       './src/images/a2d.jpg',
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
      <div className='grid grid-cols justify-center items-center max-h-5xl '>
        <div id='picture' className='flex flex-col flex-nowrap justify-center items-center gap-8 my-8 max-w-none animate-infinite-scroll '>
          {slides.map((slide, index) => (
            <div
            key={index}
            className=" w-56 h-40 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl shadow-xl" // Adjusted height to match width
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundSize: 'cover', // Changed to 'cover' for better image fitting
            }}
          >          
              {index === 4 && (
                <video
                  className='w-56 h-40 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl shadow-xl object-cover'
                  autoPlay
                  loop
                  muted
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
  
  
  
  
  
  