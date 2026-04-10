"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function PrototypeDisclaimer() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950/80 border-t border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
           {...fadeIn}
           className="max-w-4xl mx-auto p-6 flex flex-col sm:p-10 border border-red-600/30 bg-red-600/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-20 sm:opacity-30">
            <Info className="w-12 h-12 sm:w-16 sm:h-16 text-red-600" />
          </div>
          <Badge variant="outline" className="mb-4 sm:mb-6 border-red-600 text-red-600 font-black tracking-widest text-[9px] sm:text-[10px] uppercase w-fit">
            Prototype Notice
          </Badge>
          <div className="space-y-3 sm:space-y-4 text-zinc-300 font-medium text-base sm:text-lg leading-relaxed max-w-2xl relative z-10">
            <p>
              This is an early access prototype of our platform. We are currently developing the full-featured version with advanced tools, enhanced actor profiles, and a complete casting system.
            </p>
            <p>
              By registering now, you’ll be the first to know when the official platform goes live, and you’ll be invited with <span className="text-white font-bold decoration-red-600 underline underline-offset-4">priority access</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
