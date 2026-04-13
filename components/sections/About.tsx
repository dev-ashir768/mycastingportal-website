"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-8 shadow-sm">
              Our Vision
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[80px] xl:text-[90px] font-black tracking-[-0.03em] mb-8 leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] text-zinc-950 lowercase">
              Digital <br />
              curation <br />
              <span className="text-red-400">redefined.</span>
            </h2>

            <div className="space-y-8 text-zinc-500 text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed">
              <p>
                We&apos;re building more than a database. We&apos;re creating a
                living ecosystem where talent discovery is as instantaneous as
                it is beautiful.
              </p>

              {/* Premium Quote */}
              <div className="p-6 sm:p-10 bg-zinc-50 rounded-[2rem] sm:rounded-[3rem] border border-zinc-100 relative group overflow-hidden transition-all duration-700 hover:bg-zinc-100/50 hover:border-zinc-200">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 rounded-r-full" />
                <p className="text-zinc-950 text-lg sm:text-xl font-black leading-snug tracking-tight lowercase italic">
                  &quot;Bridging the gap between pure passion and professional
                  production through a seamless digital gateway.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-full h-full border-[1px] border-zinc-100 rounded-[3rem] sm:rounded-[4rem] -z-10 translate-x-6 sm:translate-x-10 translate-y-6 sm:translate-y-10" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-zinc-100 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden group shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] sm:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] border-[0.5rem] sm:border-[1rem] border-white">
              <Image
                src="/join_now_2.jpg"
                alt="US Market Production"
                fill
                className="object-cover transition-transform duration-[4s] group-hover:scale-[1.05]"
              />

              {/* Floating Action node */}
              <div className="absolute top-5 right-5 sm:top-8 sm:right-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center text-zinc-950 shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-red-600 hover:text-white group-hover:rotate-12">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                <div className="p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 flex justify-between items-center group-hover:-translate-y-3 transition-transform duration-700">
                  <div>
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.3em] block mb-1">
                      Global Standard
                    </span>
                    <span className="text-white font-bold text-base sm:text-lg tracking-tight lowercase">
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
