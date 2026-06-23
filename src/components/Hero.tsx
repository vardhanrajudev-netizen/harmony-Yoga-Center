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
      {/* Soft luxurious background radial blurs */}
      <div className="absolute top-1/6 -left-64 w-[550px] h-[550px] rounded-full bg-brand-sage/15 filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-12 -right-48 w-[600px] h-[600px] rounded-full bg-brand-gold/8 filter blur-3xl opacity-40 pointer-events-none" />

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
            className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            
            <div className="space-y-4 w-full">
              {/* Premium minimal overline indicator */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 text-brand-gold font-bold uppercase tracking-[0.25em] text-[13px] md:text-[14px]"
              >
                <div className="w-8 h-[1.5px] bg-brand-gold"></div>
                <span>Bespoke Wellness Sanctuary</span>
              </motion.div>

              {/* Sophisticated headline: Line-by-line reveal */}
              <h1
                className="font-serif font-bold text-brand-charcoal tracking-tight leading-[1.1] select-none text-[32px] sm:text-[42px] md:text-[50px] lg:text-[62px]"
                id="hero-heading"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", serif' }}
              >
                {headingLines.map((line, idx) => (
                  <div key={idx} className="overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-brand-charcoal/70 leading-relaxed w-full lg:w-[80%] text-[18px] md:text-[20px] lg:text-[22px]"
              id="hero-subheading"
            >
              Step into a premium sanctuary designed to help you naturally reduce weight, correct metabolism, and align your health in just 30 minutes a day.
            </motion.p>

            {/* CTAs: Restrained, elegant buttons with scale entrance & translateY lifts on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2 w-full sm:w-auto"
              id="hero-ctas"
            >
              <motion.button
                type="button"
                id="hero-primary-cta"
                onClick={onBookClick}
                whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 20px -5px rgba(15, 118, 110, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0F766E] px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-ivory hover:bg-brand-emerald-hover transition-colors duration-300 cursor-pointer shadow-sm"
              >
                <span>Book Free Trial Session</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-3 pt-6 text-[12px] font-medium text-brand-charcoal/75 w-full justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
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
          <div className="w-full lg:w-[48%] relative flex justify-center items-center">
            
            <div
              className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-brand-sage/20 max-h-[400px] md:max-h-[500px] lg:max-h-[650px] bg-brand-emerald/10"
            >
              {/* Luxury Reveal Mask Cover */}
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-[#0F766E] z-10 pointer-events-none"
              />

              {/* Parallax Image Scale on Entry */}
              <motion.img
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1.0, opacity: 1 }}
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
              className="absolute -top-3 left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-brand-sage/60 shadow-lg flex items-center gap-2.5 select-none z-20"
              id="hero-float-clients"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, -6, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.8,
                  delay: 0.8
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

            {/* BADGE 2: 7+ Years Experience */}
            <motion.div
              className="absolute bottom-6 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-brand-sage/60 shadow-lg flex items-center gap-2.5 select-none z-20"
              id="hero-float-experience"
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, 6, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 4,
                  delay: 0.5, // slight stagger phase difference
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 0.8,
                  delay: 0.95
                }
              }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8F1E5] text-brand-gold">
                <Award className="h-4.5 w-4.5" />
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-brand-gold tracking-tight">7+ Years</p>
                <p className="text-[9px] font-semibold text-[#b58552]/70 uppercase tracking-widest leading-none mt-0.5">Clinical Expertise</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
