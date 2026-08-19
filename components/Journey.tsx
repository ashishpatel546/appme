import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import journeyData from '@/public/data/journey.json'

const accents = [
  { dot: 'bg-brand-blue', text: 'text-brand-blue', soft: 'bg-brand-blue/10', ring: 'ring-brand-blue/30' },
  { dot: 'bg-brand-green', text: 'text-brand-green-dark', soft: 'bg-brand-green/10', ring: 'ring-brand-green/30' },
  { dot: 'bg-brand-saffron', text: 'text-brand-saffron-dark', soft: 'bg-brand-saffron/10', ring: 'ring-brand-saffron/30' },
]

const Journey = () => {
  const [activeYear, setActiveYear] = useState(journeyData[0].id)
  const activeIndex = journeyData.findIndex((d) => d.id === activeYear)
  const activeData = journeyData[activeIndex]
  const accent = accents[activeIndex % accents.length]

  return (
    <section id="journey" className="section-y bg-surface-2">
      <div className="container-x">
        <SectionTitle
          eyebrow="Where we've been"
          title="The company journey"
          subtitle="Three years from a small services team to a product company with software running in schools every morning."
        />

        <div className="mt-14 grid gap-8 lgl:grid-cols-12 lgl:gap-10">
          {/* Year selector */}
          <div className="lgl:col-span-4">
            <div
              className="flex gap-3 overflow-x-auto pb-2 no-scrollbar lgl:flex-col lgl:overflow-visible lgl:pb-0"
              role="tablist"
              aria-label="Company timeline"
            >
              {journeyData.map((data, i) => {
                const isActive = data.id === activeYear
                const a = accents[i % accents.length]
                return (
                  <button
                    key={data.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveYear(data.id)}
                    className={`group flex min-h-[64px] shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400 ease-out-expo lgl:w-full ${
                      isActive
                        ? `border-transparent bg-white shadow-lift ring-1 ${a.ring}`
                        : 'border-ink/[0.07] bg-white/50 hover:bg-white'
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-400 ${
                        isActive ? `${a.soft} scale-110` : 'bg-surface-2'
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${isActive ? a.dot : 'bg-ink/20'}`} />
                    </span>
                    <span>
                      <span
                        className={`block font-display text-lg font-bold ${isActive ? a.text : 'text-ink/60'}`}
                      >
                        {data.year}
                      </span>
                      <span
                        className={`mt-0.5 block whitespace-nowrap text-[13px] lgl:whitespace-normal ${
                          isActive ? 'text-ink/75' : 'text-ink/60'
                        }`}
                      >
                        {data.title}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active panel */}
          <div className="lgl:col-span-8">
            <Reveal key={activeYear} direction="fade">
              <article className="relative h-full overflow-hidden rounded-3xl border border-ink/[0.07] bg-white p-7 shadow-soft mdl:p-10">
                <span className="absolute inset-x-0 top-0 h-1 bg-tricolor" aria-hidden="true" />

                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] ${accent.soft} ${accent.text}`}
                >
                  {activeData.year}
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold text-ink mdl:text-3xl">
                  {activeData.title}
                </h3>

                <div className="mt-5 space-y-4">
                  {activeData.paragraphs.map((para, index) => (
                    <p key={index} className="text-[15px] leading-relaxed text-ink/65 mdl:text-base">
                      {para}
                    </p>
                  ))}
                </div>

                {activeData.highlight && (
                  <p
                    className={`mt-6 border-l-2 pl-4 text-[15px] font-medium leading-relaxed ${accent.text}`}
                    style={{ borderColor: 'currentColor' }}
                  >
                    {activeData.highlight}
                  </p>
                )}
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
