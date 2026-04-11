"use client";

import { useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, RefObject } from "react";

export function useMaterialMotion(ref?: RefObject<HTMLElement>) {
  // If no ref provided, create one internally
  const internalRef = useRef<HTMLElement>(null);
  const targetRef = ref || internalRef;

  // Track if element is in view
  const isInView = useInView(targetRef, { once: true, margin: "-10%" });

  // Scroll tracking on window
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Example Material You style fade up transform
  const yOffset = useTransform(springScroll, [0, 1], [0, -50]);

  return {
    ref: targetRef,
    isInView,
    scrollYProgress,
    springScroll,
    yOffset,
  };
}
