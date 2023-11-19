import React from 'react'
import { Link } from 'react-router-dom'

import bioImg from '../images/bio.jpeg';
import thinkingImg from '../images/thinking.jpeg';

const Sources = () => {


  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center '>
        {/* Biography */}
        <Link to="/bio" className='md:w-48 md:h-72 w-32 h-52 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-300 bg-cover bg-center hover:shadow-lg hover:shadow-white transition ease-in duration-800 bg-gradient-to-b from-black/50 via-black/25 to-black/50 '>
          <h1 className='m-4 absolute text-md text-white font-clash'>Bio</h1>
          <img className='w-full h-full rounded-md mix-blend-soft-light' src={bioImg} alt="bio" />
        </Link>
        {/* Inspiration */}
        <Link to="/inspo" className='md:w-48 md:h-72 w-32 h-52 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-300 bg-cover bg-center hover:shadow-lg hover:shadow-white transition ease-in duration-800 bg-gradient-to-b from-black/50 via-black/25 to-black/50' 
          >
            <h1 className='m-4 absolute text-md text-white font-clash'>Inspiration</h1>
            <img className='w-fit h-full rounded-md mix-blend-soft-light' src={thinkingImg} alt="inspo" />
        </Link>
    </div>
  )
}

export default Sources