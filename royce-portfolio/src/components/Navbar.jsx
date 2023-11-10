import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <div className='w-full h-20 flex '>
        <div className='bg-transparent w-fit h-fit ml-4'>
            <Link to="/portfolio" className='cursor-pointer'>
                <img  className='w-16 h-auto invert' src='./src/images/royce-logo.png' alt='Image' />
            </Link>
        </div>
      </div>

  )
}

export default Navbar