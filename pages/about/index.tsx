import React from 'react'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image'
import { tech3 } from '@/public/assets'
import SectionTitle from '@/components/SectionTitle'
import { Navbar } from '@/components/Navbar'
import { LeftSide } from '@/components/LeftSide'
import { RightSide } from '@/components/RightSide'
import Footer from '@/components/Footer'

const about = () => {
  return (
    <>
    <main className="w-full h-screen font-bodyFont bg-slate-100 text-black overflow-x-hidden overflow-y-scroll">
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
            </div>

    <section id='about' className='max-w-containerSmall mx-auto lgl:py-32 flex flex-col gap-8'>

    <SectionTitle title='About'/>

    <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-gray-800 font-medium flex flex-col gap-6 text-lg'>
            <p>
                At AppMe Pvt Ltd, we are driven by a passion for technology and a commitment to solving complex business challenges. Since our inception, we have evolved from a traditional service provider into a dynamic, product-driven enterprise that thrives on innovation.
            </p>
            <p>
                Our flagship product, Cologeos, is a testament to our dedication to transforming the educational landscape with robust, intuitive school management solutions. Whether it's architecting cloud infrastructure, deploying AI-driven systems, or building scalable web applications, our team delivers excellence at every step.
            </p>
            <p className="font-semibold text-blue-900 mt-2">We ensure to be in-line with the latest technologies like:</p>
            <ul className='max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6'>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>JavaScript</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>DevOps</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>Machine Learning</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>Cloud</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>Data Analytics</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>Artificial Intelligence</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>IOT</li>
                <li className='flex items-center gap-2'><span className='text-blue-900'>
                    <AiFillThunderbolt /></span>Automation</li>

                
            </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group hover:scale-105 transition-transform duration-500'>
            <div className='w-full absolute h-80 -left-4 -top-4 rounded-xl z-10'>
                <div className='w-full h-full relative shadow-2xl rounded-xl overflow-hidden'>
                    <Image 
                      className='object-cover' 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                      alt='About AppMe'
                      layout="fill"
                    />                    
                </div>
            </div>
            <div className='lgl:inline-flex w-full h-80 border-4 border-blue-900 rounded-xl'></div>
        </div>
    </div>
    </section>

    <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>

        <Footer />
</main>
    </>
  )
}

export default about