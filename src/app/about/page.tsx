"use client";

import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/AboutHero";
import AboutValues from "@/components/sections/AboutValues";
import AboutProcess from "@/components/sections/AboutProcess";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutProcess />
      <Footer />
    </main>
  );
}
