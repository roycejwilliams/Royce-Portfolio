import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div className='w-auto h-32 flex items-center'>
        <div className='bg-transparent relative w-fit h-fit'>
            <Link to="/portfolio" className='cursor-pointer'>
                <img  className='w-16 h-auto invert' src='./src/images/royce-logo.png' alt='Image' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar