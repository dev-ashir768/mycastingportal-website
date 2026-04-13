"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, PlayCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-28 lg:py-40 bg-zinc-50/50 relative overflow-hidden border-y border-zinc-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col mb-12 sm:py-20 lg:mb-28 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-red-600 font-bold text-[11px] uppercase tracking-[0.4em] mb-4 sm:mb-6 block">
              The Protocol
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] font-black tracking-[-0.04em] leading-[1.05] sm:leading-[0.95] lg:leading-[0.9] text-zinc-950 max-w-4xl mx-auto lowercase">
              Designed for <br />
              <span className="text-zinc-400">speed and scale.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 sm:gap-14 lg:gap-16 relative z-10">
            {[
              {
                step: "01",
                title: "identity creation",
                desc: "Actors scale their presence by building high-fidelity portfolios that resonate with modern casting needs.",
                icon: UserPlus,
                isActive: false,
              },
              {
                step: "02",
                title: "smart discovery",
                desc: "Proprietary search algorithms allow directors to slice through noise and find exact character archetypes in seconds.",
                icon: Search,
                isActive: false,
              },
              {
                step: "03",
                title: "direct booking",
                desc: "Remove the middleware. Direct secure channels connect the boardroom to the soundstage instantly.",
                icon: PlayCircle,
                isActive: true,
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon container with ghost number clipped inside */}
                <div className="relative mb-8 sm:mb-10 w-28 h-28 sm:w-36 sm:h-36">
                  {/* Ghost step number — clipped within this container */}
                  <span className="absolute inset-0 flex items-center justify-center text-[100px] sm:text-[120px] font-black text-zinc-200/50 select-none group-hover:text-red-600/10 transition-colors duration-700 leading-none pointer-events-none -translate-y-6 sm:-translate-y-8">
                    {feature.step}
                  </span>

                  <div
                    className={`absolute inset-0 rounded-full bg-white border flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700 ${feature.isActive ? "border-red-600 shadow-2xl shadow-red-500/20" : "border-zinc-200 shadow-xl"}`}
                  >
                    <feature.icon
                      className={`w-9 h-9 sm:w-11 sm:h-11 transition-colors duration-500 ${feature.isActive ? "text-red-600" : "text-zinc-400 group-hover:text-red-600"}`}
                      strokeWidth={1}
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-4 text-zinc-950 lowercase">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xs transition-colors group-hover:text-zinc-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
