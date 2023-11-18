import React from 'react'
import { Link } from 'react-router-dom'


const Sources = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center '>
        {/* Biography */}
        <Link to="/bio" className='md:w-48 md:h-72 w-32 h-52 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-300 bg-cover bg-center hover:shadow-lg hover:shadow-white transition ease-in duration-800 bg-gradient-to-b from-black/50 via-black/25 to-black/50 '>
          <h1 className='m-4 absolute text-md text-white font-clash'>Bio</h1>
          <img className='w-full h-full' src="" alt="bio" />
        </Link>
        {/* Inspiration */}
        <Link to="/inspo" className='md:w-48 md:h-72 w-32 h-52 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-300 bg-cover bg-center hover:shadow-lg hover:shadow-white transition ease-in duration-800 bg-gradient-to-b from-black/50 via-black/25 to-black/50' 
          >
            <h1 className='m-4 absolute text-md text-white font-clash'>Inspiration</h1>
            <img className='w-fit h-fit' src="" alt="bio" />
        </Link>
    </div>
  )
}

export default Sources