import React from 'react'
import Image from 'next/image'
import {
  FaClipboardCheck,
  FaMoneyBillWave,
  FaComments,
  FaBook,
  FaQrcode,
  FaFingerprint,
  FaTasks,
  FaChartBar,
} from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

const features = [
  { Icon: FaClipboardCheck, label: 'Live attendance', tint: 'bg-brand-blue/10 text-brand-blue' },
  { Icon: FaMoneyBillWave, label: 'Fees & finance', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { Icon: FaComments, label: 'Parent messaging', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
  { Icon: FaBook, label: 'Library', tint: 'bg-brand-blue/10 text-brand-blue' },
  { Icon: FaQrcode, label: 'QR gate security', tint: 'bg-brand-green/10 text-brand-green-dark' },
  {
    Icon: FaFingerprint,
    label: 'Staff HR & biometrics',
    tint: 'bg-brand-saffron/10 text-brand-saffron-dark',
  },
  { Icon: FaTasks, label: 'Homework', tint: 'bg-brand-blue/10 text-brand-blue' },
  { Icon: FaChartBar, label: 'Reports & analytics', tint: 'bg-brand-green/10 text-brand-green-dark' },
]

/**
 * Flagship-product band. The photo is kept inside a contained panel rather than
 * washed across the background, so headline text always sits on solid colour.
 */
const Colegios = () => {
  return (
    <section
      id="colegios"
      className="relative isolate overflow-hidden bg-brand-gradient text-white"
    >
      <div className="h-1 w-full bg-tricolor" aria-hidden="true" />

      <div
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] animate-float rounded-full bg-brand-saffron/20 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[460px] w-[460px] animate-float-slow rounded-full bg-brand-green/20 blur-[150px]"
        aria-hidden="true"
      />

      <div className="container-x relative section-y">
        <div className="grid items-center gap-12 lgl:grid-cols-2 lgl:gap-16">
          {/* Copy + contained photo */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white">
                Flagship product
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-[32px] font-extrabold leading-[1.1] text-white sm:text-4xl mdl:text-[46px] xl:text-5xl">
                Colegios
                <span className="mt-2 block text-white">runs the whole school day</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <span className="mt-6 block h-1 w-24 rounded-full bg-brand-saffron" />
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white sm:text-[17px]">
                Admissions, attendance, fees, exams, homework and the messages home — one platform
                that administrators, teachers, students and parents all sign into. Built with Indian
                schools, in Indian schools.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.colegios.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white group w-full sm:w-auto"
                >
                  Visit colegios.in
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://wa.me/917838160389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark w-full sm:w-auto"
                >
                  Book a demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="relative mt-10 h-48 overflow-hidden rounded-3xl ring-1 ring-white/25 mdl:h-56">
                <Image
                  src="/assets/images/backgrounds/cologeos-bg.jpg"
                  alt="Students in a classroom using Colegios"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#16295f] via-[#16295f]/30 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-5 right-5 font-display text-[15px] font-semibold text-white">
                  In daily use by schools across India
                </p>
              </div>
            </Reveal>
          </div>

          {/* Feature card — white ground so every label reads cleanly */}
          <Reveal delay={160} direction="scale">
            <div className="rounded-[28px] bg-white p-6 shadow-lift mdl:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink/60">
                  What&apos;s inside
                </p>
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  <span className="h-2 w-2 rounded-full bg-brand-green" />
                  <span className="h-2 w-2 rounded-full bg-brand-saffron" />
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-1 gap-2.5 sml:grid-cols-2">
                {features.map(({ Icon, label, tint }) => (
                  <li key={label}>
                    <div className="group flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-surface p-3.5 transition-all duration-400 ease-out-expo hover:-translate-y-0.5 hover:border-ink/[0.14] hover:bg-white hover:shadow-soft">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tint} transition-transform duration-400 group-hover:scale-110`}
                      >
                        <Icon size={16} />
                      </span>
                      <span className="text-[14.5px] font-medium leading-snug text-ink">{label}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-ink/[0.07] pt-5 text-[14px] leading-relaxed text-ink/70">
                Set up in weeks, supported by the team that built it, priced for Indian schools.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Colegios
