import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'reveal-mask' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || variant === 'none') {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  // Animation configuration based on variant type
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'reveal-mask':
        return {
          hidden: { opacity: 0, clipPath: 'inset(10% 20% 10% 20% rounded 16px)' },
          visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0% rounded 0px)' },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    };
  };

  const selectedVariants = getVariants();

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={selectedVariants}
      transition={{
        duration: variant === 'reveal-mask' ? duration * 1.3 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom premium ease-out cubic bezier curve
      }}
      className={`${className} will-change-transform-opacity`}
    >
      {children}
    </motion.div>
  );
}
