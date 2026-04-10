"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-48 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 shadow-sm">
              The Platform
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tighter mb-8 leading-[0.95] text-zinc-950">
              Bridging <br className="hidden sm:block" />
              <span className="text-red-600">The Gap</span>.
            </h2>
            
            <div className="space-y-8 text-zinc-600 text-lg sm:text-xl font-medium leading-relaxed">
              <p>
                We’re building a powerful casting platform designed to help actors and talent get discovered, and help industry professionals find the perfect fit faster.
              </p>
              
              <div className="p-6 md:p-8 bg-zinc-50 rounded-3xl border border-zinc-200 relative shadow-inner">
                <div className="absolute top-0 left-8 w-16 h-1.5 bg-red-600 rounded-b-full"></div>
                <p className="text-zinc-800 italic font-bold">
                  &quot;Our mission is to bridge the gap between performers and casting directors through a seamless and transparent ecosystem.&quot;
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0"
          >
             <div className="absolute top-[-5%] right-[-5%] w-[110%] h-[110%] bg-zinc-100 rounded-full blur-3xl -z-10" />
             
             <div className="relative w-full h-full bg-white rounded-[2.5rem] border border-zinc-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden group p-2 mx-auto">
                <div className="relative w-full h-full rounded-[2rem] border border-zinc-100 overflow-hidden bg-zinc-50">
                  <Image 
                    src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000" 
                    alt="Cinema Tech" 
                    fill 
                    className="object-cover transition-transform duration-[3s] group-hover:scale-[1.03] sepia-[.05] brightness-[0.98]" 
                  />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center justify-between border border-white/80 group-hover:-translate-y-1 transition-transform duration-500">
                       <span className="font-black text-sm text-zinc-950 tracking-tight uppercase">Built for Professionals</span>
                       <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:shadow-[0_4px_14px_0_rgba(255,0,0,0.39)] group-hover:text-white transition-all duration-300">
                         <ArrowRight className="w-4 h-4" />
                       </div>
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
