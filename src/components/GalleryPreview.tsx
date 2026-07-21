import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Camera } from 'lucide-react';

interface PreviewItem {
  id: number;
  category: string;
  title: string;
  url: string;
}

const previewItems: PreviewItem[] = [
  {
    id: 1,
    category: 'Therapeutic Training',
    title: 'Therapeutic Alignment Pose',
    url: '/assets/yoga_gallery/IMG-20260718-WA0005.jpg'
  },
  {
    id: 2,
    category: 'Active Stretching',
    title: 'Thoracic Extension Stretch',
    url: '/assets/yoga_gallery/IMG-20260718-WA0006.jpg'
  },
  {
    id: 3,
    category: 'Sanctuary Space',
    title: 'Peaceful Sanctuary Ambiance',
    url: '/assets/yoga_gallery/IMG-20260718-WA0008.jpg'
  },
  {
    id: 4,
    category: 'Core Activation',
    title: 'Pelvic Floor & Core Activation',
    url: '/assets/yoga_gallery/IMG-20260718-WA0009.jpg'
  },
  {
    id: 5,
    category: 'Therapeutic Stretching',
    title: 'Sciatic Nerve Decompression',
    url: '/assets/yoga_gallery/IMG-20260718-WA0010.jpg'
  },
  {
    id: 6,
    category: 'Meditation',
    title: 'Pranayama Stillness Practice',
    url: '/assets/yoga_gallery/IMG-20260718-WA0011.jpg'
  },
  {
    id: 7,
    category: 'Vinyasa Flow',
    title: 'Vinyasa Flow Continuity',
    url: '/assets/yoga_gallery/IMG-20260718-WA0012.jpg'
  },
  {
    id: 8,
    category: 'Workshops',
    title: 'Postural Analysis Lab',
    url: '/assets/yoga_gallery/IMG-20260718-WA0013.jpg'
  }
];

// Progressive image wrapper with blur placeholder
function PreviewImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-brand-sage/5 overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-brand-sage/10 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-[#0F766E]/20 border-t-[#0F766E] animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md'
        }`}
      />
    </div>
  );
}

export default function GalleryPreview() {
  // Container & Child variants for high-fidelity staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] // Custom luxury ease-out (Aman Resorts signature motion)
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory overflow-hidden" id="gallery-preview-section">
      {/* Decorative luxury absolute graphics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-brand-emerald" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-brand-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title & Header with clean layouts */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Stylish, highly visible premium badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/15 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-brand-gold" />
            <span>40+ Real Yoga Moments</span>
          </motion.div>

          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[5px] block mb-3">
            OUR STUDIO MOMENTS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-brand-charcoal leading-tight">
            Experience Harmony Through Every Pose
          </h2>
          
          <p className="mt-4 text-sm sm:text-base md:text-lg text-brand-charcoal/70 leading-relaxed">
            Take a glimpse into our yoga sessions, student transformations, workshops, and wellness journey. Explore our complete gallery to discover more inspiring moments.
          </p>
        </div>

        {/* 4 columns x 2 rows (Desktop), 2 columns (Tablet), 1 or 2 columns (Mobile) Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {previewItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative rounded-[20px] overflow-hidden bg-brand-ivory border border-brand-emerald/10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] aspect-[3/4] sm:aspect-square lg:aspect-[4/5]"
            >
              {/* Premium lazy loaded image wrapper */}
              <PreviewImage src={item.url} alt={item.title} />

              {/* Hover Interactions:
                  - Scale up slightly (1.03) -> Handled via custom css / group-hover classes
                  - Soft emerald overlay
                  - Increased brightness -> group-hover:brightness-105
              */}
              <div className="absolute inset-0 bg-brand-emerald/0 transition-colors duration-500 ease-out group-hover:bg-brand-emerald/15 pointer-events-none z-10" />
              
              {/* Image brightness adjustment overlay */}
              <div className="absolute inset-0 transition-all duration-500 group-hover:backdrop-brightness-105 pointer-events-none z-10" />

              {/* Sophisticated caption overlay showing categories and titles */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[9px] font-bold tracking-[2px] uppercase text-brand-gold">
                  {item.category}
                </span>
                <h3 className="text-sm font-serif font-semibold text-brand-ivory mt-1 line-clamp-1">
                  {item.title}
                </h3>
              </div>
              
              {/* Subtle visual guide indicator (Camera icon) in top right on hover */}
              <div className="absolute top-4 right-4 bg-brand-ivory/95 text-brand-emerald p-2 rounded-full shadow-md z-20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 ease-out">
                <Camera className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section centered underneath */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block"
          >
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>View Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
