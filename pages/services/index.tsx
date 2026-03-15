import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import { LeftSide } from '@/components/LeftSide'
import { RightSide } from '@/components/RightSide'
import Footer from '@/components/Footer'


const services = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMore,setShowMore] = useState(false);
  return (
    <>
    <main className="w-full h-screen font-bodyFont bg-slate-100 text-black overflow-x-hidden overflow-y-scroll">
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
            </div>

      <section id='services' className='max-w-contentContainer mx-auto lgl:px-12 py-20 text-black'>
        <SectionTitle title='Services' />
        
        {/* Aggressive Cologeos Promotion */}
        <div className='mt-8 mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow duration-300'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='flex-1'>
                    <h2 className='text-3xl font-bold mb-4 text-textGreen'>Cologeos</h2>
                    <h3 className='text-xl mb-4 font-semibold'>The Ultimate School Management System</h3>
                    <p className='text-gray-200 mb-6 leading-relaxed'>
                        Experience the next generation of educational administration. Cologeos streamlines everything from attendance and fee management to online examinations and parent-teacher communication in one powerful, easy-to-use platform.
                    </p>
                    <a href="https://cologeos.in" target="_blank" rel="noopener noreferrer">
                        <button className='bg-textGreen text-blue-900 font-bold py-3 px-8 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300'>
                            Explore Cologeos
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>
           <ServiceCard title='Product Development'
                        des='We build robust, scalable, and intuitive software products from ideation to launch. Our comprehensive product development lifecycle ensures that your vision becomes a market-ready reality.'
                        link='#' />
            <ServiceCard title='IT Consultancies'
                        des='Strategic technology guidance to align your IT infrastructure with business goals. We provide expert advice on digital transformation, architecture, and technology adoption.'
                        link='#' />
            <ServiceCard title='Cloud Solutions'
                        des='Seamless cloud migration, re-architecture, and management. We specialize in developing microservice-based applications tailored for high availability and scalability.'
                        link='#' />
            <ServiceCard title='DevOps Engineering'
                        des='Streamline your software delivery with CI/CD implementations, Infrastructure as Code (Terraform), and robust Kubernetes orchestration, ensuring rapid and reliable deployments.'
                        link='#' />
            <ServiceCard title='Cyber Security Services'
                        des='Protect your digital assets with our comprehensive, end-to-end cybersecurity solutions. We implement rigorous security protocols to safeguard your data against modern threats.'
                        link='#' />
            <ServiceCard title='Data Analytics & AI/ML'
                        des='Transform your data into actionable insights. We leverage Hadoop, Spark, Python, and modern machine learning algorithms to build intelligent, predictive systems.'
                        link='#' />
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

export default services