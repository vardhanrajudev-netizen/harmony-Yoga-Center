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
    <div className="pt-24 min-h-screen bg-brand-ivory" id="gallery-page-root">
      <SEO
        title="Bespoke Studio Gallery & Retreat Events | Harmony Yoga Center"
        description="Explore photographs of our Lotus Inner Sanctuary, personalized diagnostic consultation pavilions, and wellness retreats in Vikarabad."
        path="/gallery"
      />

      {/* Editorial Title */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-brand-sage/20 to-transparent">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 text-[#b58552] rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Camera className="h-3.5 w-3.5" />
            Vivid Sensory Tour
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            The Sanctuary <span className="text-brand-emerald font-semibold font-serif italic">Gallery Portfolio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed font-sans">
            Witness the elite layout of our Banjara Hills retreat center, outdoor wellness gatherings, and precise posture therapeutic alignments curated under S. Yoga Anjaneyulu.
          </p>

          {/* Filter Pill List */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6 max-w-lg mx-auto">
            {(['all', 'studio', 'flows', 'retreats'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 ${activeFilter === filter
                    ? 'bg-brand-emerald text-brand-ivory border-brand-emerald shadow-sm'
                    : 'bg-white text-brand-charcoal/70 border-brand-sage/40 hover:bg-brand-sage/25 hover:text-brand-emerald'
                  }`}
              >
                {filter === 'all' ? 'All Portfolios' : filter === 'studio' ? 'The Vijayawada Studio' : filter === 'flows' ? 'Active Alignment Flows' : 'Holistic Retreats'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Layout of Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
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
                className="group relative rounded-2xl overflow-hidden border border-brand-sage/30 bg-white shadow-xs hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  />

                  {/* Subtle black overlay on hover with explore indicator */}
                  <div className="absolute inset-0 bg-brand-charcoal/15 group-hover:bg-brand-charcoal/40 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="h-10 w-10 rounded-full bg-white/95 text-brand-emerald flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Eye className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Category Pill Overlays */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider bg-white/90 text-brand-emerald border border-brand-sage/30 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </div>

                {/* Information Footer */}
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-1 text-[10px] text-[#b58552] font-mono">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-brand-charcoal group-hover:text-brand-emerald transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-brand-charcoal/55 line-clamp-2 leading-relaxed">
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
              className="relative w-full max-w-4xl rounded-2xl bg-brand-ivory border border-brand-sage/40 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
            >
              {/* Close Button absolute top-4 right-4 for layout convenience */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 h-9 w-9 rounded-full bg-brand-charcoal/60 hover:bg-brand-charcoal text-white flex items-center justify-center transition-colors cursor-pointer"
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
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#b58552] uppercase tracking-widest border border-[#b58552]/20 px-2 py-0.5 rounded">
                      {selectedItem.category}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-emerald">
                      {selectedItem.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs text-brand-charcoal/50 font-sans">
                      <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans border-t border-brand-sage/20 pt-4">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-brand-sage/25">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/45">VISIT OUR VIJAYAWADA SANCTUARY</p>
                  <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                    Come see our high-end space and physical amenities, situated behind SV Ranga Rao Hospital in Mogalrajapuram.
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onBookClick(`Studio Visit - ${selectedItem.title}`);
                        setSelectedItem(null);
                      }}
                      className="w-full inline-flex items-center justify-between px-3.5 py-3 rounded-xl bg-brand-emerald text-brand-ivory text-xs font-bold uppercase tracking-wider hover:bg-brand-emerald-hover cursor-pointer transition-colors"
                    >
                      <span>Reserve Private Studio Walkthrough</span>
                      <ArrowUpRight className="h-4 w-4 text-brand-gold" />
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
