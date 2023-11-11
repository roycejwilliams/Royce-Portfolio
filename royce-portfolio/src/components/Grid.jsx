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
      <div className='bg-rosered h-screen w-full flex justify-center items-center'>
        <div className='w-full h-5/6  grid grid-cols-2 grid-rows-3  lg:grid-cols-3 gap-x-2 gap-y-3 '>
              {/* Skills */}
              <div className='bg-gradient-to-b flex-col from-black via-black/70 to-white/20 rounded-lg shadow-xl backdrop-blur lg:row-span-2 border lg:w-none lg:h-none flex w-full h-full'>
                  <div className='w-full h-1/5 flex items-center'>
                    <h2 className='uppercase text-lg lg:text-3xl font-clash tracking-widest ml-4 font-bold text-white'>Skills</h2>
                  </div>
                {/* <ul className='w-full h-3/4 lg:w-5/6 lg:h-5/6 font-azeret text-white flex flex-col lg:gap-y-8 text-sm uppercase ml-4'>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>UX/UI</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Branding</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Marketing</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Product Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Strategic Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Consumer Research</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                  <li className="flex items-center text-xxxs lg:text-xs"><span>Web Development/Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                </ul> */}
              </div>
              {/* Social Media */}
              <div className='bg-black rounded-lg shadow-xl w-full h-auto'>
                <div className='w-full h-1/3 flex items-center'>
                    <h2 className='uppercase text-sm lg:text-xl font-clash tracking-widest ml-4 font-bold text-white'>socials</h2>
                </div>
                <div className=' w-full flex items-center justify-center h-3/6 '>
                    <ul className='w-full h-full flex flex-wrap justify-center items-center gap-x-4 '>
                    {logoFiles.map((logo, index) => (
                        <a href={href[index]}>
                          <li 
                            key={index} 
                            className="bg-gray-800 w-12 h-12 lg:w-14 lg:h-14 rounded-xl hover:scale-75 transition ease-in 800s hover:shadow-xl hover:shadow-white">
                            <img src={logo}
                                className="h-full w-full object-cover"
                            />
                          </li>
                        </a>
                      ))}
                    </ul>
                </div>
              </div>
              {/* Mission */}
              <div className='bg-black rounded-lg shadow-xl flex flex-col justify-center w-full'>
                <div className='w-full h-1/3 flex items-center'>
                    <h2 className='uppercase text-sm lg:text-xl font-clash tracking-widest ml-4 font-bold text-white'>mission</h2>
                </div>
                <div className=' h-2/3 w-full flex justify-center text-white'>
                  <p className='font-azeret text-xxs lg:text-sm ml-4 h-1/3 tracking-wider'>Actively contributing to initiatives that foster positive impacts. Engineer and cultivate sustainable products that transcend accessibility barriers, aiming to make a lasting, meaningful difference for all.</p>
                </div>
              </div>
              {/* Apple Music - Rotation */}
              <div className='bg-black rounded-lg shadow-xl lg:col-span-2 flex'>
                  <div className='w-2/5 h-full hidden lg:flex lg:visible' >
                        {/* apple music logo */}
                    <div className='w-full h-full flex justify-center items-center' >
                      <img
                          src="./src/images/Apple_Music.png"
                          className="w-3/4 h-auto" // Apply CSS classes if needed
                        />
                    </div>
                  </div>
                    {/*Songs*/}
                  <div className='w-full h-full flex flex-col overflow-hidden'>
                    <div className='w-full h-1/3 border flex items-center'>
                        <h2 className='uppercase text-sm lg:text-xl font-clash tracking-widest ml-4 font-bold text-white'>Current Rotation</h2>
                    </div>
                    <div className='flex w-[100%] lg:w-[60%] border h-auto mx-auto transition ease-in duration-150' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {sounds.map((slide, index) => (
                        <iframe 
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        width="100%"
                        height="200" // Adjust the height based on your needs
                        key={index}
                        style={{
                          maxWidth: '500px',  // Set a lower maxWidth
                          maxHeight: '200px', // Set a lower maxHeight
                          overflow: 'hidden',
                          borderRadius: '10px',
                          padding: '0 5px'
                        }}
                        src={slide}
                      ></iframe>
                    )) }
                    </div>
                    {/* forward & previous button */}
                     <div className='w-full h-1/4 flex border gap-24 lg:gap-72 justify-center items-center'>
                          <button onClick={handlePrev} className='w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition ease-in duration-800 animate-carousel-left'><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff", fontSize: '16px'}} /></button>
                          <button onClick={handleForward} className='w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition ease-in duration-800 animate-carousel-right'><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff", fontSize: '16px'}} /></button>
                    </div>
                  </div>
              </div>
              {/* Tools */}
              <div className='bg-black rounded-lg shadow-xl col-span-2 lg:col-span-3 flex justify-center items-center'>
                <div className='flex justify-center w-1/2 h-full text-white items-center font-clash uppercase'>
                  <h2 className='text-xl lg:text-5xl font-bold tracking-widest'>tech stack</h2>
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
  )
}

export default Grid;

