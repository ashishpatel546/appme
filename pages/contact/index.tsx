import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import SectionTitle from '@/components/SectionTitle'
import { Navbar } from '@/components/Navbar'
import { RightSide } from '@/components/RightSide'
import { LeftSide } from '@/components/LeftSide'
import Footer from '@/components/Footer'
const contact = () => {
  return (
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
                We'd love to hear from you! Whether you have a question about our services, need support for Cologeos, or want to explore partnership opportunities, our team is ready to answer all your questions.
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center ">
                  <CiLocationOn size='30px' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-semibold">Our Location</h4>
                  <p className="text-zinc-800">abcncdjnie 1220018. India</p>
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
            </div>
          </div>


          <div className="w-full pt-10 grid">
            <div className=" rounded-lg bg-teal-900 shadow-lg sm:p-8">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-black w-full rounded border py-3 px-[14px] "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-black w-full rounded border py-3 px-[14px] "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="text-black w-full rounded border py-3 px-[14px]"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    className="text-black w-full rounded border py-3 px-[14px] "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border p-3 text-white transition hover:bg-bodyColor">
                    Send Message
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
  )
}

export default contact