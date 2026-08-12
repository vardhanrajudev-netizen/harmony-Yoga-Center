import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck, X } from 'lucide-react';

interface GoogleReviewItem {
  id: string;
  name: string;
  initials: string;
  date: string;
  rating: number;
  highlight: string;
  text: string;
  avatarBg: string;
  avatarText: string;
}

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Harmony+Yoga+Center/@16.5042097,80.6403067,17z/data=!4m8!3m7!1s0x3a35fb685c4e8999:0x460d6cdb9e39d14e!8m2!3d16.5042097!4d80.6428816!9m1!1b1!16s%2Fg%2F11l2xs0tn3";

const REAL_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'gr-1',
    name: 'Kavita V.',
    initials: 'KV',
    date: '3 months ago',
    rating: 5,
    highlight: 'Flexibility & Lightness',
    text: 'I have been going for yoga for the past one month, and the change I feel in my body and mind is truly amazing. My flexibility has improved, and there’s a lightness in my body that I’ve never felt before.',
    avatarBg: 'bg-[#0F766E]/12',
    avatarText: 'text-[#0F766E]',
  },
  {
    id: 'gr-2',
    name: 'Rakesh K.',
    initials: 'RK',
    date: '2 months ago',
    rating: 5,
    highlight: 'Experienced Yoga Master',
    text: 'గురవే సర్వలోకానాం భిషజే భవరోగిణాం శ్రీదక్షిణామూర్తి స్వామినే నమః. My yoga guru Mr. Veeranjaneyulu Sir is a highly skilled and experienced yoga master. Dedicated and personalized care for every student.',
    avatarBg: 'bg-[#B58552]/15',
    avatarText: 'text-[#966332]',
  },
  {
    id: 'gr-3',
    name: 'Venu G.',
    initials: 'VG',
    date: '3 months ago',
    rating: 5,
    highlight: 'Exceptional & Calming',
    text: 'I had an exceptional experience at this yoga center. The instructor is extremely professional, knowledgeable, and genuinely cares about every individual’s progress. Each session is well-structured, calming, and focused not only on physical wellness but overall mind balance.',
    avatarBg: 'bg-[#1E3A8A]/10',
    avatarText: 'text-[#1E3A8A]',
  },
  {
    id: 'gr-4',
    name: 'Vaishnavi S.',
    initials: 'VS',
    date: '4 months ago',
    rating: 5,
    highlight: 'Peaceful Ambience',
    text: 'I joined this yoga centre 45 days back. The ambience of the centre is peaceful. Taking class with master Anjaneyulu garu is my first exposure to yoga. He is knowledgeable, patient and professional and keeps personalized attention on each student.',
    avatarBg: 'bg-[#2D5F3E]/12',
    avatarText: 'text-[#2D5F3E]',
  },
  {
    id: 'gr-5',
    name: 'Amar K.',
    initials: 'AK',
    date: '2 months ago',
    rating: 5,
    highlight: 'Convenient Online & Offline',
    text: 'Anji sir is a very good yoga teacher. Classes are so calm, clear and easy to follow. Motivates us to do better. Also, he conducts online classes which makes it very convenient to practice from anywhere. Truly grateful for his guidance.',
    avatarBg: 'bg-[#0F766E]/12',
    avatarText: 'text-[#0F766E]',
  },
  {
    id: 'gr-6',
    name: 'Nisha T.',
    initials: 'NT',
    date: '4 months ago',
    rating: 5,
    highlight: 'Uplifting Experience',
    text: 'My yoga classes at Harmony has been an uplifting experience. The instructor’s guidance is gentle yet precise making each session empowering. I have improved my flexibility and ability to hold a posture for much longer than I ever thought.',
    avatarBg: 'bg-[#B58552]/15',
    avatarText: 'text-[#966332]',
  },
  {
    id: 'gr-7',
    name: 'Chandu',
    initials: 'CH',
    date: '5 months ago',
    rating: 5,
    highlight: 'Friendly & Professional',
    text: 'Great yoga center with a peaceful and welcoming atmosphere. The instructor was friendly, professional, and guides everyone very well. I feel more relaxed, flexible, and energetic after joining the sessions.',
    avatarBg: 'bg-[#1E3A8A]/10',
    avatarText: 'text-[#1E3A8A]',
  },
  {
    id: 'gr-8',
    name: 'Ajitha S.',
    initials: 'AS',
    date: '8 months ago',
    rating: 5,
    highlight: 'UK Online Practitioner',
    text: 'I, Ajitha Suri from Caerphilly, South Wales, UK, have been taking online yoga classes from Anji at Harmony Yoga Center, Moghalrajapuram, Vijayawada, for the past one year. It has been a truly transformative experience.',
    avatarBg: 'bg-[#2D5F3E]/12',
    avatarText: 'text-[#2D5F3E]',
  },
  {
    id: 'gr-9',
    name: 'Teja A.',
    initials: 'TA',
    date: '11 months ago',
    rating: 5,
    highlight: 'Deserves More Than 5 Stars',
    text: 'It is clearly unfortunate that Google only allows to rate 5 stars because Harmony yoga centre deserves more. I was initially hesitant, but Anjaneyulu sir takes personal care of every student and follows up on health issues continuously.',
    avatarBg: 'bg-[#0F766E]/12',
    avatarText: 'text-[#0F766E]',
  },
  {
    id: 'gr-10',
    name: 'Praveena R.',
    initials: 'PR',
    date: '7 months ago',
    rating: 5,
    highlight: 'Relaxing & Effective',
    text: 'I joined this yoga class two months ago and I’m still continuing. The sessions are easy to understand and very effective. I feel relaxed after every class, and my body flexibility has improved a lot. Overall, a great experience.',
    avatarBg: 'bg-[#B58552]/15',
    avatarText: 'text-[#966332]',
  },
  {
    id: 'gr-11',
    name: 'Manoj G.',
    initials: 'MG',
    date: '9 months ago',
    rating: 5,
    highlight: 'Body, Mind & Soul',
    text: 'Harmony yoga center has transformed my body, calmed my mind, and nourished my soul. Anji sir is knowledgeable, supportive, and genuinely passionate about what he teaches. The classes are tailored to all skill levels.',
    avatarBg: 'bg-[#1E3A8A]/10',
    avatarText: 'text-[#1E3A8A]',
  },
  {
    id: 'gr-12',
    name: 'Vasavi D.',
    initials: 'VD',
    date: 'A year ago',
    rating: 5,
    highlight: '365 Days Dedicated Practice',
    text: 'A truly dedicated yoga centre that runs classes every single day of the year! No matter the season or holiday... Mr. Anjaneyulu is a truly dedicated yoga teacher, his passion for teaching shows in every class.',
    avatarBg: 'bg-[#2D5F3E]/12',
    avatarText: 'text-[#2D5F3E]',
  },
  {
    id: 'gr-13',
    name: 'Bramarambica',
    initials: 'BR',
    date: '4 months ago',
    rating: 5,
    highlight: 'Family Health & Stress Relief',
    text: 'At first my mother joined this yoga class to reduce stress, anxiety, blood pressure and shoulder pain. Sir took good care of her. After that me and my brother also joined. We feel so calm and energized the whole day.',
    avatarBg: 'bg-[#0F766E]/12',
    avatarText: 'text-[#0F766E]',
  },
  {
    id: 'gr-14',
    name: 'Sai Swaroop M.',
    initials: 'SM',
    date: '11 months ago',
    rating: 5,
    highlight: 'Personal Health Follow-up',
    text: 'A serene place to do Yoga and very good instructor. He takes personal care of every student and follows up on health issues. It’s been 3 months going there and my B12 deficiency symptoms are hardly seen now.',
    avatarBg: 'bg-[#B58552]/15',
    avatarText: 'text-[#966332]',
  }
];

