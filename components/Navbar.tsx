import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'
import Logo from './Logo'

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
]

export const Navbar = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      setScrolled(top > 24)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (top / height) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showMenu])

  // Close the drawer on route change
  useEffect(() => {
    const close = () => setShowMenu(false)
    router.events.on('routeChangeComplete', close)
    return () => router.events.off('routeChangeComplete', close)
  }, [router.events])

  // Escape closes the drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMenu(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-ink/[0.08] bg-white transition-shadow duration-500 ease-out-expo ${
        scrolled ? 'shadow-[0_6px_24px_-16px_rgba(11,18,32,0.5)]' : ''
      }`}
    >
      {/* Reading-progress hairline in the brand tricolour */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-tricolor transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <nav className="container-x" aria-label="Primary">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16 mdl:h-[68px]' : 'h-[68px] mdl:h-20'
          }`}
        >
          <Link href="/" aria-label="AppMeSoft — home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 mdl:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = router.pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group relative inline-flex h-10 items-center rounded-full px-4 text-[15px] font-medium transition-colors duration-300 ${
                        isActive ? 'text-brand-blue' : 'text-ink/70 hover:text-ink'
                      }`}
                    >
                      {item.title}
                      <span
                        className={`absolute inset-x-4 bottom-1.5 h-[2px] rounded-full bg-tricolor transition-transform duration-300 ease-out-expo ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/contact"
              className="group ml-3 inline-flex h-11 items-center gap-1.5 rounded-full bg-brand-blue px-5 text-[15px] font-semibold text-white shadow-[0_10px_26px_-10px_rgba(29,78,216,0.7)] transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-brand-blue-dark"
            >
              Start a project
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setShowMenu(true)}
            aria-label="Open menu"
            aria-expanded={showMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-brand-blue-dark transition-colors hover:bg-surface-2 mdl:hidden"
          >
            <HiOutlineMenuAlt4 size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] mdl:hidden ${showMenu ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!showMenu}
      >
        <div
          onClick={() => setShowMenu(false)}
          className={`absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity duration-400 ${
            showMenu ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-[380px] flex-col bg-white px-6 pb-8 pt-6 shadow-2xl transition-transform duration-500 ease-out-expo ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-brand-blue-dark transition-colors hover:bg-surface-2"
            >
              <MdClose size={22} />
            </button>
          </div>

          <span className="mt-6 block h-[2px] w-full rounded-full bg-tricolor" />

          <ul className="mt-8 flex flex-col gap-1">
            {navLinks.map((item, i) => {
              const isActive = router.pathname === item.path
              return (
                <li
                  key={item.path}
                  style={{ transitionDelay: showMenu ? `${120 + i * 60}ms` : '0ms' }}
                  className={`transition-all duration-500 ease-out-expo ${
                    showMenu ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                  }`}
                >
                  <Link
                    href={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 font-display text-lg font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'text-ink/70 hover:bg-surface-2 hover:text-ink'
                    }`}
                  >
                    {item.title}
                    <FiArrowUpRight className={isActive ? 'text-brand-saffron' : 'text-ink/60'} />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-auto space-y-4 pt-8">
            <Link href="/contact" className="btn-saffron w-full">
              Start a project
            </Link>
            <div className="space-y-1 text-center text-sm text-ink/60">
              <a href="mailto:info@appme.in" className="block transition-colors hover:text-brand-blue">
                info@appme.in
              </a>
              <a href="tel:+917838160389" className="block transition-colors hover:text-brand-blue">
                +91 78381 60389
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
