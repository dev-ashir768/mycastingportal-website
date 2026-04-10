"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function WhyJoin() {
  return (
    <section id="why-join" className="py-24 sm:py-32 md:py-48 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 w-fit shadow-sm">
              Value Proposition
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] text-zinc-950">
              Why Join <br className="hidden sm:block" /> 
              <span className="text-red-600 border-b-[6px] border-red-600 pb-1">Now?</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="max-w-xs text-zinc-600 font-medium text-sm sm:text-base hidden lg:block pb-2"
          >
            Get ahead of the curve. Securing a premium profile early ensures massive algorithmic reach upon formal launch.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Early Discovery",
              desc: "Get discovered as an early actor on the platform before mass adoption.",
              image: "/join_now_1.jpg"
            },
            {
              title: "First To Join",
              desc: "Be among the elite first talents to curate your professional identity.",
              image: "/join_now_2.jpg"
            },
            {
              title: "Priority Access",
              desc: "Receive top priority placement when the official search engine launches.",
              image: "/join_now_3.jpg"
            },
            {
              title: "Exclusive Data",
              desc: "Stay updated with exclusive opportunities tailored just for you.",
              image: "/join_now_4.jpg"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden group rounded-[2rem] shadow-lg border border-zinc-200"
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 sepia-[.05]"
              />
              
              {/* Deep immersive overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent group-hover:from-red-900/90 transition-colors duration-700" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 
                 <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 transform -rotate-45 group-hover:rotate-0 transition-all duration-500 border border-white/20 group-hover:bg-red-600 group-hover:border-red-500">
                    <Plus className="w-5 h-5" />
                 </div>
                 
                 <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                   {item.title}
                 </h3>
                 <p className="text-zinc-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2">
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
