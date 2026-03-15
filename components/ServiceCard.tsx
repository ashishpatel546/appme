import React from 'react'
import Image from 'next/image'

interface Props {
    title: string
    des: string
    link: string
    image: string
}

const ServiceCard = ({title, des, link, image}: Props) => {
  return (
    <a href={link} target='_blank' rel="noreferrer" className="block group h-full"> 
      <div className='w-full h-full min-h-[380px] rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col 
      hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden'>
        
        <div className="w-full h-48 relative overflow-hidden">
           <Image 
             src={image} 
             alt={title} 
             fill 
             style={{ objectFit: "cover" }} 
             className="group-hover:scale-110 transition-transform duration-500"
           />
        </div>
        
        <div className="p-8 flex-1 flex flex-col z-10 bg-white">
            <h2 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300'>{title}</h2>
            <p className='text-base text-gray-600 leading-relaxed flex-1'>{des}</p>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
      </div>
    </a>
  )
}

export default ServiceCard