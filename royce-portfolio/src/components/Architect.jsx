import React from 'react'

import archImg1 from '/public/images/Gallery-of-Port-Melbourne-House-Local-Design-and-Interiors-Port-Melbourne-VIC-Image-1.jpeg'
import archImg2 from '/public/images/Dune-Main-Beach-by-Andrews-Projects-and-Rothelowman-Project-Feature-The-Local-Project-Image-05-min-scaled.jpeg'
import archImg3 from '/public/images/Awana-Beach-House-by-Herbst-Architects-Issue-09-Feature-The-Local-Project-Image-43-2.jpeg'
import archImg4 from '/public/images/Eco-Friendly-Home-for-an-Artist.jpeg'
import archImg5 from '/public/images/MODERN-YET-TIMELESS-MINIMALISM-BRIGHTON-LUXE-BY-CARR-Melbourne.jpeg'



const architect = [archImg1,
                   archImg2,
                   archImg3,
                   archImg4,
                   archImg5
                    ]

const titles = ['PORT MELBOURNE HOUSE by Winter Architecture',
                'Dune Main Beach by Andrews and Rothelowman',
                'Awana Beach House by Herbst Architects',
                'Yandoit Cabin by Adam Kane Architects',
                'Brighton Luxe by Carr',
                ]

const href = ['https://thelocalproject.com.au/galleries/gallery-of-port-melbourne-house-by-winter-architecture-project-archive-port-melbourne-vic-australia/',
              'https://thelocalproject.com.au/articles/dune-main-beach-by-andrews-projects-and-rothelowman-project-feature-the-local-project/',
              'https://thelocalproject.com.au/articles/awana-beach-house-by-herbst-architects-issue-09-feature-the-local-project/',
              'https://thelocalproject.com.au/articles/yandoit-cabin-by-adam-kane-architects-sustainable-cabin-architecture/',
              'https://thelocalproject.com.au/articles/brighton-luxe-by-carr-project-feature-the-local-project/',]

const Architect = () => {
  return (
    <div className='-mb-1'>
        <div className='h-screen w-full bg-black'>
            <div className='w-full h-36 flex items-center'>
                <div className='h-16 lg:w-10/12 w-5/6 flex bg-rosered justify-end items-center'>
                    <h2 className='text-white text-3xl lg:text-5xl uppercase font-clash mr-4'>Architecture</h2>
                </div>
            </div>
            
                <div className='w-5/6 lg:w-full h-4/5  flex justify-between'>
                    <div className='md:h-full w-full lg:w-1/2 lg:ml-4 h-5/6 flex gap-4'>
                        {architect.map((artFile, index) => (
                            <a className='border' href={href[index]} key={index} target="_blank" rel="noopener noreferrer">
                                <div className='md:w-24 h-full w-12 '  
                                    style={{
                                        backgroundImage: `url('${artFile}')`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '50% 50%'
                                    }}
                                >
                                    <div className="w-full h-full bg-black opacity-50 flex items-center justify-center hover:bg-gray-300 hover:opacity-50 text-white hover:text-black transition duration-200">
                                        <span className='rotate-90 whitespace-nowrap uppercase tracking-widest font-azeret text-xs lg:text-lg font-medium'>{titles[index]}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                     <div className='w-2/6 h-auto text-white hidden lg:visible font-azeret lg:flex justify-center items-center'>
                        <p className='text-sm'>I fell in love with structures and thoughtful placements that define both the exterior and interior of a building. They speak volumes to me, and I know that one day, those volumes will be mine. When that time comes, I'll be prepared.</p>
                     </div>
                </div>
            
            </div>
        </div>
  )
}

export default Architect