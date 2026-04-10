"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, PlayCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 md:py-48 bg-[#fafafa] relative overflow-hidden border-y border-zinc-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
        <div className="flex flex-col mb-16 sm:mb-28 text-center items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-red-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-4 block">The Process</span>
            <h2 className="text-4xl sm:text-6xl lg:text-[75px] font-black tracking-tighter leading-[1] text-zinc-950 max-w-4xl mx-auto">
              A seamless path from <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 drop-shadow-sm">profile to production.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Connecting Line for Timeline */}
          <div className="hidden md:block absolute top-[3.5rem] left-[15%] right-[15%] h-px bg-zinc-200" />
          
          <div className="grid md:grid-cols-3 gap-12 sm:gap-16 relative z-10">
            {[
              { 
                step: "1",
                title: "Build Your Profile", 
                desc: "Actors easily create a high-end portfolio, uploading headshots, measurements, and showreels to our platform.", 
                icon: UserPlus,
                isActive: false
              },
              { 
                step: "2",
                title: "Get Discovered", 
                desc: "Casting Directors leverage our powerful search engine to filter specific traits and instantly find exact matches.", 
                icon: Search,
                isActive: false
              },
              { 
                step: "3",
                title: "Book The Role", 
                desc: "Direct communication removes friction. Directors connect with talent directly to finalize auditions and booking.", 
                icon: PlayCircle,
                isActive: true
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                 {/* Premium Floating Icon Box */}
                 <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-white border shadow-xl flex items-center justify-center mb-10 relative z-10 group-hover:-translate-y-3 transition-transform duration-500 ${feature.isActive ? 'border-red-600 shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)]' : 'border-zinc-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'}`}>
                   
                   <feature.icon className={`w-10 h-10 transition-colors duration-500 ${feature.isActive ? 'text-red-600' : 'text-zinc-700 group-hover:text-red-600'}`} strokeWidth={1.5} />
                   
                   {/* Step Number Indicator */}
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center text-xs font-black shadow-md border-[3px] border-[#fafafa]">
                     {feature.step}
                   </div>
                 </div>
                 
                 <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-zinc-950">
                   {feature.title}
                 </h3>
                 
                 <p className="text-zinc-600 text-base font-medium leading-relaxed max-w-xs">
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
