"use client";

import { motion } from "framer-motion";
import { ArrowRight, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-24 sm:py-32 md:py-40 relative bg-zinc-950 overflow-hidden border-t border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-black/60 backdrop-blur-3xl overflow-hidden relative"
        >
          {/* Border Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 md:p-20 flex flex-col justify-center relative z-20">
              <span className="flex items-center gap-2 text-red-600 text-[10px] sm:text-xs font-black tracking-widest uppercase mb-6">
                 <Film className="w-4 h-4" /> Final Call
              </span>
              <h2 className="text-5xl sm:text-7xl lg:text-[80px] font-black tracking-tighter leading-[0.9] text-white space-y-2">
                <span className="block text-zinc-400">Your Next</span>
                <span className="block text-white">Role Starts</span>
                <span className="block text-red-600 text-glow">Here.</span>
              </h2>
              <p className="max-w-md text-zinc-400 mt-6 sm:mt-8 mb-8 sm:mb-10 text-sm sm:text-lg font-medium leading-relaxed">
                Join now and take the first step toward your next opportunity. The spotlight is waiting.
              </p>
              
              <Button size="lg" className="w-full sm:w-auto self-start bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 h-14 sm:h-16 text-xs font-black tracking-[0.2em] uppercase rounded-none group transition-all duration-500 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                Register Now <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            
            <div className="hidden lg:block relative min-h-[400px]">
              <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4]"
              >
                <source src="/camer.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent z-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
