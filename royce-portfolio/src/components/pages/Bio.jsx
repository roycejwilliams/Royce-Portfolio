import React from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer';


const emailAddress = "roycewilliamsj@gmail.com";

    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };


const Bio = () => {
  return (
    <>
      <div className='bg-gray-300 w-full lg:h-700 h-700'>
        {/* Intro */}
        <div className='flex flex-col w-full justify-between items-center h-full '>
          {/* Title */}
            <div className='w-full h-1/4 lg:h-2/4 flex flex-col justify-end lg:justify-center items-start'>
              <div className='w-1/2 ml-4 h-auto flex flex-col '>
                <h2 className='text-rosered text-3xl md:text-6xl font-clash'>Royce Williams</h2>
                <p className='font-azeret text-xs md:text-sm text-black'>Computer Engineer & Founder of REVITAL</p>
              </div>
            </div>
          {/* Bio */}
            <div className='w-full h-5/6 lg:h-3/5 flex justify-end items-center'>
                <div className='w-2/3 h-full flex flex-col items-center justify-center'>
                  {/* Bio */}
                  <p className='text-black font-clash p-4 font-regular text-xxs md:text-sm tracking-wider'>My journey began as a Biology major when I first entered college, but over the years, I shifted my focus towards tech. Design has always been a significant part of my upbringing. Growing up in New Orleans and later moving to Houston in my early years exposed me to diverse cultures and art, which greatly influenced my taste. These formative experiences led me to merge art and design, prompting me to change my major during my junior year (quite the pivot, I know).
                    <br></br><br></br>
                    The knowledge and skills I acquired through both technology and art disciplines inspired me to seize the opportunity to help develop brands and foster a thriving community of sustainable businesses.  
                    <br></br><br></br>
                    I believe that my wealth of experiences and keen attention to detail would be a valuable asset to any company seeking an experienced, self-taught designer and coder. <span className='font-medium underline'>I am actively seeking a full-time position as a new graduate in roles such as Front-End Developer, Product Designer, Project Manager, QA Analyst, or Internship Openings.</span> 
                  </p>    

                  {/* Contact Button */}
                  <button onClick={handleEmailClick} className="font-clash p-4 flex w-full h-auto lg:mt-4 text-gray-100 text-2xl font-regular hover:text-black cursor-pointer tracking-wide group">
                    <span >Reach Out.</span>
                    <span className="relative left-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-0 group-hover:translate-x-2/3 opacity-0 group-hover:opacity-100 ease">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                </div>              
            </div>
  
        </div>
      </div> 
      {/* Services */}
      <div className='h-screen w-full bg-gray-300 flex'>
          <div className='w-1/2 h-full flex justify-center mt-4'>
            <div className='w-full ml-4 h-auto'>
              <h2 className='font-clash text-5xl md:text-8xl lg:text-9xl text-rosered'>Here to Support You With</h2>
            </div>
          </div>
          <div className='w-full lg:w-1/2  h-full flex justify-center items-center'>
            <div className='w-full h-1/2 md:h-5/6 flex flex-col  p-4 lg:justify-evenly md:justify-end items-center'>
              <div className='w-full lg:w-3/4 lg:h-28 text-black md:mt-4 font-azeret'> 
                <h1 className=' w-full text-lg md:text-4xl '>
                  <div className='w-4 h-4 text-sm flex items-center justify-center border-black border rounded-full'>1</div> Design</h1>
                  <p className='text-xxs md:text-sm'>With a fresh approach to web and app design, I bring creative and user-centric digital solutions to the table. Crafting a compelling brand identity is the cornerstone of a successful online presence, and I'm here to help you build that foundation.</p>
              </div>
              <div className='w-full lg:w-3/4 lg:h-28 text-black md:mt-4 font-azeret'>
                <h1 className='w-full text-lg md:text-4xl '> <div className='w-4 h-4 text-sm flex items-center justify-center border-black border rounded-full'>2</div>  Development</h1>
                <p className='text-xxs md:text-sm'>I specialize in developing scalable websites & software from the ground up, ensuring they seamlessly integrate with your companies vision.</p>
              </div>
              <div className='w-full lg:w-3/4 lg:h-28 text-black md:mt-4 font-azeret'>
                <h1 className='w-full text-lg md:text-4xl '>
                <div className='w-4 h-4 text-sm flex items-center justify-center border-black border rounded-full'>3</div> 
                  Full Package</h1>
                  <p className='text-xxs md:text-sm'>What sets me apart is my ability to take your idea from concept to reality, providing a comprehensive solution from start to finish.</p>
              </div>
            </div>
          </div>
      </div>  

      {/* I build... */}
      <div className=' w-full bg-gray-300 flex flex-col min-h-screen items-center justify-center font-bold text-white'>
              <div className="text-center text-4xl md:text-6xl text-rosered font-clash font-regular">
              <Navbar /> Building..
                  <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                  <span className="animate-word col-span-full row-span-full">Brands</span>
                  <span className="animate-word-delay-1 col-span-full row-span-full">Communities</span>
                  <span className="animate-word-delay-2 col-span-full row-span-full">Experiences</span>
                  <span className="animate-word-delay-3 col-span-full row-span-full">Software</span>
                  <span className="animate-word-delay-4 col-span-full row-span-full">Relationships</span>
                  </div>
              </div>
              
      </div>

      <Footer />

    </>

    
  );
}

export default Bio;