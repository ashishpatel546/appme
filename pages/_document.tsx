import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#0B1220" />
      </Head>
      <body className="bg-surface text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
