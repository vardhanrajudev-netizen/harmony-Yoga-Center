import React from 'react';
import { Clock, Check, Sparkles, Scale, Heart, Apple, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const tracks = [
    {
      id: 'weight-loss',
      title: 'Weight Loss Programs',
      tag: 'Most Popular',
      category: 'Metabolic Focus',
      description: 'Shed stubborn fat, activate thyroid metabolism, and achieve sustained toning through targeted 30-minute high-efficiency vinyasa flows.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      icon: Scale,
      benefits: [
        'Target visceral abdominal fat pools',
        '30-minute compact daily routines',
        'Stimulate thyroid endocrine release',
        'Gentle on skeletal articular joints',
      ],
      intensity: 'Moderate-High',
      duration: '30 mins / day',
      price: 'Starting From ₹999/month',
      cleanPrice: '₹999/month',
      numericPrice: '999',
    },
    {
      id: 'personalized',
      title: 'Personalized Yoga Sessions',
      tag: 'Bespoke Experience',
      category: '1-on-1 Sanctuary',
      description: 'Receive dedicated posture customization, alignment correction, and posture adjustments customized for your unique bone alignment.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80',
      icon: Heart,
      benefits: [
        'Custom routines for ancient healing',
        'Immediate live alignment corrections',
        'Flexible schedules built for busy eyes',
        'Postural re-balancing & joint care',
      ],
      intensity: 'Customized',
      duration: 'Schedules vary',
      price: 'Starting From ₹1,999/month',
      cleanPrice: '₹1,999/month',
      numericPrice: '1,999',
    },
    {
      id: 'nutrition',
      title: 'Nutrition Guidance',
      tag: 'Holistic Sync',
      category: 'Cellular Fuel',
      description: 'Synchronize organic cellular macros with Ayurvedic detox pathways. Fuel natural fat elimination without starvation systems.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
      icon: Apple,
      benefits: [
        'Custom meal frameworks for your body',
        'No calorie-tracking exhaustion',
        'Ayurvedic body constitution analysis',
        'Sustainable morning cellular routines',
      ],
      intensity: 'Nourishing',
      duration: 'Weekly frameworks',
      price: 'Starting From ₹799/month',
      cleanPrice: '₹799/month',
      numericPrice: '799',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Premium luxury ultra-smooth ease
      }
    }
  };

  const priceBadgeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        delay: 0.35,
      }
    }
  };

  return (
    <section id="programs" className="py-[56px] md:py-[72px] lg:py-[100px] bg-white relative overflow-hidden">
      {/* Decorative background vectors for boutique fitness feel */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-brand-gold/5 filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-sage/10 filter blur-3xl opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
        
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="programs-section-header">
            <span className="text-[13px] md:text-[14px] font-bold tracking-[0.25em] text-brand-gold uppercase font-sans block">
              Transformation Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
              Surgical Focus on Natural Weight Regulation
            </h2>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto" />
            <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-xl mx-auto leading-relaxed">
              Choose your bespoke path. Guided step-by-step by clinical masters to support sustainable vitality. No aggressive starve plans.
            </p>
          </div>

          {/* Responsive grid matching layout requirements:
              Desktop: 3 columns in one row
              Tablet: 2 columns
              Mobile: Single column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 justify-center"
            id="programs-cards-grid"
          >
            {tracks.map((track) => {
              const IconComponent = track.icon;
              return (
                <motion.div
                  key={track.id}
                  id={`program-card-${track.id}`}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    borderColor: 'rgba(180, 127, 67, 0.4)', // Warm gold accent glow highlights border
                    boxShadow: '0 24px 50px -12px rgba(15, 118, 110, 0.12), 0 0 0 1px rgba(184, 127, 67, 0.15)'
                  }}
                  className="group flex flex-col rounded-3xl bg-brand-ivory/50 border border-brand-sage/40 overflow-hidden hover:bg-white transition-all duration-500 shadow-xs"
                >
                  {/* Card Header Image section */}
                  <div className="relative aspect-video sm:aspect-4/3 overflow-hidden" id={`card-image-box-${track.id}`}>
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative luxury tag overlay */}
                    <div className="absolute top-4 left-4 z-10" id={`card-tag-${track.id}`}>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-emerald px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-ivory shadow-md">
                        <Sparkles className="h-3 w-3 text-brand-gold fill-brand-gold/25" />
                        {track.tag}
                      </span>
                    </div>
                    {/* Bottom glassmorphic overlay for categories */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20" id={`card-cat-box-${track.id}`}>
                      <p className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider">{track.category}</p>
                    </div>
                  </div>

                  {/* Card Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between" id={`card-content-body-${track.id}`}>
                    <div className="space-y-4">
                      {/* Title block with custom interactive rotative icon */}
                      <div className="flex items-center gap-3" id={`card-heading-${track.id}`}>
                        <div className="p-2 rounded-xl bg-brand-sage/40 text-brand-emerald transition-transform duration-500 group-hover:rotate-[15deg]">
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-brand-charcoal tracking-tight group-hover:text-brand-emerald transition-colors duration-300">
                          {track.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans" id={`card-desc-${track.id}`}>
                        {track.description}
                      </p>

                      {/* Metadata row with timing & levels */}
                      <div className="flex items-center gap-4 text-[11px] font-medium text-brand-gold/90 border-y border-brand-sage/20 py-2.5 font-sans" id={`card-meta-${track.id}`}>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-brand-gold shrink-0" />
                          Duration: {track.duration}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                        <span>Intensity: {track.intensity}</span>
                      </div>

                      {/* Features/benefits bullet pointers list */}
                      <ul className="space-y-2.5 text-xs text-brand-charcoal/85 font-sans pt-1" id={`card-features-${track.id}`}>
                        {track.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="h-3.5 w-3.5 text-brand-emerald shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highly Polished Premium Pricing integration */}
                    <div className="space-y-4 pt-5 mt-4 border-t border-brand-sage/20" id={`card-footer-box-${track.id}`}>
                      
                      {/* Luxury Typographic Price Card Container */}
                      <div 
                        className="bg-[#FAF9F6] border border-[#CFE8D5] rounded-[18px] p-6 shadow-[0_2px_12px_rgba(31,41,55,0.02)] text-center space-y-2" 
                        id={`price-display-minimal-${track.id}`}
                      >
                        <span className="text-[11px] uppercase tracking-[2px] font-bold text-brand-charcoal/50 block font-sans">
                          STARTING FROM
                        </span>
                        <div className="flex items-baseline justify-center font-bold text-brand-emerald font-sans">
                          {/* Rupee symbol and amount with decreased font size for elegance */}
                          <span className="text-[20px] font-bold mr-1.5 text-brand-emerald leading-none select-none">₹</span>
                          <span className="text-[32px] font-bold tracking-tight text-brand-emerald leading-none">
                            {track.numericPrice}
                          </span>
                        </div>
                        <span className="text-[13px] opacity-70 text-brand-charcoal font-medium font-sans block leading-none">
                          per month
                        </span>
                      </div>

                      {/* Primary Boutique CTA button with smooth lifting and right-sliding arrow and glowing shadows */}
                      <div className="pt-2">
                        <button
                          type="button"
                          id={`btn-select-${track.id}`}
                          onClick={() => onSelectProgram(track.title)}
                          className="group/btn w-full h-[54px] inline-flex items-center justify-between rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory px-6 text-[13px] font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer"
                        >
                          <span className="font-sans pl-2 tracking-wide">Book Free Session Trial</span>
                          <div 
                            className="h-9 w-9 rounded-full bg-[#E3B777] group-hover/btn:bg-[#EBC38B] flex items-center justify-center text-[#0F766E] transition-all duration-300 transform group-hover/btn:translate-x-[4px] shrink-0"
                            style={{ 
                              boxShadow: '0 0 18px rgba(227,183,119,0.35)' 
                            }}
                          >
                            <ArrowRight className="h-4.5 w-4.5 text-[#0F766E] stroke-[3.5]" />
                          </div>
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
