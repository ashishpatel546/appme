import React, { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowUpRight, FiChevronDown } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import QRCode from 'react-qr-code'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import SEO from '@/components/SEO'

const WHATSAPP_NUMBER = '917838160389'

const channels = [
  {
    Icon: FiMapPin,
    label: 'Office',
    lines: ['Dayalpur, Delhi 110090', 'India'],
    tint: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    lines: ['+91 78381 60389', '+91 96540 47009'],
    hrefs: ['tel:+917838160389', 'tel:+919654047009'],
    tint: 'bg-brand-green/10 text-brand-green-dark',
  },
  {
    Icon: FiMail,
    label: 'Email',
    lines: ['info@appme.in', 'support@appme.in'],
    hrefs: ['mailto:info@appme.in', 'mailto:support@appme.in'],
    tint: 'bg-brand-saffron/10 text-brand-saffron-dark',
  },
  {
    Icon: FiClock,
    label: 'Hours',
    lines: ['Monday to Saturday', '9:30 am – 7:00 pm IST'],
    tint: 'bg-brand-blue/10 text-brand-blue',
  },
]

const topics = [
  'ChargeVeta for my chargers or fleet',
  'Colegios for my school',
  'A new product build',
  'Cloud or DevOps help',
  'Something else',
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: topics[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const message = `Hello AppMe Soft,

I am reaching out via your website:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*About:* ${formData.topic}

*Message:*
${formData.message}`

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact Us — AppMe Soft Pvt Ltd."
        description="Talk to AppMe Soft about ChargeVeta EV charging, Colegios school management, product development, cloud and AI engineering. Call, email or send us a message on WhatsApp."
        ogUrl="https://appme.in/contact"
      />

      <Navbar />

      <main id="main">
        <PageHeader
          eyebrow="Contact"
          crumb="Contact"
          title={
            <>
              Tell us what you need built — or <span className="text-brand-green-dark">fixed</span>
            </>
          }
          copy="Most conversations start on WhatsApp and take about ten minutes. Ask anything: pricing, timelines, whether we have done this before."
        />

        <section className="section-y bg-white pt-10 mdl:pt-14">
          <div className="container-x">
            <div className="grid gap-10 lgl:grid-cols-12 lgl:gap-12">
              {/* Channels */}
              <div className="lgl:col-span-5">
                <Reveal>
                  <h2 className="font-display text-2xl font-bold text-ink mdl:text-3xl">
                    Reach us directly
                  </h2>
                  <span className="mt-4 block stripe" />
                  <p className="mt-5 text-[15px] leading-relaxed text-ink/65">
                    Prefer to skip the form? Every channel below reaches the same small team.
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-4 sml:grid-cols-2">
                  {channels.map((c, i) => (
                    <Reveal key={c.label} delay={i * 90} className="h-full">
                      <div className="h-full rounded-2xl border border-ink/[0.07] bg-surface p-5 transition-all duration-400 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                        <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.tint}`}>
                          <c.Icon size={17} />
                        </span>
                        <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/60">
                          {c.label}
                        </p>
                        <div className="mt-2 space-y-0.5 text-[14.5px] text-ink/75">
                          {c.lines.map((line, li) =>
                            c.hrefs?.[li] ? (
                              <a
                                key={line}
                                href={c.hrefs[li]}
                                className="block transition-colors hover:text-brand-blue"
                              >
                                {line}
                              </a>
                            ) : (
                              <p key={line}>{line}</p>
                            )
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* WhatsApp + QR */}
                <Reveal delay={120}>
                  <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-ink/[0.07] bg-surface p-6 sml:flex-row sml:items-center">
                    <div className="rounded-2xl bg-white p-3 shadow-soft">
                      <QRCode value={`https://wa.me/${WHATSAPP_NUMBER}`} size={116} level="M" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">
                        Scan to chat on WhatsApp
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">
                        Point your phone camera at the code, or tap the button on smaller screens.
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-green mt-4"
                      >
                        <FaWhatsapp size={18} />
                        Open WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Form */}
              <div className="lgl:col-span-7">
                <Reveal direction="right">
                  <div className="relative overflow-hidden rounded-3xl border border-ink/[0.07] bg-white p-6 shadow-lift mdl:p-9">
                    <span className="absolute inset-x-0 top-0 h-1 bg-tricolor" aria-hidden="true" />

                    <h2 className="font-display text-2xl font-bold text-ink mdl:text-3xl">
                      Send us a message
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                      This opens WhatsApp with your details filled in — nothing is stored on this
                      site. Fields marked
                      <span className="text-brand-saffron-dark"> *</span> are required.
                    </p>

                    <form onSubmit={handleWhatsAppSubmit} className="mt-7 space-y-5">
                      <div className="grid gap-5 sml:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="label">
                            Your name <span className="text-brand-saffron-dark">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Priya Sharma"
                            className="field"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="label">
                            Phone <span className="text-brand-saffron-dark">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            inputMode="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 98765 43210"
                            className="field"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="label">
                          Email <span className="text-brand-saffron-dark">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="field"
                        />
                      </div>

                      <div>
                        <label htmlFor="topic" className="label">
                          What is this about?
                        </label>
                        <div className="relative">
                          <select
                            id="topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className="field cursor-pointer appearance-none pr-12"
                          >
                            {topics.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          <FiChevronDown
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/60"
                            size={18}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="label">
                          Message <span className="text-brand-saffron-dark">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="A sentence or two about what you are trying to do."
                          className="field resize-none"
                        />
                        <p className="mt-2 text-[13px] text-ink/60">
                          Rough is fine. We&apos;ll ask the follow-up questions.
                        </p>
                      </div>

                      <button type="submit" className="btn-saffron group w-full">
                        <FaWhatsapp size={18} />
                        Send on WhatsApp
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      {sent && (
                        <p
                          role="status"
                          aria-live="polite"
                          className="flex items-center gap-2 rounded-2xl bg-brand-green/10 px-4 py-3 text-[14.5px] font-medium text-brand-green-dark"
                        >
                          WhatsApp opened in a new tab. If nothing happened, allow pop-ups or{' '}
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2"
                          >
                            open the chat directly
                          </a>
                          .
                        </p>
                      )}
                    </form>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-16 mdl:pb-24">
          <div className="container-x">
            <Reveal direction="scale">
              <div className="overflow-hidden rounded-3xl border border-ink/[0.07] bg-surface shadow-soft">
                <div className="flex flex-col gap-3 border-b border-ink/[0.07] bg-white px-6 py-5 sml:flex-row sml:items-center sml:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <FiMapPin size={17} />
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-bold text-ink">Our office</p>
                      <p className="text-[14px] text-ink/60">Dayalpur, Delhi 110090, India</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dayalpur%2C+Delhi+110090%2C+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost group shrink-0"
                  >
                    Open in Google Maps
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <iframe
                  title="Map showing AppMe Soft's office in Dayalpur, Delhi"
                  src="https://www.google.com/maps?q=Dayalpur,+Delhi+110090,+India&output=embed"
                  className="h-[300px] w-full border-0 mdl:h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact
