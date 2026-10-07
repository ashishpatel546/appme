import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'

/**
 * The hero's thesis: the three colours in the AppMeSoft logo are three practices.
 * App = product engineering (blue), Me = people & consulting (green),
 * Soft = software, cloud & AI (saffron).
 */
const practices = [
  {
    syllable: 'App',
    label: 'Product engineering',
    copy: 'Web, mobile and platform products taken from a whiteboard to a running release.',
    tile: 'bg-brand-blue/10 text-brand-blue ring-brand-blue/20',
    dot: 'bg-brand-blue',
    edge: 'hover:border-brand-blue/35',
  },
  {
    syllable: 'Me',
    label: 'Consulting & teams',
    copy: 'Architecture reviews, DevOps and engineers who stay on after go-live.',
    tile: 'bg-brand-green/10 text-brand-green-dark ring-brand-green/20',
    dot: 'bg-brand-green',
    edge: 'hover:border-brand-green/35',
  },
  {
    syllable: 'Soft',
    label: 'Cloud, data & AI',
    copy: 'Cloud infrastructure, analytics pipelines and AI that does real work.',
    tile: 'bg-brand-saffron/10 text-brand-saffron-dark ring-brand-saffron/20',
    dot: 'bg-brand-saffron',
    edge: 'hover:border-brand-saffron/35',
  },
]

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      {/* Soft tricolour wash — light, never muddy */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] animate-float rounded-full bg-brand-blue/[0.13] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] animate-float-slow rounded-full bg-brand-saffron/[0.13] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-52 left-1/3 h-[520px] w-[520px] animate-float rounded-full bg-brand-green/[0.11] blur-[130px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-dots-ink opacity-70" aria-hidden="true" />

      <div className="container-x relative pb-20 pt-14 mdl:pb-28 mdl:pt-20 xl:pb-32 xl:pt-24">
        <div className="grid items-center gap-14 lgl:grid-cols-12 lgl:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="lgl:col-span-7">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white py-2 pl-2.5 pr-4 text-[12px] shadow-soft sm:text-[13px]">
                <span className="relative grid h-2 w-2 place-items-center">
                  <span className="absolute h-2 w-2 animate-pulse-ring rounded-full bg-brand-green" />
                  <span className="h-2 w-2 rounded-full bg-brand-green" />
                </span>
                <span className="text-ink/70">
                  Formerly Sologence Technologies — same team, wider bench
                </span>
              </span>
            </div>

            <h1
              className="mt-7 animate-fade-up text-[30px] font-extrabold leading-[1.08] text-ink sm:text-[36px] sm:max-w-[16ch] mdl:text-[46px] lgl:text-[44px] xl:text-[56px]"
              style={{ animationDelay: '90ms' }}
            >
              <span className="text-brand-blue-dark">App</span>
              <span className="text-brand-green">Me</span>
              <span className="text-brand-saffron">Soft</span>
              <span className="block">builds products that run</span>
              <span className="block text-ink/60">schools, businesses and beyond.</span>
            </h1>

            <p
              className="mt-7 max-w-xl animate-fade-up text-[15.5px] leading-relaxed text-ink/65 sm:text-[17px]"
              style={{ animationDelay: '170ms' }}
            >
              We are a product-driven engineering company in Delhi. Colegios runs daily operations
              for schools across India, our AI and automation products work inside businesses every
              day, and a one-stop EV charging platform is next off the bench. The same team builds
              cloud, data and AI systems to order.
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-semibold sm:text-xl mdl:text-2xl"
              style={{ animationDelay: '240ms' }}
            >
              <span className="text-ink/60">We work in</span>
              <span className="text-brand-saffron-dark">
                <Typewriter
                  options={{
                    strings: [
                      'Cloud Computing',
                      'AI & Machine Learning',
                      'Cyber Security',
                      'Product Development',
                      'School Management Systems',
                      'EV Charging Platforms',
                    ],
                    delay: 45,
                    deleteSpeed: 25,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div
              className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '310ms' }}
            >
              <Link href="/contact" className="btn-primary group w-full sm:w-auto">
                Start a project
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://www.colegios.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                <FiPlay className="text-brand-green" />
                See Colegios
              </a>
            </div>

            {/* Proof strip */}
            <dl
              className="mt-12 grid animate-fade-up grid-cols-3 gap-4 border-t border-ink/10 pt-8 sm:max-w-lg"
              style={{ animationDelay: '380ms' }}
            >
              {[
                { v: '3', l: 'Years building', c: 'text-brand-blue' },
                { v: '10+', l: 'Enterprise clients', c: 'text-brand-green' },
                { v: '6', l: 'Products shipped', c: 'text-brand-saffron' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className={`font-display text-3xl font-extrabold mdl:text-4xl ${s.c}`}>
                    {s.v}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-snug text-ink/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Signature: the wordmark, decoded */}
          <div className="lgl:col-span-5">
            <div
              className="animate-fade-up rounded-[28px] border border-ink/[0.07] bg-white/85 p-5 shadow-lift backdrop-blur-xl mdl:p-6"
              style={{ animationDelay: '260ms' }}
            >
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/60">
                  Three syllables, three practices
                </span>
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  <span className="h-2 w-2 rounded-full bg-brand-green" />
                  <span className="h-2 w-2 rounded-full bg-brand-saffron" />
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {practices.map((p) => (
                  <li key={p.syllable}>
                    <div
                      className={`group flex cursor-default items-start gap-4 rounded-2xl border border-ink/[0.07] bg-surface p-4 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-soft ${p.edge}`}
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-base font-extrabold ring-1 ${p.tile}`}
                      >
                        {p.syllable}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 font-display text-[15px] font-semibold text-ink">
                          <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                          {p.label}
                        </span>
                        <span className="mt-1.5 block text-[13.5px] leading-relaxed text-ink/60">
                          {p.copy}
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl bg-tricolor p-[1.5px]">
                <Link
                  href="/services"
                  className="flex w-full items-center justify-between rounded-[15px] bg-white px-5 py-3.5 text-[14.5px] font-semibold text-ink transition-colors duration-300 hover:bg-surface"
                >
                  See how we work
                  <FiArrowUpRight className="text-brand-saffron" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base rail in the brand tricolour */}
      <div className="h-1 w-full bg-tricolor" aria-hidden="true" />
    </section>
  )
}

export default Hero
