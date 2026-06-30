import React, { useState } from 'react';
import { motion } from 'motion/react';

export function LogoIcon({ className = "h-8 w-8 text-brand-gold" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      id="svg-logo-icon"
    >
      {/* Central petal */}
      <path 
        d="M24 6C24 6 20 18 24 38C28 18 24 6 24 6Z" 
        fill="currentColor" 
        fillOpacity="0.9" 
      />
      {/* Left major petal */}
      <path 
        d="M24 14C17 19 12 27 16 35C21 34 23.5 25 24 14Z" 
        fill="currentColor" 
        fillOpacity="0.75" 
      />
      {/* Right major petal */}
      <path 
        d="M24 14C31 19 36 27 32 35C27 34 24.5 25 24 14Z" 
        fill="currentColor" 
        fillOpacity="0.75" 
      />
      {/* Left minor petal */}
      <path 
        d="M24 22C15 25 10 32 12 37C18 36 22 30 24 22Z" 
        fill="currentColor" 
        fillOpacity="0.55" 
      />
      {/* Right minor petal */}
      <path 
        d="M24 22C33 25 38 32 36 37C30 36 26 30 24 22Z" 
        fill="currentColor" 
        fillOpacity="0.55" 
      />
      {/* Base ring or platform representing sanctuary */}
      <path 
        d="M14 41C20 43 28 43 34 41" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Logo({ variant = 'light', className = "", onClick }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  // Configured colors for consistency:
  // variant light: emerald logo, emerald text, charcoal subtext
  // variant dark: light gold logo, white text
  // variant footer: gold logo, white text, gold subtext
  
  const iconColor = variant === 'footer' ? 'text-[#E3B777]' : variant === 'dark' ? 'text-white' : 'text-[#0F766E]';
  const titleColor = variant === 'footer' ? 'text-white' : variant === 'dark' ? 'text-white' : 'text-[#0F766E]';
  const subtitleColor = variant === 'footer' ? 'text-[#E3B777]' : variant === 'dark' ? 'text-white/60' : 'text-[#1F2937]/50';

  return (
    <div 
      className={`flex items-center gap-3 select-none cursor-pointer ${className}`} 
      id="brand-logo-container"
      onClick={onClick}
    >
      {/* Logo Icon on Left */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="shrink-0 flex items-center justify-center"
      >
        {!imgError ? (
          <img
            src="/assets/images/yoga-icon.png"
            alt="Harmony Yoga Center Logo"
            className="h-9 w-9 object-contain"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <LogoIcon className={`h-9 w-9 ${iconColor}`} />
        )}
      </motion.div>
      
      {/* Brand Text on Right */}
      <div className="flex flex-col whitespace-nowrap justify-center" style={{ gap: '1px' }}>
        <div className="flex items-baseline" style={{ lineHeight: '1.1' }}>
          <span 
            className={`font-serif font-bold ${titleColor} tracking-tight`}
            style={{ fontSize: '20px', fontWeight: 700 }}
          >
            Harmony Yoga Center
          </span>
        </div>
        <span 
          className={`font-sans font-bold ${subtitleColor} uppercase block tracking-[2px]`}
          style={{ 
            fontSize: '8px', 
            letterSpacing: '1.8px', 
            lineHeight: '1.1',
            marginTop: '2.5px'
          }}
        >
          Premium Wellness Sanctuary
        </span>
      </div>
    </div>
  );
}
