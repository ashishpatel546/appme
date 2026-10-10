import React from 'react'
import Link from 'next/link'
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiEyeOff,
  FiServer,
  FiUserCheck,
} from 'react-icons/fi'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Reveal from '@/components/Reveal'
import SEO from '@/components/SEO'

const LAST_UPDATED = '5 September 2026'

/** Section ids drive both the sticky contents rail and the in-page anchors. */
const sections = [
  { id: 'summary', title: 'The short version' },
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'scope', title: 'What this policy covers' },
  { id: 'what-we-collect', title: 'Information we collect' },
  { id: 'how-we-use', title: 'How we use your information' },
  { id: 'cookies', title: 'Cookies, analytics and tracking' },
  { id: 'linkedin', title: 'LinkedIn sign-in and integrations' },
  { id: 'whatsapp', title: 'WhatsApp and other third parties' },
  { id: 'sharing', title: 'When we share information' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'security', title: 'How we protect it' },
  { id: 'your-rights', title: 'Your rights' },
  { id: 'children', title: "Children's information" },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact and grievances' },
]

const highlights = [
  {
    Icon: FiEyeOff,
    title: 'No tracking on this site',
    copy: 'appme.in sets no cookies, runs no analytics, and carries no advertising or social pixels.',
    tint: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    Icon: FiServer,
    title: 'The form stores nothing here',
    copy: 'Our contact form does not submit to a database. It opens WhatsApp with your message pre-filled — you decide whether to send it.',
    tint: 'bg-brand-green/10 text-brand-green-dark',
  },
  {
    Icon: FiUserCheck,
    title: 'Only what you send us',
    copy: 'We hold the details you choose to give us when you get in touch, and we use them to answer you.',
    tint: 'bg-brand-saffron/10 text-brand-saffron-dark',
  },
]

