import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import FooterHome from "@/components/FooterHome";
import { Navbar } from "@/components/Navbar";
import Cologeos from "@/components/Cologeos";
import Products from "@/components/Products";

import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>AppMe Pvt Ltd.</title>
    </Head>
    <main>
      <Navbar />

      <div>
        <Banner />
        <Expertise />
        <Products />
        <Cologeos />
        <FooterHome />
      </div>    
    </main>

    </>
  )
}
