import React from 'react'
import Navbar from '../Navbar';
import Fonts from '../Fonts';
import { motion } from "framer-motion";
import Graphics from '../Graphics';
import Architect from '../Architect';
import Fashion from '../Fashion';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'


import inspoImg1 from '../../images/godly.jpeg';
import inspoImg2 from '../../images/local-project.jpeg';
import inspoImg3 from '../../images/DiaryofaCEO.jpeg';
import inspoImg4 from '../../images/idea-gen.jpeg';
import inspoImg5 from '../../images/laws.jpeg';
import inspoImg6 from '../../images/big-think.jpeg';
import inspoImg7 from '../../images/complex.jpeg';
import inspoImg8 from '../../images/acoldwall.png';
import inspoImg9 from '../../images/arsham.png';
import inspoImg10 from '../../images/show.jpeg';
import inspoImg11 from '../../images/five-moves.jpeg';




const emailAddress = "roycewilliamsj@gmail.com";

    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };


const inspo = [
            inspoImg1,
            inspoImg2,
            inspoImg3,
            inspoImg4,
            inspoImg5,
            inspoImg6,
            inspoImg7,
            inspoImg8,
            inspoImg9,
            inspoImg10,
            inspoImg11
               ];

const Inspo = () => {
  return (
    <div>
      <div className=' h-screen w-full flex items-center flex-col justify-center  bg-black -mb-1'>
        <Navbar />
        {/* message */}
        <div className='w-full h-56 text-white inline-block font-clash'>
          <div className='w-5/6 ml-4 h-3/5 flex items-center'>
            <h1 className=' text-2xl lg:text-5xl uppercase'>Inspiration</h1>
          </div>
          <div className='h-1/3 flex items-center'>
            <p className='text-xxs lg:text-sm ml-4 font-azeret'>Inspirations - that either inspire my work or guide my progress. This is only a small sample I wish i could put the world on here. <br></br><br></br> Books, Youtube, Podcast, Fashion, News, Architecture, Etc... I’m inspired by it all.  </p>
          </div>
        </div>
        {/* inspo */}
        <div className='w-full lg:h-96 h-72  overflow-hidden flex items-center'>
          <motion.div 
          drag = "x" 
          dragConstraints={{left: -2000, right: 0}}
          className=' w-auto inline-flex items-center gap-8 cursor-pointer'>
            {inspo.map((inspoFile, index) => (
             <div
             key={index}
             className='lg:h-72 lg:w-72 h-60 w-60'
             style={{
               backgroundImage: `url('${inspoFile}')`,
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
             }}
           ></div>
            ))}
          </motion.div>
        </div>
        {/* Contact */}
        <div className='h-48 w-full flex items-center'>
          <button onClick={handleEmailClick} className="font-azeret flex justify-start text-left items-center w-fit bg-white/5 rounded-lg px-4 text-gray-400/75 lg:ml-4 ml-none font-medium hover:text-white cursor-pointer tracking-wide group  hover:border-white transition ease-in 300">
                <span className='text-xxs lg:text-sm' >Knowledge is power, any suggestion or recommendations feel free to reach out.</span>
                <span className="relative left-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-0 group-hover:translate-x-2/3 opacity-0 group-hover:opacity-100 ease">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </button>
        </div>
      </div>
      <Fonts />
       <Graphics />
      <Architect />
      <Fashion /> 
      <Footer />
    </div>
  )
}

export default Inspo;