import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import FloatingActions from '@/components/FloatingActions'

const display = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--ff-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--ff-mono',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-blue focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Component {...pageProps} />
      <FloatingActions />
    </div>
  )
}