/** Consistent spacing + anchor offset for every clause of the policy. */
const Clause = ({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) => (
  <section id={id} className="scroll-mt-28 border-t border-ink/[0.07] pt-10 first:border-0 first:pt-0">
    <Reveal>
      <h2 className="font-display text-[22px] font-bold leading-snug text-ink mdl:text-[26px]">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-ink/65 mdl:text-base/6">
        {children}
      </div>
    </Reveal>
  </section>
)

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — AppMe Soft Pvt Ltd."
        description="How AppMe Soft Private Limited collects, uses and protects personal information on appme.in — what we store, what we don't, and how to exercise your rights under India's DPDP Act."
        ogUrl="https://appme.in/privacy"
        keywords="AppMe Soft privacy policy, data protection, DPDP Act, personal data, Colegios privacy"
      />

      <Navbar />

      <main id="main">
        <PageHeader
          eyebrow="Legal"
          crumb="Privacy Policy"
          title={
            <>
              What we do with your <span className="text-brand-green-dark">information</span>
            </>
          }
          copy="A plain-language account of the personal information AppMe Soft handles when you visit appme.in or get in touch — written to be read, not to be skimmed past."
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
            Last updated {LAST_UPDATED}
          </p>
        </PageHeader>

        {/* At a glance */}
        <section className="bg-white pt-14 mdl:pt-20">
          <div className="container-x">
            <div className="grid gap-6 mdl:grid-cols-3">
              {highlights.map(({ Icon, title, copy, tint }, i) => (
                <Reveal key={title} delay={i * 110} className="h-full">
                  <article className="card card-stripe h-full p-6 mdl:p-7">
                    <span className={`inline-grid h-11 w-11 place-items-center rounded-2xl ${tint}`}>
                      <Icon size={19} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/60">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Policy body */}
        <section className="section-y bg-white pt-14 mdl:pt-20">
          <div className="container-x">
            <div className="grid gap-12 lgl:grid-cols-12 lgl:gap-14">
              {/* Contents rail */}
              <aside className="lgl:col-span-4 xl:col-span-3">
                <div className="lgl:sticky lgl:top-28">
                  <nav aria-label="On this page">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/60">
                      On this page
                    </p>
                    <span className="mt-4 block stripe" />
                    <ol className="mt-6 space-y-1">
                      {sections.map((s, i) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="flex gap-3 rounded-xl px-3 py-2 text-[14.5px] text-ink/65 transition-colors duration-300 hover:bg-surface-2 hover:text-brand-blue"
                          >
                            <span className="font-mono text-[12px] text-ink/40">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>

              {/* Clauses */}
              <div className="space-y-10 lgl:col-span-8 xl:col-span-9">
                <Clause id="summary" title="The short version">
                  <p>
                    We are a software company, not an advertising business. This website exists to
                    explain what we build and to let you reach us. It does not profile you, follow
                    you across the internet, or sell anything about you to anybody.
                  </p>
                  <p>
                    The only personal information we hold is what you deliberately send us — your
                    name, how to reach you, and what you want to talk about — and we keep it to
                    answer you and to do the work you ask us to do. The rest of this page sets out
                    the detail, including your rights under the Digital Personal Data Protection
                    Act, 2023.
                  </p>
                  <p>
                    If you connect a LinkedIn account to one of our applications, a specific and
                    narrow set of profile details reaches us — what that is, and how to revoke it in
                    one click, is set out in{' '}
                    <a href="#linkedin" className="font-medium text-brand-blue hover:underline">
                      LinkedIn sign-in and integrations
                    </a>
                    .
                  </p>
                </Clause>

                <Clause id="who-we-are" title="Who we are">
                  <p>
                    AppMe Soft Private Limited (&ldquo;AppMe Soft&rdquo;, &ldquo;we&rdquo;,
                    &ldquo;us&rdquo;) is a software company registered in India, operating from
                    Dayalpur, Delhi 110090. We were formerly known as Sologence Technologies.
                  </p>
                  <p>
                    For the purposes of India&apos;s Digital Personal Data Protection Act, 2023, we
                    are the Data Fiduciary for the personal data described in this policy — the
                    party that decides why and how it is handled, and that is answerable to you for
                    it.
                  </p>
                </Clause>

                <Clause id="scope" title="What this policy covers">
                  <p>
                    This policy applies to the website at{' '}
                    <span className="font-medium text-ink/80">appme.in</span> and to the ordinary
                    business correspondence that follows from it — an email to our team, a WhatsApp
                    message, a phone call, a proposal or a contract.
                  </p>
                  <p>It does not cover:</p>
                  <ul className="ml-1 space-y-2.5">
                    {[
                      <>
                        <span className="font-medium text-ink/80">Colegios</span>,{' '}
                        <span className="font-medium text-ink/80">ChargeVeta</span> and our other
                        products. When a school or business uses one of our platforms, we handle the
                        data inside it as a Data Processor on that customer&apos;s instructions,
                        under the agreement signed with them. Student, parent and staff records
                        belong to the school — not to us — and questions about them should go to the
                        school in the first instance.
                      </>,
                      <>
                        Client systems we build or operate under a separate contract. The data
                        handling terms in that contract govern, and this policy does not replace
                        them.
                      </>,
                      <>
                        Websites we link to, including{' '}
                        <span className="font-medium text-ink/80">colegios.in</span>,{' '}
                        <span className="font-medium text-ink/80">chargeveta.in</span>, WhatsApp and
                        our social profiles. Once you leave appme.in, that site&apos;s own policy
                        applies.
                      </>,
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-saffron"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Clause>

                <Clause id="what-we-collect" title="Information we collect">
                  <p className="font-medium text-ink/80">Information you give us</p>
                  <p>
                    When you use the contact form, email us, message us on WhatsApp or call, you
                    give us some combination of your name, email address, phone number, the subject
                    you picked, and whatever you write in your message. If a conversation turns into
                    a project, we go on to hold ordinary business-contact and billing details for
                    the people we work with.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    What the contact form actually does
                  </p>
                  <p>
                    It is worth being precise about this, because it is unusual. Our contact form
                    does not send anything to a server of ours and stores nothing in a database.
                    Everything you type stays in your browser until you press the button, at which
                    point we assemble it into a WhatsApp message and open WhatsApp with that message
                    ready to send. Nothing reaches us until you send it yourself, and if you close
                    the tab instead, the text is simply gone.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    Information collected automatically
                  </p>
                  <p>
                    This site sets no cookies and runs no analytics, so we build no visit history
                    and no profile of you. Like any website, however, it is served by a hosting
                    provider whose infrastructure logs technical request data — IP address, time,
                    the page requested, browser and device type — for delivery, security and abuse
                    prevention. We do not use those logs to identify individual visitors or to
                    market to them.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    Information from accounts you connect
                  </p>
                  <p>
                    If you sign in to one of our applications with LinkedIn, LinkedIn passes us the
                    profile details you approve on its consent screen. See{' '}
                    <a href="#linkedin" className="font-medium text-brand-blue hover:underline">
                      LinkedIn sign-in and integrations
                    </a>{' '}
                    for the specifics.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    Information we deliberately do not collect
                  </p>
                  <p>
                    We do not ask for and have no use for financial account credentials, government
                    identity numbers, health information, biometric data or any other sensitive
                    category through this website. Please do not send such details in a contact
                    message; if a project genuinely requires them, we will agree a secure route
                    first.
                  </p>
                </Clause>

                <Clause id="how-we-use" title="How we use your information">
                  <p>We use what you send us for a short and specific list of purposes:</p>
                  <ul className="ml-1 space-y-2.5">
                    {[
                      'To reply to your enquiry and answer questions about our work, pricing or timelines.',
                      'To prepare a proposal, scope or quotation you have asked for.',
                      'To deliver, support and maintain services you have engaged us for, and to invoice for them.',
                      'To keep our own records — contracts, correspondence and accounts — as a business is required to.',
                      'To keep the site and our systems secure, and to investigate misuse.',
                      'To meet legal, tax and regulatory obligations in India.',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    We rely on your consent — given by choosing to contact us — for the enquiry
                    itself, and on the legitimate uses recognised in law for performing a contract,
                    keeping records and meeting statutory duties. We do not send marketing email to
                    people who have only made an enquiry, and we do not sell, rent or trade personal
                    information to anyone, for any purpose.
                  </p>
                </Clause>

                <Clause id="cookies" title="Cookies, analytics and tracking">
                  <p>
                    appme.in sets no cookies of its own. There is no Google Analytics, no advertising
                    or remarketing tag, no Meta or LinkedIn advertising pixel, no session recording
                    and no third-party consent banner — because there is nothing here that needs
                    consenting to. This is why you will not see a cookie pop-up on this site.
                  </p>
                  <p>
                    Our web fonts are compiled into the site at build time and served from our own
                    domain rather than fetched from a font provider, so simply reading these pages
                    does not announce your visit to a third party. If we ever add analytics, we will
                    update this section before switching it on, and we will choose a tool that does
                    not track individuals across sites.
                  </p>
                </Clause>

                <Clause id="linkedin" title="LinkedIn sign-in and integrations">
                  <p>
                    Some of our applications connect to LinkedIn through LinkedIn&apos;s official
                    APIs. This section explains exactly what that means for your LinkedIn member
                    data. It applies only if you choose to connect a LinkedIn account — nothing here
                    happens simply because you visited this website.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">What we receive from LinkedIn</p>
                  <p>
                    When you sign in with LinkedIn or authorise one of our applications, LinkedIn
                    shows you a consent screen listing the permissions being requested, and sends us
                    only what you approve. That is typically your LinkedIn member ID, your name,
                    your profile picture and your registered email address. We request the narrowest
                    set of permissions the feature needs. We never ask for your LinkedIn password
                    and could not receive it — authentication happens on LinkedIn&apos;s own domain,
                    and we hold only the access token LinkedIn issues.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    The permissions we request, and why
                  </p>
                  <ul className="ml-1 space-y-2.5">
                    {[
                      [
                        'Sign In with LinkedIn (OpenID Connect)',
                        'to authenticate you and identify your account, using your member ID, name, profile picture and email address. We do not use your email address for marketing.',
                      ],
                      [
                        'Share on LinkedIn',
                        'to publish a post to your personal profile — only the content you have written or approved, and only at the moment you ask us to publish or schedule it.',
                      ],
                      [
                        'Community Management API',
                        'to publish to, and read engagement on, a LinkedIn company page you administer: posts, comments and the page analytics LinkedIn exposes. We access only pages you have authorised and only while that authorisation stands.',
                      ],
                    ].map(([term, def]) => (
                      <li key={term} className="flex gap-3">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="font-medium text-ink/80">{term}</span> — {def}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    That is the whole of it. We do not post anything you have not approved, we do not
                    message your connections, we do not scrape or store your connection graph, and we
                    do not read your inbox. LinkedIn data is never used to build advertising
                    profiles, is never combined with data bought from third parties, and is never
                    sold, rented or licensed to anyone.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">Storage, sharing and retention</p>
                  <p>
                    LinkedIn data is stored on our secured systems, encrypted in transit, and
                    accessible only to the people who operate the service. We store the access token,
                    the profile fields listed above, and the posts and engagement records the feature
                    needs to function — nothing beyond that. We share it with no third party except
                    where this policy already allows: our own infrastructure providers, or a lawful
                    legal request.
                  </p>
                  <p>
                    We keep it for as long as your account or integration is active. Access tokens
                    are deleted as soon as they are revoked or expire — LinkedIn member tokens are
                    short-lived by design and must be re-authorised periodically — and the associated
                    profile and page data is deleted within 30 days of your account being closed or
                    your request to erase it. Content already published to LinkedIn stays on LinkedIn
                    until you delete it there; removing our access does not retract past posts.
                  </p>

                  <p className="pt-2 font-medium text-ink/80">
                    Revoking access and deleting your data
                  </p>
                  <p>
                    You can disconnect us from LinkedIn at any time, without asking us first, from{' '}
                    <span className="font-medium text-ink/80">
                      LinkedIn → Settings &amp; Privacy → Data privacy → Permitted services
                    </span>
                    . Revoking there immediately invalidates our access token and stops any further
                    data flowing to us. To also have the LinkedIn data we already hold deleted,
                    email{' '}
                    <a
                      href="mailto:info@appme.in"
                      className="font-medium text-brand-blue hover:underline"
                    >
                      info@appme.in
                    </a>{' '}
                    and we will erase it within 30 days, except anything we are legally required to
                    retain.
                  </p>

                  <p className="pt-2">
                    Our use of LinkedIn data is governed by the LinkedIn API Terms of Use and the
                    LinkedIn Platform Guidelines in addition to this policy. LinkedIn&apos;s own
                    handling of your data is covered by the{' '}
                    <a
                      href="https://www.linkedin.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-blue hover:underline"
                    >
                      LinkedIn Privacy Policy
                    </a>
                    , which we do not control.
                  </p>
                </Clause>

                <Clause id="whatsapp" title="WhatsApp and other third parties">
                  <p>
                    A few external services are involved in running this site and answering you.
                    Each holds only what that role requires:
                  </p>
                  <div className="grid gap-4 pt-1 sml:grid-cols-2">
                    {[
                      {
                        n: 'WhatsApp (Meta)',
                        d: 'Carries messages you choose to send us from the contact form or the floating button. Meta handles that message under its own privacy policy, and we cannot change how it does so.',
                      },
                      {
                        n: 'Our hosting provider',
                        d: 'Serves these pages and keeps short-lived technical request logs for delivery and security.',
                      },
                      {
                        n: 'Email and phone providers',
                        d: 'Carry correspondence to and from info@appme.in, support@appme.in and our listed numbers.',
                      },
                      {
                        n: 'Business tools',
                        d: 'Accounting, project and document tools used to run engagements, under confidentiality terms.',
                      },
                    ].map((t) => (
                      <div
                        key={t.n}
                        className="rounded-2xl border border-ink/[0.07] bg-surface p-5 shadow-soft"
                      >
                        <p className="font-display text-[15px] font-semibold text-ink">{t.n}</p>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{t.d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="pt-1">
                    Some of these providers operate infrastructure outside India. Where information
                    is handled abroad, we use providers that offer contractual protections at least
                    equivalent to those in this policy, and we transfer only what the service needs
                    to function.
                  </p>
                </Clause>

                <Clause id="sharing" title="When we share information">
                  <p>
                    We do not sell personal information, and we do not disclose it for anyone
                    else&apos;s marketing. We share it only in these situations:
                  </p>
                  <ul className="ml-1 space-y-2.5">
                    {[
                      'With the service providers listed above, strictly to run our own operations.',
                      'With professional advisers — accountants, auditors, lawyers — under a duty of confidentiality.',
                      'Where the law requires it: a valid legal process, a court order, or a lawful request from a competent authority.',
                      'To protect our rights, safety or property, or those of our clients and the public, where we reasonably believe that is necessary.',
                      'In connection with a merger, acquisition or transfer of the business — in which case we will tell you, and the information stays subject to this policy.',
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Clause>

                <Clause id="retention" title="How long we keep it">
                  <p>
                    We keep personal information only as long as it is doing a job. An enquiry that
                    does not become a project is kept for up to two years, so that we have context
                    if you come back to us, and then deleted. Records tied to a signed engagement —
                    contracts, invoices, project correspondence — are kept for the life of the
                    engagement and then for as long as tax, accounting and limitation law in India
                    requires. Server logs held by our hosting provider are short-lived and rotate
                    automatically.
                  </p>
                  <p>
                    When a retention period ends, we delete the information or anonymise it beyond
                    recovery. You can ask us to erase your details sooner — see{' '}
                    <a href="#your-rights" className="font-medium text-brand-blue hover:underline">
                      Your rights
                    </a>
                    .
                  </p>
                </Clause>

                <Clause id="security" title="How we protect it">
                  <p>
                    This site is served over HTTPS. Internally, access to correspondence and client
                    records is limited to the people who need it, accounts are protected with strong
                    authentication, and the systems we build follow the same practices we recommend
                    to clients: least privilege, encrypted transport, patched dependencies and
                    regular review.
                  </p>
                  <p>
                    No system is perfectly secure, and we will not pretend otherwise. If a breach
                    affects your personal data, we will notify you and the Data Protection Board of
                    India as the law requires, and tell you plainly what happened and what to do
                    about it.
                  </p>
                </Clause>

                <Clause id="your-rights" title="Your rights">
                  <p>
                    Under the Digital Personal Data Protection Act, 2023, and as a matter of how we
                    prefer to operate, you can:
                  </p>
                  <ul className="ml-1 space-y-2.5">
                    {[
                      ['Access', 'ask what personal data of yours we hold and what we have done with it.'],
                      ['Correction', 'have inaccurate or incomplete details fixed or updated.'],
                      ['Erasure', 'ask us to delete your data where we no longer need it to serve you or to meet a legal duty.'],
                      ['Withdraw consent', 'tell us to stop, at any time, where we relied on your consent. This does not undo processing already carried out.'],
                      ['Nomination', 'nominate someone to exercise these rights on your behalf if you die or become incapacitated.'],
                      ['Grievance redressal', 'raise a complaint with us and get an answer — see the contact details below.'],
                    ].map(([term, def]) => (
                      <li key={term} className="flex gap-3">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="font-medium text-ink/80">{term}</span> — {def}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Write to{' '}
                    <a
                      href="mailto:info@appme.in"
                      className="font-medium text-brand-blue hover:underline"
                    >
                      info@appme.in
                    </a>{' '}
                    and we will respond within 30 days. We may need to confirm your identity before
                    acting, so that we do not hand your information to someone else. If our answer
                    does not satisfy you, you may escalate to the Data Protection Board of India.
                  </p>
                  <p>
                    If your question is about data held inside Colegios or another platform we run
                    for a customer, please raise it with that school or organisation — they decide
                    what happens to those records, and we act on their instructions.
                  </p>
                </Clause>

                <Clause id="children" title="Children's information">
                  <p>
                    This website is aimed at businesses and institutions, not at children, and we do
                    not knowingly collect personal information from anyone under 18 through it. If
                    you believe a child has sent us information, tell us and we will delete it.
                  </p>
                  <p>
                    Our school platform is a different matter: it necessarily holds student records.
                    There, the school is the Data Fiduciary and is responsible for parental consent
                    and for what the records contain; we process that data only on the school&apos;s
                    instructions and never use it for our own purposes, profiling or advertising.
                  </p>
                </Clause>

                <Clause id="changes" title="Changes to this policy">
                  <p>
                    We will update this page when what we do changes — a new tool, a new service, or
                    a change in the law. The &ldquo;last updated&rdquo; date at the top always
                    reflects the current version. If a change materially affects how we handle
                    information you have already given us, we will make that clear rather than
                    quietly editing the text.
                  </p>
                </Clause>

                <Clause id="contact" title="Contact and grievances">
                  <p>
                    Questions about this policy, a request about your data, or a complaint — all go
                    to the same place, and a person reads them:
                  </p>

                  <div className="mt-2 rounded-3xl border border-ink/[0.07] bg-surface p-6 shadow-soft mdl:p-7">
                    <p className="font-display text-lg font-bold text-ink">
                      AppMe Soft Private Limited
                    </p>
                    <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink/60">
                      Attn: Grievance Officer
                    </p>
                    <ul className="mt-5 space-y-4 text-[15px]">
                      <li className="flex gap-3">
                        <FiMapPin className="mt-1 shrink-0 text-brand-blue" />
                        <span className="text-ink/70">Dayalpur, Delhi 110090, India</span>
                      </li>
                      <li className="flex gap-3">
                        <FiMail className="mt-1 shrink-0 text-brand-green-dark" />
                        <span className="flex flex-col">
                          <a
                            href="mailto:info@appme.in"
                            className="text-ink/70 transition-colors hover:text-brand-blue"
                          >
                            info@appme.in
                          </a>
                          <a
                            href="mailto:support@appme.in"
                            className="text-ink/70 transition-colors hover:text-brand-blue"
                          >
                            support@appme.in
                          </a>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <FiPhone className="mt-1 shrink-0 text-brand-saffron-dark" />
                        <span className="flex flex-col">
                          <a
                            href="tel:+917838160389"
                            className="text-ink/70 transition-colors hover:text-brand-blue"
                          >
                            +91 78381 60389
                          </a>
                          <a
                            href="tel:+919654047009"
                            className="text-ink/70 transition-colors hover:text-brand-blue"
                          >
                            +91 96540 47009
                          </a>
                        </span>
                      </li>
                    </ul>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link href="/contact" className="btn-primary group">
                        Contact us
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <Link href="/about" className="btn-ghost">
                        About the company
                      </Link>
                    </div>
                  </div>

                  <p className="flex gap-3 pt-2 text-[14.5px] text-ink/55">
                    <FiShield className="mt-0.5 shrink-0 text-ink/40" />
                    <span>
                      This policy is written for clarity rather than for legal ceremony. It describes
                      our actual practice; it is not legal advice, and it does not vary the terms of
                      any signed agreement between us.
                    </span>
                  </p>
                </Clause>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Privacy
