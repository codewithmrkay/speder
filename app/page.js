"use client";
import SmoothScrollProvider from "./smoothProvider.jsx";
import Hero from "@/component/hero/hero.jsx";
import SplitScreen from "@/component/cooking/cooking.jsx";
import Page from "@/component/mywork/work.jsx";
import TripParallex from "@/component/parallex/tripParallex.jsx";
import SmediaParallex from "@/component/parallex/smediaParallex.jsx";
import BioParallex from "@/component/parallex/bioParallex.jsx";
import AboutMe from "@/component/aboutme/about.jsx";
export default function Home() {
  return (
    <SmoothScrollProvider>
      <section className="min-h-screen flex items-center justify-center bg-[#d4cac9]">
        <Hero/>
      </section>
      <section className=" bg-[#d4cac9]">
        <SplitScreen/>
      </section>
      <section className="mywork bg-[#d4cac9]">
        <Page/>
      </section>
      <section className="mywork min-h-screen flex items-center justify-center bg-[#d4cac9]">
        <TripParallex/>
      </section>
      <section className="mywork min-h-screen flex items-center justify-center bg-[#d4cac9]">
       <SmediaParallex/>
      </section>
      <section className="mywork min-h-screen flex items-center justify-center bg-[#d4cac9]">
        <BioParallex/>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-300">
       {/* <AboutMe/> */}
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-500">
       <h1>scroll the laal</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-800">
       <h1>scroll the laal</h1>
      </section>
    </SmoothScrollProvider>
  );
}
