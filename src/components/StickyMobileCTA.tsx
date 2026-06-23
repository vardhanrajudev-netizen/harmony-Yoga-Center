import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onBookClick: () => void;
}

export default function StickyMobileCTA({ onBookClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/917036711097?text=Hi!%20I%20would%20liked%20to%20register%20for%20the%20Harmony%20Yoga%20Center%203-day%20free%20trial.", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          id="sticky-mobile-cta"
          className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-brand-ivory/95 backdrop-blur-md border-t border-brand-sage/40 shadow-2xl flex md:hidden gap-2"
        >
          {/* WhatsApp Direct Action */}
          <button
            type="button"
            id="mobile-sticky-whatsapp"
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white py-3 px-1 text-xs font-bold shadow-sm"
          >
            <MessageCircle className="h-4 w-4 fill-current shrink-0" />
            <span>WhatsApp Us</span>
          </button>

          {/* Trigger Booking Modal */}
          <button
            type="button"
            id="mobile-sticky-book"
            onClick={onBookClick}
            className="flex-2 flex items-center justify-center gap-1.5 rounded-xl bg-brand-emerald text-brand-ivory py-3 px-1.5 text-xs font-bold shadow-md"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform hover:translate-x-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
