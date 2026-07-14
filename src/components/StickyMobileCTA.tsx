import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          id="sticky-mobile-cta"
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-ivory/95 backdrop-blur-md border-t border-[#0F766E]/10 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] flex md:hidden items-center gap-3 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] w-full"
        >
          {/* WhatsApp Direct Action (38% width) */}
          <button
            type="button"
            id="mobile-sticky-whatsapp"
            onClick={handleWhatsApp}
            style={{ width: '38%' }}
            className="h-[52px] flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white text-[14px] font-bold shadow-sm active:scale-[0.98] transition-transform whitespace-nowrap shrink-0 overflow-hidden"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-current shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* Trigger Booking Modal (62% width) */}
          <button
            type="button"
            id="mobile-sticky-book"
            onClick={onBookClick}
            style={{ width: '62%' }}
            className="h-[52px] flex items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-white text-[14px] font-bold shadow-md active:scale-[0.98] transition-transform whitespace-nowrap shrink-0 overflow-hidden"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-4.5 w-4.5 text-[#E5A93B] shrink-0 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
