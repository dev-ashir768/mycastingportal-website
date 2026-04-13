"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Content Side — use y animation only to avoid overflow-x clipping */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-6 shadow-sm">
              Our Vision
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[72px] xl:text-[84px] font-black tracking-[-0.03em] mb-6 leading-[1.1] sm:leading-[1.0] lg:leading-[0.92] text-zinc-950 lowercase">
              Digital <br />
              curation <br />
              <span className="text-red-400">redefined.</span>
            </h2>

            <div className="space-y-6 text-zinc-500 text-base sm:text-lg font-medium tracking-tight leading-relaxed">
              <p>
                We&apos;re building more than a database. We&apos;re creating a
                living ecosystem where talent discovery is as instantaneous as
                it is beautiful.
              </p>

              {/* Premium Quote */}
              <div className="p-6 sm:p-8 bg-zinc-50 rounded-[1.5rem] sm:rounded-[2.5rem] border border-zinc-100 relative group overflow-hidden transition-all duration-700 hover:bg-zinc-100/50 hover:border-zinc-200">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 rounded-r-full" />
                <p className="text-zinc-950 text-base sm:text-lg font-black leading-snug tracking-tight lowercase italic">
                  &quot;Bridging the gap between pure passion and professional
                  production through a seamless digital gateway.&quot;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="w-8 h-px bg-zinc-200" />
                  <span className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em]">
                    Founding Mission
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 w-full h-full border border-zinc-100 rounded-[2.5rem] sm:rounded-[3rem] -z-10 translate-x-5 sm:translate-x-8 translate-y-5 sm:translate-y-8" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-zinc-100 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border-[0.5rem] sm:border-[0.75rem] border-white">
              <Image
                src="/join_now_2.jpg"
                alt="US Market Production"
                fill
                className="object-cover transition-transform duration-[4s] group-hover:scale-[1.05]"
              />

              <div className="absolute top-5 right-5 sm:top-7 sm:right-7">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center text-zinc-950 shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-red-600 hover:text-white group-hover:rotate-12">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="p-4 sm:p-5 bg-zinc-950/80 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 flex justify-between items-center group-hover:-translate-y-2 transition-transform duration-700">
                  <div>
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.3em] block mb-0.5">
                      Global Standard
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base tracking-tight lowercase">
                      Industry Grade Tech
                    </span>
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
