"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PrototypeDisclaimer() {
  return (
    <section className="pb-16 sm:pb-24 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/40 via-white to-white pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.98, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-14 lg:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-zinc-100 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24">

            {/* Left Side */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 flex items-center justify-center mb-8 shadow-2xl shadow-red-500/30">
                 <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
               </div>
               <Badge className="mb-5 bg-red-50 border-red-200 text-red-600 font-black tracking-[0.4em] text-[10px] uppercase w-fit px-5 py-2 shadow-sm pointer-events-none">
                 Phase 01
               </Badge>
               <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black text-zinc-950 leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] tracking-tighter lowercase">
                 development <br />
                 <span className="text-zinc-300">protocol.</span>
               </h3>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8 text-zinc-500 font-medium text-base sm:text-lg lg:text-2xl leading-relaxed text-center lg:text-left">
              <p className="text-zinc-950 font-black text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight lowercase">
                Our platform is currently in high-fidelity prototyping.
              </p>
              <p>
                We are engineering the full-scale vertical with advanced discovery tools, enhanced profile nodes, and an automated booking system tailored for Tier-1 industry needs.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-start gap-4 text-sm sm:text-base font-black text-zinc-950 bg-zinc-50 p-5 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-zinc-100 shadow-inner group transition-all duration-500 hover:bg-red-50 hover:border-red-100 w-full sm:w-auto">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-xl flex-col group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <p className="leading-tight text-left text-sm sm:text-base">
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
