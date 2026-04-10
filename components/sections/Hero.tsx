"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 lg:pt-40 pb-16 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-80" />

      {/* STRICT GLOBALLY UNIFIED CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm text-zinc-900 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 sm:mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              Platform Early Access
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-black tracking-tighter leading-[0.9] text-zinc-950 mb-6 sm:mb-8">
              Where <br className="hidden sm:block" />
              Actors Meet <br />
              <span className="text-red-600 drop-shadow-sm">Opportunity.</span>
            </h1>
            
            {/* UPDATED: text-zinc-500 to text-zinc-600 for strictly better legibility */}
            <p className="max-w-xl text-lg sm:text-xl text-zinc-600 mb-8 sm:mb-12 font-medium tracking-tight leading-relaxed">
              A modern casting platform connecting actors, models, and talent with casting directors, producers, and agencies, all in one place.
            </p>
            
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 w-full xl:w-auto">
              <Button size="lg" className="w-full xl:w-auto bg-red-600 hover:bg-red-700 text-white px-8 h-14 sm:h-16 text-xs font-black tracking-[0.2em] uppercase rounded-full group shadow-[0_8px_25px_-8px_rgba(255,0,0,0.5)] transition-all duration-300">
                 Join Early Access <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="hidden lg:block relative h-[600px] w-full"
          >
             <div className="absolute top-[5%] -right-[2%] w-[95%] h-[95%] rotate-3 bg-white border border-zinc-200 shadow-xl rounded-[2.5rem]" />
             
             <div className="absolute top-[0%] left-[0%] w-[95%] h-[95%] -rotate-2 bg-zinc-100 border border-zinc-200 shadow-2xl rounded-[2.5rem] overflow-hidden group">
                <Image 
                  src="/hero-img.jpg" 
                  alt="Film Production Set" 
                  fill 
                  className="object-cover scale-105  transition-transform duration-[2s] ease-out brightness-[0.95]" 
                />
                
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
                   <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex justify-between items-center">
                         <div>
                            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold mb-2">
                              <Camera className="w-3 h-3" /> Featured Production
                            </span>
                            <span className="text-zinc-950 font-black text-lg tracking-tight">The Midnight Cast</span>
                         </div>
                         <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-red-700 transition-colors">
                           <ArrowRight className="w-4 h-4" />
                         </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
