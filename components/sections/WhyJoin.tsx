"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function WhyJoin() {
  return (
    <section id="why-join" className="py-16 sm:py-28 lg:py-40 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-10 sm:mb-16 lg:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 shadow-sm">
              Incentives
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[80px] xl:text-[100px] font-black tracking-[-0.04em] leading-[1.05] sm:leading-[0.92] lg:leading-[0.85] text-zinc-950 lowercase">
              why join <br />
              <span className="text-red-600 underline decoration-[8px] sm:decoration-[12px] decoration-red-600/10 underline-offset-[8px] sm:underline-offset-[12px]">
                now?
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xs text-zinc-400 font-medium text-base lg:text-xl hidden lg:block pb-5 leading-tight italic"
          >
            Seize the momentum. Early adoption translates to maximum algorithmic
            authority.
          </motion.p>
        </div>

        {/* 2-col grid on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative h-[280px] sm:h-[400px] lg:h-[550px] overflow-hidden group rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-xl border border-zinc-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:from-red-950/90 transition-all duration-1000" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 lg:p-10 flex flex-col justify-end lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mb-3 sm:mb-6 border border-white/20 group-hover:bg-red-600 group-hover:border-red-500 shadow-xl transition-all duration-500">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-base sm:text-xl lg:text-3xl font-black text-white tracking-tighter mb-1.5 sm:mb-3 lowercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm lg:text-base font-medium leading-tight hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
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
