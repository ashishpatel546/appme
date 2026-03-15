import React, { useState } from 'react'
import Head from 'next/head'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import QRCode from 'react-qr-code'
import SectionTitle from '@/components/SectionTitle'
import { Navbar } from '@/components/Navbar'
import { RightSide } from '@/components/RightSide'
import { LeftSide } from '@/components/LeftSide'
import Footer from '@/components/Footer'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // WhatsApp number with country code
    const phoneNumber = '919716160389'
    
    // Construct the message
    const message = `Hello,\n\nI am reaching out via your website contact form:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}`
    
    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
    <Head>
      <title>Contact AppMe</title>
    </Head>
    <main className="w-full h-screen font-bodyFont bg-slate-100 text-black overflow-x-hidden overflow-y-scroll">
      <Navbar />

      <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
        <LeftSide />
      </div>
      <section id='contactUs' className='max-w-contentContainer mx-auto lgl:px-12 py-20'>

        <SectionTitle title='Contact Us' />

        <div className='grid grid-cols-2 gap-2'>
          <div className="container -mx-4 flex flex-col lgl:flex-row flex-wrap lg:justify-between ">
            <div className="w-full  px-4">
              <h2 className="pt-8 font-bold italic mb-6 text-[16px] uppercase sm:text-[16px] lg:text-[26px] 
                    xl:text-[ 16px] text-blue-900"> GET IN TOUCH WITH US </h2>
              <p className=" mb-9 text-base leading-relaxed text-gray-700">
                We&apos;d love to hear from you! Whether you have a question about our services, need support for Cologeos, or want to explore partnership opportunities, our team is ready to answer all your questions.
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center ">
                  <CiLocationOn size='30px' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-semibold">Our Location</h4>
                  <p className="text-zinc-800">Dayalpur, Delhi 110090, India</p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center">
                  <FiPhone size='25px' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-semibold">Phone Number</h4>
                  <p className="text-zinc-800">9716160389, 9654047009</p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center ">
                  <AiOutlineMail size='25px' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-semibold">Email Address</h4>
                  <p className="text-zinc-800">support@appme.in<br />info@appme.in</p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="mb-8 flex w-full max-w-[370px] flex-col mt-4">
                <h4 className="text-dark mb-4 text-xl font-semibold">Scan to Chat on WhatsApp</h4>
                <div className="bg-white p-4 rounded-lg shadow-md inline-block w-fit">
                  <QRCode 
                    value="https://wa.me/919716160389" 
                    size={150}
                    level="H"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">Scan this QR code with your phone camera</p>
              </div>
            </div>
          </div>


          <div className="w-full pt-10 grid">
            <div className=" rounded-lg bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] h-fit sm:p-8 border border-gray-100">
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="text-black w-full rounded-md border border-gray-300 py-3 px-[14px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="text-black w-full rounded-md border border-gray-300 py-3 px-[14px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone Number"
                    className="text-black w-full rounded-md border border-gray-300 py-3 px-[14px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="text-black w-full rounded-md border border-gray-300 py-3 px-[14px] focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md border border-blue-900 bg-blue-900 p-3 text-white font-semibold transition hover:bg-white hover:text-blue-900 shadow-md">
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
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

export default Contact