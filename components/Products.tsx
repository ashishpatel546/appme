import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdOutlineConstruction } from 'react-icons/md'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import productsData from '@/public/data/products.json'

const accentCycle = ['brand-blue', 'brand-green', 'brand-saffron'] as const

const badge: Record<(typeof accentCycle)[number], string> = {
  'brand-blue': 'bg-brand-blue/10 text-brand-blue',
  'brand-green': 'bg-brand-green/10 text-brand-green-dark',
  'brand-saffron': 'bg-brand-saffron/10 text-brand-saffron-dark',
}

const hoverText: Record<(typeof accentCycle)[number], string> = {
  'brand-blue': 'group-hover:text-brand-blue',
  'brand-green': 'group-hover:text-brand-green-dark',
  'brand-saffron': 'group-hover:text-brand-saffron-dark',
}

type Product = {
  id: number
  title: string
  description: string
  image: string
  status: string
  link?: string
  linkLabel?: string
}

const products: Product[] = productsData

const productLink =
  'mt-6 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-ink/12 px-5 text-[14.5px] font-semibold text-ink transition-all duration-300 ease-out-expo hover:border-transparent hover:bg-ink hover:text-white'

const live = products.filter((item) => item.status !== 'pipeline')
const pipeline = products.filter((item) => item.status === 'pipeline')

const Products = () => {
  return (
    <section id="products" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-8 lgl:flex-row lgl:items-end lgl:justify-between">
          <SectionTitle
            align="left"
            eyebrow="What we've built"
            title="Our product line"
            subtitle="Software we designed, shipped and still maintain — across EV charging, schools, marketing, documents and travel."
            className="lgl:max-w-2xl"
          />
          <Reveal delay={120}>
            <Link href="/contact" className="btn-ghost shrink-0">
              Ask for a walkthrough
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 mdl:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {live.map((item, i) => {
            const accent = accentCycle[i % accentCycle.length]
            return (
              <Reveal key={item.id} delay={(i % 3) * 100} className="h-full">
                <article className="card card-stripe group flex h-full flex-col">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-900 ease-out-expo group-hover:scale-[1.08]"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/5 to-transparent"
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] backdrop-blur-sm ${badge[accent]}`}
                    >
                      Live
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 mdl:p-7">
                    <h3
                      className={`font-display text-xl font-bold text-ink transition-colors duration-300 ${hoverText[accent]}`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-ink/60">
                      {item.description}
                    </p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={productLink}
                      >
                        {item.linkLabel ?? 'Visit the website'}
                        <FiArrowUpRight />
                      </a>
                    ) : (
                      <Link href="/contact" className={productLink}>
                        Talk to us about this
                        <FiArrowUpRight />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* In the workshop — products under active development */}
        {pipeline.map((item) => (
          <Reveal key={item.id} delay={100}>
            <article className="card mt-6 flex flex-col overflow-hidden mdl:mt-7 lgl:flex-row">
              <div className="relative grid shrink-0 place-items-center bg-brand-gradient-ev p-10 lgl:w-[38%]">
                <div
                  className="pointer-events-none absolute inset-0 bg-dots opacity-70"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-4 text-white">
                  <span className="grid h-20 w-20 place-items-center rounded-3xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                    <MdOutlineConstruction size={38} />
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/85">
                    In the workshop
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center p-7 mdl:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-saffron/30 bg-brand-saffron/12 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-brand-saffron-dark">
                    <span className="relative grid h-1.5 w-1.5 place-items-center" aria-hidden="true">
                      <span className="absolute h-1.5 w-1.5 animate-pulse-ring rounded-full bg-brand-saffron" />
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-saffron" />
                    </span>
                    In development
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-ink mdl:text-[27px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/65">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="btn-primary group w-full sm:w-auto">
                    Hear when it launches
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link href="/services" className="btn-ghost w-full sm:w-auto">
                    See how we build
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Products
