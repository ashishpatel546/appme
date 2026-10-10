import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  MdEvStation,
  MdOutlineDashboard,
  MdPhoneIphone,
  MdLocalShipping,
  MdAutoAwesome,
} from 'react-icons/md'
import Reveal from './Reveal'

export const CHARGEVETA_URL = 'https://www.chargeveta.in/'
export const CHARGEVETA_DEMO =
  'https://wa.me/917838160389?text=' +
  encodeURIComponent("Hello, I'd like a demo of ChargeVeta for our chargers.")

/** The ChargeVeta mark, the same bolt the product uses for its own icon. */
export const ChargeVetaMark = ({ size = 40 }: { size?: number }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" className="shrink-0">
    <rect width="64" height="64" rx="15" fill="#141A46" />
    <path
      d="M36 7 15 36h15l-4 21 23-31H34z"
      fill="#F4A51C"
      stroke="#F4A51C"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const audiences = [
  {
    who: 'Charger manufacturers',
    copy: 'Ship every charger with software ready on day one, with a separate network for each customer you sell to.',
  },
  {
    who: 'Charge point operators',
    copy: 'Run public, residential or workplace chargers and get paid for every kilowatt-hour.',
  },
  {
    who: 'Fleets',
    copy: 'Charge cabs, vans and company cars, billed once a month or paid per driver.',
  },
]

const outputs = [
  { Icon: MdOutlineDashboard, title: 'Operator console', copy: 'Every charger live on one screen' },
  { Icon: MdPhoneIphone, title: 'Driver app', copy: 'Find a charger, start it, pay by UPI' },
  { Icon: MdLocalShipping, title: 'Fleet portal', copy: 'Sessions and one monthly invoice' },
]

const core = ['Remote control', 'Smart charging', 'Wallet & UPI', 'GST invoices']

/**
 * ChargeVeta band. The diagram is the point: hardware comes in at the top,
 * goes live through the platform, and reaches the three people who use it.
 */
const ChargeVeta = () => {
  return (
    <section id="chargeveta" className="section-y relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid items-center gap-12 lgl:grid-cols-2 lgl:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <ChargeVetaMark size={48} />
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/10 px-3 py-1 text-[13px] font-medium text-brand-green-dark">
                  <span className="relative grid h-1.5 w-1.5 place-items-center" aria-hidden="true">
                    <span className="absolute h-1.5 w-1.5 animate-pulse-ring rounded-full bg-brand-green" />
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  Live at chargeveta.in
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-[32px] font-extrabold leading-[1.1] text-cv-navy sm:text-4xl/10 mdl:text-[46px] xl:text-5xl/none">
                ChargeVeta
                <span className="mt-2 block text-cv-volt">puts your chargers live, end to end</span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink/65 sm:text-[17px]">
                Smart charging software for EV networks in India. Connect your chargers to ChargeVeta
                and they go live for your customers, their drivers and their fleets — the console,
                the driver app, payments and GST invoicing all come with it. You make and install
                the hardware; we run the software behind it.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 flex max-w-xl flex-wrap items-center gap-2.5 text-[14.5px] text-ink/70">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cv-amber/15 text-[#9A5B00]">
                  <MdAutoAwesome size={15} aria-hidden="true" />
                </span>
                AI-enabled NOC monitoring that watches every charger, 24x7.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-8 divide-y divide-ink/8 border-y border-ink/8">
                {audiences.map((a) => (
                  <div key={a.who} className="grid gap-1 py-4 sml:grid-cols-[13rem_1fr] sml:gap-6">
                    <dt className="font-display text-[15px] font-semibold text-cv-navy">{a.who}</dt>
                    <dd className="text-[14.5px] leading-relaxed text-ink/60">{a.copy}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CHARGEVETA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn group w-full bg-cv-navy text-white hover:bg-cv-navy-soft sm:w-auto"
                >
                  Visit chargeveta.in
                  <FiArrowUpRight className="text-cv-amber transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={CHARGEVETA_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  Book a demo
                </a>
              </div>
            </Reveal>
          </div>

          {/* How a charger goes live */}
          <Reveal delay={120} direction="scale">
            <figure
              className="relative overflow-hidden rounded-[28px] bg-cv-navy p-5 text-white shadow-lift sml:p-7 mdl:p-8"
              aria-label="How ChargeVeta connects chargers to operators, drivers and fleets"
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cv-volt/30 blur-[100px]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />

              <div className="relative">
                {/* In: the hardware */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/6 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                    <MdEvStation size={22} />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold">Your chargers</p>
                    <p className="mt-0.5 text-[13.5px] text-white/70">
                      Any make speaking OCPP 1.6J, 2.0.1 or 2.1
                    </p>
                  </div>
                </div>

                <Wire />

                {/* The platform */}
                <div className="rounded-2xl bg-white p-4 text-cv-navy shadow-soft sml:p-5">
                  <div className="flex items-center gap-3">
                    <ChargeVetaMark size={34} />
                    <p className="font-display text-lg font-extrabold tracking-tight">
                      Charge<span className="text-cv-volt">Veta</span>
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {core.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-cv-navy/6 px-3 py-1 text-[12.5px] font-medium text-cv-navy/80"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <Wire />

                {/* Out: the people who use it */}
                <ul className="grid gap-2.5 sml:grid-cols-3">
                  {outputs.map(({ Icon, title, copy }) => (
                    <li
                      key={title}
                      className="rounded-2xl border border-white/15 bg-white/6 p-4"
                    >
                      <Icon size={20} className="text-cv-amber" aria-hidden="true" />
                      <p className="mt-3 font-display text-[14.5px] font-semibold">{title}</p>
                      <p className="mt-1 text-[13px] leading-snug text-white/70">{copy}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** A short vertical cable with charge moving down it. */
const Wire = () => (
  <div className="relative mx-auto h-9 w-[3px] overflow-hidden rounded-full bg-white/30" aria-hidden="true">
    <span className="absolute inset-x-0 top-0 h-4 animate-current rounded-full bg-cv-amber" />
  </div>
)

export default ChargeVeta
