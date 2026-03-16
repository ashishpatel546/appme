import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import FooterHome from "@/components/FooterHome";
import { Navbar } from "@/components/Navbar";
import Colegios from "@/components/Colegios";
import Products from "@/components/Products";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
    <SEO 
      title="AppMe Pvt Ltd. - Innovative Tech Solutions & Software Development" 
      description="AppMe Pvt Ltd is a dynamic, product-driven enterprise that thrives on innovation, providing state-of-the-art technological solutions, consulting services, and the Colegios school management system."
      ogUrl="https://appme.in"
    />
    <main>
      <Navbar />

      <div>
        <Banner />
        <Expertise />
        <Products />
        <Colegios />
        <FooterHome />
      </div>    
    </main>

    </>
  )
}
