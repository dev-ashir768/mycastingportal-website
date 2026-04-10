"use client";

import { motion } from "framer-motion";
import { Users, Camera, Globe } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 md:py-40 bg-zinc-50 border-y border-black/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-end mb-16 sm:mb-24">
          <motion.div {...fadeIn}>
            <span className="text-red-600 text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">How It Works</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-zinc-900">Unified <br className="sm:hidden" />Ecosystem</h2>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
        >
          {[
            { 
              title: "For Actors & Talent", 
              desc: "Create your professional profile, upload your portfolio, and get discovered by verified casting directors and producers.", 
              icon: Users,
              num: "01"
            },
            { 
              title: "For Directors & Agencies", 
              desc: "Browse a wide range of actors and talent, filter by skills and experience, and hire with confidence.", 
              icon: Camera,
              num: "02"
            },
            { 
              title: "For the Industry", 
              desc: "One platform. Direct connections. No unnecessary barriers.", 
              icon: Globe,
              num: "03"
            }
          ].map((feature, idx) => (
            <motion.div key={idx} variants={fadeIn} className="h-full">
              <div className="bg-white border border-black/5 hover:border-red-600/30 transition-all duration-500 h-full p-6 sm:p-8 relative overflow-hidden group shadow-lg">
                <span className="absolute top-4 sm:top-8 right-4 sm:right-8 text-black/5 font-black text-6xl sm:text-8xl group-hover:text-red-600/10 transition-colors">{feature.num}</span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-100 flex items-center justify-center mb-8 sm:mb-10 group-hover:bg-red-600/10 group-hover:text-red-600 transition-all duration-500 shrink-0 text-zinc-600">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tighter mb-3 sm:mb-4 text-zinc-900 uppercase pr-8">{feature.title}</h3>
                <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
