"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, PlayCircle } from "lucide-react";
import Image from "next/image";

export function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[90svh] flex items-center pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 justify-center overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#f0f0f0_1.5px,transparent_1.5px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50 border border-red-100/50 text-red-600 font-bold text-[10px] uppercase tracking-[0.25em] mb-6 sm:mb-8">
              Next-Gen Casting Ecosystem
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] font-black tracking-[-0.03em] leading-[1.05] sm:leading-[0.98] lg:leading-[0.92] text-zinc-950 mb-5 sm:mb-6 lowercase w-full">
              Where talent <br />
              <span className="text-red-600">shines.</span>
            </h1>

            <p className="max-w-md sm:max-w-lg text-base sm:text-lg md:text-xl text-zinc-500 mb-8 sm:mb-10 font-medium tracking-tight leading-relaxed">
              A premium digital gateway connecting professional actors and
              models with global casting directors. Seamless. Bold. Direct.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onRegister}
                className="w-full sm:w-auto bg-zinc-950 hover:bg-red-600 text-white px-8 sm:px-10 h-13 sm:h-14 text-[10px] font-black tracking-[0.2em] uppercase rounded-full group transition-all duration-300 shadow-xl"
              >
                Join Early Access{" "}
                <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-950 px-8 h-13 sm:h-14 text-[10px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-300"
              >
                <PlayCircle className="mr-2.5 w-4 h-4 text-red-600" /> View Reel
              </Button>
            </div>
          </motion.div>

          {/* Desktop Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:block relative h-[560px] xl:h-[620px] w-full"
          >
            <div className="absolute top-[0%] left-[5%] w-full h-[95%] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl group border-[1rem] border-white">
              <Image
                src="/hero-img.jpg"
                alt="Talent"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out brightness-[0.98]"
              />

              <div className="absolute bottom-8 left-8 p-3 px-5 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-widest block mb-0.5">
                      Spotlight
                    </span>
                    <span className="text-zinc-950 font-black text-base tracking-tight lowercase">
                      Sarah Jenkins
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 xl:-left-10 w-[200px] xl:w-[240px] h-[280px] xl:h-[320px] bg-red-600 rounded-[2.5rem] border-[0.75rem] border-white shadow-2xl overflow-hidden"
            >
              <Image
                src="/join_now_1.jpg"
                alt="Set"
                fill
                className="object-cover brightness-75"
              />
            </motion.div>
          </motion.div>

          {/* Mobile Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:hidden relative w-full h-[320px] sm:h-[400px] rounded-[2rem] overflow-hidden border-[0.5rem] border-white shadow-2xl"
          >
            <Image
              src="/hero-img.jpg"
              alt="Talent"
              fill
              className="object-cover brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
            <div className="absolute bottom-5 left-5 p-3 px-5 bg-white/85 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <Camera className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[8px] font-black text-red-600 uppercase tracking-widest block">
                    Spotlight
                  </span>
                  <span className="text-zinc-950 font-black text-sm tracking-tight lowercase">
                    Sarah Jenkins
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
