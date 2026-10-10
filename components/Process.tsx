import React from 'react'
import { FiSearch, FiPenTool, FiCode, FiActivity } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'

/**
 * A real sequence, so the numbering earns its place.
 */
const steps = [
  {
    n: '01',
    Icon: FiSearch,
    title: 'Understand',
    copy: 'We sit with the people who will use the thing. Workflows first, features second.',
    accent: 'text-brand-blue',
    ring: 'ring-brand-blue/25',
    bg: 'bg-brand-blue/10',
  },
  {
    n: '02',
    Icon: FiPenTool,
    title: 'Shape',
    copy: 'Architecture, data model and interface, agreed on paper before a line of code costs money.',
    accent: 'text-brand-green',
    ring: 'ring-brand-green/25',
    bg: 'bg-brand-green/10',
  },
  {
    n: '03',
    Icon: FiCode,
    title: 'Build',
    copy: 'Two-week increments on real infrastructure. You see working software, not status decks.',
    accent: 'text-brand-saffron-dark',
    ring: 'ring-brand-saffron/25',
    bg: 'bg-brand-saffron/10',
  },
  {
    n: '04',
    Icon: FiActivity,
    title: 'Run',
    copy: 'Monitoring, releases and support after launch. The build team stays on the phone.',
    accent: 'text-brand-blue',
    ring: 'ring-brand-blue/25',
    bg: 'bg-brand-blue/10',
  },
]

const Process = () => {
  return (
    <section className="section-y bg-surface-2">
      <div className="container-x">
        <SectionTitle
          eyebrow="How an engagement runs"
          title="Four steps, no surprises"
          subtitle="The same four steps we used to build ChargeVeta and Colegios, and the ones we follow on your project."
        />

        <ol className="relative mt-14 grid gap-6 mdl:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {/* connector rail on wide screens */}
          <span
            className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-[2px] bg-tricolor opacity-25 xl:block"
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110} className="relative h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-ink/[0.07] bg-white p-6 shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift mdl:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-[52px] w-[52px] place-items-center rounded-2xl ring-1 ${s.bg} ${s.ring} ${s.accent} transition-transform duration-500 ease-out-expo group-hover:scale-110`}
                  >
                    <s.Icon size={21} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-ink/60">{s.n}</span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold text-ink mdl:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/60">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
