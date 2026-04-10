"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl bg-red-600 backdrop-blur-3xl border border-red-500/50 shadow-[0_15px_30px_rgba(0,0,0,0.15),0_5px_15px_rgba(220,38,38,0.5)] rounded-full px-6 sm:px-8 py-3.5 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer shrink-0">
          <Image 
            src="/logo.png" 
            alt="My Casting Portal Logo" 
            width={140} 
            height={36} 
            className="object-contain w-28 sm:w-40" 
            priority
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-red-700/60 p-1.5 rounded-full border border-red-500/30">
          {['About', 'How It Works', 'Why Join'].map((item) => {
             const to = item.toLowerCase().replace(/ /g, '-');
             return (
               <Link 
                 key={to}
                 activeClass="!bg-white !text-red-700 !shadow-[0_4px_10px_rgba(0,0,0,0.1)] scale-105" 
                 spy={true} 
                 to={to} 
                 smooth={true} 
                 duration={800} 
                 offset={-100} 
                 className="px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] uppercase text-white/90 hover:text-white cursor-pointer transition-all duration-300"
               >
                 {item}
               </Link>
             )
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-red-600 transition-colors shadow-inner"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 max-w-7xl mx-auto bg-red-600/95 backdrop-blur-3xl border border-red-500/50 rounded-[2rem] p-6 flex flex-col items-center gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            {['About', 'How It Works', 'Why Join'].map((item) => {
               const to = item.toLowerCase().replace(/ /g, '-');
               return (
                 <Link 
                   key={to}
                   onClick={() => setIsMobileMenuOpen(false)} 
                   activeClass="!bg-white !text-red-600 !shadow-lg" 
                   spy={true} 
                   to={to} 
                   smooth={true} 
                   duration={800} 
                   offset={-80} 
                   className="w-full text-center px-6 py-4 rounded-2xl text-xs font-black tracking-[0.2em] uppercase text-white cursor-pointer transition-all hover:bg-red-700/50"
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
