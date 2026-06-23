import React from 'react';
import { Award, Trophy, Users, Quote, Sparkles, Smile, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from './SEO';
interface AboutPageProps {
  onBookClick: () => void;
}

export default function AboutPage({ onBookClick }: AboutPageProps) {
  // Stats
  const StatsList = [
    {
      icon: Award,
      value: 'M.Sc. Yoga Science',
      label: 'Academic Degrees & Research',
      color: 'bg-brand-emerald/10 text-brand-emerald',
    },
    {
      icon: Trophy,
      value: '7+ Years',
      label: 'Clinical Case Experiences',
      color: 'bg-brand-gold-bright/15 text-[#b58552]',
    },
    {
      icon: Users,
      value: '500+ Clients',
      label: 'Successful Transitions',
      color: 'bg-[#CFE8D5]/60 text-brand-emerald',
    },
  ];

  // Core pillars
  const pillars = [
    {
      title: 'Our Philosophical Base',
      description: 'We do not view yoga as a basic flexibility workout. We view it as a metabolic and hormonal realigning process that empowers organic weight regulation and cellular strength.',
      icon: Heart,
    },
    {
      title: 'Evidence-Based Programs',
      description: 'Every sequence is customized using medical understandings of endocrinology and joint safety, crafted directly by academic experts for risk-free physical enhancement.',
      icon: ShieldAlert,
    },
    {
      title: 'A Boutique Haven',
      description: 'Our Vijayawada physical sanctuary provides a distraction-free organic luxury environment featuring clean indoor air, custom herbal refreshments, and personalized guidance.',
      icon: Smile,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[var(--navbar-height,80px)] bg-brand-ivory min-h-screen relative overflow-hidden"
      id="about-page-container"
    >
      <SEO 
        title="About Master S. Yoga Anjaneyulu | Harmony Yoga Center"
        description="Learn about Master S. Yoga Anjaneyulu (M.Sc. Yoga Science) and his 7+ years of clinical yogic research into slimming and endocrine normalization in Vijayawada."
        path="/about"
      />

      {/* Absolute Decorative Background Elements */}
      <div className="absolute right-0 top-[10%] w-[500px] h-[500px] rounded-full bg-[#CFE8D5]/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-1/4 bottom-[15%] w-[400px] h-[400px] rounded-full bg-brand-gold-bright/5 blur-3xl pointer-events-none" />

      {/* Hero Banner Section */}
      <section className="relative py-20 lg:py-28 px-6 sm:px-10 lg:px-16" id="about-hero-section">
        <div className="max-w-[1280px] mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-bold tracking-[0.25em] text-[#b58552] uppercase block font-sans"
          >
            Our Story & Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Where Clinical Precision Meets Timeless Spiritual Healing
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-[1px] w-28 bg-[#E3B777] mx-auto my-6" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-brand-charcoal/70 font-sans leading-relaxed"
          >
            Harmony Yoga Center was founded in Vijayawada on a simple, scientific hypothesis: that the body's natural metabolic vigor is best stimulated through targeted clinical movement, breathing science, and hormonal equilibrium—rather than extreme physical depletion.
          </motion.p>
        </div>
      </section>

      {/* Meet S. Yoga Anjaneyulu Section (The Master Biography) */}
      <section className="py-16 bg-white/60 border-y border-brand-sage/10 px-6 sm:px-10 lg:px-16" id="about-trainer-showcase">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Framed Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Visual border outline decor */}
                <div className="absolute inset-4 border border-[#b58552]/25 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 pointer-events-none z-10" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-brand-ivory border border-brand-sage/30">
                  <img
                    src="/assets/images/trainer-yoga.jpeg"
                    alt="S. Yoga Anjaneyulu"
                    className="w-full aspect-[4/5] object-cover filter grayscale-[15%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-brand-sage/30 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-emerald flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-[#E3B777]" />
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-[9px] font-bold text-brand-charcoal/40 uppercase tracking-widest">Global Standards</p>
                      <p className="text-xs font-bold text-brand-emerald">Certified Clinical Wellness Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold tracking-[2px] text-[#b58552] uppercase block font-sans">
                THE FOUNDER & MASTER COACH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-emerald leading-tight">
                S. Yoga Anjaneyulu
              </h2>
              <p className="text-xs sm:text-sm font-semibold uppercase text-brand-charcoal/50 tracking-wider font-sans -mt-3">
                M.Sc. Yoga Science & Natural Healing Therapy
              </p>
              
              <div className="space-y-4 text-sm text-brand-charcoal/80 leading-relaxed font-sans">
                <p>
                  With an esteemed <span className="font-semibold text-brand-emerald">Master of Science (M.Sc.)</span> in Yoga Science, S. Yoga Anjaneyulu is one of India's leading authorities on clinical yoga therapy. Over seven years of dedicated diagnostic and consulting experiences, he has designed custom recovery blueprints addressing stubborn hormonal plateau curves, thyroid metabolism dysfunctions, and chronic stress retention.
                </p>
                <p>
                  At Harmony, S. Yoga Anjaneyulu actively consults with every client. By establishing customized daily 30-minute sequences, he stimulates metabolic functions without resorting to aggressive food diets or joint-straining workouts.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative border-l-2 border-[#E3B777] pl-5 py-2.5 bg-brand-ivory/50 rounded-r-xl pr-4">
                <Quote className="absolute right-4 top-2 h-8 w-8 text-[#E3B777]/10 pointer-events-none" />
                <p className="italic text-xs text-brand-charcoal/80 leading-relaxed">
                  "Yoga shouldn't be about executing painful shapes on a mat. It is a precise science of internal organ activation. Guided sequence timing regulates the nervous complex, sparking the thyroid to manage natural energy synthesis."
                </p>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-emerald mt-2">
                  — S. Yoga Anjaneyulu, Founder
                </span>
              </div>

              {/* Founder Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {StatsList.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-brand-sage/40 flex items-start gap-3 shadow-2xs hover:shadow-xs transition-shadow duration-300"
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${stat.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="font-sans">
                        <p className="text-sm font-bold text-brand-charcoal leading-none">{stat.value}</p>
                        <p className="text-[10px] text-brand-charcoal/60 leading-tight mt-1">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16" id="about-philosophy-bento">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#b58552] uppercase block font-sans">Our Foundations</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">The Pillars of Harmony</h2>
            <div className="h-[1px] w-12 bg-[#E3B777] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-brand-sage/30 shadow-2xs hover:shadow-xs transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0F766E]/40" />
                  <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/10 flex items-center justify-center text-brand-emerald mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Studio Environment Section */}
      <section className="py-16 bg-[#0F766E]/5 px-6 sm:px-10 lg:px-16" id="about-environment">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#FAF9F6] border border-brand-sage/20 rounded-[32px] p-8 md:p-12 lg:p-16 shadow-xs flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-[11px] font-bold tracking-[2.5px] text-[#b58552] uppercase block font-sans">VIJAYAWADA STUDIO</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-emerald leading-tight">
                An Elegant Sanctuary of Pure Serenity
              </h2>
              <div className="h-[1px] w-16 bg-[#E3B777]" />
              <div className="space-y-4 text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                <p>
                  Located in a peaceful, lush enclave in Vijayawada, our luxury boutique yoga space is carefully curated with chemical-free natural materials, high-efficiency HEPA air filtration systems, and full-spectrum organic ambient lighting.
                </p>
                <p>
                  Every element promotes psychological relaxation and therapeutic results. From custom sound dampening structures, to hand-selected ayurvedic drinks and comfortable linen accessories, your session transcends standard public health fitness centers.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-emerald font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3B777]" />
                  Limited to 8 Clients per Batch
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-emerald font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E3B777]" />
                  Prior Appointments Required
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-brand-sage/20 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80" 
                  alt="Yoga Studio Interior" 
                  className="w-full h-full object-cover filter brightness-[95%] hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-brand-sage/20 aspect-square mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Personal Yoga Consulting" 
                  className="w-full h-full object-cover filter brightness-[95%] hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Final CTA */}
      <section className="py-20 text-center px-6" id="about-final-cta">
        <div className="max-w-2xl mx-auto space-y-6">
          <Award className="h-10 w-10 text-[#E3B777] mx-auto animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Are You Ready to Begin Your Realignment?
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-md mx-auto">
            Book an introductory clinical consultation and 1-on-1 trial class directly with our master therapist S. Yoga Anjaneyulu.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer group"
            >
              <span>Schedule Free Trial Session</span>
              <div className="h-6 w-6 rounded-full bg-[#E3B777] flex items-center justify-center text-[#0F766E] transform group-hover:translate-x-1 transition-transform">
                <Sparkles className="h-3 w-3 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
