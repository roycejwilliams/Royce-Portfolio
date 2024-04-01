import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'


const Autobio = () => {
  return (
    <div className='bg-rosered h-screen w-full flex justify-center items-center -mb-1'>
      <div className='w-full h-full text-center flex items-center p-2'>
      <h5 className='font-clash font-medium text-left text-white uppercase text-xxxl md:text-6xl xl:text-7xl leading-10 sm:leading-20 lg:leading-25'>
        A Computer Engineer With a designer’s focus, Royce is an aspiring agency owner and developer based in Austin, Tx. Founder of <Link href="https://rvtl.studio/" className="text-black hover:text-black/50 transition duration-200 ease-in-out">Revital Studio</Link>, his work is dedicated to helping businesses grow.
      </h5>  
     </div>
   </div>
  )
}

export default Autobio