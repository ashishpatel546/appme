import React from 'react'
import Image from 'next/image'

interface Props{
  image:string,
  desc:string
}

const Card = ({image,desc}:Props) => {
  return (
    <div className='shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] max-w-xs text-center mx-4 my-auto '>
            <Image width={200} height={200} src={image} alt={desc}
            className='w-full h-[16em] object-cover rounded ' />
            <h2 className='text-medium'>{desc}</h2>
        </div>
  )
}

export default Card