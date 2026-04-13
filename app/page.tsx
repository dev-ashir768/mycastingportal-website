"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { PrototypeDisclaimer } from "@/components/sections/PrototypeDisclaimer";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";
import { RegistrationModal } from "@/components/modals/RegistrationModal";

export default function LandingPage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white relative">
      <div className="film-grain" />
      <Navbar onRegister={() => setIsRegistrationOpen(true)} />

      <main className="grow">
        <Hero onRegister={() => setIsRegistrationOpen(true)} />
        <About />
        <HowItWorks />
        <WhyJoin />
        <PrototypeDisclaimer />
        <Cta onRegister={() => setIsRegistrationOpen(true)} />
      </main>

      <Footer />

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        onLaunch={() => (window.location.href = "https://app.mycastingportal.com/")}
      />
    </div>
  );
}
