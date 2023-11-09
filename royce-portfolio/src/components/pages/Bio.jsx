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
    <div>
      <div className='bg-gradient-to-r from-black to-gray-400 w-full h-620'>
        <Navbar />
        {/* Intro */}
        <div className='flex w-full h-620 '>
          {/* Title */}
            <div className='w-1/2 h-full flex justify-center items-center'>
              <div className='w-96 h-52 flex flex-col '>
                <h2 className='text-white text-5xl font-clash'>Royce Williams</h2>
                <p className='font-azeret text-sm text-white'>Computer Engineer & Founder of REVITAL</p>
              </div>
            </div>
          {/* Bio */}
            <div className='w-1/2 h-full flex justify-center items-center'>
                <div className='w-3/4 h-3/4'>
                  {/* Bio */}
                  <p className='text-white font-clash font-regular text-sm'>My journey began as a Biology major when I first entered college, but over the years, I shifted my focus towards tech. Design has always been a significant part of my upbringing. Growing up in New Orleans and later moving to Houston in my early years exposed me to diverse cultures and art, which greatly influenced my taste. These formative experiences led me to merge art and design, prompting me to change my major during my junior year (quite the pivot, I know).
                    <br></br><br></br>
                    The knowledge and skills I acquired through both technology and art disciplines inspired me to seize the opportunity to help develop brands and foster a thriving community of sustainable businesses.  
                    <br></br><br></br>
                    I believe that my wealth of experiences and keen attention to detail would be a valuable asset to any company seeking an experienced, self-taught designer and coder. <span className='font-medium underline'>I am actively seeking a full-time position as a new graduate in roles such as Front-End Developer, Product Designer, Project Manager, QA Analyst, or Internship Openings.</span> 
                  </p>    

                  {/* Contact Button */}
                  <button onClick={handleEmailClick} className="font-clash flex justify-start items-center w-2/3 h-auto mt-4 text-gray-300 text-2xl font-regular hover:text-white cursor-pointer tracking-wide group">
                    <span >Reach Out.</span>
                    <span className="relative left-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-0 group-hover:translate-x-2/3 opacity-0 group-hover:opacity-100 ease">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                </div>              
            </div>
  
        </div>
      </div> 
      {/* Services */}
      <div className='h-screen w-full bg-white flex'>
          <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='w-5/6 h-auto'>
              <h2 className='font-clash text-9xl text-black'>Here to Support You With</h2>
            </div>
          </div>
          <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='w-3/4 h-2/3 flex flex-col justify-evenly items-center'>
              <div className='w-3/4 h-28 text-rosered font-azeret'> 
                <h1 className=' w-full text-2xl '>
                  <div className='w-4 h-4 text-sm flex items-center justify-center border-rosered border rounded-full'>1</div> Design</h1>
                  <p className='text-xs'>With a fresh approach to web and app design, I bring creative and user-centric digital solutions to the table. Crafting a compelling brand identity is the cornerstone of a successful online presence, and I'm here to help you build that foundation.</p>
              </div>
              <div className='w-3/4 h-28 text-rosered font-azeret'>
                <h1 className='w-full text-2xl '> <div className='w-4 h-4 text-sm flex items-center justify-center border-rosered border rounded-full'>2</div>  Development</h1>
                <p className='text-xs'>I specialize in developing scalable websites & software from the ground up, ensuring they seamlessly integrate with your companies vision.</p>
              </div>
              <div className='w-3/4 h-28  text-rosered font-azeret'>
                <h1 className='w-full text-2xl '>
                <div className='w-4 h-4 text-sm flex items-center justify-center border-rosered border rounded-full'>3</div> 
                  Full Package</h1>
                  <p className='text-xs'>What sets me apart is my ability to take your idea from concept to reality, providing a comprehensive solution from start to finish, creating solutions.</p>
              </div>
            </div>
          </div>
      </div>  
      <Footer />

    </div>

    
  );
}

export default Bio;