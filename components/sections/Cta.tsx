"use client";

import { motion } from "framer-motion";
import { ArrowRight, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="pb-24 sm:pb-32 md:pb-48 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full rounded-[2.5rem] sm:rounded-[3rem] bg-zinc-950 overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-zinc-200/50"
        >
          {/* Aesthetic inner gradients */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-red-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-800/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 relative z-10">
            {/* Left Content Side */}
            <div className="lg:col-span-6 xl:col-span-5 p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center relative z-30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 font-bold text-[10px] uppercase tracking-[0.2em] w-fit mb-8 backdrop-blur-md">
                <Film className="w-3 h-3" /> Final Call
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1] text-white mb-6">
                Your Next Role <br className="hidden lg:block" /> 
                Starts <span className="text-red-500 selection:bg-red-600 selection:text-white">Here.</span>
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed mb-10 max-w-md">
                Join a thriving network of professionals. Create your portfolio, get discovered, and take the first step toward your next opportunity. The spotlight is waiting.
              </p>
              
              <Button size="lg" className="w-full sm:w-auto self-start bg-red-600 hover:bg-red-500 text-white px-10 h-14 sm:h-16 text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase rounded-full group transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                Register Now <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            
            {/* Right Aesthetic Side (Video Box) */}
            <div className="lg:col-span-6 xl:col-span-7 relative min-h-[350px] sm:min-h-[400px] lg:min-h-full">
               <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 scale-105"
               >
                 <source src="/camera.mp4" type="video/mp4" />
               </video>
               
               {/* Sleek fade gradients to blend the video into the black card smoothly */}
               {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 hidden lg:block" /> */}
               {/* <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-20 lg:hidden" /> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
