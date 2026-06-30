import { MessageCircle, Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface CTASectionProps {
  onBookClick: () => void;
}

export default function CTASection({ onBookClick }: CTASectionProps) {
  const directWhatsAppUrl = "https://wa.me/917036711097?text=Hi!%20I%20would%20like%20to%20reserve%20my%20free%203-day%20trial%20passes%20for%20the%20Harmony%20Yoga%20Center%20program.";

  return (
    <section id="contact" className="relative py-[56px] md:py-[72px] lg:py-[100px] bg-premium-light-alt overflow-hidden">
      {/* Structural Accent blur details */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 rounded-full bg-brand-gold/10 filter blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Core CTA Box styled like a luxury invitation board */}
        <motion.div
          id="cta-lux-container"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-linear-to-br from-[#0F766E] to-[#0A4E49] p-8 sm:p-14 text-center border-2 border-brand-gold/3 shadow-2xl overflow-hidden"
        >
          {/* Subtle background luxury leaf trace ornament or gold concentric lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Golden Seal element: concentric ring expanding shadow pulse */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ['0 0 0 0px rgba(255, 215, 0, 0.25)', '0 0 0 12px rgba(255, 215, 0, 0)', '0 0 0 0px rgba(255, 215, 0, 0)']
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-brand-gold-bright border border-brand-gold-bright/25 mb-8"
          >
            <Sparkles className="h-7 w-7" />
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-ivory leading-[1.15]">
              Begin Your Wellness Transformation Today
            </h2>
            
            <p className="text-sm sm:text-base text-brand-sage/90 max-w-lg mx-auto leading-relaxed font-sans mt-2">
              Join our free 3-day yoga experience and discover a healthier, lighter version of yourself. Tailored naturally by registered masters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-md mx-auto">
              {/* Primary action trigger */}
              <motion.button
                type="button"
                id="cta-bottom-primary"
                onClick={onBookClick}
                whileHover={{ 
                  scale: 1.03,
                  y: -2,
                  boxShadow: '0 12px 24px -8px rgba(255, 215, 0, 0.35)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A373] px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:bg-brand-gold-hover transition-colors duration-300 cursor-pointer shadow-md group border border-transparent"
              >
                <span>Book Free Trial</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
                  boxShadow: '0 12px 24px -8px rgba(37, 211, 102, 0.4)'
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#20ba59] transition-colors duration-300 shadow-md cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
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
              className="flex flex-wrap items-center justify-center gap-6 pt-8 text-[11px] font-semibold text-brand-sage/85 uppercase tracking-widest border-t border-white/10 font-sans"
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
