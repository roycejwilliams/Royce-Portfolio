import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {
  return (
    <>
    <div className='w-full h-[10%] flex justify-center items-center absolute bottom-0'>
        <motion.ul animate= {{opacity: 1}} transition={{type: "tween", duration: 1, delay: 1.5 }} initial={{opacity:0}} className='w-3/4 h-auto flex justify-between font-azeret'>
            <li className='lg:text-sm tracking-widest text-gray-500 text-xs'>
              <a href='mailto: studio@rvtl.org'>Get in Touch.</a>
            </li>
            <li className='lg:text-sm tracking-widest text-gray-500 text-xs'>
              <a href='https://www.rvtl.studio' target='blank'>REVITAL</a>
            </li>
        </motion.ul>
    </div>
    </>
  )
}

export default Links;