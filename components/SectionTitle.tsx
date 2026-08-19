import React from 'react'
import Reveal from './Reveal'

interface Props {
  title: string
  /** Small mono label above the title */
  eyebrow?: string
  /** Supporting sentence below the title */
  subtitle?: string
  /** Renders an h1 instead of an h2 — use once per page */
  isMain?: boolean
  align?: 'center' | 'left'
  onDark?: boolean
  className?: string
}

const SectionTitle = ({
  title,
  eyebrow,
  subtitle,
  isMain = false,
  align = 'center',
  onDark = false,
  className = '',
}: Props) => {
  const Heading = isMain ? 'h1' : 'h2'
  const centered = align === 'center'

  return (
    <div
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${onDark ? 'text-brand-saffron-light' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}

      <Reveal delay={70}>
        <Heading
          className={`mt-3 text-[30px] font-extrabold leading-[1.12] sm:text-4xl mdl:text-[42px] xl:text-5xl ${
            onDark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </Heading>
      </Reveal>

      <Reveal delay={140}>
        <span className={`mt-5 block stripe ${centered ? 'mx-auto' : ''}`} />
      </Reveal>

      {subtitle && (
        <Reveal delay={190}>
          <p
            className={`mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base mdl:text-[17px] ${
              onDark ? 'text-white/70' : 'text-ink/65'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionTitle
