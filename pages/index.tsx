
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import FooterHome from "@/components/FooterHome";
import Journey from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import Cologeos from "@/components/Cologeos";


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
        <Cologeos />
        <Journey />
        <FooterHome />
      </div>    
    </main>

    </>
  )
}
