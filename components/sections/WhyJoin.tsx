"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function WhyJoin() {
  return (
    <section id="why-join" className="py-32 sm:py-56 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full ">
        <div className="mb-24 sm:mb-32 flex flex-col md:flex-row md:justify-between md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-8 shadow-sm">
              Incentives
            </div>
            <h2 className="text-6xl sm:text-8xl lg:text-[100px] font-black tracking-[-0.05em] leading-[0.85] text-zinc-950 lowercase">
              why join <br />
              <span className="text-red-600 underline decoration-[12px] decoration-red-600/10 underline-offset-[12px]">
                now?
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xs text-zinc-400 font-medium text-lg lg:text-xl hidden lg:block pb-5 leading-tight italic"
          >
            Seize the momentum. Early adoption translates to maximum algorithmic
            authority.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                delay: index * 0.15,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="relative h-[550px] sm:h-[650px] overflow-hidden group rounded-[3rem] sm:rounded-[4rem] shadow-2xl border border-zinc-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />

              {/* Ultra-soft aesthetic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:from-red-950/90 transition-all duration-1000" />

              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl w-14 h-14 rounded-full flex items-center justify-center text-white mb-8 border border-white/20 group-hover:bg-red-600 group-hover:border-red-500 shadow-xl transition-all duration-500">
                  <Plus className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-black text-white tracking-tighter mb-4 lowercase">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-base sm:text-lg font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
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
