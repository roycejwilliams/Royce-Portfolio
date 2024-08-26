// import React from 'react'
import { motion } from 'framer-motion';
import Button from './Button';
import Links from './Links';
import "../index.css"
import navImg from '/public/images/royce-logo.png';

const HomeComp = () => {
  return (
 <div className='bg-white w-screen min-h-screen flex flex-col justify-center items-center'>
    <div className='w-full flex flex-col items-center justify-evenly'>
        <motion.img initial = {{opacity: 0}} animate = {{opacity: 1}} transition={{type: "tween", duration: 1}} className='lg:w-64  w-40 ' src={navImg} alt='Image' />
        <Button />
    </div>
    <Links />
  </div>
  )
}

export default HomeComp