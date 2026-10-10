import React from 'react'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { RiYoutubeFill } from 'react-icons/ri'
import { SiFacebook, SiLinkedin } from 'react-icons/si'
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Logo from './Logo'

const socials = [
  { label: 'LinkedIn', href: '#', Icon: SiLinkedin },
  { label: 'Instagram', href: '#', Icon: GrInstagram },
  { label: 'YouTube', href: '#', Icon: RiYoutubeFill },
  { label: 'Facebook', href: '#', Icon: SiFacebook },
]

const platforms = [
  {
    name: 'ChargeVeta',
    href: 'https://www.chargeveta.in/',
    copy: 'EV charging, end to end — chargers, drivers, fleets and billing.',
  },
  {
    name: 'Colegios',
    href: 'https://www.colegios.in/',
    copy: 'School management, end to end — admissions to report cards.',
  },
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand-deep text-white">
      {/* tricolour edge */}
      <div className="h-1 w-full bg-tricolor" aria-hidden="true" />

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-blue-light/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-saffron/25 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-x relative py-14 mdl:py-20">
        <div className="grid gap-12 mdl:grid-cols-12 mdl:gap-10">
          {/* Brand */}
          <div className="mdl:col-span-5 xl:col-span-4">
            <Logo onDark withDescriptor />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              A product-driven software company from Delhi, India. We build EV charging and school
              platforms, AI and automation products and cloud systems — and we run them long after
              launch.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 text-white/70 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="mdl:col-span-3 xl:col-span-2" aria-label="Footer">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3.5 text-[15px]">
              {[
                { t: 'Home', h: '/' },
                { t: 'About us', h: '/about' },
                { t: 'Services', h: '/services' },
                { t: 'Contact', h: '/contact' },
              ].map((l) => (
                <li key={l.h}>
                  <Link
                    href={l.h}
                    className="inline-flex items-center gap-1.5 text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {l.t}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Product */}
          <div className="mdl:col-span-4 xl:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
              Our platforms
            </h3>
            <ul className="mt-5 space-y-3">
              {platforms.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-white/10 bg-white/4 p-4 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <span className="flex items-center gap-1 font-display font-semibold text-white">
                      {p.name} <FiArrowUpRight className="text-brand-saffron" />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/70">{p.copy}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic mdl:col-span-12 xl:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
              Reach us
            </h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0 text-brand-green-light" />
                <span className="text-white/70">Dayalpur, Delhi 110090, India</span>
              </li>
              <li className="flex gap-3">
                <FiMail className="mt-1 shrink-0 text-brand-blue-light" />
                <span className="flex flex-col">
                  <a href="mailto:info@appme.in" className="text-white/70 transition-colors hover:text-white">
                    info@appme.in
                  </a>
                  <a
                    href="mailto:support@appme.in"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    support@appme.in
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="mt-1 shrink-0 text-brand-saffron-light" />
                <span className="flex flex-col">
                  <a href="tel:+917838160389" className="text-white/70 transition-colors hover:text-white">
                    +91 78381 60389
                  </a>
                  <a href="tel:+919654047009" className="text-white/70 transition-colors hover:text-white">
                    +91 96540 47009
                  </a>
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/75 mdl:flex-row">
          <p>© {new Date().getFullYear()} AppMe Soft Private Limited. All rights reserved.</p>
          <div className="flex flex-col items-center gap-4 sml:flex-row sml:gap-6">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
              Formerly Sologence Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
