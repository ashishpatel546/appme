import React from 'react'
import { Navbar } from '@/components/Navbar'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import { LeftSide } from '@/components/LeftSide'
import { RightSide } from '@/components/RightSide'
import Footer from '@/components/Footer'
import servicesData from '@/public/data/services.json'

const services = () => {
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
           {servicesData.map((item) => (
             <ServiceCard 
               key={item.id}
               title={item.title}
               des={item.des}
               link={item.link}
               image={item.image}
             />
           ))}
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
