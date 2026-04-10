"use client";

import { Icon } from "@/components/atoms";
import type { ServiceItem } from "@/lib/constants";
import { motion } from "motion/react";
import { MD3_EASING } from "@/lib/animations";

interface ServiceCardProps {
  service: ServiceItem;
}

const BG_VARIANTS = {
  high: {
    base: "bg-surface-container-high hover:bg-surface-bright",
    iconBg: "bg-surface-container-low",
  },
  low: {
    base: "bg-surface-container-low hover:bg-surface-container-high",
    iconBg: "bg-surface-container-high",
  },
} as const;

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon, title, description, tag, variant } = service;
  const styles = BG_VARIANTS[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: MD3_EASING.decelerated }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: MD3_EASING.standard },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1, ease: MD3_EASING.accelerated },
      }}
      className={`group p-8 rounded-lg ${styles.base} flex flex-col justify-between min-h-[400px]`}
    >
      <div className="space-y-6">
        {/* Icon */}
        <div
          className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon name={icon} />
        </div>

        {/* Title & Description */}
        <h3 className="font-headline text-2xl font-bold text-white">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>

      {/* Bottom Tag */}
      <div className="font-label text-[10px] uppercase tracking-widest text-zinc-500 pt-8 border-t border-outline-variant/10">
        {tag}
      </div>
    </motion.div>
  );
}
