"use client";

import Hero from "@/component/hero/hero.jsx";
import SmoothScrollProvider from "./smoothProvider.jsx";
import SplitScreen from "@/component/cooking/cooking.jsx";
export default function Home() {
  return (
    <SmoothScrollProvider>
      <section className="min-h-screen flex items-center justify-center bg-[#d4cac9]">
        <Hero/>
      </section>
      <section className=" bg-[#d4cac9]">
        <SplitScreen/>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-300">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-300">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section>
      {/* <section className="min-h-screen flex items-center justify-center bg-green-300">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-green-300">
        <h1 className="text-4xl font-bold">Section 3</h1>
      </section> */}
    </SmoothScrollProvider>
  );
}
