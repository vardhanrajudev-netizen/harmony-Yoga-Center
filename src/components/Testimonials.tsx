import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Play, X, Heart, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Testimonial } from '../types';

const testimonial01 = '/assets/images/testimonial-01.mp4';
const testimonial02 = '/assets/images/testimonial-02.mp4';
const testimonial03 = '/assets/images/testimonial-03.mp4';
const testimonial04 = '/assets/images/testimonial-04.mp4';
const testimonial05 = '/assets/images/testimonial-05.mp4';
const testimonial06 = '/assets/images/testimonial-06.mp4';
const testimonial07 = '/assets/images/testimonial-07.mp4';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [showAll, setShowAll] = useState(false);

  const testimonialsList: Testimonial[] = [
    {
      id: '1',
      name: 'Neha Sharma',
      age: 29,
      weightLost: '8.2 Kg',
      rating: 5,
      quote: "As an IT professional, I barely had time for exercise. The 30-minute daily slimming routines designed by S. Yoga Anjaneyulu changed everything. I lost 8.2 Kg in 2 months without fatigue, and my stress handles literally vanished.",
      program: 'Weight Loss Programs',
      videoUrl: testimonial01,
    },
    {
      id: '2',
      name: 'Vikram Roy',
      age: 41,
      weightLost: '11.5 Kg',
      rating: 5,
      quote: "I was suffering from stiff lower back joints and clinical thyroid lag. The personalized live corrections and custom posture alterations from S. Yoga rehabilitated my back and helped me shed 11 Kg naturally. Highly recommend online live yoga!",
      program: 'Personalized Yoga Sessions',
      videoUrl: testimonial02,
    },
    {
      id: '3',
      name: 'Shweta Rao',
      age: 33,
      weightLost: '6.4 Kg',
      rating: 5,
      quote: "The combination of Ayurvedic food blueprints and daily 30-minute high-efficiency stretching solved my hormonal weight plateau. My digestion fire is back, my skin looks radiant, and I feel extremely active throughout the daylight.",
      program: 'Nutrition Guidance',
      videoUrl: testimonial06,
    },
    {
      id: '4',
      name: 'Ananya Reddy',
      age: 34,
      weightLost: '10.1 Kg',
      rating: 5,
      quote: "I tried multiple commercial gyms, but the deep therapeutic endocrine lunges and customized thyroid compression sequences under Master Anjaneyulu restored my metabolism. I lost 10.1 Kg and completely reset my energy.",
      program: 'Weight Loss Programs',
      videoUrl: testimonial03,
    },
    {
      id: '5',
      name: 'Karthik Naidu',
      age: 45,
      weightLost: '13.2 Kg',
      rating: 5,
      quote: "My therapist recommended Harmony Yoga Center for severe posture degradation and corporate weight gain. The 1-on-1 focus on pelvic alignments, deep hip openers, and stress detox pranayamas restored my youth. Dropped 13 Kg safely!",
      program: 'Personalized Yoga Sessions',
      videoUrl: testimonial04,
    },
    {
      id: '6',
      name: 'Mansi Goud',
      age: 28,
      weightLost: '7.8 Kg',
      rating: 5,
      quote: "The customized Agni flush nutrition manuals, paired with targeted organic twist tutorials, solved my chronic bloating and corporate fat plateau. I lost 7.8 Kg and felt a beautiful release of physical toxins.",
      program: 'Nutrition Guidance',
      videoUrl: testimonial05,
    },
    {
      id: '7',
      name: 'Rohan Mehta',
      age: 36,
      weightLost: '9.0 Kg',
      rating: 5,
      quote: "Attending the dawn awakening sessions online brought structural discipline back into my life. The visceral organ activation and lymphatic compression techniques under Master S. Yoga helped me shed 9 Kg.",
      program: 'Weight Loss Programs',
      videoUrl: testimonial07,
    },
    // {
    //   id: '8',
    //   name: 'Dr. Sunitha Rao',
    //   age: 52,
    //   weightLost: '8.5 Kg',
    //   rating: 5,
    //   quote: "As a doctor, I was skeptical of online weight loss programs. But the precision of clinical anatomy, breathing synchronization, and thyroid-focused posture modifications are scientifically impeccable. I shed 8.5 Kg naturally.",
    //   program: 'Personalized Yoga Sessions',
    //   videoUrl: testimonial02,
    // },
    // {
    //   id: '9',
    //   name: 'Kavitha Srinivas',
    //   age: 42,
    //   weightLost: '11.0 Kg',
    //   rating: 5,
    //   quote: "Struggling with menopause-linked metabolic slows was exhausting. S. Yoga Anjaneyulu designed a bespoke hormonal balancing and digestion stimulation track. I lost 11 Kg, recovered my deep sleep patterns, and feels brand new.",
    //   program: 'Nutrition Guidance',
    //   videoUrl: testimonial07,
    // }, 
  ];

  const visibleTestimonials = showAll ? testimonialsList : testimonialsList.slice(0, 3);

  return (
    <section id="testimonials" className="py-[56px] md:py-[72px] lg:py-[100px] bg-brand-ivory relative overflow-hidden">
      {/* Absolute decorative back-sphere */}
      <div className="absolute right-[-100px] bottom-1/4 w-[400px] h-[400px] rounded-full bg-brand-sage/10 filter blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[13px] md:text-[14px] font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
            Client Proof & Voice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight">
            Real Transformations, Natural Success
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-lg mx-auto">
            These authentic, verified story capsule frames outline our community's natural fat removal and metabolic rehabilitation journeys.
          </p>
        </div>

        {/* Video Testimonials grid */}
        <motion.div 
          layout="position"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-none"
        >
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((test) => (
              <motion.div
                key={test.id}
                layout="position"
                id={`testimonial-card-${test.id}`}
                variants={cardVariants}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  scale: 1.03,
                  y: -6,
                  boxShadow: '0 20px 40px -15px rgba(15, 118, 110, 0.12)',
                  borderColor: 'rgba(15, 118, 110, 0.15)'
                }}
                className="bg-white rounded-2xl border border-brand-sage/30 overflow-hidden shadow-sm flex flex-col justify-between group cursor-pointer"
              >
                {/* Video Thumbnail with Hover Interaction */}
                <div className="relative aspect-video bg-neutral-900 overflow-hidden" onClick={() => setActiveVideo(test)}>
                  <video
                    src={test.videoUrl}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="w-full h-full object-cover opacity-85 group-hover:scale-[1.03] group-hover:opacity-65 transition-all duration-500"
                  />
                  
                  {/* Simulated Glass Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/20 group-hover:bg-brand-charcoal/30 transition-colors duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-brand-emerald group-hover:text-brand-gold shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 fill-current ml-1 transform group-hover:rotate-[360deg] transition-transform duration-700" />
                    </div>
                  </div>

                  {/* Left Floating Transformation metric seal */}
                  {test.weightLost && (
                    <div className="absolute bottom-3 left-3 bg-[#0F766E] text-brand-ivory text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                      Lost {test.weightLost}
                    </div>
                  )}

                  {/* Right Floating Quick Label */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs text-[#B58552] border border-brand-sage/20">
                    Video Story
                  </span>
                </div>

                {/* Text review detail */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Rating Stars row */}
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/50 ml-1.5 font-sans">
                        Verified Review
                      </span>
                    </div>

                    <p className="text-xs text-brand-charcoal/85 italic leading-relaxed font-sans">
                      "{test.quote}"
                    </p>
                  </div>

                  {/* Subtitle/Identification */}
                  <div className="pt-4 border-t border-brand-sage/20 flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="font-serif text-sm font-bold text-brand-charcoal leading-tight">
                        {test.name}
                      </h4>
                      <p className="text-[10px] text-brand-charcoal/60 font-sans mt-0.5">
                        Age {test.age} • Vijayawada Studio
                      </p>
                    </div>
                    <span className="text-[9px] font-semibold tracking-wider text-brand-emerald bg-brand-sage/25 px-2 py-1 rounded-sm uppercase">
                      {test.program.replace(' Programs', '')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Expand / Collapse Toggle Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] cursor-pointer shadow-xs select-none bg-transparent"
          >
            {showAll ? (
              <>
                <span>Collapse Success Stories</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show More Stories (9 Total)</span>
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </>
            )}
          </motion.button>
        </div>

       </div>
      </div>

      {/* Testimonial Active simulated Player Modal Backdrop popup */}
      <AnimatePresence>
        {activeVideo && (
          <div id="video-player-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-brand-ivory rounded-2xl overflow-hidden border border-brand-sage shadow-2xl z-10"
            >
              {/* Video wrapper */}
              <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
                {/* Floating header overlay inside video container */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
                  <span className="flex items-center gap-1.5 text-xs text-white bg-brand-emerald/90 px-3 py-1 rounded-full backdrop-blur-md font-semibold select-none shadow">
                    <Heart className="h-3.5 w-3.5 text-brand-gold animate-pulse fill-current" />
                    Transforming Naturally: {activeVideo.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors pointer-events-auto shadow-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Informational overlay text below player */}
              <div className="p-5 space-y-3 bg-white">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-brand-charcoal">Case Spotlight: {activeVideo.name}</p>
                    <p className="text-xs text-brand-emerald font-semibold">{activeVideo.program}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-emerald bg-brand-sage/20 px-2 py-0.5 rounded-sm">
                      Target: Natural Slimming
                    </span>
                  </div>
                </div>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                  S. Yoga Anjaneyulu modified {activeVideo.name}'s daily 30-minute metabolic routine to reduce thyroid-linked fluid retention and naturally activate lower back stabilization.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
