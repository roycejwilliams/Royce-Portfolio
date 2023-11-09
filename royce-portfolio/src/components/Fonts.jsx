import React from 'react'
import "../index.css"

const Fonts = () => {
  return (
    <div>
      <div className='h-screen bg-black w-full flex'>
        <div className='w-1/2 h-full flex flex-col  justify-center gap-y-4 font-clash text-white'>
          <div className='w-5/6 h-1/6  ml-4 flex flex-col justify-center'>
            <h1 className='text-5xl uppercase bg-rosered w-auto h-auto'>Typefaces</h1>
            <p className='font-azeret text-sm w-full'>A good font is essential.. it's all in the details.</p>
          </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='w-3/4 h-5/6  flex flex-col gap-y-4 justify-center items-center'>
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl ' style={{fontFamily: 'EverettMono'}}>Everett Mono</h2>
              <p className='text-white font-azeret'>by Nolan Paparelli</p>
            </div>
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'Grotesk'}}>BT Grotesk</h2>
              <p className='text-white font-azeret'>by Scott Vander Zee</p>
            </div>
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'Chassi'}}>Chassi</h2>
              <p className='text-white font-azeret'>by Francisco Torres, & Nina Botthof</p>
            </div>
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'Flecha'}}>Flecha</h2>
              <p className='text-white font-azeret'>by Rui Abreu</p>
            </div>
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'SulSans'}}>Sul Sans</h2>
              <p className='text-white font-azeret'>by Rui Abreu</p>
            </div>            
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'Atica'}}>Atica</h2>
              <p className='text-white font-azeret'>by Rui Abreu & Francisco Torres</p>
            </div>            
            <div className=' w-full h-16 flex items-center justify-between'>
              <h2 className='text-white text-4xl' style={{fontFamily: 'Basilar'}}>Basilar</h2>
              <p className='text-white font-azeret'>by Rui Abreu</p>
            </div>         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Fonts