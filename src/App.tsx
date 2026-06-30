import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import StickyMobileCTA from './components/StickyMobileCTA';

// Lazy loaded page components for optimal production build bundlings and SEO crawl structures
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ProgramsPage = lazy(() => import('./components/ProgramsPage'));
const CorporateWellnessPage = lazy(() => import('./components/CorporateWellnessPage'));
const YogaTutorialsPage = lazy(() => import('./components/YogaTutorialsPage'));
const SuccessStoriesPage = lazy(() => import('./components/SuccessStoriesPage'));
const GalleryPage = lazy(() => import('./components/GalleryPage'));
const ResourcesPage = lazy(() => import('./components/ResourcesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

// A luxurious, minimalist skeleton loading view reflecting Aman Resorts style guidelines
function PageSkeletonLoader() {
  return (
    <div className="min-h-screen bg-brand-ivory flex flex-col items-center justify-center font-sans space-y-4">
      <div className="h-9 w-9 rounded-full border-2 border-brand-emerald/15 border-t-brand-gold animate-spin" />
      <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-[3px] animate-pulse">Loading Sanctuary...</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('Weight Loss Programs');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenBooking = (programName?: string) => {
    if (programName && typeof programName === 'string') {
      setSelectedProgram(programName);
    } else {
      setSelectedProgram('Weight Loss Programs');
    }
    setIsBookingOpen(true);
  };

  // Scroll to top of window securely on every routing transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // CTA triggers are active only on primary decision interfaces
  const isCtaAllowed = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/programs';

  return (
    <div className="relative min-h-screen bg-brand-ivory font-sans" id="studio-app-root">
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-emerald via-brand-gold-bright to-brand-gold origin-left z-50 shadow-[0_1px_10px_rgba(229,169,59,0.7)]"
        style={{ scaleX }}
      />
      
      {/* 1. Transparent Translucent Navbar with Multi-Page Routing */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* 2. SEO Friendly Lazy Routing Panel with Smooth Motion Transition Frames */}
      <div className="min-h-[75vh]" id="routing-stage-wrapper">
        <Suspense fallback={<PageSkeletonLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage onBookClick={handleOpenBooking} />} />
                <Route path="/about" element={<AboutPage onBookClick={handleOpenBooking} />} />
                <Route path="/programs" element={<ProgramsPage onSelectProgram={handleOpenBooking} />} />
                <Route path="/corporate-wellness" element={<CorporateWellnessPage />} />
                <Route path="/yoga-tutorials" element={<YogaTutorialsPage onBookClick={handleOpenBooking} />} />
                <Route path="/success-stories" element={<SuccessStoriesPage onBookClick={handleOpenBooking} />} />
                <Route path="/gallery" element={<GalleryPage onBookClick={handleOpenBooking} />} />
                
                {/* Unified Resources Tab routing handlers */}
                <Route path="/resources" element={<ResourcesPage onBookClick={handleOpenBooking} />} />
                <Route path="/resources/:tab" element={<ResourcesPage onBookClick={handleOpenBooking} />} />
                
                <Route path="/contact" element={<ContactPage />} />

                {/* Secure safety wildcard fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </div>

      {/* 3. Infinite Radial Shaded Footer matching sanctuary aesthetics */}
      <Footer />

      {/* 4. Touch conversion CTAs */}
      {isCtaAllowed && (
        <StickyMobileCTA onBookClick={() => handleOpenBooking()} />
      )}

      {/* 5. Interactive Micro-animated Booking Modal Funnel */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedProgram={selectedProgram}
      />
    </div>
  );
}
