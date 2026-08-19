import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import expertiseData from '@/public/data/expertise.json'

/** One brand colour per practice, in wordmark order: blue, green, saffron. */
const accents = [
  {
    chip: 'bg-brand-blue/10 text-brand-blue',
    bar: 'bg-brand-blue',
    hover: 'group-hover:text-brand-blue',
    tint: 'from-brand-blue/70',
  },
  {
    chip: 'bg-brand-green/10 text-brand-green',
    bar: 'bg-brand-green',
    hover: 'group-hover:text-brand-green',
    tint: 'from-brand-green/70',
  },
  {
    chip: 'bg-brand-saffron/10 text-brand-saffron-dark',
    bar: 'bg-brand-saffron',
    hover: 'group-hover:text-brand-saffron-dark',
    tint: 'from-brand-saffron/70',
  },
]

const Expertise = () => {
  return (
    <section id="expertise" className="section-y relative overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-dots-ink opacity-60"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="What we're deep in"
          title="Three practices, one team"
          subtitle="Every engagement draws on the same bench — the people who architect your cloud are the people who ship your product."
        />

        <div className="mt-14 grid gap-6 mdl:grid-cols-2 lgl:grid-cols-3 lgl:gap-7">
          {expertiseData.map((item, i) => {
            const a = accents[i % accents.length]
            return (
              <Reveal key={item.id} delay={i * 110} className="h-full">
                <article className="card card-stripe group flex h-full flex-col">
                  <div className="relative h-52 w-full overflow-hidden mdl:h-56">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.08]"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${a.tint} via-transparent to-transparent opacity-70 mix-blend-multiply`}
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] backdrop-blur ${a.chip}`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 mdl:p-7">
                    <h3
                      className={`font-display text-xl font-bold text-ink transition-colors duration-300 mdl:text-[22px] ${a.hover}`}
                    >
                      {item.title}
                    </h3>
                    <span className={`mt-3 block h-[3px] w-10 rounded-full ${a.bar}`} />
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/60">
                      {item.description}
                    </p>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink/70 transition-colors duration-300 hover:text-brand-blue"
                    >
                      What this looks like
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Expertise
