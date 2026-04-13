"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PrototypeDisclaimer() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/40 via-white to-white pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-7 sm:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.07)] border border-zinc-100 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

            {/* Left Side */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
               <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-xl shadow-red-500/25">
                 <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
               </div>
               <Badge className="mb-4 bg-red-50 border-red-200 text-red-600 font-black tracking-[0.4em] text-[10px] uppercase w-fit px-4 py-1.5 shadow-sm pointer-events-none">
                 Phase 01
               </Badge>
               <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 leading-[1.1] sm:leading-[1.0] lg:leading-[0.92] tracking-tight lowercase">
                 development <br />
                 <span className="text-zinc-300">protocol.</span>
               </h3>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-3/5 space-y-5 sm:space-y-6 text-zinc-500 font-medium text-sm sm:text-base lg:text-xl leading-relaxed text-center lg:text-left">
              <p className="text-zinc-950 font-black text-lg sm:text-xl lg:text-2xl tracking-tight leading-tight lowercase">
                Our platform is currently in high-fidelity prototyping.
              </p>
              <p>
                We are engineering the full-scale vertical with advanced discovery tools, enhanced profile nodes, and an automated booking system tailored for Tier-1 industry needs.
              </p>
              <div className="pt-3">
                <div className="inline-flex items-start gap-3 sm:gap-4 text-sm font-black text-zinc-950 bg-zinc-50 p-5 sm:p-7 rounded-[1.25rem] sm:rounded-[1.75rem] border border-zinc-100 shadow-inner group transition-all duration-500 hover:bg-red-50 hover:border-red-100 w-full sm:w-auto">
                  <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-lg flex-col group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <p className="leading-snug text-left text-sm">
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
