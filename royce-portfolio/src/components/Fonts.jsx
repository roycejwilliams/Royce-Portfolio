import React from 'react'
import "../index.css"

const Fonts = () => {
  return (
    <div className='-mb-1'>
      <div className='h-screen bg-black w-full flex'>
        <div className='w-1/2 h-full flex flex-col  justify-center gap-y-4 font-clash text-white'>
          <div className='lg:w-5/6 lg:h-1/6  ml-4 flex flex-col justify-center'>
            <h1 className='text-3xl lg:text-5xl uppercase bg-rosered w-auto h-auto'>Typefaces</h1>
            <p className='font-azeret text-xxs lg:text-sm w-full'>A good font is essential.. it's all in the details.</p>
          </div>
        </div>
         
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='w-3/4 h-5/6  flex flex-col gap-y-4 justify-center items-center'>
            {/* Everett Mono */}
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white w-full text-sm lg:text-4xl ' style={{fontFamily: 'EverettMono'}}>Everett Mono <span className='font-azeret font-thin text-xs lg:text-md' >by Nolan Paparelli</span></h2>
            </div>
            {/* BT Grotesk */}
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm  lg:text-4xl' style={{fontFamily: 'Grotesk'}}>BT Grotesk <span className='font-azeret font-thin text-xs lg:text-md' >by Scott Vander Zee</span></h2>
            </div>
            {/* Chassi */}
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm  lg:text-4xl' style={{fontFamily: 'Chassi'}}>Chassi <span className='font-azeret font-thin text-xs lg:text-md' >by Francisco Torres, & Nina Botthof</span></h2>
            </div>
            {/* Flecha */}
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm lg:text-4xl' style={{fontFamily: 'Flecha'}}>Flecha <span className='font-azeret font-thin text-xs lg:text-md' >by Rui Abreu</span></h2>
            </div>
            {/* Sul Sans */}
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm lg:text-4xl' style={{fontFamily: 'SulSans'}}>Sul Sans <span className='font-azeret font-thin text-xs lg:text-md' >by Rui Abreu</span></h2>
            </div>    
            {/* Atica */}        
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm lg:text-4xl' style={{fontFamily: 'Atica'}}>Atica <span className='font-azeret font-thin text-xs lg:text-md' >by Rui Abreu & Francisco Torres</span></h2>
            </div>    
            {/* Basilar */}        
            <div className=' w-full h-16 flex items-center'>
              <h2 className='text-white text-sm lg:text-4xl' style={{fontFamily: 'Basilar'}}>Basilar <span className='font-azeret font-thin text-xs lg:text-md' >by Rui Abreu</span></h2>
            </div>         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Fonts