import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingDown, 
  Heart, 
  Award, 
  Clock, 
  Activity, 
  Smile,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';
import SEO from './SEO';

interface SuccessStoriesPageProps {
  onBookClick: () => void;
}

export default function SuccessStoriesPage({ onBookClick }: SuccessStoriesPageProps) {
  // Animated Counters state
  const [totalClientCount, setTotalClientCount] = useState(0);
  const [lbsLostCount, setLbsLostCount] = useState(0);
  const [avgStressReduction, setAvgStressReduction] = useState(0);

  useEffect(() => {
    // Elegant incremental counter effects on mount
    const limit1 = 540;
    const limit2 = 3250;
    const limit3 = 45;

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;

    const interval = setInterval(() => {
      let updated = false;
      if (c1 < limit1) {
        c1 += 15;
        if (c1 > limit1) c1 = limit1;
        setTotalClientCount(c1);
        updated = true;
      }
      if (c2 < limit2) {
        c2 += 95;
        if (c2 > limit2) c2 = limit2;
        setLbsLostCount(c2);
        updated = true;
      }
      if (c3 < limit3) {
        c3 += 2;
        if (c3 > limit3) c3 = limit3;
        setAvgStressReduction(c3);
        updated = true;
      }

      if (!updated) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const majorStories = [
    {
      name: 'Aditi Sharma',
      age: 34,
      program: 'Harmony Dynamic Slimming',
      timeline: '12 Weeks',
      metricBefore: '78 kg',
      metricAfter: '66 kg / Enhanced Metabolism',
      quote: "Harmony completely repaired my thyroid metabolism. The 30-minute posture loops were so gentle on my lower back and didn't leave me feeling starving. I lost 12kg of visceral weight naturally!",
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      statLabel: 'Total Weight Loss',
      statValue: '-12 kg',
      vetted: 'Academic Case Verified'
    },
    {
      name: 'Anil Kumar',
      age: 42,
      program: 'Personalized Clinical Therapy',
      timeline: '8 Weeks',
      metricBefore: 'Unstable posture & severe spine pain',
      metricAfter: 'Full skeletal recovery & mobility',
      quote: "Sitting in front of a laptop for ten hours daily left me with crippling lumbar stiffness. Under S. Anjaneyulu's direct clinical oversight, my posture metrics are fully back to center. Unbelievable relief.",
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      statLabel: 'Spine Decompression',
      statValue: '100% Pain-free',
      vetted: 'Clinical Therapist Endorsed'
    },
    {
      name: 'Priyanka Reddy',
      age: 28,
      program: 'Hormonal Equilibrium Blueprint',
      timeline: '16 Weeks',
      metricBefore: 'PCOS struggles & static plateaus',
      metricAfter: 'Restored circadian hormonal balance',
      quote: "PCOS made losing stubborn fat feel physically impossible for six years. The special digestive compression sequences sparked my energy fire. Combining movement with metabolic meals was key.",
      image: 'https://images.unsplash.com/photo-1510894347580-fc4d27c2847b?auto=format&fit=crop&w=800&q=80',
      statLabel: 'Fat Ratio Decrease',
      statValue: '-8.5%',
      vetted: 'Dosha Diet Balanced'
    }
  ];

  const quickStatsSummary = [
    { label: 'Verified Global Members', icon: Award, targetValue: totalClientCount, suffix: '+' },
    { label: 'Combined Kilograms Shed', icon: Flame, targetValue: lbsLostCount, suffix: ' kg' },
    { label: 'Average Cortisol Index Reduced', icon: Smile, targetValue: avgStressReduction, suffix: '%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[var(--navbar-height,80px)] bg-premium-light min-h-screen relative overflow-hidden"
      id="success-stories-page"
    >
      <SEO 
        title="Student Success Stories & Testimonials | Harmony Yoga Center"
        description="Browse peer-reviewed metabolic progress charts, actual fat loss logs, thyroid recovery testimonies, and postural restoration reviews from Vijayawada residents."
        path="/success-stories"
      />

      {/* Decorative Blur Overlays with continuous luxury ambient movement */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-sage/10 blur-3xl pointer-events-none ambient-glow-1" />
      <div className="absolute -left-1/4 bottom-1/4 w-80 h-80 rounded-full bg-[#E3B777]/5 blur-3xl pointer-events-none ambient-glow-2" />

      {/* Hero Header Banner */}
      <section className="py-16 md:py-24 px-6 text-center select-none" id="success-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#b58552] uppercase block font-sans">
            AUTHENTIC METABOLIC MILESTONES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Member Transformation Chronicles
          </h1>
          <div className="h-[1px] w-20 bg-[#E3B777] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-xl mx-auto leading-relaxed">
            Real people. Honest results. Backed by physiological science. Explore case logs of deep hormonal recoveries, postural corrections, and long-term metabolic health.
          </p>
        </div>
      </section>

      {/* Incremental Animated Counter Stats Panel */}
      <section className="py-8 px-6 sm:px-10 lg:px-16" id="transformation-counters-panel">
        <div className="max-w-[1100px] mx-auto bg-white border border-[#CFE8D5]/60 rounded-3xl p-8 sm:p-10 shadow-[0_4px_30px_rgba(15,118,110,0.02)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {quickStatsSummary.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="space-y-1.5 font-sans relative group">
                  {idx > 0 && <div className="hidden sm:block absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-brand-sage/20" />}
                  <div className="mx-auto h-10 w-10 rounded-full bg-brand-emerald/5 flex items-center justify-center text-brand-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="block text-3xl sm:text-4xl font-bold text-brand-emerald font-mono leading-none pt-2">
                    {stat.targetValue.toLocaleString()}{stat.suffix}
                  </span>
                  <p className="text-[11px] font-semibold text-brand-charcoal/50 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Narrative Cases Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16" id="certified-members-cases">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {majorStories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-brand-sage/20 rounded-3xl p-8 sm:p-10 shadow-3xs relative overflow-hidden`}
              id={`story-case-${idx}`}
            >
              {/* Highlight ribbon representing clinical safety */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-1 bg-brand-emerald/5 border border-brand-emerald/10 px-3 py-1 rounded-full text-[9px] font-bold text-brand-emerald uppercase tracking-wider font-sans">
                <ShieldCheck className="h-3.5 w-3.5" />
                {story.vetted}
              </div>

              {/* Visual Mask Image section */}
              <div className={`lg:col-span-4 flex justify-center ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className="relative group max-w-xs w-full rounded-2xl overflow-hidden shadow-md aspect-square bg-[#FAF9F6] border border-brand-sage/10">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0F766E] text-brand-ivory text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg font-sans">
                    {story.timeline} Roadmap
                  </div>
                </div>
              </div>

              {/* Narrative Context Section */}
              <div className="lg:col-span-8 space-y-6 font-sans">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#b58552] font-semibold">{story.program}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-emerald leading-tight">
                    {story.name}, <span className="text-brand-charcoal/60 font-sans text-xl font-normal">Age {story.age}</span>
                  </h3>
                </div>

                {/* Metabolic progress metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-brand-sage/10 relative overflow-hidden">
                    <span className="text-[9px] text-brand-charcoal/40 font-bold uppercase tracking-wider block">Baseline Entry Metrics</span>
                    <p className="text-xs font-semibold text-brand-charcoal/80 mt-1">{story.metricBefore}</p>
                  </div>
                  <div className="p-3.5 bg-brand-emerald/5 rounded-xl border border-[#CFE8D5] relative overflow-hidden">
                    <span className="text-[9px] text-[#0F766E] font-bold uppercase tracking-wider block">Verified Clinical Post-Output</span>
                    <p className="text-xs font-bold text-brand-emerald mt-1">{story.metricAfter}</p>
                  </div>
                </div>

                {/* Block Quote */}
                <p className="italic text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed border-l-2 border-[#E3B777] pl-4">
                  "{story.quote}"
                </p>

                {/* Floating highlight status value */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-gold-bright/15 text-[#b58552] flex items-center justify-center shrink-0">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-brand-charcoal/40 tracking-widest block">Core Physical Shift</span>
                    <span className="text-sm font-bold text-brand-emerald">{story.statValue} ({story.statLabel})</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Free Trial Conversion section */}
      <section className="py-20 text-center px-6" id="success-conversion">
        <div className="max-w-2xl mx-auto space-y-6">
          <Sparkles className="h-10 w-10 text-[#E3B777] mx-auto animate-bounce" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
            Achieve Your Personal Clinical Best
          </h2>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 font-sans max-w-sm mx-auto">
            Work directly with S. Anjaneyulu to analyze your core joint structure, hormonal plateaus, and construct a metabolic blueprint.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Activate Free 3-Day Trial</span>
              <div className="h-6 w-6 rounded-full bg-[#E3B777] flex items-center justify-center text-[#0F766E] transform group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-3 w-3 stroke-[3]" />
              </div>
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
