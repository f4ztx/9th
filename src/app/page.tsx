'use client';

import Hero from '@/components/Hero';
import Services from '@/components/sections/Services';
import Work from "@/components/sections/Work";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
