import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import HeroScene from './HeroScene'
import { ChargeVetaMark } from './ChargeVeta'

const proof = [
  { v: '3', l: 'Years building', c: 'text-brand-blue' },
  { v: '100+', l: 'Clients served', c: 'text-brand-green' },
  { v: '7', l: 'Products shipped', c: 'text-brand-saffron' },
]

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      {/* Soft tricolour wash — light, never muddy */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] animate-float rounded-full bg-brand-blue/12 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-[520px] w-[520px] animate-float-slow rounded-full bg-brand-saffron/12 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-52 left-1/3 h-[520px] w-[520px] animate-float rounded-full bg-brand-green/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-dots-ink opacity-60" aria-hidden="true" />

      <div className="container-x relative pb-16 pt-10 mdl:pb-20 mdl:pt-14 xl:pb-20 xl:pt-16">
        <div className="grid items-center gap-12 lgl:grid-cols-12 lgl:gap-10 xl:gap-14">
          {/* Copy */}
          <div className="min-w-0 lgl:col-span-7">
            <div className="animate-fade-up">
              <a
                href="#chargeveta"
                className="group inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white py-1.5 pl-1.5 pr-4 text-[13px] shadow-soft transition-colors duration-300 hover:border-cv-navy/30"
              >
                <ChargeVetaMark size={24} />
                <span className="font-semibold text-cv-navy">ChargeVeta is live</span>
                <span className="hidden text-ink/60 sml:inline">EV charging, end to end</span>
                <FiArrowDown className="text-ink/50 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            <h1
              className="mt-7 animate-fade-up text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[40px] mdl:text-[48px] lgl:text-[44px] xl:text-[52px]"
              style={{ animationDelay: '90ms' }}
            >
              From the charging bay to the school gate,
              <span className="block text-brand-blue">our software runs the day.</span>
            </h1>

            <p
              className="mt-6 max-w-136 animate-fade-up text-[15.5px] leading-relaxed text-ink/65 sm:text-[17px]"
              style={{ animationDelay: '170ms' }}
            >
              <span className="font-display font-semibold">
                <span className="text-brand-blue-dark">App</span>
                <span className="text-brand-green">Me</span>
                <span className="text-brand-saffron-dark">Soft</span>
              </span>{' '}
              builds platforms for work that can&apos;t stop, with AI wherever it saves people time.
              ChargeVeta puts EV chargers live for manufacturers, operators and fleets. Colegios runs
              schools across India, with an AI assistant for staff and AI tools for teachers. The
              same team builds cloud, data and AI systems to order.
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '250ms' }}
            >
              <Link href="/contact" className="btn-primary group w-full sm:w-auto">
                Start a project
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a href="#platforms" className="btn-ghost group w-full sm:w-auto">
                See our platforms
                <FiArrowDown className="text-brand-green transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Proof strip */}
            <dl
              className="mt-10 grid animate-fade-up grid-cols-3 gap-4 border-t border-ink/10 pt-7 sm:max-w-md"
              style={{ animationDelay: '330ms' }}
            >
              {proof.map((s) => (
                <div key={s.l}>
                  <dt className={`font-display text-3xl font-extrabold mdl:text-[34px] ${s.c}`}>
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-snug text-ink/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Our platforms, live */}
          <div className="min-w-0 animate-fade-up lgl:col-span-5" style={{ animationDelay: '220ms' }}>
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Base rail in the brand tricolour */}
      <div className="h-1 w-full bg-tricolor" aria-hidden="true" />
    </section>
  )
}

export default Hero
