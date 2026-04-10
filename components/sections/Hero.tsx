"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.png"
          className="object-cover w-full h-full opacity-30 grayscale"
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/40 to-white" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "normal" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] bg-clip-text text-transparent bg-linear-to-b from-black to-zinc-600">
            Where Actors Meet <br className="hidden sm:block" />
            <span className="text-red-600 block sm:inline mt-2 sm:mt-0 drop-shadow-sm">Opportunity</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-600 mb-8 md:mb-12 font-medium tracking-tight leading-relaxed px-4 sm:px-0">
            A modern casting platform connecting actors, models, and talent with casting directors, producers, and agencies, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 h-14 md:h-16 text-xs font-black tracking-[0.2em] uppercase rounded-none group overflow-hidden relative shadow-[0_4px_14px_0_rgba(255,0,0,0.39)]">
               <span className="relative z-10 flex items-center gap-3">Join Early Access <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></span>
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">Scroll</span>
        <div className="w-px h-10 sm:h-16 bg-linear-to-b from-red-600 to-transparent" />
      </motion.div>
    </section>
  );
}
