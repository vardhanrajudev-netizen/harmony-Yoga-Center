import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  User, 
  Coffee, 
  Globe, 
  Check, 
  AlertCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import SEO from './SEO';

interface ProgramsPageProps {
  onSelectProgram: (programName: string) => void;
}

export default function ProgramsPage({ onSelectProgram }: ProgramsPageProps) {
  const [activeTab, setActiveTab2] = useState<'weight-loss' | 'personalized' | 'nutrition'>('weight-loss');

  // Interactive Programs Definition
  const tracks = [
    {
      id: 'weight-loss',
      title: 'Weight Loss Programs',
      tag: 'Most Popular',
      subtitle: 'Harmony Dynamic Slimming',
      timeframe: '30 days minimum',
      duration: '30 mins / day',
      bulletPoints: [
        'Naturally sparks thyroid glandular juices',
        '30-minute daily sequences keep commitments manageable',
        'Fires stomach digestion ("Agni") to flush visceral fats',
        'Corrects pelvic blockages that slow metabolic processing',
        'Combats hormonal plateau resistance patterns',
        'Tailored sequence variations adapt to physical age'
      ],
      description: 'The Harmony Natural Slimming routine is constructed strictly to speed metabolic parameters without physical exhaustion. We utilize targeted abdominal contractions and deep breathing matrices to realign digestion flow.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      clinicalGoal: 'Metabolic & Organic realignment'
    },
    {
      id: 'personalized',
      title: 'Personalized Yoga Sessions',
      tag: 'Elite Focus',
      subtitle: 'Clinical Private Consultation',
      timeframe: 'Custom schedules',
      duration: 'Schedules vary',
      bulletPoints: [
        'A thorough diagnostic review with master S. Anjaneyulu',
        'Custom joint therapy sequences designed around chronic pains',
        'Direct posture correction to ensure full skeletal health',
        'Flexible 1-on-1 private scheduling (Physical or HD stream)',
        'In-depth guidance on advanced respiratory control ("Pranayama")',
        'Tailored hormonal checkups to record cellular progresses'
      ],
      description: 'An elite 1-on-1 wellness pathway. Perfect for clients dealing with skeletal pains, postpartum metabolic shifts, or targeted rehabilitation goals requiring clinical-grade focus.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      clinicalGoal: 'Joint care & spinal realignment'
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Diet Plans',
      tag: 'Essential Support',
      subtitle: 'Ayurvedic Metabolic Nutrients',
      timeframe: 'Flexible lifestyle paths',
      duration: 'Weekly frameworks',
      bulletPoints: [
        'Personalized body constitution metabolic analysis ("Dosha Profile")',
        'No starving diet charts—focuses on bio-available nutrition',
        'Weekly curated shopping grocery guides for local Vijayawada foods',
        'Supportive recipes to ignite deep visceral fat digestion',
        'Stress-balancing adaptogens recommendation lists',
        '1-on-1 weekly online dietary review calls with experts'
      ],
      description: 'Rebalance internal organ functions. We formulate nutrition schedules aligned to your individual constitution, ensuring your digestive fires act in unison with physical movements.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
      clinicalGoal: 'Constitutional Agni (digestive fire) balance'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[var(--navbar-height,80px)] bg-brand-ivory min-h-screen relative overflow-hidden"
      id="programs-page"
    >
      <SEO 
        title="Sanctuary Yoga Programs & Schedulings | Harmony Yoga Center"
        description="Browse professional weight loss yoga tracks, 1-on-1 personalized physical consultations, and metabolic Agni diet plans curated for Vijayawada students."
        path="/programs"
      />

      {/* Decorative Blur Ambient Elements */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-brand-gold-bright/5 blur-3xl pointer-events-none" />

      {/* Hero Header Banner */}
      <section className="py-16 md:py-24 px-6 text-center select-none" id="programs-page-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#b58552] uppercase block font-sans">
            Curated Paths to Vitality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Comprehensive Clinical Programs
          </h1>
          <div className="h-[1px] w-20 bg-[#E3B777] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-xl mx-auto leading-relaxed">
            Choose a targeted therapeutic path designed to address metabolic plateaus, correct postural alignment, and build optimal cellular vitality.
          </p>
        </div>
      </section>

      {/* Program Core Selection (Weight Loss, Personalized, Nutrition Sections) */}
      <section className="py-8 px-6 sm:px-10 lg:px-16" id="comprehensive-program-tracks">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Custom Horizontal Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex gap-1.5 p-1.5 rounded-full bg-brand-emerald/5 border border-brand-sage/20 shadow-2xs">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTab2(track.id as any)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === track.id 
                      ? 'bg-[#0F766E] text-brand-ivory shadow-xs' 
                      : 'text-brand-charcoal/65 hover:text-brand-emerald hover:bg-white/30'
                  }`}
                >
                  {track.title}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Program Details Panel */}
          {tracks.map((track) => {
            if (track.id !== activeTab) return null;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#CFE8D5]/60 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(15,118,110,0.02)] relative"
                id={`detailed-track-panel-${track.id}`}
              >
                {/* Accent Banner badge */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand-gold-bright/15 px-3 py-1 text-[10px] font-bold text-[#b58552] uppercase tracking-wider font-sans">
                  <Sparkles className="h-3 w-3" />
                  {track.tag}
                </div>

                {/* Left: Illustrative Artwork */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-brand-sage/20 aspect-[4/5] bg-brand-ivory">
                    <img 
                      src={track.image} 
                      alt={track.title}
                      className="w-full h-full object-cover filter brightness-[95%] group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald/40 to-transparent pointer-events-none" />
                    
                    {/* Clinical highlight overlay inside image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 rounded-xl border border-brand-sage/30">
                      <p className="text-[9px] font-bold text-[#b58552] tracking-wider uppercase font-sans">TARGET PHYSIOLOGY</p>
                      <p className="text-xs font-bold text-brand-emerald mt-0.5">{track.clinicalGoal}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Features, Pricing and CTA */}
                <div className="lg:col-span-7 space-y-6 font-sans">
                  <div>
                    <span className="text-[11px] font-bold tracking-[2px] text-[#b58552] uppercase block">
                      {track.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-brand-emerald tracking-tight mt-1">
                      {track.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed mt-3">
                      {track.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                    {track.bulletPoints.map((bp, key) => (
                      <div key={key} className="flex items-start gap-2 text-xs text-brand-charcoal/80">
                        <div className="p-0.5 rounded-full bg-brand-emerald/10 text-brand-emerald shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Area (re-designed for premium trial booking without pricing) */}
                  <div className="pt-6 border-t border-brand-sage/10 flex flex-col sm:flex-row gap-6 items-center justify-between" id={`action-area-${track.id}`}>
                    <div className="text-left space-y-1 max-w-md">
                      <p className="text-xs font-bold text-brand-emerald tracking-wide uppercase">Includes Master Session Consult</p>
                      <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                        Enjoy a complimentary 1-on-1 baseline metabolic screening & joint health consultation with S. Anjaneyulu during your first week.
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectProgram(track.title)}
                      className="group/btn h-[54px] w-full sm:w-auto px-8 rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-widest inline-flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer shrink-0"
                    >
                      <span>{track.id === 'personalized' ? 'Book Your Session' : 'Book Free Trial'}</span>
                      <div 
                        className="h-8 w-8 rounded-full bg-[#E3B777] group-hover/btn:bg-[#EBC38B] flex items-center justify-center text-[#0F766E] transition-all duration-300 transform group-hover/btn:translate-x-[4px] shrink-0"
                        style={{ boxShadow: '0 0 18px rgba(227,183,119,0.35)' }}
                      >
                        <ArrowRight className="h-4 w-4 stroke-[3]" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Online & Offline Formats Section */}
      <section className="py-20 bg-white/50 border-y border-brand-sage/10 px-6 sm:px-10 lg:px-16" id="delivery-formats">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold tracking-[2px] text-[#b58552] uppercase block font-sans">Flexible Environment</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">Designed for Your Lifestyle</h2>
            <div className="h-[1px] w-12 bg-[#E3B777] mx-auto" />
            <p className="text-xs sm:text-sm text-brand-charcoal/60 font-sans max-w-md mx-auto">
              Engage with our therapeutic sequences in whichever physical structure aligns with your professional duties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Format 1: In-Person Boutique Studio */}
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-brand-sage/30 flex flex-col justify-between" id="offline-studio-details">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                  <Coffee className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-emerald">In-Person Luxury Sanctuary</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                  Experience full clinical oversight at our premium Vijayawada physical boutique. Quiet organic spaces, linen yoga supplies, clean purified atmospheres, and highly attentive small batch cohorts limited strictly to 8 members.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal/75 font-sans">
                    <Check className="h-4 w-4 text-brand-emerald" />
                    <span>Postural touch corrections & physical alignments</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal/75 font-sans">
                    <Check className="h-4 w-4 text-brand-emerald" />
                    <span>Complimentary Ayurvedic health brews</span>
                  </div>
                </div>
              </div>
              <span className="block text-[10px] font-bold text-brand-emerald uppercase tracking-widest mt-8 font-sans">LOCATED IN VIJAYAWADA, INDIA</span>
            </div>

            {/* Format 2: Live Digital HD Stream */}
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-brand-sage/30 flex flex-col justify-between" id="online-stream-details">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-emerald">Interactive HD Live Stream</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                  Join our active slimming sequences live from anywhere globally. Secure zoom streams combined with physical visual screening from S. Anjaneyulu to answer sequence questions during active practice.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal/75 font-sans">
                    <Check className="h-4 w-4 text-brand-emerald" />
                    <span>Full real-time video coaching sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal/75 font-sans">
                    <Check className="h-4 w-4 text-brand-emerald" />
                    <span>HD 4K cameras ensure perfect posture visibility</span>
                  </div>
                </div>
              </div>
              <span className="block text-[10px] font-bold text-brand-emerald uppercase tracking-widest mt-8 font-sans">ACCESSIBLE NATIONWIDE & GLOBALLY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Free Trial CTA */}
      <section className="py-20 px-6 bg-[#0F766E]/5 text-center" id="programs-free-trial-cta">
        <div className="max-w-2xl mx-auto space-y-6">
          <Award className="h-10 w-10 text-[#E3B777] mx-auto animate-bounce" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-emerald">
            Activate Your Direct 3-Day Companion Trial Pass
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-md mx-auto">
            Review physical structures, test our custom heated mats, and claim a personalized body Dosha analysis with master coach S. Anjaneyulu.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => onSelectProgram('Weight Loss Programs')}
              className="px-8 py-4 rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Schedule Free Trial Now</span>
              <div className="h-6 w-6 rounded-full bg-[#E3B777] flex items-center justify-center text-[#0F766E] transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
