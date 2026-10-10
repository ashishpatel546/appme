import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowUpRight,
  FiCloud,
  FiGitBranch,
  FiCpu,
  FiBarChart2,
  FiLayers,
  FiShield,
} from 'react-icons/fi'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import SectionTitle from '@/components/SectionTitle'
import Reveal from '@/components/Reveal'
import Journey from '@/components/Journey'
import CTABand from '@/components/CTABand'
import SEO from '@/components/SEO'

const capabilities = [
  { Icon: FiCloud, label: 'Cloud architecture', tint: 'bg-brand-blue/10 text-brand-blue' },
  { Icon: FiGitBranch, label: 'DevOps & CI/CD', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { Icon: FiCpu, label: 'Machine learning', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
  { Icon: FiBarChart2, label: 'Data analytics', tint: 'bg-brand-blue/10 text-brand-blue' },
  { Icon: FiLayers, label: 'Modern JS frameworks', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { Icon: FiShield, label: 'Cyber security', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
]

const values = [
  {
    n: 'App',
    title: 'We ship, then we stay',
    copy: 'A launch is the start of our involvement, not the end of it. The people who built your system are the people who answer when it misbehaves.',
    accent: 'text-brand-blue',
    soft: 'bg-brand-blue/10',
  },
  {
    n: 'Me',
    title: 'Plain answers',
    copy: 'If a feature is a bad idea or a timeline is unrealistic, you hear it from us early — while it is still cheap to change course.',
    accent: 'text-brand-green-dark',
    soft: 'bg-brand-green/10',
  },
  {
    n: 'Soft',
    title: 'Built for the ground truth',
    copy: 'Our software is written next to the people using it — busy school mornings, patchy networks, a driver waiting at a charger.',
    accent: 'text-brand-saffron-dark',
    soft: 'bg-brand-saffron/10',
  },
]

const About = () => {
  return (
    <>
      <SEO
        title="About Us — AppMe Soft Pvt Ltd."
        description="How AppMe Soft grew from a services team into a product company building ChargeVeta EV charging software, Colegios school management, cloud infrastructure and AI systems from Delhi, India."
        ogUrl="https://appme.in/about"
      />

      <Navbar />

      <main id="main">
        <PageHeader
          eyebrow="About the company"
          crumb="About"
          title={
            <>
              A small team that keeps <span className="text-brand-blue">software running</span> for
              other people
            </>
          }
          copy="AppMe Soft Private Limited builds and operates software products from Delhi. We started in services, learned what breaks in production, and turned that into products of our own."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary group">
              What we do
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to the team
            </Link>
          </div>
        </PageHeader>

        {/* Story */}
        <section className="section-y bg-white">
          <div className="container-x">
            <div className="grid items-center gap-12 lgl:grid-cols-2 lgl:gap-16">
              <Reveal direction="left">
                <div className="relative">
                  <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-lift mdl:h-[420px]">
                    <Image
                      src="/assets/images/about1.jpg"
                      alt="The AppMe Soft team at work"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <span
                    className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl border-2 border-brand-blue/25"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <div>
                <SectionTitle align="left" eyebrow="Our story" title="Services first, products next" />
                <Reveal delay={120}>
                  <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink/65 mdl:text-base/6">
                    <p>
                      We began as Sologence Technologies, a services team taking on other
                      people&apos;s hard problems: cloud
                      migrations, integrations, systems that had outgrown their original design. That
                      work taught us where software actually fails — rarely in the demo, usually in
                      the third month of daily use.
                    </p>
                    <p>
                      So we started building our own. Colegios came out of months spent inside
                      schools, watching administrators fight spreadsheets at eight in the morning.
                      Everything we ship now carries that habit: build it where it will be used, then
                      stay long enough to see it hold.
                    </p>
                    <p>
                      ChargeVeta came next: software for India&apos;s EV charging networks. A charger
                      maker or operator connects their chargers, and they go live with drivers and
                      fleets — charger control, a driver app, payments, fleet billing and GST
                      invoices included.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Mission + capabilities */}
        <section className="section-y bg-surface">
          <div className="container-x">
            <div className="grid items-center gap-12 lgl:grid-cols-2 lgl:gap-16">
              <div className="order-2 lgl:order-1">
                <SectionTitle
                  align="left"
                  eyebrow="What we're for"
                  title="Fewer moving parts, more working days"
                />
                <Reveal delay={120}>
                  <p className="mt-7 text-[15.5px] leading-relaxed text-ink/65 mdl:text-base/6">
                    Our platforms are our clearest statement of intent. Colegios puts a school&apos;s
                    admissions, attendance, fees, exams and parent messaging in one place instead of
                    six disconnected tools. ChargeVeta does the same for a charging network: chargers,
                    drivers, fleets and billing on one platform. The same thinking goes into the
                    cloud, data and AI work we do for businesses.
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <div className="mt-8 rounded-3xl border border-ink/[0.07] bg-white p-6 shadow-soft mdl:p-7">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/60">
                      Core technologies
                    </p>
                    <ul className="mt-5 grid gap-3 sml:grid-cols-2">
                      {capabilities.map(({ Icon, label, tint }) => (
                        <li key={label} className="flex items-center gap-3">
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tint}`}>
                            <Icon size={16} />
                          </span>
                          <span className="text-[14.5px] font-medium text-ink/75">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="right" className="order-1 lgl:order-2">
                <div className="relative">
                  <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-lift mdl:h-[420px]">
                    <Image
                      src="/assets/images/about2.jpg"
                      alt="Engineers reviewing an architecture diagram"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <span
                    className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-brand-green/30"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values, keyed to the wordmark */}
        <section className="section-y bg-white">
          <div className="container-x">
            <SectionTitle
              eyebrow="How we work"
              title="Three commitments"
              subtitle="Named after the three parts of our own wordmark — because they are the three things we are actually held to."
            />

            <div className="mt-14 grid gap-6 mdl:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.n} delay={i * 110} className="h-full">
                  <article className="card card-stripe group h-full p-7 mdl:p-8">
                    <span
                      className={`inline-grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-extrabold ${v.soft} ${v.accent}`}
                    >
                      {v.n}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-ink">{v.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-ink/60">{v.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Journey />

        <CTABand
          title="Want to know if we're the right team?"
          copy="Send us the problem in a paragraph. We'll tell you what it would take, and whether you need us at all."
        />
      </main>

      <Footer />
    </>
  )
}

export default About
