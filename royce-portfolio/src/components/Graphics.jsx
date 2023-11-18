import React from 'react'


const graphics = ['./src/images/graphic(1).gif',
                  './src/images/graphic(2).JPG',
                  './src/images/graphic(3).png',
                  './src/images/graphic(4).jpeg',
                  './src/images/graphic(5).jpeg',
                  './src/images/graphic(6).gif',
                './src/images/graphic(7).jpeg',
                './src/images/graphic(8).jpeg',]


const Graphics = () => {
  return (
    <div className='-mb-1'>
        <div className='bg-black h-screen w-full flex'>
            <div className='h-full w-5/6 flex flex-col'>
                <div className='w-auto lg:h-16 h-1/4  flex items-center'>
                    <h2 className='text-white text-xs font-azeret ml-4'> Prioritizing high-quality graphics can save time, especially for individuals like me who may struggle to fully articulate their ideas. Here are some graphics from all over the internet, it's a small batch of a larger sum but you get it </h2>
                </div>
                {/* Graphic */}
                <div className='h-full w-auto flex items-center'>
                    <div className='h-3/4  lg:h-full w-full lg:w-5/6 ml-4 flex flex-wrap gap-4 lg:gap-12'>
                        {graphics.map((graphicFile, index) => (
                            <div 
                            className='lg:w-40 lg:h-56 w-20 h-32' 
                            key={index}
                            style={{
                                backgroundImage: `url('${graphicFile}')`,
                                backgroundSize: 'cover', // Changed to 'cover' for better image fitting
                              }}
                            ></div>
                        ))}
                    </div>
                  </div>
                </div>
                {/* title */}
                <div className='w-1/6 h-full flex items-center justify-center'>
                    <div className=' w-16 h-full bg-rosered flex flex-col justify-center items-center'>
                        <h2 className='uppercase font-clash text-5xl text-white'>G</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>R</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>A</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>P</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>H</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>I</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>C</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>S</h2>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Graphics