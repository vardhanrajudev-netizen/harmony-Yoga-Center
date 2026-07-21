import React from 'react';
import { Clock, Check, Scale, Heart, Apple, ArrowRight, Award } from 'lucide-react';
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
    <section id="programs" className="py-[64px] md:py-[88px] lg:py-[120px] bg-luxury-glow-a relative overflow-hidden">
      {/* Decorative background vectors for boutique fitness feel */}
      <div className="absolute top-12 left-12 w-[450px] h-[450px] rounded-full bg-brand-gold/8 filter blur-3xl opacity-35 pointer-events-none ambient-glow-1" />
      <div className="absolute bottom-12 right-12 w-[350px] h-[350px] rounded-full bg-brand-sage/15 filter blur-3xl opacity-45 pointer-events-none ambient-glow-2" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
        
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="programs-section-header">
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-brand-accent-vibrant uppercase font-sans block">
              ✦ Transformation Sanctuary ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal leading-tight">
              Surgical Focus on Natural Weight Regulation
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-brand-accent-vibrant/65 rounded-full" />
              <div className="relative w-2.5 h-2.5">
                <div className="absolute inset-0 rounded-full bg-brand-gold-bright animate-ping opacity-75" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-brand-gold-bright" />
              </div>
              <div className="h-[2px] w-10 bg-brand-accent-vibrant/65 rounded-full" />
            </div>
            <p className="text-base sm:text-lg text-brand-charcoal/70 font-sans max-w-xl mx-auto leading-relaxed">
              Choose your bespoke path. Guided step-by-step by clinical masters to support sustainable vitality. No aggressive starve plans.
            </p>
          </div>

          {/* Responsive grid matching layout requirements */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
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
                    borderColor: 'rgba(212, 163, 115, 0.7)', // Gold border glow
                    boxShadow: '0 25px 50px -15px rgba(212, 163, 115, 0.15), 0 0 0 1.5px rgba(212, 163, 115, 0.5)'
                  }}
                  className="group flex flex-col rounded-[24px] bg-white/95 border border-brand-sage/40 overflow-hidden hover:bg-white transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.015)] relative"
                >
                  {/* Card Header Image section */}
                  <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden" id={`card-image-box-${track.id}`}>
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative luxury tag overlay */}
                    <div className="absolute top-4 left-4 z-10" id={`card-tag-${track.id}`}>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-accent-vibrant to-brand-gold-bright px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-ivory shadow-lg border border-white/20">
                        <Award className="h-3.5 w-3.5 text-white" />
                        {track.tag}
                      </span>
                    </div>
                    {/* Bottom glassmorphic overlay for categories */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-brand-sage/40" id={`card-cat-box-${track.id}`}>
                      <p className="text-xs font-bold text-brand-emerald uppercase tracking-wider">{track.category}</p>
                    </div>
                  </div>

                  {/* Card Content Section */}
                  <div className="p-6.5 flex-1 flex flex-col justify-between" id={`card-content-body-${track.id}`}>
                    <div className="space-y-4">
                      {/* Title block with custom interactive rotative icon */}
                      <div className="flex items-center gap-3" id={`card-heading-${track.id}`}>
                        <div className="p-2.5 rounded-xl bg-brand-sage/40 text-brand-emerald transition-all duration-500 group-hover:rotate-[15deg] group-hover:bg-brand-emerald group-hover:text-white">
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal tracking-tight group-hover:text-brand-emerald transition-colors duration-300">
                          {track.title}
                        </h3>
                      </div>
                      
                      <p className="text-[15px] sm:text-base text-brand-charcoal/85 leading-relaxed font-sans" id={`card-desc-${track.id}`}>
                        {track.description}
                      </p>

                      {/* Metadata row with timing & levels */}
                      <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-brand-gold/95 border-y border-brand-sage/20 py-2.5 font-sans" id={`card-meta-${track.id}`}>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                          Duration: {track.duration}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-sage/70" />
                        <span>Intensity: {track.intensity}</span>
                      </div>

                      {/* Features/benefits bullet pointers list */}
                      <ul className="space-y-2.5 text-sm sm:text-base text-brand-charcoal/85 font-sans pt-1" id={`card-features-${track.id}`}>
                        {track.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="h-3.5 w-3.5 text-brand-emerald shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highly Polished Premium CTA integration */}
                    <div className="pt-5 mt-5 border-t border-brand-sage/25" id={`card-footer-box-${track.id}`}>
                      {/* Primary Boutique CTA button */}
                      <button
                        type="button"
                        id={`btn-select-${track.id}`}
                        onClick={() => onSelectProgram(track.title)}
                        className="group/btn w-full h-[54px] inline-flex items-center justify-between rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory px-6 text-sm sm:text-base font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        <span className="font-sans pl-2 tracking-wide">
                          {track.id === 'personalized' ? 'Book Your Session' : 'Book Free Trial'}
                        </span>
                        <div 
                          className="h-9 w-9 rounded-full bg-[#D4A373] group-hover/btn:bg-[#E2B383] flex items-center justify-center text-white transition-all duration-300 transform group-hover/btn:translate-x-[4px] shrink-0"
                          style={{ 
                            boxShadow: '0 0 15px rgba(212,163,115,0.4)' 
                          }}
                        >
                          <ArrowRight className="h-4.5 w-4.5 text-white stroke-[3]" />
                        </div>
                      </button>
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
