import React from 'react'
import {BsFillCloudsFill} from 'react-icons/bs'
import {GiComputing} from 'react-icons/gi'
import {AiOutlineNodeIndex} from 'react-icons/ai'
const Expertise = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <h1 className='text-2xl font-bold text-center p-8' >Our Expertise </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black rounded-xl hover:-translate-y-2 transition-transform duration-300'>
                
                <BsFillCloudsFill size={50} className="text-blue-900"/>

                <h2 className='font-medium text-[20px]'>Cloud Computing</h2>
                <p className="text-gray-700">We architect and implement scalable, secure cloud solutions. By leveraging modern cloud platforms, we help businesses achieve greater agility, reduce IT costs, and accelerate their digital transformation journey.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black rounded-xl hover:-translate-y-2 transition-transform duration-300'>
                
                <AiOutlineNodeIndex size={50} className="text-blue-900"/>
                
                <h2 className='font-medium text-[20px]'>Node JS</h2>
                <p className="text-gray-700">Our Node.js experts build high-performance, real-time applications. We specialize in developing fast, scalable backend systems, APIs, and microservices that power robust modern web architectures.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black rounded-xl hover:-translate-y-2 transition-transform duration-300'>
                
                <GiComputing size={50} className="text-blue-900"/>
                
                <h2 className='font-medium text-[20px]'>AI/ML</h2>
                <p className="text-gray-700">Unlock the power of your data with our Artificial Intelligence and Machine Learning solutions. We create intelligent systems that automate processes, generate insights, and provide actionable business intelligence.</p>
            </div>
        </div>

    </section>
  )
}

export default Expertise