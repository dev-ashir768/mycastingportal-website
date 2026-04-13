"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 relative overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-8 text-white border-t-8 border-red-600">

      {/* Aesthetic Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] sm:h-[400px] bg-red-600/10 blur-[120px] pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 sm:mb-24">

          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="My Casting Portal Logo"
              width={200}
              height={60}
              className="object-contain w-36 sm:w-44 drop-shadow-2xl"
            />
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-medium">
              The premier ecosystem connecting world-class talent with industry-leading casting directors and agencies.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-5">
            <h4 className="text-white text-[11px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> Platform
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-medium text-zinc-400">
              <Link activeClass="text-white" spy={true} to="about" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">About Story</Link>
              <Link activeClass="text-white" spy={true} to="how-it-works" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">How It Works</Link>
              <Link activeClass="text-white" spy={true} to="why-join" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">Value Proposition</Link>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5">
            <h4 className="text-white text-[11px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> Stay Updated
            </h4>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">Join our insider list for early access updates and exclusive platform news.</p>
            <div className="relative group mt-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full py-3.5 pl-5 pr-14 text-sm text-white placeholder:text-zinc-600 focus:outline-hidden focus:border-red-500 hover:border-zinc-700 transition-colors"
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-500 transition-all cursor-not-allowed">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-full text-center">
            © {new Date().getFullYear()} My Casting Portal. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* PORTAL watermark — safely clipped inside overflow-hidden footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[22vw] sm:text-[18vw] font-black text-zinc-900 whitespace-nowrap pointer-events-none select-none tracking-tighter w-full text-center leading-none translate-y-[30%]">
        PORTAL
      </div>
    </footer>
  );
}
