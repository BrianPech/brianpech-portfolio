export const MD3_EASING = {
  standard: [0.2, 0.0, 0, 1.0], // General movement
  emphasized: [0.3, 0.0, 0.8, 0.15], // Gaining much attention
  decelerated: [0.0, 0.0, 0.2, 1.0], // Entering the frame
  accelerated: [0.4, 0.0, 1.0, 1.0], // Leaving the frame
};

export const TRANSITION = {
  micro: { duration: 0.2, ease: MD3_EASING.standard }, // 100-200ms
  small: { duration: 0.3, ease: MD3_EASING.standard }, // 200-300ms
  large: { duration: 0.5, ease: MD3_EASING.emphasized }, // 300-500ms
  entrance: { duration: 0.4, ease: MD3_EASING.decelerated },
  exit: { duration: 0.3, ease: MD3_EASING.accelerated },
};

export const ANIMATION_VARIANTS = {
  entranceScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: TRANSITION.entrance,
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: TRANSITION.small,
  },
};
