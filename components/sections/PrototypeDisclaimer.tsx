"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PrototypeDisclaimer() {
  return (
    <section className="pb-32 sm:pb-56 bg-white relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/40 via-white to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full ">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] border border-zinc-100 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Aesthetic Left Side */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 flex items-center justify-center mb-10 shadow-2xl shadow-red-500/30">
                 <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
               </div>
               <Badge className="mb-6 bg-red-50 border-red-200 text-red-600 font-black tracking-[0.4em] text-[10px] uppercase w-fit px-5 py-2 shadow-sm pointer-events-none">
                 Phase 01
               </Badge>
               <h3 className="text-5xl sm:text-7xl font-black text-zinc-950 leading-[0.9] tracking-tighter lowercase">
                 development <br /> 
                 <span className="text-zinc-300">protocol.</span>
               </h3>
            </div>

            {/* Content Right Side */}
            <div className="w-full lg:w-3/5 space-y-10 text-zinc-500 font-medium text-lg sm:text-2xl leading-relaxed text-center lg:text-left">
              <p className="text-zinc-950 font-black text-2xl sm:text-3xl tracking-tight leading-tight lowercase">
                Our platform is currently in high-fidelity prototyping.
              </p>
              <p>
                We are engineering the full-scale vertical with advanced discovery tools, enhanced profile nodes, and an automated booking system tailored for Tier-1 industry needs.
              </p>
              <div className="pt-6">
                <div className="inline-flex items-start gap-4 text-sm sm:text-base font-black text-zinc-950 bg-zinc-50 p-6 sm:p-10 rounded-[2.5rem] border border-zinc-100 shadow-inner group transition-all duration-500 hover:bg-red-50 hover:border-red-100">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-xl flex-col group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight className="h-6 w-6" />
                  </span>
                  <p className="leading-tight text-left">
                    Registering now grants you <span className="text-red-600 underline underline-offset-4 decoration-2">Priority Selection Status</span> upon our official market deployment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
