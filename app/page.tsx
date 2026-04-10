import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { PrototypeDisclaimer } from "@/components/sections/PrototypeDisclaimer";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white relative">
      <div className="film-grain" />
      <Navbar />

      <main className="grow">
        <Hero />
        <About />
        <HowItWorks />
        <WhyJoin />
        <PrototypeDisclaimer />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
