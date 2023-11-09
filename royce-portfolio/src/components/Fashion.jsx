import React from 'react'


const fashion = ['./src/images/acoldwall-bomber.webp',
                 './src/images/peter-do.webp',
                 './src/images/bianca_saunders.jpeg',
                 './src/images/reese-cooper.webp',
                 './src/images/ferragamo.webp',
                 './src/images/martine.webp']

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
    <div>
        <div className='h-screen w-full bg-black flex items-center'>
            <div className='w-1/6 h-full flex items-end justify-center'>
              <div className='w-16 h-4/6 bg-rosered flex  flex-col items-center justify-center'>
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
            <div className='w-2/6 h-2/5 flex items-center'>
                <p className='text-white font-azeret text-sm'>Found my style way back when I was a kid. I was always drawn to the way clothes are complimented, structured, and layered. Garments became a big love of mine as a grew in age but right now it doesn't serve me any purpose.. Maybe I'll get back to <a href='https://www.instagram.com/duvernayofficial/' style={{ color: '#A67B5B', fontSize: '20px' }}>
                    DUVERNAY
                  </a>  later who knows.<br></br><br></br>Here Are Some of the Labels I Admire: </p>
            </div>
            <div className='w-3/6 h-full flex  justify-center items-center'>
                <div className='w-2/3 h-full flex flex-col flex-wrap justify-center items-center gap-y-4 hover:scale-110 transition duration-100'>
                        {fashion.map((fashionFile, index) => (
                          <a href={href[index]} key={index} target="_blank" rel="noopener noreferrer">
                              <div className='w-52 h-48 rounded-xl'  
                                  style={{
                                      backgroundImage: `url('${fashionFile}')`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundPosition: ' 20%'
                                  }}
                              >
                                 <div className="w-full h-full bg-black/50 opacity-50 rounded-lg flex items-center justify-center hover:bg-gray-300 hover:opacity-50 text-white hover:text-black transition duration-200">
                                        <span className='whitespace-nowrap uppercase tracking-widest font-azeret font-medium'>{titles[index]}</span>
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