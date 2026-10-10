import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import Reveal from '@/components/Reveal'
import Process from '@/components/Process'
import CTABand from '@/components/CTABand'
import servicesData from '@/public/data/services.json'
import SEO from '@/components/SEO'
import { ChargeVetaMark, CHARGEVETA_URL, CHARGEVETA_DEMO } from '@/components/ChargeVeta'

const chargevetaPoints = [
  'Any OCPP 1.6J, 2.0.1 or 2.1 charger, any make',
  'Remote start, stop, reset and firmware updates',
  'Driver app with wallet, UPI and card payments',
  'Fleet portal with monthly or per-driver billing',
  'GST invoice for every session, refunds as credit notes',
  'A separate network for each customer a maker sells to',
  'AI-enabled NOC monitoring, 24x7',
]

const colegiosPoints = [
  'Admissions, attendance and timetables',
  'Fee collection with receipts and dues',
  'Online exams, marks and report cards',
  'Parent messaging and notice boards',
  'Staff HR, payroll and biometric attendance',
  'Library, transport and gate security',
  'AI assistant in English, Hindi or Hinglish',
  'AI lesson plans, question papers and worksheets',
]

const engagements = [
  {
    title: 'Project build',
    copy: 'A defined scope with a fixed shape: discovery, build, launch, handover. Best when you know what you need.',
    accent: 'text-brand-blue',
    soft: 'bg-brand-blue/10',
  },
  {
    title: 'Embedded engineers',
    copy: 'Our engineers join your team and work to your board. Best when you have the direction but not the bench.',
    accent: 'text-brand-green-dark',
    soft: 'bg-brand-green/10',
  },
  {
    title: 'Run & support',
    copy: 'Monitoring, releases and on-call for software already in production — ours or somebody else’s.',
    accent: 'text-brand-saffron-dark',
    soft: 'bg-brand-saffron/10',
  },
]

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services — AppMe Soft Pvt Ltd."
        description="Product development, IT consulting, cloud solutions, DevOps engineering, cyber security and data/AI services from AppMe Soft Pvt Ltd, plus the ChargeVeta EV charging and Colegios school management platforms."
        ogUrl="https://appme.in/services"
      />

      <Navbar />

      <main id="main">
        <PageHeader
          eyebrow="Services"
          crumb="Services"
          title={
            <>
              Engineering work that <span className="text-brand-saffron-dark">survives</span> contact
              with real users
            </>
          }
          copy="Six practices, one team. Every engagement includes the people who will still be reachable when your system is three months old."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              Scope a project
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/917838160389"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Ask a quick question
            </a>
          </div>
        </PageHeader>

        {/* Platform spotlights */}
        <section className="bg-white pb-4 pt-14 mdl:pt-16">
          <div className="container-x space-y-6 mdl:space-y-7">
            <Reveal direction="scale">
              <div className="relative isolate overflow-hidden rounded-[32px] bg-cv-navy p-7 text-white shadow-lift mdl:p-12">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-cv-volt/35 blur-[110px]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />

                <div className="relative grid gap-10 lgl:grid-cols-2 lgl:items-center lgl:gap-14">
                  <div>
                    <div className="flex items-center gap-3">
                      <ChargeVetaMark size={44} />
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium">
                        EV charging platform
                      </span>
                    </div>
                    <h2 className="mt-6 text-[30px] font-extrabold leading-[1.1] sm:text-4xl/10 mdl:text-[44px]">
                      ChargeVeta
                      <span className="mt-1 block text-[20px] font-semibold text-white sm:text-2xl">
                        Put your chargers live, with everything behind them
                      </span>
                    </h2>
                    <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/85 sm:text-[17px]">
                      For charger manufacturers, operators and fleets. Connect your chargers and they
                      go live for your customers, their drivers and their fleets — console, driver
                      app, payments and GST invoicing included, run by the team that built it.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={CHARGEVETA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-white group w-full sm:w-auto"
                      >
                        Explore ChargeVeta
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      <a
                        href={CHARGEVETA_DEMO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost-dark w-full sm:w-auto"
                      >
                        Book a demo
                      </a>
                    </div>
                  </div>

                  <ul className="grid gap-2.5 sml:grid-cols-2 lgl:grid-cols-1 xl:grid-cols-2">
                    {chargevetaPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/8 p-3.5"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cv-amber text-cv-navy">
                          <FiCheck size={13} />
                        </span>
                        <span className="text-[14.5px] leading-snug text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale">
              <div className="relative isolate overflow-hidden rounded-[32px] bg-brand-gradient p-7 text-white shadow-lift mdl:p-12">
                <span className="absolute inset-x-0 top-0 h-1 bg-tricolor" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] animate-float rounded-full bg-brand-saffron/30 blur-[110px]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-28 -left-16 h-[340px] w-[340px] animate-float-slow rounded-full bg-brand-green/30 blur-[110px]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-dots opacity-25" aria-hidden="true" />

                <div className="relative grid gap-10 lgl:grid-cols-2 lgl:items-center lgl:gap-14">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] backdrop-blur-sm">
                      School platform
                    </span>
                    <h2 className="mt-6 text-[30px] font-extrabold leading-[1.1] sm:text-4xl/10 mdl:text-[44px]">
                      Colegios
                      <span className="mt-1 block text-[20px] font-semibold text-white sm:text-2xl">
                        School management, from the gate to the report card
                      </span>
                    </h2>
                    <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white sm:text-[17px]">
                      One login for administrators, teachers, students and parents. Set up in weeks,
                      supported by the team that built it, priced for Indian schools rather than
                      imported software budgets.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="https://www.colegios.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-white group w-full sm:w-auto"
                      >
                        Explore Colegios
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
                  </div>

                  <ul className="grid gap-2.5 sml:grid-cols-2 lgl:grid-cols-1 xl:grid-cols-2">
                    {colegiosPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/[0.14] p-3.5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/22"
                      >
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-green text-white">
                          <FiCheck size={13} />
                        </span>
                        <span className="text-[14.5px] leading-snug text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Service grid */}
        <section className="section-y bg-white">
          <div className="container-x">
            <SectionTitle
              eyebrow="What we take on"
              title="Six practices"
              subtitle="Most projects use two or three of these together. Tell us the outcome you need and we'll tell you which."
            />

            <div className="mt-14 grid gap-6 mdl:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {servicesData.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 100} className="h-full">
                  <ServiceCard
                    title={item.title}
                    des={item.des}
                    link={item.link}
                    image={item.image}
                    index={i}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement models */}
        <section className="section-y bg-surface">
          <div className="container-x">
            <SectionTitle
              eyebrow="Ways to work with us"
              title="Pick the shape that fits"
              subtitle="Same team and same standards either way — only the commitment changes."
            />

            <div className="mt-14 grid gap-6 mdl:grid-cols-3">
              {engagements.map((e, i) => (
                <Reveal key={e.title} delay={i * 110} className="h-full">
                  <article className="card card-stripe h-full p-7 mdl:p-8">
                    <span
                      className={`inline-grid h-11 w-11 place-items-center rounded-xl font-display text-base font-extrabold ${e.soft} ${e.accent}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-ink">{e.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-ink/60">{e.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Process />

        <CTABand
          title="Tell us the outcome, not the spec"
          copy="Describe what should be true when this is working. We'll come back with an approach, a rough timeline and an honest cost range."
        />
      </main>

      <Footer />
    </>
  )
}

export default Services
