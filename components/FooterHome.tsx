import { logo, logo1 } from '@/public/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { RiYoutubeFill } from 'react-icons/ri'
import { SiFacebook, SiLinkedin } from 'react-icons/si'

const FooterHome = () => {
  return (
   <footer className='bg-blue-900 text-white min-h-[300px]'>
    <div className='container mx-auto px-6 lg:px-12 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center md:items-start'>
                <div className="text-3xl font-extrabold text-white tracking-tighter flex items-center gap-1 mb-6">
                    <div className="w-8 h-8 bg-white text-blue-900 rounded-lg flex items-center justify-center text-xl shadow-lg">A</div>
                    pp<span className="text-green-400">Me</span>
                </div>
                <p className='text-blue-100 text-center md:text-left leading-relaxed max-w-sm'>
                    AppMe Pvt Ltd is a dynamic, product-driven enterprise specializing in School Management Systems, Cloud Solutions, and AI/ML technologies.
                </p>
            </div>
            
            <div className='flex flex-col items-center md:items-start'>
                <h3 className='text-xl font-bold mb-6 text-white'>Quick Links</h3>
                <div className='flex flex-col gap-4 text-blue-100'>
                    <Link href="/" className='hover:text-green-400 transition-colors duration-300'>Home</Link>
                    <Link href="/about" className='hover:text-green-400 transition-colors duration-300'>About Us</Link>
                    <Link href="/services" className='hover:text-green-400 transition-colors duration-300'>Services</Link>
                    <Link href="/contact" className='hover:text-green-400 transition-colors duration-300'>Contact Us</Link>
                </div>
            </div>

            <div className='flex flex-col items-center md:items-start'>
                <h3 className='text-xl font-bold mb-6 text-white'>Connect With Us</h3>
                <div className='flex gap-x-5 items-center mb-6'>
                    <a href="#" className='text-blue-100 hover:text-green-400 hover:-translate-y-1 transition-all duration-300'>
                        <GrInstagram size={24}/>
                    </a>
                    <a href="#" className='text-blue-100 hover:text-green-400 hover:-translate-y-1 transition-all duration-300'>
                        <RiYoutubeFill size={26}/>
                    </a>
                    <a href="#" className='text-blue-100 hover:text-green-400 hover:-translate-y-1 transition-all duration-300'>
                        <SiLinkedin size={24}/>
                    </a>
                    <a href="#" className='text-blue-100 hover:text-green-400 hover:-translate-y-1 transition-all duration-300'>
                        <SiFacebook size={24}/>
                    </a>
                </div>
                <p className='text-blue-100'>Email: <a href="mailto:info@appme.in" className="hover:text-green-400">info@appme.in</a></p>
                <p className='text-blue-100 mt-2'>Phone: +91 8005004357</p>
            </div>
        </div>
        
        <div className='mt-16 pt-8 border-t border-blue-800 text-center text-blue-200'>
            <p>&copy; {new Date().getFullYear()} AppMe Pvt Ltd. All rights reserved.</p>
        </div>
    </div>
   </footer>
  )
}

export default FooterHome