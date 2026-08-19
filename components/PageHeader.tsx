import React from 'react'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

interface Props {
  eyebrow: string
  title: React.ReactNode
  copy?: string
  /** Current page name for the breadcrumb */
  crumb: string
  children?: React.ReactNode
}

/**
 * Shared header for inner pages. Light ground, tricolour wash, breadcrumb for orientation.
 */
const PageHeader = ({ eyebrow, title, copy, crumb, children }: Props) => {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-[460px] w-[460px] animate-float rounded-full bg-brand-blue/[0.13] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-20 h-[420px] w-[420px] animate-float-slow rounded-full bg-brand-saffron/[0.12] blur-[120px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-dots-ink opacity-70" aria-hidden="true" />

      <div className="container-x relative pb-14 pt-12 mdl:pb-20 mdl:pt-16">
        <nav aria-label="Breadcrumb" className="animate-fade-in">
          <ol className="flex items-center gap-1.5 text-[13px] text-ink/60">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-blue">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight className="text-ink/60" />
            </li>
            <li className="font-medium text-ink/75" aria-current="page">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <span className="eyebrow animate-fade-up">{eyebrow}</span>
          <h1
            className="mt-4 animate-fade-up text-[29px] font-extrabold leading-[1.1] text-ink sm:text-[36px] mdl:text-[46px] xl:text-[52px]"
            style={{ animationDelay: '80ms' }}
          >
            {title}
          </h1>
          <span
            className="mt-6 block h-1 w-24 animate-fade-up rounded-full bg-tricolor"
            style={{ animationDelay: '140ms' }}
          />
          {copy && (
            <p
              className="mt-6 animate-fade-up text-[15.5px] leading-relaxed text-ink/65 sm:text-[17px]"
              style={{ animationDelay: '180ms' }}
            >
              {copy}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '240ms' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHeader
