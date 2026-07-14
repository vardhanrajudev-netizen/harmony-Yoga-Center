import { MessageCircle, Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  onBookClick: () => void;
}

export default function CTASection({ onBookClick }: CTASectionProps) {
  const directWhatsAppUrl = "https://wa.me/917036711097?text=Hi!%20I%20would%20like%20to%20reserve%20my%20free%203-day%20trial%20passes%20for%20the%20Harmony%20Yoga%20Center%20program.";

  return (
    <section id="contact" className="relative py-[64px] md:py-[88px] lg:py-[120px] bg-luxury-glow-b overflow-hidden">
      {/* Structural Accent blur details */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 rounded-full bg-brand-gold/12 filter blur-3xl pointer-events-none ambient-glow-1" />
      <div className="absolute bottom-10 right-[-100px] w-80 h-80 rounded-full bg-brand-sage/20 filter blur-3xl pointer-events-none ambient-glow-2" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        {/* Core CTA Box styled like a luxury invitation board */}
        <motion.div
          id="cta-lux-container"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] bg-gradient-to-br from-[#065F5B] via-[#0F766E] to-[#0A4E49] p-8 sm:p-16 text-center border border-brand-gold/20 shadow-2xl overflow-hidden"
        >
          {/* Subtle background luxury leaf trace ornament or gold concentric lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Golden Seal element: concentric ring expanding shadow pulse */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ['0 0 0 0px rgba(242, 198, 109, 0.35)', '0 0 0 14px rgba(242, 198, 109, 0)', '0 0 0 0px rgba(242, 198, 109, 0)']
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-brand-gold-bright border border-brand-gold-bright/30 mb-8 z-10 relative"
          >
            <Sparkles className="h-7 w-7 text-brand-gold-bright" />
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-ivory leading-[1.15]">
              Begin Your Wellness <span className="text-brand-gold-bright">Transformation</span> Today
            </h2>
            
            <p className="text-base sm:text-lg text-brand-sage/90 max-w-xl mx-auto leading-relaxed font-sans mt-2">
              Join our free 3-day yoga experience and discover a healthier, lighter version of yourself. Tailored naturally by registered masters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-6 max-w-lg mx-auto">
              {/* Primary action trigger */}
              <motion.button
                type="button"
                id="cta-bottom-primary"
                onClick={onBookClick}
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                  boxShadow: '0 15px 30px -8px rgba(212, 163, 115, 0.45)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A373] hover:bg-[#E2B383] px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-widest text-brand-charcoal transition-all duration-300 cursor-pointer shadow-lg group border border-transparent"
              >
                <span>Book Free Trial</span>
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>

              {/* WhatsApp custom trigger */}
              <motion.a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer referrer"
                id="cta-bottom-whatsapp"
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                  boxShadow: '0 15px 30px -8px rgba(37, 211, 102, 0.4)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-widest text-white hover:bg-[#20ba59] transition-all duration-300 shadow-lg cursor-pointer"
              >
                <MessageCircle className="h-5.5 w-5.5 fill-current" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>

            {/* Quick trust metrics below buttons */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                   opacity: 1,
                   transition: { staggerChildren: 0.15 }
                }
              }}
              className="flex flex-wrap items-center justify-center gap-6 pt-8 text-xs sm:text-sm font-bold text-brand-sage/85 uppercase tracking-widest border-t border-white/10 font-sans"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-gold-bright shrink-0" />
                No Obligations
              </motion.span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-brand-gold-bright/50" />
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-brand-gold-bright shrink-0" />
                Vijayawada Studio & Live Stream
              </motion.span>
              <span className="hidden sm:inline h-1 w-1 rounded-full bg-brand-gold-bright/50" />
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-brand-gold-bright shrink-0" />
                Free 3-Day Pass
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
