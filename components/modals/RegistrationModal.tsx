"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Briefcase,
  Camera,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Form Schema
const registrationSchema = z.object({
  role: z.enum(["talent", "agent", "director"], {
    message: "Please select a role",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    trigger,
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      role: undefined,
      fullName: "",
      email: "",
      password: "",
    },
  });

  const selectedRole = useWatch({ control, name: "role" });

  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);
    console.log("Form Values:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(3);
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await trigger("role");
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await trigger(["fullName", "email", "password"]);
      if (isValid) handleSubmit(onSubmit)();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/40 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-200"
      >
        {/* Compact Header */}
        <div className="relative p-5 px-6 flex justify-between items-center border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 rounded-full transition-all duration-500 ${
                  step === s
                    ? "w-6 bg-red-600"
                    : step > s
                      ? "w-2 bg-red-600/30"
                      : "w-2 bg-zinc-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-red-600 transition-all shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Compact Content */}
        <div className="relative p-6 sm:p-8 min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-black text-zinc-950 tracking-tight mb-1">
                    Choose your role
                  </h2>
                  <p className="text-zinc-500 text-xs font-medium">
                    Select how you will use the platform
                  </p>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      id: "talent",
                      title: "Talent",
                      desc: "Actor, model, performer",
                      icon: User,
                    },
                    {
                      id: "agent",
                      title: "Agent / Manager",
                      desc: "Represent and submit clients",
                      icon: Briefcase,
                    },
                    {
                      id: "director",
                      title: "Casting Director",
                      desc: "Find and discover talent",
                      icon: Camera,
                    },
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() =>
                        setValue(
                          "role",
                          (role.id as "talent") || "agent" || "director",
                        )
                      }
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 group flex items-center gap-4 ${
                        selectedRole === role.id
                          ? "bg-red-50 border-red-600 shadow-sm"
                          : "bg-zinc-50 border-transparent hover:border-zinc-200 hover:bg-zinc-100"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          selectedRole === role.id
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-white text-zinc-400 border border-zinc-200"
                        }`}
                      >
                        <role.icon className="w-4 h-4" strokeWidth={2} />
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-bold transition-colors ${selectedRole === role.id ? "text-red-600" : "text-zinc-900"}`}
                        >
                          {role.title}
                        </h4>
                        <p className="text-[11px] text-zinc-500 font-medium">
                          {role.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                  {errors.role && (
                    <p className="text-red-600 text-[10px] font-bold mt-2 text-center uppercase">
                      {errors.role.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-black text-zinc-950 tracking-tight mb-1">
                    Create account
                  </h2>
                  <p className="text-zinc-500 text-xs font-medium">
                    Fill in your basic information
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-950 uppercase tracking-widest pl-1">
                      Full Name
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-sm"
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-[10px] font-bold uppercase">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-950 uppercase tracking-widest pl-1">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-sm"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-[10px] font-bold uppercase">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-950 uppercase tracking-widest pl-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        placeholder="Min. 8 chars"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm pr-12 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-[10px] font-bold uppercase">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-4"
              >
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </motion.div>
                </div>

                <h2 className="text-3xl font-black text-zinc-950 tracking-tight mb-2">
                  Success!
                </h2>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[240px] mb-8">
                  Welcome to the portal.
                </p>

                <Button className="w-full bg-red-600 hover:bg-zinc-950 text-white h-12 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Launch Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Compact Footer */}
        {step < 3 && (
          <div className="relative p-5 px-6 border-t border-zinc-100 flex justify-between items-center bg-zinc-50/20">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="text-zinc-400 hover:text-red-600 transition-all text-[10px] font-bold uppercase tracking-widest"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            <Button
              onClick={nextStep}
              disabled={isSubmitting}
              className="bg-zinc-950 hover:bg-red-600 text-white h-11 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md transition-all duration-300"
            >
              {isSubmitting ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <>
                  {step === 2 ? "Finalize" : "Next Step"}
                  <ArrowRight className="ml-2 w-3 h-3" />
                </>
              )}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