// Google Logo SVG
const GoogleGLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// Decorative Mandala Watermark SVG
const SubtleMandalaPattern = () => (
  <svg
    viewBox="0 0 400 400"
    className="w-[500px] h-[500px] text-brand-sage/10 opacity-40 pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="200" cy="200" r="180" strokeDasharray="4 4" />
    <circle cx="200" cy="200" r="140" />
    <circle cx="200" cy="200" r="100" strokeDasharray="8 8" />
    <circle cx="200" cy="200" r="60" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <ellipse
        key={deg}
        cx="200"
        cy="200"
        rx="120"
        ry="40"
        transform={`rotate(${deg} 200 200)`}
      />
    ))}
  </svg>
);

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedModalReview, setSelectedModalReview] = useState<GoogleReviewItem | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive Items Per Page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = REAL_GOOGLE_REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);
  const totalPages = Math.ceil(totalReviews / itemsPerPage);
  const currentPage = Math.min(Math.floor(currentIndex / itemsPerPage), totalPages - 1);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handleDotClick = (pageIdx: number) => {
    const targetIdx = Math.min(pageIdx * itemsPerPage, maxIndex);
    setCurrentIndex(targetIdx);
  };

  // Auto rotation
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion || selectedModalReview) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, handleNext, selectedModalReview]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Slice visible reviews for current slide window
  const visibleReviews = REAL_GOOGLE_REVIEWS.slice(currentIndex, currentIndex + itemsPerPage);
  // Handle edge fill if near maxIndex on desktop
  const fillNeeded = itemsPerPage - visibleReviews.length;
  const displayedReviews = fillNeeded > 0
    ? [...visibleReviews, ...REAL_GOOGLE_REVIEWS.slice(0, fillNeeded)]
    : visibleReviews;

  return (
    <section
      id="google-reviews"
      aria-label="Google Reviews"
      className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden border-y border-brand-sage/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Elements */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 pointer-events-none">
        <SubtleMandalaPattern />
      </div>
      <div className="absolute left-[-120px] bottom-[-100px] pointer-events-none transform rotate-45">
        <SubtleMandalaPattern />
      </div>

      {/* Ambient Radial Soft Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-sage/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-brand-gold-bright/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          
          {/* Small Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-sage/40 shadow-xs text-xs font-bold uppercase tracking-widest text-brand-emerald"
          >
            <GoogleGLogo />
            <span>GOOGLE REVIEWS</span>
          </motion.div>

          {/* Large Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight"
          >
            Trusted by Our Yoga Community
          </motion.h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-[1.5px] w-8 bg-brand-gold/40" />
            <div className="w-2.5 h-2.5 rounded-full border border-brand-gold rotate-45" />
            <div className="h-[1.5px] w-8 bg-brand-gold/40" />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-charcoal/75 font-sans leading-relaxed"
          >
            Real experiences from students who practice with Harmony Yoga Center.
          </motion.p>

          {/* Google Trust Indicator Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-brand-sage/35 shadow-sm mt-2"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                >
                  <Star className="h-4.5 w-4.5 fill-current" />
                </motion.div>
              ))}
            </div>
            <div className="h-4 w-[1px] bg-brand-sage/40" />
            <span className="text-sm font-bold text-brand-charcoal font-sans flex items-center gap-1.5">
              <span>Verified Google Reviews</span>
              <ShieldCheck className="h-4 w-4 text-brand-emerald" />
            </span>
          </motion.div>

        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative max-w-[1200px] mx-auto my-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Grid Container with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[290px]"
            >
              {displayedReviews.map((review, idx) => (
                <motion.div
                  key={`${review.id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ 
                    y: -8,
                    borderColor: 'rgba(15, 118, 110, 0.35)',
                    boxShadow: '0 20px 40px -15px rgba(15, 118, 110, 0.12), 0 0 0 1px rgba(15, 118, 110, 0.2)'
                  }}
                  className="bg-white/95 rounded-[22px] border border-brand-sage/35 p-6.5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Quote Watermark */}
                  <Quote className="absolute right-3 top-3 h-16 w-16 text-brand-sage/8 transform rotate-12 pointer-events-none group-hover:text-brand-emerald/10 transition-colors" />

                  {/* Card Top: Avatar + Name + Stars */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        {/* Privacy Initials Avatar */}
                        <motion.div 
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-11 h-11 rounded-full ${review.avatarBg} ${review.avatarText} font-bold text-sm flex items-center justify-center border border-current/20 shadow-xs shrink-0 font-sans`}
                        >
                          {review.initials}
                        </motion.div>
                        <div className="text-left font-sans">
                          <h3 className="font-bold text-brand-charcoal text-base leading-tight group-hover:text-brand-emerald transition-colors">
                            {review.name}
                          </h3>
                          <p className="text-xs text-brand-charcoal/50 font-medium mt-0.5">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      {/* Small Google Badge */}
                      <div className="p-1.5 rounded-full bg-brand-sage/10 group-hover:bg-brand-emerald/10 transition-colors">
                        <GoogleGLogo />
                      </div>
                    </div>

                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-emerald bg-brand-emerald/8 px-2 py-0.5 rounded-md">
                        {review.highlight}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-[14px] sm:text-[15px] text-brand-charcoal/80 leading-relaxed font-sans line-clamp-4 pt-1">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Card Bottom: Read More & Google Source tag */}
                  <div className="pt-4 mt-4 border-t border-brand-sage/20 flex items-center justify-between relative z-10 text-xs font-sans">
                    {review.text.length > 140 ? (
                      <button
                        onClick={() => setSelectedModalReview(review)}
                        className="text-brand-emerald font-bold hover:underline cursor-pointer flex items-center gap-1"
                      >
                        Read full review
                      </button>
                    ) : (
                      <span className="text-brand-charcoal/40 font-medium">Verified Student</span>
                    )}

                    <span className="text-brand-charcoal/50 font-medium flex items-center gap-1 group-hover:text-brand-emerald transition-colors">
                      Google Review
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Control Buttons (Desktop & Tablet) */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, pageIdx) => {
                const isActive = currentPage === pageIdx;
                return (
                  <button
                    key={pageIdx}
                    onClick={() => handleDotClick(pageIdx)}
                    aria-label={`Go to review slide ${pageIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-8 bg-brand-emerald shadow-xs'
                        : 'w-2.5 bg-brand-sage/40 hover:bg-brand-sage/70'
                    }`}
                  />
                );
              })}
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full bg-white border border-brand-sage/40 text-brand-charcoal hover:bg-brand-emerald hover:text-white hover:border-brand-emerald transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                aria-label="Next review"
                className="w-10 h-10 rounded-full bg-white border border-brand-sage/40 text-brand-charcoal hover:bg-brand-emerald hover:text-white hover:border-brand-emerald transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom CTA to View all Google Reviews on Google Maps */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-6"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-brand-sage/40 text-brand-charcoal hover:text-brand-emerald hover:border-brand-emerald/50 hover:shadow-md transition-all duration-300 text-xs sm:text-sm font-bold uppercase tracking-wider group cursor-pointer"
          >
            <GoogleGLogo />
            <span>View All Reviews on Google</span>
            <ExternalLink className="h-4 w-4 text-brand-charcoal/60 group-hover:text-brand-emerald group-hover:translate-x-0.5 transition-all" />
          </a>
        </motion.div>

      </div>

      {/* Modal for Reading Full Review */}
      <AnimatePresence>
        {selectedModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalReview(null)}
              className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-sage/40 z-10 space-y-5"
            >
              <button
                type="button"
                onClick={() => setSelectedModalReview(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-brand-sage/10 text-brand-charcoal hover:bg-brand-sage/20 transition-colors cursor-pointer"
                aria-label="Close review modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-full ${selectedModalReview.avatarBg} ${selectedModalReview.avatarText} font-bold text-base flex items-center justify-center border border-current/20 shadow-xs shrink-0 font-sans`}>
                  {selectedModalReview.initials}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-brand-charcoal text-lg">
                    {selectedModalReview.name}
                  </h3>
                  <p className="text-xs text-brand-charcoal/50 font-sans">
                    {selectedModalReview.date} • Verified Google Review
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(selectedModalReview.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald bg-brand-emerald/10 px-2.5 py-0.5 rounded-md ml-2 font-sans">
                  {selectedModalReview.highlight}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-brand-sage/20 text-brand-charcoal/85 text-base leading-relaxed font-sans max-h-[250px] overflow-y-auto">
                "{selectedModalReview.text}"
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-brand-charcoal/60 font-sans">
                <span className="flex items-center gap-1">
                  <GoogleGLogo />
                  <span>Google Maps Review</span>
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-emerald font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
