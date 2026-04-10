"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-100 border-b border-black/5 bg-white/70 backdrop-blur-2xl">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image 
            src="/logo.png" 
            alt="My Casting Portal Logo" 
            width={160} 
            height={40} 
            className="object-contain w-28 sm:w-32 md:w-40 filter invert" 
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8 text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
          <Link activeClass="!text-red-600 font-black" spy={true} to="about" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">About</Link>
          <Link activeClass="!text-red-600 font-black" spy={true} to="how-it-works" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">How It Works</Link>
          <Link activeClass="!text-red-600 font-black" spy={true} to="why-join" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">Why Join</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="sm:hidden text-zinc-600 hover:text-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-black/10 flex flex-col items-center py-8 gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500 shadow-2xl">
          <Link onClick={() => setIsMobileMenuOpen(false)} activeClass="!text-red-600 font-black" spy={true} to="about" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">About</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} activeClass="!text-red-600 font-black" spy={true} to="how-it-works" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">How It Works</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} activeClass="!text-red-600 font-black" spy={true} to="why-join" smooth={true} duration={800} offset={-80} className="hover:text-red-600 cursor-pointer transition-colors">Why Join</Link>
        </div>
      )}
    </nav>
  );
}
