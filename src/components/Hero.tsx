import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  // Ultra-subtle parallax scroll effects
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 60]);
  const yImage = useTransform(scrollY, [0, 500], [0, -30]);

  const headingLines = [
    { text: "Lose Weight.", isItalic: false },
    { text: "Gain Confidence.", isItalic: true },
    { text: "Transform Naturally.", isItalic: false }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[120px] pb-16 overflow-hidden bg-brand-ivory text-brand-charcoal"
    >
      {/* Soft luxurious background radial blurs and continuous ambient glowing gradients */}
      <div className="absolute top-1/6 -left-64 w-[550px] h-[550px] rounded-full bg-brand-sage/20 filter blur-3xl opacity-60 pointer-events-none ambient-glow-1" />
      <div className="absolute bottom-12 -right-48 w-[600px] h-[600px] rounded-full bg-brand-gold/12 filter blur-3xl opacity-50 pointer-events-none ambient-glow-2" />
      
      {/* Decorative slow rotating mandala in background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[-10%] w-[480px] h-[480px] opacity-[0.12] text-brand-gold pointer-events-none hidden lg:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[0.3]" strokeDasharray="1.5 1">
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="32" />
          <circle cx="50" cy="50" r="16" />
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 46 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={50 + 46 * Math.sin((i * 15 * Math.PI) / 180)}
            />
          ))}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <path
                key={i}
                d={`M 50 50 Q ${50 + 22 * Math.cos(angle - 0.25)} ${50 + 22 * Math.sin(angle - 0.25)} ${50 + 38 * Math.cos(angle)} ${50 + 38 * Math.sin(angle)} Q ${50 + 22 * Math.cos(angle + 0.25)} ${50 + 22 * Math.sin(angle + 0.25)} 50 50`}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Continuing floating golden particles and abstract organic leaves representing pure Agni prana energy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-brand-gold/40 rounded-full animate-float-slow" />
        <div className="absolute top-3/4 left-1/10 w-2 h-2 bg-brand-emerald/20 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-brand-gold/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/10 w-2.5 h-2.5 bg-brand-gold/20 rounded-full animate-float-delayed" />
        
        {/* Abstract floating organic leaf shapes */}
        <motion.div
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -35, -70, -100],
            rotate: [0, 45, 90, 135],
            opacity: [0, 0.7, 0.4, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 left-1/4 text-brand-sage/20 h-6 w-6"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C12,19.7 20,15 22,9C20,9 18,9 17,8Z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            x: [0, -25, 15, 0],
            y: [0, -40, -85, -120],
            rotate: [180, 220, 260, 300],
            opacity: [0, 0.6, 0.3, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute bottom-24 right-1/3 text-brand-gold/10 h-5 w-5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C12,19.7 20,15 22,9C20,9 18,9 17,8Z" />
          </svg>
        </motion.div>
      </div>

      {/* Decorative luxury vertical stroke */}
      <div className="absolute left-[4%] top-1/4 bottom-1/4 w-[1px] bg-brand-sage/25 hidden xl:block" />

      {/* Entire Section Page Bounds constrained exactly to max-w-[1280px] */}
      <div className="relative mx-auto max-w-[1280px] w-full px-6 sm:px-10 lg:px-12 z-10">
        
        {/* Precise Column Ratio & Responsive Scaling
            Desktop: 52% left content, 48% right image
            Tablet / Mobile: Stacked with appropriate alignments */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          
          {/* Left Column Content - 52% width on lg with parallax scroll */}
          <motion.div 
            style={{ y: yBg }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some" }}
            className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            
            <div className="space-y-4 w-full">
              {/* Premium minimal overline indicator */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 text-brand-gold font-bold uppercase tracking-[0.25em] text-[13px] md:text-[14px]"
              >
                <div className="w-8 h-[1.5px] bg-brand-gold"></div>
                <span>Bespoke Wellness Sanctuary</span>
              </motion.div>

              {/* Sophisticated headline: Line-by-line reveal */}
              <h1
                className="font-display font-bold text-brand-charcoal tracking-tight leading-[1.1] select-none text-[32px] sm:text-[42px] md:text-[50px] lg:text-[62px]"
                id="hero-heading"
              >
                {headingLines.map((line, idx) => (
                  <div key={idx} className="overflow-hidden py-1">
                    <motion.span
                      variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.15 + idx * 0.15, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className={`block ${line.isItalic ? 'text-brand-emerald italic font-normal' : ''}`}
                    >
                      {line.text}
                    </motion.span>
                  </div>
                ))}
              </h1>
            </div>

            {/* Subheading: Desktop 22px, Tablet 20px, Mobile 18px. Width: 80% desktop, 100% mobile */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-brand-charcoal/70 leading-relaxed w-full lg:w-[80%] text-[18px] md:text-[20px] lg:text-[22px]"
              id="hero-subheading"
            >
              Step into a premium sanctuary designed to help you naturally reduce weight, correct metabolism, and align your health in just 30 minutes a day.
            </motion.p>

            {/* CTAs: Restrained, elegant buttons with scale entrance & translateY lifts on hover */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2 w-full sm:w-auto"
              id="hero-ctas"
            >
              <div className="relative w-full sm:w-auto">
                {/* Glowing breathing ring backdrop for premium CTA */}
                <motion.div
                  className="absolute inset-0 bg-brand-emerald/25 rounded-full filter blur-md -z-10"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.35, 0.65, 0.35],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.button
                  type="button"
                  id="hero-primary-cta"
                  onClick={onBookClick}
                  whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 22px -5px rgba(15, 118, 110, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0F766E] px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-ivory hover:bg-brand-emerald-hover transition-colors duration-300 cursor-pointer shadow-sm overflow-hidden"
                >
                  <span>Book Free Trial Session</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.button>
              </div>

              <motion.a
                href="#testimonials"
                id="hero-secondary-cta"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider border-b border-brand-gold pb-1 text-brand-charcoal hover:text-brand-emerald hover:border-brand-emerald transition-colors"
              >
                <span className="w-5 h-5 rounded-full border border-brand-gold group-hover:border-brand-emerald flex items-center justify-center text-[8px] transition-colors">▶</span>
                <span>Watch Journeys</span>
              </motion.a>
            </motion.div>

            {/* Premium client-proof alignment badge with staggered rating pop-ins */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-3 pt-6 text-[12px] font-medium text-brand-charcoal/75 w-full justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1 }
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20, 
                      delay: 0.7 + i * 0.08 
                    }}
                    src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80&sig=${i}`}
                    alt="Sanctuary Practitioner"
                    className="h-8 w-8 rounded-full border border-brand-ivory object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 font-sans">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <span>Excellent 4.9/5 stars based on 500+ student transformations</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column Layout - 48% width on lg */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some" }}
            className="w-full lg:w-[48%] relative flex justify-center items-center"
          >
            
            <div
              className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-brand-sage/20 max-h-[400px] md:max-h-[500px] lg:max-h-[650px] bg-brand-emerald/10"
            >
              {/* Luxury Reveal Mask Cover */}
              <motion.div
                variants={{
                  hidden: { left: '0%' },
                  visible: { left: '100%' }
                }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-[#0F766E] z-10 pointer-events-none"
              />

              {/* Parallax Image Scale on Entry */}
              <motion.img
                variants={{
                  hidden: { scale: 1.08, opacity: 0 },
                  visible: { scale: 1.0, opacity: 1 }
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ y: yImage }}
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
                alt="Aesthetic Yoga and Natural Detoxification - Harmony Yoga Center"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium sophisticated overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/20 via-transparent to-brand-emerald/5 pointer-events-none" />
            </div>

            {/* Restrained Branding Badges (Infinite 4s float motion, delayed slightly from each other) */}
            
            {/* BADGE 1: 500+ Transformations */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-3 left-4 z-20"
            >
              <motion.div
                className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-brand-sage/60 shadow-lg flex items-center gap-2.5 select-none"
                id="hero-float-clients"
                animate={{ 
                  y: [0, -6, 0]
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-sage/30 text-brand-emerald">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-xs font-bold text-brand-emerald tracking-tight">500+ Verified</p>
                  <p className="text-[9px] font-semibold text-brand-charcoal/60 uppercase tracking-widest leading-none mt-0.5">Transformations</p>
                </div>
              </motion.div>
            </motion.div>

            {/* BADGE 2: 7+ Years Experience */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: -15 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 right-4 z-20"
            >
              <motion.div
                className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-brand-sage/60 shadow-lg flex items-center gap-2.5 select-none"
                id="hero-float-experience"
                animate={{ 
                  y: [0, 6, 0]
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F1E5] text-[#b58552]">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-xs font-bold text-brand-gold tracking-tight">7+ Years</p>
                  <p className="text-[9px] font-semibold text-[#b58552]/70 uppercase tracking-widest leading-none mt-0.5">Clinical Expertise</p>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
