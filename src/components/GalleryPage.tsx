import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, MapPin, X, HelpCircle, Flame, ArrowUpRight } from 'lucide-react';
import SEO from './SEO';

interface GalleryItem {
  id: number;
  category: 'studio' | 'flows' | 'retreats';
  title: string;
  location: string;
  desc: string;
  url: string;
}

interface GalleryPageProps {
  onBookClick: (programName?: string) => void;
}

export default function GalleryPage({ onBookClick }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'studio' | 'flows' | 'retreats'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'studio',
      title: 'Harmony Yoga Studio',
      location: 'Vijayawada, Andhra Pradesh',
      desc: 'Premium yoga environment designed for natural wellness and holistic transformation.',
      url: '/assets/images/yoga (1).jpeg',
    },
    {
      id: 2,
      category: 'flows',
      title: 'Guided Yoga Session',
      location: 'Harmony Yoga Center',
      desc: 'Trainer-guided weight loss and flexibility improvement sessions.',
      url: '/assets/images/yoga (2).jpeg',
    },
    {
      id: 3,
      category: 'retreats',
      title: 'Outdoor Wellness Session',
      location: 'Harmony Yoga Retreat',
      desc: 'Morning yoga and mindfulness sessions in a peaceful environment.',
      url: '/assets/images/yoga (3).jpeg',
    },
    {
      id: 4,
      category: 'studio',
      title: 'Personal Training Session',
      location: 'Harmony Yoga Center',
      desc: 'Personalized one-on-one yoga sessions tailored to individual goals.',
      url: '/assets/images/yoga (4).jpeg',
    },
    {
      id: 5,
      category: 'flows',
      title: 'Transformation Journey',
      location: 'Harmony Yoga Center',
      desc: 'Natural weight loss and wellness transformation through guided yoga.',
      url: '/assets/images/yoga (5).jpeg',
    },
  ];

  const filteredItems = galleryItems.filter(item =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <div className="pt-24 min-h-screen bg-luxury-glow-d relative overflow-hidden" id="gallery-page-root">
      <SEO
        title="Bespoke Studio Gallery & Retreat Events | Harmony Yoga Center"
        description="Explore photographs of our Lotus Inner Sanctuary, personalized diagnostic consultation pavilions, and wellness retreats in Vikarabad."
        path="/gallery"
      />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/20 filter blur-3xl pointer-events-none ambient-glow-1" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-brand-gold-bright/8 filter blur-3xl pointer-events-none ambient-glow-2" />

      {/* Editorial Title */}
      <section className="relative py-16 text-center select-none" id="gallery-hero">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-gold/15 text-[#b58552] rounded-full text-xs font-bold uppercase tracking-widest font-sans shadow-2xs">
            <Camera className="h-4.5 w-4.5 text-brand-gold" />
            Vivid Sensory Tour
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-emerald">
            The Sanctuary <span className="text-brand-gold font-normal font-serif italic">Gallery Portfolio</span>
          </h1>
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1.5px] w-12 bg-brand-gold/40" />
            <div className="w-2.5 h-2.5 rounded-full border border-brand-gold rotate-45" />
            <div className="h-[1.5px] w-12 bg-brand-gold/40" />
          </div>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-brand-charcoal/70 leading-relaxed font-sans mt-3">
            Witness the elite layout of our Banjara Hills retreat center, outdoor wellness gatherings, and precise posture therapeutic alignments curated under S. Anjaneyulu.
          </p>

          {/* Filter Pill List */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 max-w-2xl mx-auto font-sans">
            {(['all', 'studio', 'flows', 'retreats'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest border cursor-pointer transition-all duration-300 shadow-2xs ${activeFilter === filter
                    ? 'bg-[#0F766E] text-brand-ivory border-[#0F766E] shadow-sm'
                    : 'bg-white/85 text-brand-charcoal/70 border-brand-sage/40 hover:bg-[#EEF8F4] hover:text-brand-emerald'
                  }`}
              >
                {filter === 'all' ? 'All Portfolios' : filter === 'studio' ? 'The Vijayawada Studio' : filter === 'flows' ? 'Active Alignment Flows' : 'Holistic Retreats'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Layout of Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-[24px] overflow-hidden border border-brand-sage/40 bg-white/95 shadow-xs hover:shadow-md hover:border-brand-emerald/30 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle black overlay on hover with explore indicator */}
                  <div className="absolute inset-0 bg-brand-charcoal/15 group-hover:bg-brand-charcoal/40 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="h-10 w-10 rounded-full bg-white/95 text-brand-emerald flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Eye className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Category Pill Overlays */}
                  <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest bg-[#EEF8F4]/95 text-brand-emerald border border-[#CFE8D5] px-2.5 py-1 rounded-md shadow-2xs">
                    {item.category}
                  </span>
                </div>

                {/* Information Footer */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#b58552] font-bold uppercase tracking-widest font-sans">
                    <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-charcoal group-hover:text-[#065F5B] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Elegant Lightbox View Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/85 p-4 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.93, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-4xl rounded-[32px] bg-white border border-brand-sage/40 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
            >
              {/* Close Button absolute top-4 right-4 for layout convenience */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 h-9 w-9 rounded-full bg-brand-charcoal/60 hover:bg-[#0F766E] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Picture left (or top on mobile) */}
              <div className="md:col-span-7 bg-black flex items-center justify-center aspect-video md:aspect-auto md:min-h-[480px]">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[80vh] md:max-h-none"
                />
              </div>

              {/* Sidebar Description Right */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 font-sans">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b58552] uppercase tracking-widest border border-brand-gold/30 bg-brand-gold-bright/10 px-2.5 py-1 rounded-md shadow-3xs">
                      {selectedItem.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-emerald">
                      {selectedItem.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-sm sm:text-base text-brand-charcoal/60 font-sans">
                      <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans border-t border-brand-sage/20 pt-4">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-brand-sage/25">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/45">VISIT OUR VIJAYAWADA SANCTUARY</p>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed mt-1">
                      Come see our high-end space and physical amenities, situated behind SV Ranga Rao Hospital in Mogalrajapuram.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onBookClick(`Studio Visit - ${selectedItem.title}`);
                        setSelectedItem(null);
                      }}
                      className="w-full h-[52px] rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-sm sm:text-base font-bold uppercase tracking-widest inline-flex items-center justify-between px-6 transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <span>Reserve Studio Walkthrough</span>
                      <ArrowUpRight className="h-4.5 w-4.5 text-brand-gold transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
