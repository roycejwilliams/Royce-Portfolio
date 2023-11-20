import React from 'react'


import fashionImg1 from '/public/images/acoldwall-bomber.webp'
import fashionImg2 from '/public/images/peter-do.webp'
import fashionImg3 from '/public/images/bianca_saunders.jpeg'
import fashionImg4 from '/public/images/reese-cooper.webp'
import fashionImg5 from '/public/images/ferragamo.webp'
import fashionImg6 from '/public/images/martine.webp'

const fashion = [
                  fashionImg1,
                  fashionImg2,
                  fashionImg3,
                  fashionImg4,
                  fashionImg5,
                  fashionImg6
]

const href = ['https://a-cold-wall.com/collections/autumn-winter-2023',
              'https://peterdo.net/pages/fw22',
              'https://www.biancasaunders.com/autumn-winter-2021',
              'https://reese-cooper.com/collections/spring-summer-ss23',
              'https://www.ferragamo.com/en-us/',
               'https://martine-rose.com/']

const titles = ['A-COLD-WALL',
                'Peter Do',
                'Bianca Saunders', 
                'Reese Cooper',
                'Ferragamo', 
                'Martine Rose']               

const Fashion = () => {
  return (
    <div className='-mb-1'>
        <div className='h-screen w-full bg-black flex items-center'>
            <div className='w-1/6 h-full flex items-end justify-center'>
              <div className='w-16 h-4/6 bg-rosered flex flex-col items-center justify-center'>
                        <h2 className='uppercase font-clash text-5xl text-white'>G</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>A</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>R</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>M</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>E</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>N</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>T</h2>
                        <h2 className='uppercase font-clash text-5xl text-white'>S</h2>
              </div>
            </div>
            <div className='w-2/6 h-2/5 lg:flex hidden lg:visible items-center'>
                <p className='text-white  font-azeret text-sm'>Found my style way back when I was a kid. I was always drawn to the way clothes are complimented, structured, and layered. Garments became a big love of mine as a grew in age but right now it doesn't serve me any purpose.. Maybe I'll get back to <a href='https://www.instagram.com/duvernayofficial/' style={{ color: '#A67B5B', fontSize: '20px' }}>
                    DUVERNAY
                  </a>  later who knows.<br></br><br></br>Here Are Some of the Labels I Admire: </p>
            </div>
            <div className='lg:w-3/6 lg:h-full w-5/6 h-full flex justify-center items-center'>
                <div className='h-3/4 mx-auto  w-full flex flex-col flex-wrap justify-center items-center gap-y-2 transition duration-100'>
                        {fashion.map((fashionFile, index) => (
                          <a href={href[index]} key={index} target="_blank" rel="noopener noreferrer">
                              <div className='md:w-52 md:h-48 w-28 h-40   rounded-xl'  
                                  style={{
                                      backgroundImage: `url('${fashionFile}')`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundPosition: ' 20%'
                                  }}
                              >
                                 <div className="w-full h-full bg-black/50 opacity-50 rounded-lg flex items-center justify-center hover:bg-gray-300 hover:opacity-50 text-white hover:text-black transition duration-200">
                                        <span className='whitespace-nowrap uppercase tracking-widest font-azeret text-xxs lg:font-medium'>{titles[index]}</span>
                                </div>
                              </div>
                          </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fashion