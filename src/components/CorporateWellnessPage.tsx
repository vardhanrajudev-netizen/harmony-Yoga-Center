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
      className="pt-[var(--navbar-height,80px)] bg-brand-ivory min-h-screen relative overflow-hidden"
      id="corporate-wellness-page"
    >
      <SEO 
        title="Corporate Yoga Programs & Employee Wellness | Harmony Yoga Center"
        description="Decrease workplace fatigue, combat sitting stress, and maximize focus. We provide bespoke posture realignment and breathwork sessions for modern workspaces in Vijayawada."
        path="/corporate-wellness"
      />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-sage/15 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#E3B777]/5 blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 text-center select-none" id="corporate-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#b58552] uppercase block">
            WORKPLACE HARMONY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Corporate Wellness Programs
          </h1>
          <div className="h-[1px] w-20 bg-[#E3B777] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Empower your team with S. Anjaneyulu’s clinical posture alignment routines, targeted physical decompression therapy, and custom mindfulness modules suited for high-stress corporate pipelines.
          </p>
        </div>
      </section>

      {/* Two-Column Detail Layout */}
      <section className="pb-20 px-6 sm:px-10 lg:px-16" id="corporate-main-content">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focus benefits & Interactive calculator */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-sage/20 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-brand-emerald">
                Why Invest in Yoga for Your Workforce?
              </h2>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                Prolonged workstation hours cause cervical strain, sluggish lung volumes, and mental burnout. Our executive sessions are engineered with specific bio-mechanic alignments to optimize active cardiovascular circulation and eliminate neural blockages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {corporateBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="space-y-2 border-l-2 border-brand-gold/40 pl-4 font-sans">
                      <div className="text-brand-emerald p-1 rounded-full inline-block bg-brand-emerald/5 mb-1">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif font-bold text-[14px] text-brand-charcoal leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-[10px] text-brand-charcoal/60 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Calculator: Dynamic estimation of worker focus reclaim */}
            <div className="bg-[#0F766E]/5 rounded-3xl p-6 sm:p-8 border border-brand-emerald/10 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-emerald" />
                <h4 className="font-serif text-lg font-bold text-brand-emerald">
                  Employee Focus & Stress Saving Estimator
                </h4>
              </div>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-sans">
                Slide the bar according to your active company sizes to compute estimated weekly executive productivity recovery and stress index reduction ratios.
              </p>

              <div className="space-y-4 pt-2 font-sans">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-brand-charcoal">Employee Count:</span>
                  <span className="text-brand-emerald font-extrabold text-sm">{employeesCount} Active Staff</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={employeesCount}
                  onChange={(e) => setEmployeesCount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-sage/30 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
                />
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="bg-white p-3 rounded-xl border border-brand-sage/20 text-center">
                    <span className="block text-[8px] font-bold text-brand-charcoal/40 uppercase tracking-widest">Postural Relief</span>
                    <span className="text-[18px] font-serif font-bold text-brand-emerald">{Math.min(employeesCount * 4, 1800)} hrs/yr</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-sage/20 text-center">
                    <span className="block text-[8px] font-bold text-brand-charcoal/40 uppercase tracking-widest">Fatigue Reduction</span>
                    <span className="text-[18px] font-serif font-bold text-[#b58552]">~{(employeesCount * 1.5).toFixed(0)}%</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-sage/20 text-center">
                    <span className="block text-[8px] font-bold text-brand-charcoal/40 uppercase tracking-widest">Sick Leave Savings</span>
                    <span className="text-[18px] font-serif font-bold text-brand-emerald">₹{(employeesCount * 2200).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom proposal consultation form */}
          <div className="lg:col-span-5" id="corporate-proposal-form">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-sage/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-emerald" />

              <div className="flex items-center gap-1.5 text-[#B47F43] font-bold text-[10px] uppercase tracking-wider mb-1 font-sans">
                <Sparkles className="h-3.5 w-3.5" />
                Custom Corporate Solutions
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-emerald mb-1">Request a Proposal</h3>
              <p className="text-xs text-brand-charcoal/50 mb-6 font-sans">Arrange a baseline postural screening workshop or ongoing corporate sessions.</p>

              {submitted ? (
                <div className="text-center py-12 space-y-4 font-sans">
                  <div className="h-12 w-12 rounded-full bg-brand-emerald/10 text-brand-emerald mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[18px] font-bold text-brand-emerald">Proposal Sent Successfully</h4>
                    <p className="text-xs text-brand-charcoal/60 mt-2 leading-relaxed">
                      Thank you for your interest. A custom corporate program director will details options and contact your HR/Admin team within 24 business hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 hover:bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[10px] uppercase font-bold tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                      placeholder="Indus Solutions Private Limited"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">HR / Contact Person *</label>
                      <input 
                        type="text" 
                        name="contactName" 
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="Rohan Mehra"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Designation / Job Title</label>
                      <input 
                        type="text" 
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="Chief People Officer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Corporate Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="rohan.mehra@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Contact Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                        placeholder="+91 91234 56789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Preferred Program Tier</label>
                    <select 
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                    >
                      <option value="On-site Interactive Workshops">On-site Interactive Workshops (2 hrs)</option>
                      <option value="Weekly Office Deskside realignments">Weekly Office Deskside Realignments</option>
                      <option value="Virtual Wellness Packages">Virtual Wellness Packages (Streaming)</option>
                      <option value="Executive Weekend Retreat Package">Executive Weekend Retreat Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-charcoal/60 font-semibold mb-1 uppercase tracking-wider text-[9px]">Brief Description of Team Size & Goals</label>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm focus:border-brand-emerald focus:outline-hidden"
                      placeholder="E.g., 150 software professionals experiencing desk tightness..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory rounded-xl font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
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
