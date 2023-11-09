import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Grid = () => {

  /*playlist carousel*/

  const [currentIndex, setCurrentIndex] = useState(0);

  const sounds = [
    "https://embed.music.apple.com/us/album/in-between-and-overseas/1607100188?i=1607101242",
    "https://embed.music.apple.com/us/album/orange-village/1677236538?i=1677236904",
    "https://embed.music.apple.com/us/album/dreams-money-can-buy/1475177816?i=1475177817",
    "https://embed.music.apple.com/us/album/goyard-umbrella/1677198478?i=1677198491",
    "https://embed.music.apple.com/us/album/louis-baggage-feat-babyface-ray/1609125563?i=1609126175",
    "https://embed.music.apple.com/us/album/east-liberty/1662164512?i=1662164513",
    "https://embed.music.apple.com/us/album/ive-been-daydreaming-my-entire-life/1243853548?i=1243853559",
    "https://embed.music.apple.com/us/album/embarcadero/1583616639?i=1583617054",
    "https://embed.music.apple.com/us/album/so-free/1555178413?i=1555179172",
    "https://embed.music.apple.com/us/album/dont-take-dis-wrong/1602423393?i=1602423489",
    "https://embed.music.apple.com/us/album/grindn/446922317?i=446922324",
    "https://embed.music.apple.com/us/album/in-the-midst/1276744870?i=1276745411",
    "https://embed.music.apple.com/us/album/i-am-a-god-feat-god/1440873068?i=1440873233",
    "https://embed.music.apple.com/us/album/throw-it-in/1528649764?i=1528650165"
  ];
  
  const handlePrev = () => {
    if (currentIndex === 0) {
      // If at the first item, stay at the first item
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  
  const handleForward = () => {
    if (currentIndex === sounds.length - 1) {
      // If at the last item, stay at the last item
      setCurrentIndex(sounds.length - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }


  


    /*social media icons*/
    const logoFiles = ['./src/images/twitter-x-logo.png', './src/images/instagram.png', './src/images/linkedIn.webp', './src/images/git.png', './src/images/google.png']
    const href = ['https://twitter.com/roycwilliams',
                  'https://www.instagram.com/roycejwilliams/',
                  'https://www.linkedin.com/in/royce-williams-9bb2021a1/',
                  'https://github.com/roycejwilliams',
                  'mailto: roycewilliamsj@gmail.com']

    /* tools icons */
    const tools = ['./src/images/vitejs.png', './src/images/reactjs.png', './src/images/javascript.png', './src/images/figma.png', './src/images/adobe.png', './src/images/notion.png', './src/images/dropbox.png', './src/images/nextjs.png'];
    useEffect(() => {
      const init = () => {
        let ul = document.getElementById('logos');
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      };
  
      init();
    }, []);

  return (
    <div>
      <div className='bg-rosered h-screen w-full flex justify-center items-center'>
          <div className='w-5/6 h-5/6 grid grid-cols-3 gap-x-2 gap-y-3 '>
              {/* Skills */}
              <div className='bg-gradient-to-b from-black via-black/70 to-white/20 rounded-lg shadow-xl backdrop-blur row-span-2 flex items-center'>
                <ul className='w-5/6 h-5/6 font-azeret text-white m-4 flex flex-col justify-between text-sm uppercase'>
                  <h2 className='text-xl font-clash tracking-widest font-bold'>My Skills</h2>
                  <li className="flex items-center"><span>UX/UI</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Branding</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Marketing</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Product Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Strategic Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Consumer Research</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center"><span>Web Development/Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                </ul>
              </div>
              {/* Social Media */}
              <div className='bg-black rounded-lg shadow-xl flex justify-center'>
                <div className='w-5/6 h-auto flex flex-col justify-center'>
                    <h2 className='uppercase text-xl font-clash tracking-widest font-bold text-white'>socials</h2>
                    <ul className='w-full h-2/5 flex items-center justify-between'>
                    {logoFiles.map((logo, index) => (
                        <a href={href[index]}>
                          <li 
                            key={index} 
                            className="bg-gray-800 w-14 h-14 rounded-xl hover:scale-75 transition ease-in 800s hover:shadow-xl hover:shadow-white">
                            <img src={logo} />
                          </li>
                        </a>
                      ))}
                    </ul>
                </div>
              </div>
              {/* Mission */}
              <div className='bg-black rounded-lg shadow-xl flex justify-center'>
                <div className='w-5/6 h-auto flex flex-col justify-center text-white font-clash'>
                  <h2 className='uppercase text-xl  tracking-widest font-bold' >Mission</h2>
                  <p className='font-azeret text-sm mt-2 h-1/3 tracking-wider'>Contribute to meaningful change, thereby creating a positive impact. </p>
                </div>
              </div>
              {/* Apple Music - Rotation */}
              <div className='bg-black rounded-lg shadow-xl col-span-2 flex'>
                  <div className='w-2/5 h-full flex justify-center items-center' >
                        {/* apple music logo */}
                    <div className='w-5/6 h-5/6 flex justify-center items-center' >
                      <img
                          src="./src/images/Apple_Music.png"
                          className="w-full h-auto" // Apply CSS classes if needed
                        />
                    </div>
                  </div>
                    {/*Songs*/}
                  <div className='w-3/5 h-full flex flex-col justify-center overflow-hidden'>
                    <div className='w-full flex items-center'>
                        <h3 className='uppercase font-clash mb-4 tracking-widest text-white text-2xl font-bold'>Current Rotation</h3>
                    </div>
                    <div className='flex w-[60%] h-auto mx-auto  transition ease-in duration-150' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {sounds.map((slide, index) => (
                        <iframe 
                        
                          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                          width="100%"  // Use responsive width
                          height="200"
                          key={index}
                          style={{ maxWidth: '500px', maxHeight:'500px', overflow: 'hidden', borderRadius: '10px', padding: '0 5px' }}
                          src= {slide}
                        >
                        </iframe>
                    )) }
                    </div>
                    {/* forward & previous button */}
                    <div className='w-full h-auto flex gap-72 justify-center'>
                          <button onClick={handlePrev} className='w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition ease-in duration-800 animate-carousel-left'><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff", fontSize: '16px'}} /></button>
                          <button onClick={handleForward} className='w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition ease-in duration-800 animate-carousel-right'><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff", fontSize: '16px'}} /></button>
                    </div>
                  </div>
              </div>
              {/* Tools */}
              <div className='bg-black rounded-lg shadow-xl col-span-3 flex justify-center items-center'>
                <div className='flex justify-center w-1/2 h-full text-white items-center font-clash uppercase'>
                  <h2 className='text-5xl font-bold tracking-widest'>tech stack</h2>
                </div>
                <div className='inline-flex flex-nowrap w-1/2 h-full text-white items-center font-clash uppercase overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
                  <ul id='logos' className='flex items-center justify-center md:justify-start [&_li]:mx-8 animate-slide-left'>
                      {tools.map((toolsFile, index) => (
                          <li 
                          key={index}
                          className='w-16 h-16'>
                            <img src={toolsFile} alt={`Logo ${index + 1}`} />
                          </li>
                      ))}
                  </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Grid;

