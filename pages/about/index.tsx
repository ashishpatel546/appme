import React from 'react'
import Head from 'next/head'
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
    <Head>
      <title>About AppMe</title>
    </Head>
    <main className="w-full h-screen font-bodyFont bg-slate-100 text-black overflow-x-hidden overflow-y-scroll">
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
            </div>

    <section id='about' className='max-w-contentContainer mx-auto px-4 lgl:px-12 py-20 flex flex-col gap-16'>

      <SectionTitle title='About AppMe'/>

      {/* Our Story Section */}
      <div className='flex flex-col lgl:flex-row gap-16 items-center'>
          <div className='w-full lgl:w-1/2 h-96 relative group hover:scale-105 transition-transform duration-500'>
              <div className='w-full absolute h-96 -left-4 -top-4 rounded-xl z-10'>
                  <div className='w-full h-full relative shadow-2xl rounded-xl overflow-hidden'>
                      <Image 
                        className='object-cover' 
                        src="/assets/images/about1.jpg" 
                        alt='Our Team'
                        layout="fill"
                      />                    
                  </div>
              </div>
              <div className='hidden lgl:block w-full h-96 border-4 border-blue-900 rounded-xl'></div>
          </div>
          
          <div className='w-full lgl:w-1/2 text-gray-800 font-medium flex flex-col gap-6 text-lg'>
              <h3 className="text-3xl font-bold text-blue-900">Our Story</h3>
              <p className="leading-relaxed">
                  At AppMe Pvt Ltd, we are driven by a passion for technology and a commitment to solving complex business challenges. Since our inception, we have evolved from a traditional service provider into a dynamic, product-driven enterprise that thrives on innovation.
              </p>
              <p className="leading-relaxed">
                  We started with a vision to empower organizations by building state-of-the-art technological solutions. Today, we stand as a beacon of progress, delivering high-performance products and uncompromised consulting services globally.
              </p>
          </div>
      </div>

      {/* Our Mission & Tech Stack Section */}
      <div className='flex flex-col-reverse lgl:flex-row gap-16 items-center mt-12'>
          <div className='w-full lgl:w-1/2 text-gray-800 font-medium flex flex-col gap-6 text-lg'>
              <h3 className="text-3xl font-bold text-blue-900">Our Mission</h3>
              <p className="leading-relaxed">
                  Our flagship product, Cologeos, is a testament to our dedication to transforming the educational landscape with robust, intuitive school management solutions. 
              </p>
              <p className="leading-relaxed">
                  Whether it&apos;s architecting cloud infrastructure, deploying AI-driven systems, or building scalable web applications, our team delivers excellence at every step.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-textGreen mt-4">
                <p className="font-bold text-blue-900 mb-4">Core Technologies We Leverage:</p>
                <ul className='grid grid-cols-2 gap-4 text-base'>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Cloud Architecture</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>DevOps & CI/CD</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Machine Learning</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Data Analytics</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Modern JS Frameworks</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Cyber Security</li>
                </ul>
              </div>
          </div>
          
          <div className='w-full lgl:w-1/2 h-96 relative group hover:scale-105 transition-transform duration-500'>
              <div className='w-full absolute h-96 right-4 top-4 rounded-xl z-10'>
                  <div className='w-full h-full relative shadow-2xl rounded-xl overflow-hidden'>
                      <Image 
                        className='object-cover' 
                        src="/assets/images/about2.jpg" 
                        alt='Innovation'
                        layout="fill"
                      />                    
                  </div>
              </div>
              <div className='hidden lgl:block w-full h-96 border-4 border-textGreen rounded-xl'></div>
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