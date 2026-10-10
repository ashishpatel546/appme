import React from 'react'

type Props = {
  /** Renders the mark for use on coloured/dark backgrounds */
  onDark?: boolean
  className?: string
  /** Show the "Soft Pvt Ltd" descriptor under the wordmark */
  withDescriptor?: boolean
}

/**
 * AppMe wordmark — the lockup used on appme.in.
 * A rounded blue box holds the "A", "pp" continues in the same blue, "Me" is green.
 * On dark grounds the box inverts to white and "Me" lightens so it stays legible.
 */
const Logo = ({ onDark = false, className = '', withDescriptor = false }: Props) => {
  return (
    <span className={`group inline-flex items-center gap-1 ${className}`}>
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-lg font-black leading-none shadow-md transition-transform duration-500 ease-out-expo group-hover:scale-105 mdl:h-9 mdl:w-9 mdl:text-xl/7 ${
          onDark ? 'bg-white text-brand-blue-dark' : 'bg-brand-blue-dark text-white'
        }`}
      >
        A
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-black tracking-tighter mdl:text-3xl ${
            onDark ? 'text-white' : 'text-brand-blue-dark'
          }`}
        >
          pp
          <span className={onDark ? 'text-brand-green-soft' : 'text-brand-green'}>Me</span>
        </span>
        {withDescriptor && (
          <span
            className={`mt-1.5 pl-0.5 font-mono text-[9.5px] uppercase tracking-[0.24em] ${
              onDark ? 'text-white/70' : 'text-ink/60'
            }`}
          >
            Soft Pvt Ltd
          </span>
        )}
      </span>
    </span>
  )
}

export default Logo
