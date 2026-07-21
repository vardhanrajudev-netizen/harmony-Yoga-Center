import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from './SEO';

interface GalleryItem {
  id: number;
  category: 'training' | 'stretching' | 'meditation' | 'studio' | 'workshops';
  title: string;
  location: string;
  desc: string;
  url: string;
}

interface GalleryPageProps {
  onBookClick: (programName?: string) => void;
}

// Progressive image wrapper with blur placeholder and fade-in
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-brand-sage/5" style={{ minHeight: '120px' }}>
      {/* Blur Pulse Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-brand-sage/10 animate-pulse flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-[#0F766E]/20 border-t-[#0F766E] animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md'
        }`}
      />
    </div>
  );
}

export default function GalleryPage({ onBookClick }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'training' | 'stretching' | 'meditation' | 'studio' | 'workshops'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'training',
      title: 'Therapeutic Alignment Pose',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'S. Anjaneyulu guiding precise shoulder-girdle retraction to alleviate thoracic stress and occupational desk strain.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0005.jpg'
    },
    {
      id: 2,
      category: 'stretching',
      title: 'Thoracic Extension Stretch',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A restorative chest-opening posture designed to decompress the thoracic vertebrae and optimize vital breathing volume.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0006.jpg'
    },
    {
      id: 3,
      category: 'studio',
      title: 'Peaceful Sanctuary Ambiance',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Our boutique studio hall, designed with sustainable materials, circadian-safe lighting, and air-purifying indoor plants.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0008.jpg'
    },
    {
      id: 4,
      category: 'training',
      title: 'Pelvic Floor & Core Activation',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'An intensive alignment session targeting lower body stabilization, pelvic floor correction, and deep structural balance.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0009.jpg'
    },
    {
      id: 5,
      category: 'stretching',
      title: 'Sciatic Nerve Decompression',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Gentle, guided hamstring and hip flexor lengthening to relieve pressure on the sciatic path and lower back strain.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0010.jpg'
    },
    {
      id: 6,
      category: 'meditation',
      title: 'Pranayama Stillness Practice',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Traditional breathing techniques combined with seated meditation to lower baseline cortisol and calm the nervous system.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0011.jpg'
    },
    {
      id: 7,
      category: 'training',
      title: 'Vinyasa Flow Continuity',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A flowing, continuous sequence focusing on breath-synchronized movement, heat generation, and active mobility.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0012.jpg'
    },
    {
      id: 8,
      category: 'workshops',
      title: 'Group Postural Analysis Workshop',
      location: 'Vijayawada Center',
      desc: 'An educational weekend session reviewing common postural imbalances, spine tracking, and corrective therapeutic asanas.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0013.jpg'
    },
    {
      id: 9,
      category: 'stretching',
      title: 'Supported Passive Back Arch',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Traditional prop-assisted alignment designed to elongate the abdominal wall and restore neck flexor length.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0014.jpg'
    },
    {
      id: 10,
      category: 'meditation',
      title: 'Mindfulness & Focus Integration',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Developing deep mental clarity and high-level stress detox using traditional Vedic dhyana guidelines.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0017.jpg'
    },
    {
      id: 11,
      category: 'training',
      title: 'Cervical Traction Prep Flow',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Inverted shoulder prep poses tailored to relieve neck compression and elevate shoulder blade control.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0019.jpg'
    },
    {
      id: 12,
      category: 'stretching',
      title: 'Intercostal Muscle Expansion',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A lateral bending posture specifically stretching intercostal pathways and optimizing chest cavity elasticity.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0020.jpg'
    },
    {
      id: 13,
      category: 'studio',
      title: 'Private Consultation Room',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'The dedicated, private space where individual biometric testing and lifestyle alignment blueprints are drawn.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0021.jpg'
    },
    {
      id: 14,
      category: 'training',
      title: 'Neuromuscular Balance Challenge',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Complex single-leg balance transitions aimed at rewiring coordination pathways and strengthening ankles.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0022.jpg'
    },
    {
      id: 15,
      category: 'workshops',
      title: 'Therapeutic Corrective Lab',
      location: 'Vikarabad Retreat',
      desc: 'Interactive lab where students practice personalized joint alignment adjustments under strict guidance.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0023.jpg'
    },
    {
      id: 16,
      category: 'stretching',
      title: 'Deep Hip Joint Decompression',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Prolonged stretching targeting structural tension in the glutes and deep hip rotators to improve gait mobility.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0024.jpg'
    },
    {
      id: 17,
      category: 'meditation',
      title: 'Vedic Stillness Meditation',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Classic seated meditation focused on inner quietude and the complete integration of body, breath, and mind.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0025.jpg'
    },
    {
      id: 18,
      category: 'training',
      title: 'Seated Spinal Twist Alignment',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Gently twisting the thoracic and lumbar curves to improve spine rotation range and aid visceral digestion.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0026.jpg'
    },
    {
      id: 19,
      category: 'stretching',
      title: 'Thoracic Bridge Extension',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'An active back extension utilizing foundational core power to expand the ribs and lengthen tight shoulders.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0027.jpg'
    },
    {
      id: 20,
      category: 'studio',
      title: 'Physical Therapy Prop Room',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Equipped with medical-grade bolsters, traditional wooden yoga benches, and premium alignment blocks.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0028.jpg'
    },
    {
      id: 21,
      category: 'workshops',
      title: 'Outdoor Nature Vinyasa Camp',
      location: 'Vikarabad Retreat',
      desc: 'An immersive sunrise gathering focused on metabolic speed and rhythmic vinyasa breathing out in fresh mountain air.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0029.jpg'
    },
    {
      id: 22,
      category: 'training',
      title: 'Core Stability & Pelvic Lift',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Focused trunk exercises to build high-end abdominal stamina and support lower lumbar load management.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0030.jpg'
    },
    {
      id: 23,
      category: 'stretching',
      title: 'Psoas & Quadriceps Decompression',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A vital stretch to release the deep psoas muscle, relieving anterior pelvic tilt and occupational posture strain.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0031.jpg'
    },
    {
      id: 24,
      category: 'meditation',
      title: 'Prana Flow Breathwork Study',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Specialized deep breathing sessions that revitalize oxygen levels and reset autonomous nervous system curves.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0032.jpg'
    },
    {
      id: 25,
      category: 'studio',
      title: 'The Lotus Meditation Alcove',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A high-concept visual corner designed for complete silence, deep reflection, and independent pranayama practices.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0033.jpg'
    },
    {
      id: 26,
      category: 'workshops',
      title: 'Retreat Sunset Meditation Flow',
      location: 'Vikarabad Retreat',
      desc: 'Concluding the therapeutic intensive camp with outdoor sunset relaxation and rhythmic group pranayama.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0036.jpg'
    },
    {
      id: 27,
      category: 'training',
      title: 'Advanced Stability Masterclass',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A structured, higher-intensity training module exploring deep joint stabilization and complex balancing postures.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0037.jpg'
    },
    {
      id: 28,
      category: 'stretching',
      title: 'Posterior Chain Lengthening',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Restoring functional range of motion across the entire backside of the body, from calves up to the cervical neck.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0038.jpg'
    },
    {
      id: 29,
      category: 'meditation',
      title: 'Prana Integration Masterclass',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Unlocking slow, calculated transition lines that cultivate absolute presence and structural stillness.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0039.jpg'
    },
    {
      id: 30,
      category: 'studio',
      title: 'Circadian Light Alignment Pavilions',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Customized ambient color washes matching natural hormone cycles, enhancing recovery during restorative poses.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0041.jpg'
    },
    {
      id: 31,
      category: 'workshops',
      title: 'Yoga Therapy Clinical Seminar',
      location: 'Banjara Hills Center',
      desc: 'Gathering yoga therapy practitioners to align and coordinate diagnostic posture measurement metrics.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0044.jpg'
    },
    {
      id: 32,
      category: 'training',
      title: 'Intervertebral Disc Decompression',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Subtle spinal traction sequences curated to alleviate compressed lower discs and promote joint hydration.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0045.jpg'
    },
    {
      id: 33,
      category: 'stretching',
      title: 'Shoulder Blade Mobility Sequence',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A dynamic joint mobilization targeted at counteracting desk slouch, rounded shoulders, and head-forward fatigue.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0046.jpg'
    },
    {
      id: 34,
      category: 'meditation',
      title: 'Tibetan Sound Frequency Relaxation',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Integrating deep restorative yoga with sound frequencies to soothe auditory nerve channels and hyper-stress.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0054.jpg'
    },
    {
      id: 35,
      category: 'studio',
      title: 'Eco-Oxygenated Sanctuary Room',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Equipped with natural, organic air filtration pathways and broad-leaf oxygen-boosting plant life.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0055.jpg'
    },
    {
      id: 36,
      category: 'workshops',
      title: 'Dawn Metabolic Awakening Camp',
      location: 'Vijayawada Studio',
      desc: 'A high-energy sunrise series curated to reboot endocrine rhythms, burn lipids, and boost vital endurance.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0056.jpg'
    },
    {
      id: 37,
      category: 'training',
      title: 'Structural Foundation Correction',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Targeting ankle tracking, arch activation, and pelvic centering to optimize total physical locomotion.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0063.jpg'
    },
    {
      id: 38,
      category: 'stretching',
      title: 'Lumbar Spine Release Pose',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'A gentle lumbar decompression that relaxes tight back erectors, relieving nagging stiffness after long drives.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0064.jpg'
    },
    {
      id: 39,
      category: 'meditation',
      title: 'Sattva Calm & Mind Focus Study',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Cultivating pure mental transparency and high-level mindfulness through simple breath counting protocols.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0065.jpg'
    },
    {
      id: 40,
      category: 'studio',
      title: 'Organic Herbal Infusion Corner',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Our boutique post-practice recovery corner serving customized local herbal brews to aid gut health and metabolism.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0066.jpg'
    },
    {
      id: 41,
      category: 'workshops',
      title: 'S. Anjaneyulu Live Alignment Seminar',
      location: 'Vijayawada Sanctuary',
      desc: 'S. Anjaneyulu demonstrating physical posture biomechanics and customized joint-angle tracking on active trainers.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0087.jpg'
    },
    {
      id: 42,
      category: 'training',
      title: 'Unilateral Standing Stamina Flow',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'An active vertical balancing flow that strengthens the knees, hips, and lower abdominal stabilizers.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0123.jpg'
    },
    {
      id: 43,
      category: 'stretching',
      title: 'Full Spinal Column Expansion',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Restoring total kinetic line length across the entire thoracic and neck column to promote optimal nerve flow.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0124.jpg'
    },
    {
      id: 44,
      category: 'meditation',
      title: 'Yoga Nidra Sensory Recovery',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'Deep sleep simulation protocols tailored for insomnia management, neurological recovery, and stress fatigue.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0136.jpg'
    },
    {
      id: 45,
      category: 'studio',
      title: 'The Outdoor Botanical Path',
      location: 'Mogalrajapuram Sanctuary',
      desc: 'The peaceful medicinal herb garden path winding around the main studio, facilitating outdoor meditative walking.',
      url: '/assets/yoga_gallery/IMG-20260718-WA0141.jpg'
    }
  ];

  const filteredItems = galleryItems.filter(item =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems]);

  // Mobile touch swiping
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6] relative overflow-hidden" id="gallery-page-root">
      <SEO
        title="Bespoke Studio Gallery & Retreat Events | Harmony Yoga Center"
        description="Explore 40+ high-end therapeutic photographs of our Mogalrajapuram Sanctuary, personalized consults, and intensive outdoor sessions."
        path="/gallery"
      />

      {/* Subtle Background Glows */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-sage/10 filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#E3B777]/5 filter blur-3xl pointer-events-none" />

      {/* Curated Photography Header */}
      <section className="relative py-16 text-center select-none" id="gallery-hero">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-emerald/5 border border-brand-emerald/10 text-brand-emerald rounded-full text-xs font-bold uppercase tracking-widest font-sans shadow-3xs">
            <Camera className="h-4 w-4" />
            <span>Therapeutic Portfolio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-emerald">
            The Sanctuary <span className="text-brand-gold font-normal italic">Visual Journey</span>
          </h1>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1.5px] w-12 bg-brand-gold/30" />
            <div className="w-2.5 h-2.5 rounded-full border border-brand-gold rotate-45" />
            <div className="h-[1.5px] w-12 bg-brand-gold/30" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-brand-charcoal/70 leading-relaxed font-sans mt-3">
            A premium visual archive showcasing the Mogalrajapuram therapeutic studio, structural alignment flows, sound vibration therapies, and seasonal outdoor workshops.
          </p>

          {/* Premium Minimal Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 max-w-3xl mx-auto font-sans">
            {([
              { key: 'all', label: 'All Works' },
              { key: 'training', label: 'Alignment Training' },
              { key: 'stretching', label: 'Therapeutic Stretching' },
              { key: 'meditation', label: 'Breath & Meditation' },
              { key: 'studio', label: 'Sanctuary Spaces' },
              { key: 'workshops', label: 'Workshops & Camps' }
            ] as const).map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => {
                  setActiveFilter(filter.key);
                  setSelectedItemIndex(null); // Reset lightbox on filter change
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 shadow-3xs cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-[#0F766E] text-brand-ivory border-[#0F766E] shadow-sm'
                    : 'bg-white text-brand-charcoal/75 border-brand-sage/20 hover:bg-brand-emerald/5 hover:text-brand-emerald hover:border-brand-emerald/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Pinterest Masonry Layout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24" id="gallery-masonry-section">
        <div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]"
          id="gallery-masonry-grid"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedItemIndex(index)}
              className="break-inside-avoid mb-6 rounded-[22px] overflow-hidden border border-brand-sage/15 bg-white shadow-[0_4px_20px_rgba(15,118,110,0.02)] hover:shadow-[0_16px_36px_rgba(15,118,110,0.08)] hover:border-brand-emerald/20 transition-all duration-500 cursor-pointer group"
            >
              {/* Image Block */}
              <div className="relative overflow-hidden rounded-[18px] m-1 bg-brand-sage/5">
                <GalleryImage src={item.url} alt={item.title} />
                
                {/* Elegant Minimal Emerald Hover Overlay */}
                <div className="absolute inset-0 bg-brand-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 pointer-events-none">
                  <div className="h-11 w-11 rounded-full bg-white/95 text-brand-emerald flex items-center justify-center shadow-[0_4px_12px_rgba(15,118,110,0.12)]">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>

                {/* Micro Category Overlay Badge */}
                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest bg-white/90 text-brand-emerald backdrop-blur-xs px-2 py-0.5 rounded-md border border-brand-sage/20 shadow-3xs select-none">
                  {item.category}
                </span>
              </div>

              {/* Information Area */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1 text-xs text-[#b58552] font-bold uppercase tracking-widest font-sans">
                  <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-brand-charcoal group-hover:text-brand-emerald transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed font-sans line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Lightbox Overlay View */}
      <AnimatePresence>
        {selectedItemIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A1110]/95 backdrop-blur-xl p-4 md:p-6 select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button top-right */}
            <button
              type="button"
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 z-55 h-12 w-12 rounded-full bg-white/10 hover:bg-brand-emerald text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-brand-emerald cursor-pointer hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Picture Center Space */}
            <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl mx-auto my-auto">
              
              {/* Floating Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 z-51 h-12 w-12 rounded-full bg-white/10 hover:bg-[#0F766E] text-white hidden md:flex items-center justify-center transition-all backdrop-blur-md border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Display Area for Image with Fade Effect */}
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[60vh] md:max-h-[68vh] max-w-full flex items-center justify-center"
              >
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-h-[60vh] md:max-h-[68vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 z-51 h-12 w-12 rounded-full bg-white/10 hover:bg-[#0F766E] text-white hidden md:flex items-center justify-center transition-all backdrop-blur-md border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Info Details Card */}
            <div className="w-full max-w-3xl mx-auto text-center space-y-3 pb-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold border border-brand-gold/30 bg-brand-gold/10 px-3 py-0.5 rounded-full">
                  {selectedItem.category}
                </span>
                <span className="text-white/30 text-xs">|</span>
                <div className="flex items-center gap-1 text-white/60 text-xs font-sans">
                  <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                  <span>{selectedItem.location}</span>
                </div>
                <span className="text-white/30 text-xs">|</span>
                <span className="text-white/60 text-xs font-semibold tracking-widest font-sans">
                  {selectedItemIndex + 1} OF {filteredItems.length}
                </span>
              </div>

              <h2 className="font-serif text-white text-lg sm:text-xl md:text-2xl font-bold">
                {selectedItem.title}
              </h2>

              <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-sans">
                {selectedItem.desc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Mobile arrows */}
                <div className="flex md:hidden gap-3">
                  <button
                    onClick={handlePrev}
                    className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 active:bg-[#0F766E]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 active:bg-[#0F766E]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onBookClick(`Consult - ${selectedItem.title}`);
                    setSelectedItemIndex(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.3)] hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Reserve Studio Walkthrough</span>
                  <Camera className="h-3.5 w-3.5 text-brand-gold animate-pulse" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
