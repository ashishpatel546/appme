import React from 'react'
import Image from 'next/image'
import { FaClipboardCheck, FaMoneyBillWave, FaComments, FaBook, FaQrcode, FaFingerprint, FaTasks, FaChartBar } from 'react-icons/fa'

const Colegios = () => {
  return (
    <section className="relative w-full py-20 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/images/backgrounds/cologeos-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

      <div className="relative container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Colegios - School Management System</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Revolutionize your educational institution with our comprehensive school management solution. 
            Colegios brings administrators, teachers, students, and parents together on a single, powerful platform. 
            Manage attendance, exams, fees, and more with ease.
          </p>
          <a href="https://colegios.in/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
              Visit Colegios Website
            </button>
          </a>
        </div>
        
        <div className="flex-1 w-full max-w-lg">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaClipboardCheck />
                </span>
                <span className="text-lg">Live Attendance Tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaMoneyBillWave />
                </span>
                <span className="text-lg">Fee & Finance Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaComments />
                </span>
                <span className="text-lg">Parent-Teacher Communication</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaBook />
                </span>
                <span className="text-lg">Library Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaQrcode />
                </span>
                <span className="text-lg">Security QR Authentication</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaFingerprint />
                </span>
                <span className="text-lg">Staff HR & Biometric Attendance Portal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaTasks />
                </span>
                <span className="text-lg">Homework Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <FaChartBar />
                </span>
                <span className="text-lg">Comprehensive Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Colegios
