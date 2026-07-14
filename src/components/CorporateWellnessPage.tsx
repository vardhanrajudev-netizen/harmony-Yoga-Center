import React, { useState } from 'react';
import { 
  Building2, 
  Cpu, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import SEO from './SEO';

export default function CorporateWellnessPage() {
  const [employeesCount, setEmployeesCount] = useState(50);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    programType: 'On-site Interactive Workshops',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Structured benefits
  const corporateBenefits = [
    {
      icon: Cpu,
      title: 'Cognitive Rebooting',
      desc: 'Specific pranayama sequences designed to optimize blood flow to the brain, improving executive decision-making and clarity.'
    },
    {
      icon: Heart,
      title: 'Ergonomic Realignment',
      desc: 'Therapeutic joint metrics and deep lumbar release techniques to address postural strain and stress during continuous desk work.'
    },
    {
      icon: Users,
      title: 'Synergistic Community',
      desc: 'Unified collective mindfulness loops to build healthy communication, diminish group stress, and enhance team cohesion.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-[var(--navbar-height,80px)] bg-luxury-glow-b min-h-screen relative overflow-hidden"
      id="corporate-wellness-page"
    >
      <SEO 
        title="Corporate Yoga Programs & Employee Wellness | Harmony Yoga Center"
        description="Decrease workplace fatigue, combat sitting stress, and maximize focus. We provide bespoke posture realignment and breathwork sessions for modern workspaces in Vijayawada."
        path="/corporate-wellness"
      />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/20 filter blur-3xl pointer-events-none ambient-glow-1" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-brand-gold-bright/8 filter blur-3xl pointer-events-none ambient-glow-2" />

      {/* Hero Header */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 text-center select-none" id="corporate-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#b58552] uppercase block">
            ✦ WORKPLACE HARMONY ✦
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Corporate Wellness Programs
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-12 bg-brand-gold/40" />
            <div className="w-2.5 h-2.5 rounded-full border border-brand-gold rotate-45" />
            <div className="h-[1.5px] w-12 bg-brand-gold/40" />
          </div>
          <p className="text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Empower your team with S. Anjaneyulu’s clinical posture alignment routines, targeted physical decompression therapy, and custom mindfulness modules suited for high-stress corporate pipelines.
          </p>
        </div>
      </section>

      {/* Two-Column Detail Layout */}
      <section className="pb-24 px-6 sm:px-10 lg:px-16" id="corporate-main-content">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focus benefits & Interactive calculator */}
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-white/95 rounded-[32px] p-8 sm:p-10 border border-brand-sage/40 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-emerald tracking-tight">
                Why Invest in Yoga for Your Workforce?
              </h2>
              <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed font-sans">
                Prolonged workstation hours cause cervical strain, sluggish lung volumes, and mental burnout. Our executive sessions are engineered with specific bio-mechanic alignments to optimize active cardiovascular circulation and eliminate neural blockages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-sage/15">
                {corporateBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="space-y-3 pl-1 font-sans">
                      <div className="text-brand-emerald p-2 rounded-xl inline-block bg-brand-emerald/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-brand-charcoal leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-brand-charcoal/65 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Calculator: Dynamic estimation of worker focus reclaim */}
            <div className="bg-white/95 rounded-[32px] p-8 sm:p-10 border border-brand-sage/40 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-emerald/10 rounded-xl">
                  <TrendingUp className="h-5 w-5 text-brand-emerald" />
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-emerald tracking-tight">
                  Employee Focus & Stress Saving Estimator
                </h4>
              </div>
              <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans">
                Slide the bar according to your active company sizes to compute estimated weekly executive productivity recovery and stress index reduction ratios.
              </p>

              <div className="space-y-5 pt-2 font-sans">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-brand-charcoal">Employee Count:</span>
                  <span className="text-brand-emerald font-extrabold text-base">{employeesCount} Staff</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={employeesCount}
                  onChange={(e) => setEmployeesCount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-sage/40 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
                />
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-brand-sage/20 text-center shadow-2xs">
                    <span className="block text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest">Postural Relief</span>
                    <span className="text-[20px] sm:text-[22px] font-serif font-bold text-brand-emerald mt-1 block">{Math.min(employeesCount * 4, 1800)} hrs/yr</span>
                  </div>
                  <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-brand-sage/20 text-center shadow-2xs">
                    <span className="block text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest">Fatigue Reduction</span>
                    <span className="text-[20px] sm:text-[22px] font-serif font-bold text-[#b58552] mt-1 block">~{(employeesCount * 1.5).toFixed(0)}%</span>
                  </div>
                  <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-brand-sage/20 text-center shadow-2xs">
                    <span className="block text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest">Sick Leave Savings</span>
                    <span className="text-[20px] sm:text-[22px] font-serif font-bold text-brand-emerald mt-1 block">₹{(employeesCount * 2200).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom proposal consultation form */}
          <div className="lg:col-span-5" id="corporate-proposal-form">
            <div className="bg-white/95 rounded-[32px] p-8 sm:p-10 border border-brand-sage/40 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-emerald" />

              <div className="flex items-center gap-1.5 text-[#B47F43] font-bold text-xs uppercase tracking-wider mb-2 font-sans">
                <Sparkles className="h-3.5 w-3.5" />
                Custom Corporate Solutions
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#065F5B] mb-1 leading-tight">Request a Proposal</h3>
              <p className="text-sm text-brand-charcoal/50 mb-6 font-sans">Arrange a baseline postural screening workshop or ongoing corporate sessions.</p>

              {submitted ? (
                <div className="text-center py-12 space-y-4 font-sans">
                  <div className="h-12 w-12 rounded-full bg-brand-emerald/10 text-brand-emerald mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[18px] font-bold text-brand-emerald">Proposal Sent Successfully</h4>
                    <p className="text-sm sm:text-base text-brand-charcoal/60 mt-2 leading-relaxed">
                      Thank you for your interest. A custom corporate program director will details options and contact your HR/Admin team within 24 business hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 hover:bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-xs uppercase font-bold tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                      placeholder="Indus Solutions Private Limited"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">HR / Contact Person *</label>
                      <input 
                        type="text" 
                        name="contactName" 
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                        placeholder="Rohan Mehra"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Designation / Job Title</label>
                      <input 
                        type="text" 
                        className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                        placeholder="Chief People Officer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Corporate Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                        placeholder="rohan.mehra@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Contact Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                        placeholder="+91 91234 56789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Preferred Program Tier</label>
                    <select 
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                    >
                      <option value="On-site Interactive Workshops">On-site Interactive Workshops (2 hrs)</option>
                      <option value="Weekly Office Deskside realignments">Weekly Office Deskside Realignments</option>
                      <option value="Virtual Wellness Packages">Virtual Wellness Packages (Streaming)</option>
                      <option value="Executive Weekend Retreat Package">Executive Weekend Retreat Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[11px]">Brief Description of Team Size & Goals</label>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-[#FAF9F6] p-3.5 text-sm focus:border-brand-emerald focus:outline-hidden transition-all"
                      placeholder="E.g., 150 software professionals experiencing desk tightness..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[52px] rounded-full bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-sm sm:text-base font-bold uppercase tracking-widest inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_12px_rgba(15,118,110,0.15)] hover:shadow-[0_8px_24px_rgba(15,118,110,0.25)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
