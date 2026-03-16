import React from 'react'

import {GrInstagram} from 'react-icons/gr'
import {RiYoutubeFill} from 'react-icons/ri'
import{SiLinkedin,SiFacebook} from 'react-icons/si'


export const LeftSide = () => {
  return (
    
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-5'>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <GrInstagram />
                </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <RiYoutubeFill />
                </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiLinkedin />
                </span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:translate-y-2 '>
                    <SiFacebook />
                </span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-black '></div>
    </div>
  )
}
