import React from 'react'
import Typewriter from "typewriter-effect"
import Image from 'next/image'
import { tech3 } from '@/public/assets'

const Banner = () => {
  return (
    <div className='relative px-8 lgl:px-32 py-32 bg-cover bg-fixed flex items-center min-h-[80vh]' 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')" }}>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
      
      <div className='relative container mx-auto flex flex-col lgl:flex-row z-10'>
        <div className='basis-1/2 w-full lgl:w-2/3 py-2 text-white'>
          <span className='text-3xl md:text-6xl font-extrabold tracking-tight text-white mb-4 block'>AppMe Pvt Ltd.</span>
          
          <div className='pt-1'> </div>
          <p className='text-blue-200 font-semibold text-xl md:text-2xl max-w-2xl leading-relaxed italic border-l-4 border-blue-400 pl-4 mb-6'>
            Previously Sologence Technologies Pvt Ltd. Now more energetic, more enthusiastic, with broader team and innovation we are AppMe Pvt Ltd.
          </p>
            
            <div className='pt-4'></div>
            <h3 className='md:text-3xl mt-3 font-bold text-textGreen flex gap-2'>
            <span className="text-white">We Specialize in:</span>
            <Typewriter options={
                {
                  strings: [ "Cloud Computing" , "Cyber Security" , "AI/ML", "NodeJS", "School Management Systems" ] ,
                  delay: 30 ,
                  deleteSpeed: 20 ,
                  autoStart: true ,
                  loop: true 
                }
              } />
            </h3>
            <div className='pt-6'></div>
            <p className='text-gray-200 text-lg max-w-2xl leading-relaxed mb-8'>
              Empowering businesses with cutting-edge technology solutions. From advanced cloud infrastructure to 
              comprehensive school management systems like Cologeos, we deliver innovation that drives real results.
            </p>

            <div className='pt-4'>
            <div className='flex space-x-6'>
            <button className='px-8 py-4 rounded-md font-bold text-blue-900 bg-white hover:bg-slate-200 hover:-translate-y-1 transition-all duration-300 shadow-lg'>Explore</button>
            <button className='px-8 py-4 rounded-md font-bold text-white bg-transparent border-2 border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300'>Services</button>
            </div>
          </div>
        </div>
      <div className='basis-1/2 px-0 py-0 w-full lgl:w-1/3 hidden lgl:flex justify-center items-center'>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500 border-4 border-white/20">
          <Image src={tech3} alt='tech' layout="fill" objectFit="cover" className="hover:scale-110 transition-transform duration-700"/>
        </div>
      </div>   
    </div>
  </div>
  )
}

export default Banner;
