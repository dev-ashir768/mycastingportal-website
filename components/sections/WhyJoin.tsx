"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function WhyJoin() {
  return (
    <section id="why-join" className="py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-5 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-5 shadow-sm">
              Incentives
            </div>
            <h2 className="text-5xl lg:text-[72px] xl:text-[90px] font-black text-zinc-950 ">
              Why join <br />
              <span className="text-red-600 underline decoration-[6px] sm:decoration-[10px] decoration-red-600/10 underline-offset-[6px] sm:underline-offset-[10px]">
                now?
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xs text-zinc-400 font-medium text-base lg:text-lg hidden lg:block pb-3 leading-snug italic"
          >
            Seize the momentum. Early adoption translates to maximum algorithmic
            authority.
          </motion.p>
        </div>

        {/* 2-col mobile, 4-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {[
            {
              title: "Early Discovery",
              desc: "Command attention before mass market saturation.",
              image: "/join_now_1.jpg",
            },
            {
              title: "Prime Authority",
              desc: "Secure high-authority ranking for your casting ID.",
              image: "/join_now_2.jpg",
            },
            {
              title: "Direct Pipeline",
              desc: "Get listed on verified director dashboards instantly.",
              image: "/join_now_3.jpg",
            },
            {
              title: "Insider Data",
              desc: "Access proprietary industry opportunities before launch.",
              image: "/join_now_4.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative h-[260px] sm:h-[380px] lg:h-[520px] overflow-hidden group rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-lg border border-zinc-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:from-red-950/90 transition-all duration-1000" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end lg:translate-y-5 lg:group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white mb-2.5 sm:mb-4 border border-white/20 group-hover:bg-red-600 group-hover:border-red-500 shadow-xl transition-all duration-500">
                  <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-white tracking-tight mb-1 sm:mb-2  leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-tight hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
