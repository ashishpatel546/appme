import React, { useEffect, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons'
import {
  MdHowToReg,
  MdFingerprint,
  MdChecklist,
  MdNotificationsActive,
  MdLocalLibrary,
  MdOutlineInventory2,
  MdAssignment,
  MdPayments,
  MdQrCode2,
  MdFamilyRestroom,
  MdAutoAwesome,
} from 'react-icons/md'
import { ChargeVetaMark } from './ChargeVeta'

/*
 * The hero's right-hand side: our two live platforms at work at the same time.
 * A ChargeVeta charging session counts up, while Colegios runs a school day
 * from the visitor desk to home time. Everything shown is something the
 * products do today.
 */

const RATE = 18.5 // ₹ per kWh
const START = { kwh: 6.4, soc: 34, secs: 1122 }

type Moment = {
  at: number // minutes after midnight
  Icon: IconType
  module: string
  detail: string
  tint: string
}

// One school day, in the order it happens
const day: Moment[] = [
  { at: 7 * 60 + 32, Icon: MdHowToReg, module: 'Visitor desk', detail: 'Walk-in visitor checked in, QR pass issued', tint: 'bg-brand-blue/10 text-brand-blue' },
  { at: 7 * 60 + 48, Icon: MdFingerprint, module: 'Staff biometrics', detail: '42 of 44 teachers clocked in', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { at: 8 * 60 + 10, Icon: MdChecklist, module: 'Class attendance', detail: 'Class 7B marked: 28 of 30 present', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
  { at: 8 * 60 + 12, Icon: MdNotificationsActive, module: 'Live notification', detail: 'Absence alert sent to 2 parents', tint: 'bg-brand-blue/10 text-brand-blue' },
  { at: 10 * 60 + 25, Icon: MdLocalLibrary, module: 'Library', detail: 'Wings of Fire issued to Riya, Class 8A', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { at: 11 * 60 + 40, Icon: MdOutlineInventory2, module: 'Inventory', detail: 'Lab beakers low, reorder raised', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
  { at: 12 * 60 + 35, Icon: MdAssignment, module: 'Homework', detail: 'Fractions worksheet set for Class 6', tint: 'bg-brand-blue/10 text-brand-blue' },
  { at: 13 * 60 + 5, Icon: MdPayments, module: 'Smart fees', detail: '₹18,500 paid by UPI, receipt sent', tint: 'bg-brand-green/10 text-brand-green-dark' },
  { at: 14 * 60 + 50, Icon: MdQrCode2, module: 'Signed ID card', detail: 'Tamper-proof QR verified at the gate', tint: 'bg-brand-saffron/10 text-brand-saffron-dark' },
  { at: 15 * 60 + 30, Icon: MdFamilyRestroom, module: 'Secure pickup', detail: 'Aarav handed to a verified guardian', tint: 'bg-brand-blue/10 text-brand-blue' },
]

const DAY_START = 7 * 60 + 30
const DAY_END = 15 * 60 + 45
const STEP_MS = 2100
const HOLD_STEPS = 2 // pause on home time before the day starts again

const asks = [
  { q: 'Class 7B ki attendance?', a: '28 of 30 present' },
  { q: 'Fees due this month?', a: '14 students' },
  { q: 'Fractions worksheet, Class 6', a: 'Ready' },
]

const clock = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'

const subscribeReduce = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCE_QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeReduce,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  )

const HeroScene = () => {
  const reduce = usePrefersReducedMotion()

  // Charging session
  const [session, setSession] = useState(START)
  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      setSession((s) =>
        s.soc >= 80
          ? START
          : { kwh: s.kwh + 0.14, soc: Math.min(80, s.soc + 0.6), secs: s.secs + 7 },
      )
    }, 1000)
    return () => window.clearInterval(id)
  }, [reduce])

  // School day
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setTick((t) => t + 1), STEP_MS)
    return () => window.clearInterval(id)
  }, [reduce])

  const cycle = day.length + HOLD_STEPS
  const step = reduce ? 6 : tick % cycle
  const now = Math.min(step, day.length - 1)
  const loop = reduce ? 0 : Math.floor(tick / cycle)
  const feed = day.slice(Math.max(0, now - 2), now + 1).reverse()
  const dayPct = ((day[now].at - DAY_START) / (DAY_END - DAY_START)) * 100
  const ask = asks[Math.floor(now / 4) % asks.length]

  const mm = String(Math.floor(session.secs / 60)).padStart(2, '0')
  const ss = String(session.secs % 60).padStart(2, '0')

  return (
    <div className="relative mx-auto w-full max-w-[560px] lgl:pb-6">
      {/* ChargeVeta: a session in progress */}
      <div className="relative z-10 rounded-[26px] bg-cv-navy p-5 text-white shadow-lift ring-1 ring-white/10 sml:p-6 lgl:mr-10 lgl:pb-20">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cv-volt/40 blur-[70px]"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ChargeVetaMark size={30} />
            <span className="font-display text-[15px] font-bold">
              Charge<span className="text-cv-volt-on-dark">Veta</span>
            </span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cv-amber/15 px-2.5 py-1 text-[12px] font-semibold text-cv-amber">
            <span className="relative grid h-1.5 w-1.5 place-items-center" aria-hidden="true">
              <span className="absolute h-1.5 w-1.5 animate-pulse-ring rounded-full bg-cv-amber" />
              <span className="h-1.5 w-1.5 rounded-full bg-cv-amber" />
            </span>
            Charging
          </span>
        </div>

        <p className="relative mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-white/70">
          <MdAutoAwesome className="shrink-0 text-cv-amber" size={14} aria-hidden="true" />
          AI-enabled NOC monitoring, 24x7
        </p>

        {/* State of charge */}
        <div className="relative mt-4 flex items-end justify-between">
          <p className="font-display text-[40px] font-extrabold leading-none tabular-nums">
            {Math.round(session.soc)}
            <span className="text-[20px] text-white/60">%</span>
          </p>
          <p className="pb-1 text-[12.5px] text-white/60">Bay 3, CCS2, charging to 80%</p>
        </div>
        <div className="relative mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-linear-to-r from-cv-volt to-cv-amber transition-[width] duration-1000 ease-linear"
            style={{ width: `${(session.soc / 80) * 100}%` }}
          />
        </div>

        <dl className="relative mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { k: 'Energy', v: `${session.kwh.toFixed(2)} kWh` },
            { k: 'Cost', v: `₹${(session.kwh * RATE).toFixed(2)}` },
            { k: 'Time', v: `${mm}:${ss}` },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-white/6 px-2 py-2.5">
              <dt className="text-[11.5px] text-white/55">{s.k}</dt>
              <dd className="mt-0.5 whitespace-nowrap font-display text-[13px] font-semibold tabular-nums sml:text-[15px]">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>

      </div>

      {/* Colegios: a school day, module by module */}
      <div className="relative z-20 -mt-4 rounded-[26px] bg-white p-5 shadow-lift ring-1 ring-ink/[0.07] sml:p-6 lgl:-mt-14 lgl:ml-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/assets/logo/colegios-mark.png"
              alt=""
              width={30}
              height={30}
              className="h-[30px] w-[30px] object-contain"
            />
            <span className="font-display text-[15px] font-bold text-ink">Colegios</span>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-2.5 py-1 text-[12px] font-semibold text-brand-green-dark">
            <span className="relative grid h-1.5 w-1.5 place-items-center" aria-hidden="true">
              <span className="absolute h-1.5 w-1.5 animate-pulse-ring rounded-full bg-brand-green" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            </span>
            School day
            <span className="font-display tabular-nums text-ink">{clock(day[now].at)}</span>
          </span>
        </div>

        {/* Where the day has got to */}
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/[0.07]">
          <div
            className="h-full rounded-full bg-tricolor transition-[width] duration-700 ease-out-expo"
            style={{ width: `${dayPct}%` }}
          />
        </div>

        {/* Every module, lit as it acts */}
        <ul className="mt-3.5 grid grid-cols-10 gap-1" aria-hidden="true">
          {day.map(({ Icon, module }, i) => (
            <li
              key={module}
              className={`grid aspect-square place-items-center rounded-lg transition-all duration-500 ease-out-expo ${
                i === now
                  ? 'scale-110 bg-brand-blue text-white shadow-[0_6px_16px_-6px_rgba(29,78,216,0.7)]'
                  : i < now
                    ? 'bg-brand-blue/10 text-brand-blue'
                    : 'bg-ink/4 text-ink/30'
              }`}
            >
              <Icon size={15} />
            </li>
          ))}
        </ul>

        {/* What just happened */}
        <ol className="mt-3 min-h-[156px] space-y-1.5">
          {feed.map((m, i) => (
            <li
              key={`${loop}-${m.module}`}
              className={`flex items-center gap-3 rounded-2xl border border-ink/6 bg-surface px-3 py-2 transition-opacity duration-500 ${
                i === 0 ? 'animate-fade-up opacity-100' : i === 1 ? 'opacity-70' : 'opacity-40'
              }`}
            >
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${m.tint}`}>
                <m.Icon size={17} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[13.5px] font-semibold text-ink">
                  {m.module}
                </span>
                <span className="block text-[12.5px] leading-snug text-ink/60 sml:truncate">{m.detail}</span>
              </span>
              <span className="shrink-0 font-display text-[12px] tabular-nums text-ink/45">
                {clock(m.at)}
              </span>
            </li>
          ))}
        </ol>

        {/* The AI assistant, asked in passing */}
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-tricolor p-px">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-[11px] bg-white px-3 py-2">
            <MdAutoAwesome className="shrink-0 text-brand-saffron" size={16} aria-hidden="true" />
            <p key={ask.q} className="min-w-0 animate-fade-in text-[12.5px] leading-snug text-ink/70 sml:truncate">
              <span className="font-semibold text-ink">AI assistant:</span> &ldquo;{ask.q}&rdquo;{' '}
              <span className="text-brand-green-dark">{ask.a}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroScene
