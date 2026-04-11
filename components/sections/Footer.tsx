"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 relative overflow-hidden pt-24 pb-8 sm:pt-32 text-white border-t-8 border-red-600">
      
      {/* Aesthetic Red Glow bleeding down from the CTA border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-red-600/10 blur-[120px] pointer-events-none" />

      {/* Subtle Matrix dot grid for premium texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* The native black background of the logo will beautifully blend into the black footer! */}
            <Image 
              src="/logo.png" 
              alt="My Casting Portal Logo" 
              width={200} 
              height={60} 
              className="object-contain w-40 sm:w-48 drop-shadow-2xl" 
            />
            <p className="text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed font-medium">
              The premier ecosystem connecting world-class talent with industry-leading casting directors and agencies.
            </p>
            {/* <div className="flex items-center gap-3 mt-2">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div> */}
          </div>
          
          {/* Column 2: Platform Links */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-white text-[11px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> Platform
            </h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
              <Link activeClass="text-white" spy={true} to="about" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">About Story</Link>
              <Link activeClass="text-white" spy={true} to="how-it-works" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">How It Works</Link>
              <Link activeClass="text-white" spy={true} to="why-join" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer w-fit transition-all hover:translate-x-2">Value Proposition</Link>
            </div>
          </div>
          
          {/* Column 3: Newsletter mock UI to fill space elegantly */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-white text-[11px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> Stay Updated
            </h4>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">Join our insider list for early access updates and exclusive platform news.</p>
            <div className="relative group mt-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-zinc-600 focus:outline-hidden focus:border-red-500 hover:border-zinc-700 transition-colors"
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all cursor-not-allowed">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-full">
            © {new Date().getFullYear()} My Casting Portal. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Massive subtle watermark tucked in the background */}
      <div className="absolute bottom-[-5%] sm:bottom-[-15%] left-1/2 -translate-x-1/2 text-[20vw] sm:text-[18vw] font-black text-zinc-900 whitespace-nowrap pointer-events-none select-none tracking-tighter w-full text-center">
        PORTAL
      </div>
    </footer>
  );
}
