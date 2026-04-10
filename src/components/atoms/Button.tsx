"use client";

import { motion } from "motion/react";
import { MD3_EASING, TRANSITION } from "@/lib/animations";

export type ButtonVariant = "primary" | "ghost" | "submit";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg shadow-xl shadow-primary/20",
  ghost:
    "relative overflow-hidden px-10 py-5 rounded-full bg-surface-container-high/40 backdrop-blur-xl text-white font-headline font-bold text-lg border border-outline-variant/15 hover:bg-surface-container-high",
  submit:
    "relative overflow-hidden w-full py-5 rounded-full bg-primary text-on-primary font-headline font-bold text-lg hover:brightness-110",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={`${VARIANT_STYLES[variant]} ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: MD3_EASING.standard },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1, ease: MD3_EASING.accelerated },
      }}
      {...(props as any)}
    >
      {/* Ripple Effect Background could go here with layoutId or motion div */}
      {children}
    </motion.button>
  );
}
