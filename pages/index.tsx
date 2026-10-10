import { Navbar } from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Expertise from '@/components/Expertise'
import Products from '@/components/Products'
import ChargeVeta from '@/components/ChargeVeta'
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
        description="AppMe Soft Pvt Ltd is a product-driven software company in Delhi. We build ChargeVeta, an end-to-end EV charging platform, Colegios AI-enabled school management, AI and automation products, plus cloud and data engineering — and run them after launch."
        ogUrl="https://appme.in"
      />

      <Navbar />

      <main id="main">
        <Hero />
        <TechStack />
        <Expertise />
        <div id="platforms" className="scroll-mt-20">
          <ChargeVeta />
          <Colegios />
        </div>
        <Products />
        <Process />
        <CTABand />
      </main>

      <Footer />
    </>
  )
}
