"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 bg-white relative border-y border-black/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div {...fadeIn}>
            <span className="text-red-600 text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 md:mb-10 leading-[1.1] md:leading-[0.9] text-zinc-900">
              Bridging <br className="hidden sm:block" />
              <span className="text-red-600">The Gap.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-zinc-600 text-lg sm:text-xl font-medium leading-relaxed tracking-tight">
              <p>
                We’re building a powerful casting platform designed to help actors and talent get discovered, and help industry professionals find the perfect fit faster.
              </p>
              <p className="text-zinc-500">
                Our mission is to bridge the gap between actors, models, and performers and casting directors, filmmakers, and agencies through a seamless and transparent experience.
              </p>
              <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-black/5 flex gap-4 items-start sm:items-center">
                 <span className="inline-flex h-3 w-3 rounded-full bg-red-600 relative mt-1.5 sm:mt-0 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                 </span>
                 <p className="text-zinc-700 font-bold leading-relaxed max-w-sm text-xs sm:text-sm">
                   This is currently a prototype version of our platform, giving you early access to be part of something big from day one.
                 </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="relative aspect-square md:aspect-video bg-zinc-50 border border-black/5 overflow-hidden group p-1 sm:p-2 pb-4 sm:pb-6 mt-8 lg:mt-0 shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
               <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
               <Image 
                src="/hero-bg.png" 
                alt="Cinema Tech" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale brightness-90 group-hover:scale-110 transition-transform duration-[2s]" 
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
