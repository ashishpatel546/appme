import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

/**
 * Persistent quick actions. WhatsApp is how most enquiries actually arrive,
 * so it stays reachable; back-to-top appears once the page is worth scrolling back up.
 */
const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 mdl:bottom-7 mdl:right-6">
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        className={`grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-lift transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-surface-2 ${
          showTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <FiArrowUp size={19} />
      </button>

      <a
        href="https://wa.me/917838160389"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AppMeSoft on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.75)] transition-transform duration-400 ease-out-expo hover:-translate-y-1"
      >
        <span
          className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/60"
          aria-hidden="true"
        />
        <FaWhatsapp size={27} className="relative" />
      </a>
    </div>
  )
}

export default FloatingActions
