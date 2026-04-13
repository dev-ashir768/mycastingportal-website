"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="pb-16 sm:pb-24 lg:pb-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full rounded-[2rem] sm:rounded-[3rem] bg-zinc-950 overflow-hidden relative shadow-2xl border border-white/5"
        >
          {/* Ambient highlights */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-red-600/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-red-800/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 relative z-10">
            {/* Content */}
            <div className="p-8 sm:p-12 xl:p-20 flex flex-col justify-center relative z-30">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-500 font-bold text-[10px] uppercase tracking-[0.3em] w-fit mb-6 sm:mb-8 backdrop-blur-3xl shadow-2xl">
                <Sparkles className="w-3.5 h-3.5" /> Priority Access
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-[80px] font-black tracking-[-0.04em] leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] text-white mb-6 sm:mb-8 lowercase">
                your next <br />
                role starts <br />
                <span className="text-red-600 underline decoration-[8px] sm:decoration-[10px] decoration-red-600/20 underline-offset-[10px] sm:underline-offset-[12px]">here.</span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10 max-w-sm tracking-tight">
                Stop waiting for opportunities. Create them. Join the new standard of talent discovery.
              </p>

              <Button
                size="lg"
                onClick={onRegister}
                className="w-full sm:w-auto self-start bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 sm:px-10 h-13 sm:h-14 lg:h-16 rounded-full text-[11px] font-black uppercase tracking-[0.25em] shadow-xl transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2.5 w-4 h-4" />
              </Button>
            </div>

            {/* Visual Side */}
            <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[10s] hover:scale-105"
               >
                 <source src="/camera.mp4" type="video/mp4" />
               </video>

               <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-zinc-950 to-transparent z-20 hidden lg:block" />
               <div className="absolute inset-x-0 top-0 h-20 sm:h-32 bg-gradient-to-b from-zinc-950 to-transparent z-20 lg:hidden" />

               <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 opacity-10">
                  <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-white">mcp.</h3>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
