"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function WhyJoin() {
  return (
    <section id="why-join" className="py-24 sm:py-32 md:py-40 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-20">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
              Why Join <br /> <span className="text-red-600 border-b-4 sm:border-b-8 border-red-600 pb-1 sm:pb-2">Now?</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Early Discovery",
              desc: "Get discovered as an early actor on the platform.",
              image: "https://images.unsplash.com/photo-1510832842233-146fa3c675c9?q=80&w=1000"
            },
            {
              title: "First To Join",
              desc: "Be among the first talents and casting professionals to join.",
              image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000"
            },
            {
              title: "Priority Access",
              desc: "Receive priority access when the official platform launches.",
              image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1000"
            },
            {
              title: "Exclusive Updates",
              desc: "Stay updated with exclusive opportunities.",
              image: "https://images.unsplash.com/photo-1485001564903-56e6a54d46ee?q=80&w=1000"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[450px] lg:h-[600px] overflow-hidden group rounded-none"
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover grayscale brightness-[0.4] sm:brightness-[0.3] group-hover:brightness-[0.8] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end sm:translate-y-8 sm:group-hover:translate-y-0 transition-transform duration-500">
                 <span className="text-red-600 font-black text-4xl sm:text-5xl mb-2 sm:mb-4 opacity-100 sm:opacity-50 sm:group-hover:opacity-100 transition-opacity duration-500">
                    0{index + 1}
                 </span>
                 <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-2 sm:mb-3">
                   {item.title}
                 </h3>
                 <p className="text-zinc-300 sm:text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 sm:delay-100">
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
