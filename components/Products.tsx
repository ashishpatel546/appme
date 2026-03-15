import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import productsData from '@/public/data/products.json'

const Products = () => {
  return (
    <section className='container mx-auto py-16 px-4'>
        <SectionTitle title='Our Products' />
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12'>
            {productsData.map((item) => (
                <div key={item.id} className='w-full rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-full'>
                    
                    <div className="w-full h-56 relative overflow-hidden">
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            layout="fill" 
                            objectFit="cover" 
                            className="group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col z-10 bg-white">
                        <h2 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300'>{item.title}</h2>
                        <p className='text-base text-gray-600 leading-relaxed mb-6 flex-grow'>
                            {item.description}
                        </p>
                        <Link href="/contact" className="w-full py-3 px-6 bg-blue-900 text-white text-center font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 mt-auto">
                            Get in touch
                        </Link>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Products