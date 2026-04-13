"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, PlayCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-20 lg:py-28 bg-zinc-50/50 relative overflow-hidden border-y border-zinc-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col mb-10 sm:mb-14 lg:mb-20 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-red-600 font-bold text-[11px] uppercase tracking-[0.4em] mb-3 sm:mb-4 block">
              The Protocol
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[72px] xl:text-[90px] font-black tracking-[-0.04em] leading-[1.1] sm:leading-[1.0] lg:leading-[0.92] text-zinc-950 max-w-4xl mx-auto lowercase">
              Designed for <br />
              <span className="text-zinc-400">speed and scale.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-14 relative z-10">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon container — ghost number clipped inside */}
                <div className="relative mb-7 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32">
                  <span className="absolute inset-0 flex items-center justify-center text-[90px] sm:text-[110px] font-black text-zinc-200/50 select-none group-hover:text-red-600/10 transition-colors duration-700 leading-none pointer-events-none -translate-y-5 sm:-translate-y-7">
                    {feature.step}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-full bg-white border flex items-center justify-center group-hover:-translate-y-1.5 transition-transform duration-700 ${feature.isActive ? "border-red-600 shadow-xl shadow-red-500/15" : "border-zinc-200 shadow-lg"}`}
                  >
                    <feature.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-500 ${feature.isActive ? "text-red-600" : "text-zinc-400 group-hover:text-red-600"}`}
                      strokeWidth={1}
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight mb-3 text-zinc-950 lowercase">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 text-sm sm:text-base font-medium leading-relaxed max-w-xs transition-colors group-hover:text-zinc-600">
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
