"use client";

import Image from "next/image";
import { Link } from "react-scroll";

export function Footer() {
  return (
    <footer className="pt-20 sm:pt-32 pb-8 sm:pb-12 bg-black relative overflow-hidden border-t border-white/5 mt-10 sm:mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter">
        OPPORTUNITY
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 mb-16 sm:mb-24">
          <div className="flex flex-col gap-6 sm:gap-8 max-w-lg">
            <Image 
              src="/logo.png" 
              alt="My Casting Portal Logo" 
              width={200} 
              height={60} 
              className="object-contain w-40 sm:w-48" 
            />
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white uppercase">
              Built for <span className="text-red-600">actors.</span> <br /> 
              Powered by <span className="text-red-600">opportunity.</span>
            </h3>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto">
            <span className="text-red-600 text-[9px] sm:text-[10px] font-black tracking-widest uppercase border-b border-white/10 pb-2 lg:border-none lg:pb-0">Platform Links</span>
            <div className="flex flex-col gap-3 sm:gap-4 text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
              <Link activeClass="!text-white" spy={true} to="about" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer transition-colors w-fit">About Us</Link>
              <Link activeClass="!text-white" spy={true} to="how-it-works" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer transition-colors w-fit">How It Works</Link>
              <Link activeClass="!text-white" spy={true} to="why-join" smooth={true} duration={800} offset={-80} className="hover:text-red-500 cursor-pointer transition-colors w-fit">Why Join Now</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-zinc-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 My Casting Portal. <span className="block sm:inline mt-1 sm:mt-0">All rights reserved.</span>
          </div>
          <div className="w-12 sm:w-16 h-1 bg-red-600" />
        </div>
      </div>
    </footer>
  );
}
