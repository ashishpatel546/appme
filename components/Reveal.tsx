import React, { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade'

interface Props {
  children: React.ReactNode
  /** Stagger in milliseconds */
  delay?: number
  direction?: Direction
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

const dirClass: Record<Direction, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  fade: '',
}

/**
 * Scroll-triggered reveal. Animates transform + opacity only and unobserves
 * once fired. Content is never left hidden: if IntersectionObserver is missing
 * or never fires, a timer reveals it anyway.
 */
const Reveal = ({ children, delay = 0, direction = 'up', className = '', as = 'div' }: Props) => {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(node)

    // Failsafe: never leave content invisible if the observer misses it.
    const failsafe = window.setTimeout(() => setVisible(true), 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      className={`reveal ${dirClass[direction]} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
