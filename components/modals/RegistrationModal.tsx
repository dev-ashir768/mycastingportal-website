"use client";

import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRoles, registerUser } from "@/lib/api";
import type { Role } from "@/types/api";

// ─── Schema ──────────────────────────────────────────────────────────────────

const registrationSchema = z.object({
  roleId: z.string().min(1, "Please select a role"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must include uppercase, lowercase, number, and special character"
    )
});

type RegistrationData = z.infer<typeof registrationSchema>;

// ─── Props ───────────────────────────────────────────────────────────────────

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunch: () => void;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function RegistrationModal({ isOpen, onClose, onLaunch }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [roles, setRoles] = useState<Role[]>([]);
  const [rolesLoading, setRolesLoading] = useState(false);
  const [rolesError, setRolesError] = useState<string | null>(null);

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
      roleId: "",
      fullName: "",
      email: "",
      password: "",
    },
  });

  const selectedRoleId = useWatch({ control, name: "roleId" });

  // Fetch roles when modal opens
  useEffect(() => {
    if (!isOpen) return;
    setRolesLoading(true);
    setRolesError(null);
    getRoles()
      .then((res) => setRoles(res.data))
      .catch((err: Error) => setRolesError(err.message))
      .finally(() => setRolesLoading(false));
  }, [isOpen]);

  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        roleId: data.roleId,
      });
      setStep(3);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await trigger("roleId");
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
        {/* Header */}
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
            className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-red-600 transition-all shadow-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8 min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">

            {/* ── Step 1: Select Role ── */}
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
                  {rolesLoading && (
                    <div className="flex items-center justify-center py-6">
                      <Loader2 className="w-5 h-5 animate-spin text-zinc-400" />
                    </div>
                  )}

                  {rolesError && (
                    <p className="text-red-600 text-[11px] font-bold text-center uppercase">
                      {rolesError}
                    </p>
                  )}

                  {!rolesLoading &&
                    !rolesError &&
                    roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => setValue("roleId", role.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                          selectedRoleId === role.id
                            ? "bg-red-50 border-red-600 shadow-sm"
                            : "bg-zinc-50 border-transparent hover:border-zinc-200 hover:bg-zinc-100"
                        }`}
                      >
                        {/* Selection indicator */}
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            selectedRoleId === role.id
                              ? "bg-red-600 shadow-md"
                              : "bg-white border border-zinc-200"
                          }`}
                        >
                          <span
                            className={`text-sm font-black uppercase ${
                              selectedRoleId === role.id
                                ? "text-white"
                                : "text-zinc-400"
                            }`}
                          >
                            {role.name.charAt(0)}
                          </span>
                        </div>

                        <div>
                          <h4
                            className={`text-sm font-bold transition-colors capitalize ${
                              selectedRoleId === role.id
                                ? "text-red-600"
                                : "text-zinc-900"
                            }`}
                          >
                            {role.name}
                          </h4>
                          {role.description && (
                            <p className="text-[11px] text-zinc-500 font-medium">
                              {role.description}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}

                  {errors.roleId && (
                    <p className="text-red-600 text-[10px] font-bold mt-2 text-center uppercase">
                      {errors.roleId.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Account Details ── */}
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
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-600 transition-colors    cursor-pointer"
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

                  {submitError && (
                    <p className="text-red-600 text-[10px] font-bold text-center uppercase bg-red-50 py-2 px-3 rounded-lg border border-red-200">
                      {submitError}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Success ── */}
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

                <Button
                  onClick={onLaunch}
                  className="w-full bg-red-600 hover:bg-zinc-950 text-white h-12 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg cursor-pointer"
                >
                  Launch Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {step < 3 && (
          <div className="relative p-5 px-6 border-t border-zinc-100 flex justify-between items-center bg-zinc-50/20">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="text-zinc-400 hover:text-red-600 transition-all text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            <Button
              onClick={nextStep}
              disabled={isSubmitting || rolesLoading}
              className="bg-zinc-950 hover:bg-red-600 text-white h-11 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md transition-all duration-300 cursor-pointer"
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
