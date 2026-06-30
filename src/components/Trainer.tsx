import { Award, Trophy, Users, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Trainer() {
  const stats = [
    {
      icon: Award,
      value: 'MSC Degree',
      label: 'Yoga Science & Tech',
      color: 'bg-brand-emerald/10 text-brand-emerald',
    },
    {
      icon: Trophy,
      value: '7+ Years',
      label: 'Clinical Experience',
      color: 'bg-brand-gold/10 text-[#B58552]',
    },
    {
      icon: Users,
      value: '500+ Clients',
      label: 'Transformations Guided',
      color: 'bg-brand-emerald/10 text-brand-emerald',
    },
  ];

  const bioContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const bioItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.93 },
    visible: (idx: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: idx * 0.08,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  return (
    <section id="trainer" className="py-[56px] md:py-[72px] lg:py-[100px] bg-premium-light-alt relative overflow-hidden">
      {/* Decorative vector shape background with continuous ambient drifting */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-sage/10 filter blur-3xl pointer-events-none ambient-glow-2" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">

          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[13px] md:text-[14px] font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
              Expert Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight">
              Meet Your Master Companion
            </h2>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto" />
            <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-lg mx-auto">
              Backed by academic yoga science, our programs are structured directly by clinical experts to assure natural, sustainable physiology.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Premium Framed Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div id="trainer-image-frame" className="relative group max-w-md w-full z-10">
                {/* Behind trainer image: Soft rotating circular halo */}
                <motion.div
                  className="absolute -inset-8 rounded-full border border-brand-gold/15 -z-10 hidden sm:block pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Very slow glowing gradient backdrop */}
                <motion.div
                  className="absolute -inset-12 bg-gradient-to-tr from-brand-emerald/15 via-transparent to-brand-gold/15 rounded-full filter blur-3xl -z-20 pointer-events-none"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating decorative rings */}
                <motion.div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-brand-emerald/15 -z-10 pointer-events-none"
                  animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full border border-brand-gold/15 -z-10 pointer-events-none"
                  animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Outer decorative gold ring */}
                <div className="absolute inset-4 border border-brand-gold/30 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 pointer-events-none" />

                {/* Main Image Base */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-sage/30 bg-white">
                  <motion.img
                    initial={{ scale: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    src="/assets/images/trainer-yoga.jpeg"
                    alt="S. Anjaneyulu - Head Trainer at Harmony Yoga Center"
                    className="w-full aspect-[4/5] object-cover filter grayscale-[25%] transition-all duration-700 ease-out group-hover:grayscale-0 brightness-[98%] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating mini experience card inside image */}
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.25 }}
                    className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-brand-sage/40 flex items-center gap-3"
                  >
                    <div className="h-8 w-8 rounded-full bg-brand-emerald flex items-center justify-center text-brand-ivory">
                      <Sparkles className="h-4 w-4 text-brand-gold" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-wider font-sans">Professional Registry</p>
                      <p className="text-xs font-bold text-brand-emerald">Registered MSC Yoga Therapist</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Biography & Statistics */}
            <motion.div 
              variants={bioContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <motion.span variants={bioItemVariants} className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gold/15 px-3 py-1 text-xs font-bold text-[#b58552] uppercase tracking-wider">
                  Founder, Head Coach
                </motion.span>
                <motion.h3 variants={bioItemVariants} className="font-serif text-3xl sm:text-4xl font-bold text-brand-emerald">
                  S. Anjaneyulu
                </motion.h3>
                <motion.p variants={bioItemVariants} className="text-[13px] font-medium text-brand-charcoal/50 tracking-wider uppercase font-sans -mt-2">
                  M.Sc. Yoga Science & Natural healing therapy
                </motion.p>
              </div>

              {/* Custom Narrative */}
              <motion.div variants={bioItemVariants} className="story-paragraphs space-y-4 text-sm text-brand-charcoal/85 leading-relaxed font-sans">
                <p>
                  Combining deep academic knowledge in <span className="font-semibold text-brand-emerald">Yoga Science</span> with seven years of practical teaching, S. Anjaneyulu formulated the Harmony Natural Slimming blueprint—a methodology utilizing specialized 30-minute daily routines to stimulate metabolic speed without aggressive dieting.
                </p>
                <p>
                  His tailored guidance addresses cellular core strength, digestion fire (Agni), and joint longevity to assist clients who have struggled with stubborn hormonal plateau curves or daily time shortages.
                </p>
              </motion.div>

              {/* Quote Block using distinct slide-in transition */}
              <motion.div 
                variants={quoteVariants} 
                className="relative border-l-2 border-brand-gold pl-5 py-2 bg-white/40 rounded-r-xl pr-4"
              >
                <Quote className="absolute right-4 top-2 h-10 w-10 text-brand-gold/10 pointer-events-none" />
                <p className="italic text-xs text-brand-charcoal/80 leading-relaxed">
                  "Yoga is not simply an artistic stretch; it is a metabolic realignment. By activating internal thyroid secretions and calming the nervous system for 30 purposeful minutes daily, we unlock true natural weight regulation."
                </p>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-emerald mt-2">
                  — S. Anjaneyulu
                </span>
              </motion.div>

              {/* Credentials Row with very slow growth elegant scaling stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      custom={idx}
                      variants={statCardVariants}
                      whileHover={{ 
                        y: -8,
                        borderColor: '#0F766E',
                        boxShadow: '0 12px 24px -10px rgba(15, 118, 110, 0.25)'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      key={idx}
                      id={`trainer-stat-${idx}`}
                      className="bg-white p-4 rounded-xl border border-brand-sage/40 flex items-start gap-3 shadow-2xs transition-colors duration-300 cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${stat.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        {/* Elegant slowly scaling display values */}
                        <p className="text-sm font-bold text-brand-charcoal">{stat.value}</p>
                        <p className="text-[10px] text-brand-charcoal/60 leading-tight mt-0.5">{stat.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
