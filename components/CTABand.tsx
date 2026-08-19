import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from './Reveal'

interface Props {
  title?: string
  copy?: string
}

const CTABand = ({
  title = 'Tell us what you are trying to run better',
  copy = 'A short call, an honest answer on whether we are the right team, and a scope you can act on. No sales pipeline.',
}: Props) => {
  return (
    <section className="bg-white pb-16 pt-4 mdl:pb-24">
      <div className="container-x">
        <Reveal direction="scale">
          <div className="relative isolate overflow-hidden rounded-[32px] bg-brand-gradient px-6 py-14 text-white shadow-lift mdl:px-14 mdl:py-16">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-[380px] w-[380px] animate-float rounded-full bg-brand-green/30 blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] animate-float-slow rounded-full bg-brand-saffron/35 blur-[110px]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
            <span className="absolute inset-x-0 top-0 h-1 bg-tricolor" aria-hidden="true" />

            <div className="relative flex flex-col items-start gap-10 lgl:flex-row lgl:items-center lgl:justify-between">
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-saffron-light sm:text-xs">Next step</span>
                <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] sm:text-4xl mdl:text-[42px]">
                  {title}
                </h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-white/90 sm:text-[17px]">
                  {copy}
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lgl:w-auto lgl:flex-col xl:flex-row">
                <Link href="/contact" className="btn-saffron group w-full sm:w-auto">
                  Contact us
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="https://wa.me/917838160389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark w-full sm:w-auto"
                >
                  <FaWhatsapp className="text-brand-green-light" size={18} />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTABand
