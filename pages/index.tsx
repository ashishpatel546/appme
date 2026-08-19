import { Navbar } from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import Expertise from '@/components/Expertise'
import Products from '@/components/Products'
import Colegios from '@/components/Colegios'
import Process from '@/components/Process'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="AppMe Soft Pvt Ltd — Software products, cloud and AI engineering"
        description="AppMe Soft Pvt Ltd is a product-driven software company in Delhi. We build Colegios school management, AI and automation products, an upcoming one-stop EV charging platform, plus cloud and data engineering — and run them after launch."
        ogUrl="https://appme.in"
      />

      <Navbar />

      <main id="main">
        <Hero />
        <TechMarquee />
        <Expertise />
        <Colegios />
        <Products />
        <Process />
        <CTABand />
      </main>

      <Footer />
    </>
  )
}
