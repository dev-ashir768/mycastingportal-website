"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ onRegister }: { onRegister: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}
    >
      <div className={`w-full max-w-7xl transition-all duration-700 flex items-center justify-between mx-4 sm:mx-8 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border shadow-2xl backdrop-blur-2xl bg-red-600 border-red-500 shadow-red-500/20`}>
        
        <div className="flex items-center gap-3 cursor-pointer shrink-0">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={120} 
            height={32} 
            className={`object-contain w-28 sm:w-36 transition-all duration-500 ${isScrolled ? 'brightness-0 invert' : ''}`} 
            priority
          />
        </div>
        
        {/* Desktop Links - US Minimalism */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {['About', 'How It Works', 'Why Join'].map((item) => {
               const to = item.toLowerCase().replace(/ /g, '-');
               return (
                 <Link 
                   key={to}
                   spy={true} 
                   to={to} 
                   smooth={true} 
                   duration={800} 
                   offset={-100} 
                   className={`px-4 py-2 rounded-full text-[9px] font-black tracking-[0.25em] uppercase cursor-pointer transition-all duration-300 hover:scale-105 text-red-100 hover:text-white hover:bg-white/10`}
                 >
                   {item}
                 </Link>
               )
            })}
          </div>

          <button 
            onClick={onRegister}
            className={`px-6 py-2.5 cursor-pointer rounded-full text-[9px] font-black tracking-[0.25em] uppercase shadow-xl transition-all duration-500 hover:-translate-y-0.5 active:scale-95 ${isScrolled ? 'bg-white text-red-600' : 'bg-red-600 text-white hover:bg-zinc-950 shadow-red-500/20'}`}
          >
            Join Portal
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={onRegister}
            className={`px-5 py-2.5 cursor-pointer rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-lg ${isScrolled ? 'bg-white text-red-600' : 'bg-red-600 text-white'}`}
          >
            Join
          </button>
          <button 
            className={`flex items-center cursor-pointer justify-center w-11 h-11 rounded-full transition-all duration-500 ${isScrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-zinc-100 text-zinc-900 hover:bg-red-50 hover:text-red-600'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 rounded-[3rem] p-8 flex flex-col items-center gap-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border transition-all duration-500 ${isScrolled ? 'bg-red-600 border-red-500' : 'bg-white/95 backdrop-blur-3xl border-zinc-200'}`}
          >
            {['About', 'How It Works', 'Why Join'].map((item) => {
               const to = item.toLowerCase().replace(/ /g, '-');
               return (
                 <Link 
                   key={to}
                   onClick={() => setIsMobileMenuOpen(false)} 
                   spy={true} 
                   to={to} 
                   smooth={true} 
                   duration={800} 
                   offset={-80} 
                   className={`w-full text-center py-5 rounded-3xl text-xs font-black tracking-[0.3em] uppercase cursor-pointer transition-all active:scale-95 ${isScrolled ? 'text-red-50 hover:bg-white/10' : 'text-zinc-600 hover:bg-zinc-50'}`}
                 >
                   {item}
                 </Link>
               )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
