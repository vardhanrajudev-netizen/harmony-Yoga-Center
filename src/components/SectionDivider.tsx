import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Sparkles } from 'lucide-react';

interface SectionDividerProps {
  variant?: 'lotus' | 'wave' | 'line';
  className?: string;
}

export default function SectionDivider({ variant = 'lotus', className = '' }: SectionDividerProps) {
  // Common viewport options for animations - triggers on enter/exit
  const viewportOptions = { once: false, amount: 0.25 };

  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-[0] select-none pointer-events-none ${className}`}>
        <motion.svg
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative block w-full h-[30px] text-brand-sage/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V31.35C1139.9,56.73,1064.65,113.63,985.66,92.83Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`flex items-center justify-center max-w-[1280px] mx-auto px-6 ${className}`}>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '100%', opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
        />
      </div>
    );
  }

  // default 'lotus' separator
  return (
    <div className={`relative flex items-center justify-center py-6 select-none pointer-events-none ${className}`}>
      {/* Left elegant fade-in line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="w-1/4 sm:w-1/3 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/40 origin-right"
      />

      {/* Central lotus blossom with soft glow breathing animation */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={viewportOptions}
        transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
        className="relative mx-4 flex items-center justify-center p-2 rounded-full border border-brand-gold/20 bg-brand-ivory z-10 shadow-[0_2px_12px_rgba(180,127,67,0.08)]"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              '0 0 0 0px rgba(180, 127, 67, 0)',
              '0 0 10px 2px rgba(180, 127, 67, 0.15)',
              '0 0 0 0px rgba(180, 127, 67, 0)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-full p-1"
        >
          <Flower2 className="h-5 w-5 text-brand-gold" />
        </motion.div>
        
        {/* Decorative mini sparkles floating */}
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4], y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="h-2 w-2 text-brand-gold-bright" />
        </motion.div>
      </motion.div>

      {/* Right elegant fade-in line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="w-1/4 sm:w-1/3 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/40 origin-left"
      />
    </div>
  );
}
