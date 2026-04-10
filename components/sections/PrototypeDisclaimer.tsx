"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

 

export function PrototypeDisclaimer() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-50 relative overflow-hidden text-center sm:text-left">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/50 via-zinc-50 to-zinc-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Aesthetic Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center sm:items-start border-b md:border-b-0 md:border-r border-zinc-100 pb-8 md:pb-0 pr-0 md:pr-8">
               <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 sm:mb-8 border border-red-100 shadow-sm">
                 <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
               </div>
               <Badge variant="outline" className="mb-4 border-red-200 text-red-600 font-black tracking-[0.2em] text-[10px] uppercase w-fit bg-red-50/50 shadow-sm">
                 Phase 1
               </Badge>
               <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 leading-[1.1] tracking-tight">
                 Early Access <br className="hidden sm:block" /> <span className="text-zinc-400">Notice.</span>
               </h3>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-2/3 space-y-6 text-zinc-600 font-medium text-base sm:text-lg leading-relaxed text-center sm:text-left">
              <p className="text-zinc-950 font-black text-xl tracking-tight">
                This is an early access prototype of our platform.
              </p>
              <p>
                We are currently developing the full-featured version with advanced tools, enhanced actor profiles, and a complete casting system designed specifically for industry professionals.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 text-sm font-bold text-zinc-950 bg-zinc-50 p-4 sm:p-5 rounded-2xl border border-zinc-100 shadow-inner">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <p className="leading-tight text-center sm:text-left">
                  By registering now, you&apos;ll be invited with <span className="text-red-600">priority access</span> when we officially launch.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
