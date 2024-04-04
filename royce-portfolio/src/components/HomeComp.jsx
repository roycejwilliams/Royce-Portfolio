import React from 'react'
import { motion } from 'framer-motion';
import Button from './Button';
import Links from './Links';
import "../index.css"
import navImg from '/public/images/royce-logo.png';

const HomeComp = () => {
  return (
 <div className='bg-white w-screen h-screen flex flex-col justify-center items-center'>
    <div className='w-full h-[50%] flex flex-col items-center justify-evenly'>
        <motion.img initial = {{opacity: 0}} animate = {{opacity: 1}} transition={{type: "tween", duration: 1}} className='lg:w-64 lg:h-auto w-40 h-auto ' src={navImg} alt='Image' />
        <Button />
    </div>
    <Links />
  </div>
  )
}

export default HomeComp