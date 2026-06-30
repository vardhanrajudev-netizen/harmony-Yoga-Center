import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Activity, 
  TrendingDown, 
  Flame, 
  BookOpen, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';

interface ResourcesPageProps {
  onBookClick: (programName?: string) => void;
}

export default function ResourcesPage({ onBookClick }: ResourcesPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabFromPath = (pathname: string): 'bmi' | 'weight-goal' | 'calorie' | 'guide' | 'charts' | 'faq' => {
    if (pathname.includes('/resources/bmi-calculator')) return 'bmi';
    if (pathname.includes('/resources/weight-loss-goal-calculator') || pathname.includes('/resources/weight-goal')) return 'weight-goal';
    if (pathname.includes('/resources/calorie')) return 'calorie';
    if (pathname.includes('/resources/guide')) return 'guide';
    if (pathname.includes('/resources/diet-charts')) return 'charts';
    if (pathname.includes('/resources/faq')) return 'faq';
    return 'bmi';
  };

  const getPathFromTab = (tabId: string): string => {
    switch (tabId) {
      case 'bmi': return '/resources/bmi-calculator';
      case 'weight-goal': return '/resources/weight-loss-goal-calculator';
      case 'calorie': return '/resources/calorie-calculator';
      case 'guide': return '/resources/guide';
      case 'charts': return '/resources/diet-charts';
      case 'faq': return '/resources/faq';
      default: return '/resources/bmi-calculator';
    }
  };

  const activeTab = getTabFromPath(location.pathname);

  const seoConfig = useMemo(() => {
    switch (activeTab) {
      case 'bmi':
        return {
          title: "BMI Assessment Calculator | Harmony Yoga Center",
          description: "Estimate body mass index ratios accurately. Read clinical recommendations and gentle slimming posture advices tailored for Vijayawada locals.",
          path: "/resources/bmi-calculator"
        };
      case 'weight-goal':
        return {
          title: "Weight Loss Goal & Milestone Calculator | Harmony Yoga Center",
          description: "Map out custom target weights and healthy paces. Let S. Anjaneyulu help you calculate exact metabolic milestones.",
          path: "/resources/weight-loss-goal-calculator"
        };
      case 'calorie':
        return {
          title: "Daily Calorie & Maintenance Calculator | Harmony Yoga Center",
          description: "Determine individual metabolic thresholds (active thermodynamic output) and precise protein/carb profiles.",
          path: "/resources/calorie-calculator"
        };
      case 'guide':
        return {
          title: "Slimming Guide & Educational Insights | Harmony Yoga Center",
          description: "Examine detailed guides on Agni rebooting, lymph decongestion twists, and endocrine compression routines for standard weight plateaus.",
          path: "/resources/guide"
        };
      case 'charts':
        return {
          title: "Diet Charts & PDF Resources | Harmony Yoga Center",
          description: "Download printable 7-day metabolic flush planners, corporate posture alignment templates, and breathing maps.",
          path: "/resources/diet-charts"
        };
      case 'faq':
        return {
          title: "Frequently Answered Questions | Harmony Yoga Center",
          description: "Read S. Anjaneyulu's direct answers regarding thyroid weight plateaus, offline studio options, and joint longevity.",
          path: "/resources/faq"
        };
      default:
        return {
          title: "Wellness Resource Assessments | Harmony Yoga Center",
          description: "Unlock calculated assessments regarding metabolic speeds, endocrine throat pressure alignments, and offline Banjara Hills options.",
          path: "/resources"
        };
    }
  }, [activeTab]);

  useEffect(() => {
    if (location.pathname === '/resources' || location.pathname === '/resources/') {
      navigate('/resources/bmi-calculator', { replace: true });
    }
  }, [location.pathname, navigate]);

  // Tabs definitions
  const tabs = [
    { id: 'bmi', label: 'BMI Calculator', icon: Activity, desc: 'Assess body mass category' },
    { id: 'weight-goal', label: 'Weight Goal', icon: TrendingDown, desc: 'Timeline and milestones' },
    { id: 'calorie', label: 'Calorie Calculator', icon: Flame, desc: 'Daily energy requirements' },
    { id: 'guide', label: 'Weight Loss Guide', icon: BookOpen, desc: 'Editorial slimming handbook' },
    { id: 'charts', label: 'Diet & PDF Charts', icon: Award, desc: 'Premium printable guides' },
    { id: 'faq', label: 'FAQ Shield', icon: HelpCircle, desc: 'Common student answers' },
  ] as const;

  // -- BMI CALCULATOR STATE & LOGIC --
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null);

  useEffect(() => {
    if (downloadMessage) {
      const timer = setTimeout(() => {
        setDownloadMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [downloadMessage]);

  const [bmiHeight, setBmiHeight] = useState<number>(165);
  const [bmiWeight, setBmiWeight] = useState<number>(68);

  const bmiValue = useMemo(() => {
    const heightInMeters = bmiHeight / 100;
    if (heightInMeters === 0) return 0;
    return parseFloat((bmiWeight / (heightInMeters * heightInMeters)).toFixed(1));
  }, [bmiHeight, bmiWeight]);

  const bmiCategory = useMemo(() => {
    if (bmiValue < 18.5) return { name: 'Underweight', color: 'text-amber-600 bg-amber-500/10 border-amber-500/20', advice: 'Focus on nourishing whole meals, building muscle density through restorative Hatha and slow-flow Vinyasa yoga.', percentage: 25 };
    if (bmiValue < 25) return { name: 'Optimal Healthy Range', color: 'text-emerald-700 bg-emerald-500/10 border-emerald-500/20', advice: 'Wonderful balance. Sustain this vitality by enhancing core alignment, joint flexibility, and inner cellular combustion (Agni).', percentage: 50 };
    if (bmiValue < 30) return { name: 'Overweight Range', color: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20', advice: 'Your body is primed for metabolic stimulation. The 30-min Harmony natural slimming postures can trigger metabolic speeds without starvation.', percentage: 75 };
    return { name: 'Marked Obesity Range', color: 'text-rose-700 bg-rose-500/10 border-rose-500/20', advice: 'Holistic support is key. Activating deep thyroid endocrine pathways and digestive warmth with targeted therapy safely releases stagnant fat.', percentage: 95 };
  }, [bmiValue]);


  // -- WEIGHT LOSS GOAL CALCULATOR STATE & LOGIC --
  const [currentW, setCurrentW] = useState<number>(85);
  const [targetW, setTargetW] = useState<number>(70);
  const [slimmingPace, setSlimmingPace] = useState<number>(0.7); // kg per week

  const goalResults = useMemo(() => {
    const delta = Math.max(0, currentW - targetW);
    const weeks = slimmingPace > 0 ? Math.ceil(delta / slimmingPace) : 0;
    
    // Calculate milestones dates from current time 2026-06-20
    const today = new Date('2026-06-20');
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + (weeks * 7));

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = targetDate.toLocaleDateString('en-US', options);

    return {
      delta,
      weeks,
      dateString,
      phase1: Math.ceil(weeks * 0.25) || 1,
      phase2: Math.ceil(weeks * 0.6) || 2,
    };
  }, [currentW, targetW, slimmingPace]);


  // -- CALORIE CALCULATOR STATE & LOGIC --
  const [calAge, setCalAge] = useState<number>(34);
  const [calGender, setCalGender] = useState<'female' | 'male'>('female');
  const [calHeight, setCalHeight] = useState<number>(165);
  const [calWeight, setCalWeight] = useState<number>(75);
  const [calActivity, setCalActivity] = useState<string>('light');

  const calorieResults = useMemo(() => {
    // Mifflin-St Jeor
    let bmr = (10 * calWeight) + (6.25 * calHeight) - (5 * calAge);
    if (calGender === 'female') {
      bmr -= 161;
    } else {
      bmr += 5;
    }

    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
    };

    const factor = multipliers[calActivity] || 1.375;
    const maintenance = Math.round(bmr * factor);
    const fatLossTarget = Math.round(maintenance - 500);

    // Macros based on 40% Carb, 30% Protein, 30% Healthy Fat
    const proteinGrams = Math.round((fatLossTarget * 0.3) / 4);
    const carbGrams = Math.round((fatLossTarget * 0.4) / 4);
    const fatGrams = Math.round((fatLossTarget * 0.3) / 9);

    return {
      bmr: Math.round(bmr),
      maintenance,
      fatLossTarget: Math.max(1200, fatLossTarget),
      proteinGrams,
      carbGrams,
      fatGrams
    };
  }, [calAge, calGender, calHeight, calWeight, calActivity]);


  // -- FAQ EXPANSIONS STATE --
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can natural yoga practices truly trigger weight loss as effectively as HIIT?",
      a: "Yes. Traditional high-impact drills spike stress hormones (cortisol), which orders the body to clamp down on abdominal lipids. Targeted yoga postures (like endocrine throat pressure alignments and solar-plexus thermal twist locks) optimize thyroid function and lower vascular stress, instructing your hormones to naturally release plateau weights safely."
    },
    {
      q: "I have tried strict calorie counting but my weight plateaued. Why?",
      a: "Plateaus are rarely thermodynamic; they are hormonal and cellular. If thyroid secretions are sluggish or cortisol is elevated, your cellular engine lowers its metabolic baseline. Harmony Slimming restores thyroid baseline equilibrium and digestive kindle (Agni), changing your cellular operating setpoint."
    },
    {
      q: "Am I flexible enough? I have not practiced yoga in years.",
      a: "Our programs are therapeutically personalized. Master S. Anjaneyulu utilizes anatomical supports and incremental posture scales. Alignment is relative to your joint longevity; we build stability first, then flexibility."
    },
    {
      q: "Do you offer physical in-studio coaching in Vijayawada?",
      a: "Absolutely. We are situated behind SV Ranga Rao Hospital, Mogalrajapuram, Vijayawada, offering a serene luxury sanctuary space. For global practitioners, we stream live online sessions mapped directly with personal posture review checkpoints."
    },
    {
      q: "How fast will I witness positive metabolic changes?",
      a: "Most practitioners report notable digestion relief, deep restorative sleep patterns, and improved energy levels within the first 3 days. Progressive physical slimming typically registers in waistlines within 14 to 21 days."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-premium-light relative" id="resources-page-container">
      {/* Non-Blocking Download Toast Banner */}
      <AnimatePresence>
        {downloadMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 sm:right-10 z-[1000] font-sans text-xs bg-[#021a17] text-white py-4 px-6 rounded-2xl border border-brand-gold/20 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
            <span className="font-semibold leading-relaxed">{downloadMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header Panel resembling Aman Resorts styled spacing */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-brand-sage/20 to-transparent overflow-hidden">
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-emerald/5 blur-3xl" />
          <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1 px-3 py-1 bg-brand-emerald/10 text-brand-emerald rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3 w-3 text-brand-gold" />
            Curated Resources Hub
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal"
          >
            Premium Wellness <span className="text-brand-emerald font-semibold font-serif italic">Assessment Tools</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3.5 max-w-2xl mx-auto text-sm text-brand-charcoal/65 leading-relaxed font-sans"
          >
            Utilize our scientific wellness tools designed by expert masters at Harmony Center to estimate metabolic pace, caloric guidelines, and healthy transformation paths.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Premium Floating Card Selector */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 z-40">
            <style>{`
              .premium-active-tab {
                background-color: #0F766E !important;
                color: #FFFFFF !important;
                border-color: #0F766E !important;
              }
              .premium-active-tab .tab-icon-container {
                background-color: rgba(255, 255, 255, 0.18) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
              }
              .premium-active-tab .tab-icon {
                color: #F4C96B !important;
                filter: brightness(1.2) drop-shadow(0 0 8px rgba(244, 201, 107, 0.45)) !important;
                transition: all 300ms ease-in-out !important;
              }
              .premium-active-tab:hover .tab-icon {
                transform: scale(1.08) !important;
                filter: brightness(1.2) drop-shadow(0 0 12px rgba(244, 201, 107, 0.65)) !important;
              }
            `}</style>
            <div className="bg-white rounded-2xl border border-brand-sage/40 p-4 shadow-[0_10px_35px_-8px_rgba(15,118,110,0.06)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold/40" />
              <p className="text-[10px] font-bold text-brand-charcoal/45 uppercase tracking-widest mb-4 pl-2">SELECT ASSESSMENT</p>
              
              <div className="space-y-1.5 flex flex-col">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => navigate(getPathFromTab(tab.id))}
                      className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-xl text-left transition-all duration-300 relative group/tab border ${
                        isActive 
                          ? 'premium-active-tab shadow-md' 
                          : 'bg-transparent text-brand-charcoal/75 border-transparent hover:bg-brand-sage/35 hover:text-brand-emerald'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 transition-all duration-300 tab-icon-container ${isActive ? '' : 'bg-brand-sage/40 text-brand-emerald'}`}>
                        <Icon className={`h-4 w-4 transition-all duration-300 origin-center tab-icon ${isActive ? '' : 'group-hover/tab:scale-[1.08]'}`} />
                      </div>
                      <div className="overflow-hidden">
                        <span className={`block text-xs font-bold font-sans tracking-wide transition-colors ${isActive ? 'text-[#FFFFFF]' : 'text-brand-charcoal'}`}>{tab.label}</span>
                        <span className={`block text-[10px] truncate leading-none mt-0.5 transition-colors ${isActive ? 'text-[rgba(255,255,255,0.8)]' : 'text-brand-charcoal/45 group-hover/tab:text-brand-emerald/70'}`}>{tab.desc}</span>
                      </div>
                      <ChevronRight className={`ml-auto h-3.5 w-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#F4C96B]' : 'translate-x-0 group-hover/tab:translate-x-0.5 text-brand-charcoal/30'}`} />
                    </button>
                  );
                })}
              </div>

              {/* VIP Trial Box */}
              <div className="mt-6 pt-5 border-t border-brand-sage/40 text-center">
                <p className="text-[11px] font-semibold text-brand-charcoal/70 uppercase tracking-widest mb-2.5">Ready to proceed?</p>
                <button
                  onClick={() => onBookClick('Resources Consultation')}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-brand-emerald text-white text-[11px] font-bold uppercase tracking-wider hover:bg-brand-emerald-hover cursor-pointer transition-colors"
                >
                  <span>Claim Elite 3-Day Pass</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Main Work Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[24px] border border-brand-sage/35 shadow-[0_20px_50px_-20px_rgba(15,118,110,0.06)] p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Background decorative seals */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-sage/10 rounded-full blur-2xl pointer-events-none" />

                <SEO 
                  title={seoConfig.title} 
                  description={seoConfig.description} 
                  path={seoConfig.path} 
                />

                {/* Tab content 1: BMI Calculator */}
                {activeTab === 'bmi' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <Activity className="h-5 w-5 text-brand-gold" />
                        BMI Vital Assessment
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        Find out if your body mass ratio is balanced, and read matching natural yoga advice.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Inputs column */}
                      <div className="space-y-5 bg-brand-ivory/40 p-5 rounded-2xl border border-brand-sage/30">
                        {/* Height slider */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-baseline">
                            <label className="text-xs font-bold text-brand-charcoal/85 uppercase tracking-wide">Height</label>
                            <span className="font-serif text-lg font-bold text-brand-emerald">{bmiHeight} <span className="text-[11px] text-brand-charcoal/50 font-sans">cm</span></span>
                          </div>
                          <input 
                            type="range" 
                            min="120" 
                            max="220" 
                            value={bmiHeight} 
                            onChange={(e) => setBmiHeight(parseInt(e.target.value))}
                            className="w-full accent-brand-emerald h-1 bg-brand-sage/60 rounded-lg cursor-pointer"
                          />
                          <div className="flex justify-between text-[10px] text-brand-charcoal/40 font-mono">
                            <span>120 cm</span>
                            <span>170 cm</span>
                            <span>220 cm</span>
                          </div>
                        </div>

                        {/* Weight slider */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-baseline">
                            <label className="text-xs font-bold text-brand-charcoal/85 uppercase tracking-wide">Weight</label>
                            <span className="font-serif text-lg font-bold text-brand-emerald">{bmiWeight} <span className="text-[11px] text-brand-charcoal/50 font-sans">kg</span></span>
                          </div>
                          <input 
                            type="range" 
                            min="40" 
                            max="150" 
                            value={bmiWeight} 
                            onChange={(e) => setBmiWeight(parseInt(e.target.value))}
                            className="w-full accent-brand-emerald h-1 bg-brand-sage/60 rounded-lg cursor-pointer"
                          />
                          <div className="flex justify-between text-[10px] text-brand-charcoal/40 font-mono">
                            <span>40 kg</span>
                            <span>95 kg</span>
                            <span>150 kg</span>
                          </div>
                        </div>
                      </div>

                      {/* Display Outcomes column */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div className="text-center p-5 rounded-2xl bg-brand-sage/20 border border-brand-sage/40 flex flex-col justify-center items-center relative overflow-hidden">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/40 font-sans">YOUR BODY MASS INDEX</p>
                          <p className="font-serif text-5xl font-bold text-brand-emerald mt-1.5">{bmiValue}</p>
                          
                          <div className={`mt-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border ${bmiCategory.color}`}>
                            {bmiCategory.name}
                          </div>
                        </div>

                        {/* Progress Bar representation */}
                        <div className="space-y-1.5 px-1 bg-brand-ivory/30 p-4 rounded-xl border border-brand-sage/20">
                          <div className="flex justify-between text-[10px] text-brand-charcoal/50 font-bold uppercase">
                            <span>Category Scale</span>
                            <span>{bmiValue} BMI</span>
                          </div>
                          <div className="relative h-2.5 w-full bg-brand-sage/30 rounded-full overflow-hidden">
                            <motion.div 
                              className="absolute left-0 top-0 h-full bg-brand-gold rounded-full"
                              animate={{ width: `${Math.min(100, (bmiValue / 40) * 100)}%` }}
                              transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            />
                          </div>
                          <div className="flex justify-between text-[9px] text-brand-charcoal/40 font-mono">
                            <span>Under 18.5</span>
                            <span>18.5 - 24.9</span>
                            <span>25.0 - 29.9</span>
                            <span>30+</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expert therapist feedback block */}
                    <div className="bg-brand-ivory/50 border-l-3 border-brand-gold p-4 rounded-r-xl rounded-l-xs space-y-2 relative overflow-hidden">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-gold" />
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Master Companion Advice</span>
                      </div>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans">
                        {bmiCategory.advice}
                      </p>
                    </div>

                    {/* Trial pass call to action */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onBookClick(`BMI consultation: BMI ${bmiValue}`)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-emerald text-brand-ivory hover:bg-brand-emerald-hover text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm transition-colors"
                      >
                        <span>Reserve therapist consultation for BMI {bmiValue}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab content 2: Weight Loss Goal Calculator */}
                {activeTab === 'weight-goal' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-brand-gold" />
                        Healthy Weight Slimming Timeline
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        Establish milestones for sustainable lipid release using realistic timelines.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Input fields */}
                      <div className="space-y-4 bg-brand-ivory/40 p-5 rounded-2xl border border-brand-sage/30">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase text-brand-charcoal/70 tracking-wider block">Current Weight</label>
                            <div className="relative">
                              <input 
                                type="number" 
                                value={currentW} 
                                onChange={(e) => setCurrentW(Math.max(30, parseInt(e.target.value) || 0))}
                                className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden"
                              />
                              <span className="absolute right-3 top-3 text-[10px] font-bold text-brand-charcoal/40 font-mono">KG</span>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase text-brand-charcoal/70 tracking-wider block">Target Weight</label>
                            <div className="relative">
                              <input 
                                type="number" 
                                value={targetW} 
                                onChange={(e) => setTargetW(Math.max(30, parseInt(e.target.value) || 0))}
                                className="w-full rounded-xl border border-brand-sage/60 bg-white p-3 text-sm font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden"
                              />
                              <span className="absolute right-3 top-3 text-[10px] font-bold text-brand-charcoal/40 font-mono">KG</span>
                            </div>
                          </div>
                        </div>

                        {/* Pace Slider */}
                        <div className="space-y-2 pt-1 border-t border-brand-sage/20">
                          <div className="flex justify-between items-baseline">
                            <label className="text-[11px] font-bold text-brand-charcoal/85 uppercase tracking-wide">Slimming Pace</label>
                            <span className="font-serif text-[15px] font-bold text-[#b58552]">
                              {slimmingPace === 0.5 ? 'Gentle Flow (0.5 kg/wk)' : slimmingPace === 0.7 ? 'Optimal Harmony (0.7 kg/wk)' : 'Adhyatma Shift (1.0 kg/wk)'}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2.5">
                            {[0.5, 0.7, 1.0].map((pVal) => (
                              <button
                                key={pVal}
                                type="button"
                                onClick={() => setSlimmingPace(pVal)}
                                className={`p-2.5 rounded-xl text-center text-xs font-bold border cursor-pointer transition-all ${
                                  slimmingPace === pVal 
                                    ? 'bg-brand-emerald text-brand-ivory border-brand-emerald shadow-sm' 
                                    : 'bg-white text-brand-charcoal/70 border-brand-sage/50 hover:bg-brand-sage/20'
                                }`}
                              >
                                {pVal} kg/wk
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Display Results */}
                      <div className="space-y-4">
                        <div className="bg-brand-emerald/5 p-5 border border-brand-sage/35 rounded-2xl flex flex-col justify-between h-full">
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-brand-sage/20 pb-2.5">
                              <span className="text-xs font-semibold text-brand-charcoal/60">Total Target Release</span>
                              <span className="font-serif text-xl font-bold text-brand-emerald">{goalResults.delta} kg</span>
                            </div>

                            <div className="flex justify-between items-center border-b border-brand-sage/20 pb-2.5">
                              <span className="text-xs font-semibold text-brand-charcoal/60">Time Required</span>
                              <span className="font-serif text-xl font-bold text-[#b58552]">{goalResults.weeks} weeks</span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-xs font-semibold text-brand-charcoal/60">Estimated Target Date</span>
                              <span className="font-serif text-[15px] font-bold text-brand-emerald text-right">{goalResults.dateString}</span>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-brand-sage/20 bg-brand-sage/20 p-3 rounded-xl border border-brand-sage/25">
                            <div className="flex items-center gap-1.5 text-brand-emerald font-bold text-[10px] uppercase tracking-widest">
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                              Therapeutic Slimming Schedule
                            </div>
                            <p className="text-[11px] text-brand-charcoal/70 mt-1 font-sans leading-relaxed">
                              With {slimmingPace} kg/week active Posture realignment, thyroid stimulation and Agni fire reactivation will maintain progress without starvation rebound loops.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline roadmap of stages */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[11px] font-bold text-brand-charcoal/50 uppercase tracking-widest pl-1">PREMIUM METABOLIC TIMELINE PROGRESSION</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-brand-ivory rounded-xl border border-brand-sage/30 relative">
                          <span className="absolute right-3 top-3 text-[10px] font-bold text-brand-gold/30 uppercase font-sans">PHASE 1</span>
                          <p className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider">Awakening (Wk 1-{goalResults.phase1})</p>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed mt-1">Realigning digestion pathways & purging internal fluids. Stagnant swelling fades.</p>
                        </div>
                        
                        <div className="p-4 bg-brand-ivory rounded-xl border border-brand-sage/30 relative">
                          <span className="absolute right-3 top-3 text-[10px] font-bold text-brand-gold/30 uppercase font-sans">PHASE 2</span>
                          <p className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider">Active Spark (Wk {goalResults.phase1 + 1}-{goalResults.phase2})</p>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed mt-1">Deep active thyroid endocrine work & mitochondrial lipid oxidation triggers.</p>
                        </div>

                        <div className="p-4 bg-brand-ivory rounded-xl border border-brand-sage/30 relative">
                          <span className="absolute right-3 top-3 text-[10px] font-bold text-brand-gold/30 uppercase font-sans">PHASE 3</span>
                          <p className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider">Set-Point Seal (Wk {goalResults.phase2 + 1}+)</p>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed mt-1">Calming nervous pathways to cement baseline drop weight for long term stability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab content 3: Daily Calorie Calculator */}
                {activeTab === 'calorie' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <Flame className="h-5 w-5 text-brand-gold" />
                        Daily Energy Guide Assessment
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        Identify maintenance baselines and custom weight-release targets based on thyroid speed and lifestyle.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Left Column Inputs */}
                      <div className="space-y-4 bg-brand-ivory/40 p-5 rounded-2xl border border-brand-sage/30">
                        {/* Gender & Age */}
                        <div className="grid grid-cols-2 gap-3 pb-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-brand-charcoal/65 uppercase tracking-wider">Gender</label>
                            <div className="flex gap-1">
                              {['female', 'male'].map((g) => (
                                <button
                                  key={g}
                                  type="button"
                                  onClick={() => setCalGender(g as 'female' | 'male')}
                                  className={`flex-1 p-2 text-xs font-bold rounded-lg border capitalize cursor-pointer transition-all ${
                                    calGender === g 
                                      ? 'bg-brand-emerald text-brand-ivory border-brand-emerald shadow-xs' 
                                      : 'bg-white text-brand-charcoal/65 border-brand-sage/40 hover:bg-brand-sage/10'
                                  }`}
                                >
                                  {g}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-brand-charcoal/65 uppercase tracking-wider block">Age</label>
                            <input 
                              type="number" 
                              value={calAge} 
                              onChange={(e) => setCalAge(Math.max(10, parseInt(e.target.value) || 0))}
                              className="w-full rounded-lg border border-brand-sage/60 bg-white p-2 text-xs font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden"
                            />
                          </div>
                        </div>

                        {/* Height & Weight Inputs */}
                        <div className="grid grid-cols-2 gap-3 pb-3 border-t border-brand-sage/20 pt-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-brand-charcoal/65 uppercase tracking-wider block">Height (CM)</label>
                            <input 
                              type="number" 
                              value={calHeight} 
                              onChange={(e) => setCalHeight(Math.max(100, parseInt(e.target.value) || 0))}
                              className="w-full rounded-lg border border-brand-sage/60 bg-white p-2 text-xs font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-brand-charcoal/65 uppercase tracking-wider block">Weight (KG)</label>
                            <input 
                              type="number" 
                              value={calWeight} 
                              onChange={(e) => setCalWeight(Math.max(30, parseInt(e.target.value) || 0))}
                              className="w-full rounded-lg border border-brand-sage/60 bg-white p-2 text-xs font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden"
                            />
                          </div>
                        </div>

                        {/* Activity Level Selector */}
                        <div className="space-y-1 border-t border-brand-sage/20 pt-3">
                          <label className="text-[10px] font-bold text-brand-charcoal/65 uppercase tracking-wider block">Lifestyle Activity</label>
                          <select 
                            value={calActivity}
                            onChange={(e) => setCalActivity(e.target.value)}
                            className="w-full rounded-lg border border-brand-sage/60 bg-white p-2 text-xs font-bold text-brand-emerald focus:border-brand-gold focus:outline-hidden cursor-pointer"
                          >
                            <option value="sedentary">Sedentary (desk job, low movement)</option>
                            <option value="light">Gentle Activity (gentle movement 1-2 days/wk)</option>
                            <option value="moderate">Active Catalyst (metabolic workouts 3-4 days/wk)</option>
                            <option value="very">Vigorous Vitality (hard routines 5-6 days/wk)</option>
                          </select>
                        </div>
                      </div>

                      {/* Right Column Results Display */}
                      <div className="space-y-4">
                        <div className="bg-brand-sage/10 p-5 rounded-2xl border border-brand-sage/35 h-full flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] font-bold uppercase text-brand-charcoal/50 tracking-wider">YOUR LIFESTYLE GUIDELINES</p>
                            
                            <div className="mt-4 space-y-3">
                              <div className="flex justify-between items-center border-b border-brand-sage/20 pb-2">
                                <span className="text-xs text-brand-charcoal/60">Estimated BMR (Resting Energy)</span>
                                <span className="font-mono text-sm font-bold text-brand-emerald">{calorieResults.bmr} kcal</span>
                              </div>
                              
                              <div className="flex justify-between items-center border-b border-brand-sage/20 pb-2">
                                <span className="text-xs text-brand-charcoal/60">Maintenance Intake (TDEE)</span>
                                <span className="font-mono text-sm font-bold text-brand-emerald">{calorieResults.maintenance} kcal</span>
                              </div>

                              <div className="bg-brand-emerald text-brand-ivory rounded-xl p-3 flex justify-between items-center mt-3 shadow-xs">
                                <span className="text-xs font-bold uppercase tracking-wider">Slimming Target</span>
                                <span className="font-serif text-lg font-bold text-[#faf9f6]">{calorieResults.fatLossTarget} kcal</span>
                              </div>
                            </div>
                          </div>

                          {/* Macronutrient Splits */}
                          <div className="mt-4 pt-3 border-t border-brand-sage/20">
                            <p className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-2 text-center">TAILORED MACRONUTRIENT COMBINATION</p>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100 text-center">
                                <p className="text-[9px] font-bold text-teal-600 uppercase tracking-wider">Proteins</p>
                                <p className="font-mono text-[13px] font-bold text-brand-emerald mt-1">{calorieResults.proteinGrams}g</p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-100 text-center">
                                <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider font-sans">Slow Carbs</p>
                                <p className="font-mono text-[13px] font-bold text-brand-gold mt-1">{calorieResults.carbGrams}g</p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                                <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">Healthy Fats</p>
                                <p className="font-mono text-[13px] font-bold text-brand-emerald mt-1">{calorieResults.fatGrams}g</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-emerald/5 border-l-3 border-brand-emerald p-4 rounded-r-xl rounded-l-xs text-xs text-brand-charcoal/80 font-sans leading-relaxed flex items-start gap-2.5">
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-emerald shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-brand-emerald uppercase tracking-wide block">Premium Nutritional Doctrine: </span>
                        Always focus on quality density rather than hard starvation deprivation. Starving will slow down thyroid function, but drinking warm botanical teas and practicing metabolic twists elevates mitochondrial combustion.
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab content 4: Weight Loss Guide */}
                {activeTab === 'guide' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-brand-gold" />
                        The Harmony Natural Slimming Handbook
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        Curated scientific advice and endocrine strategies designed by master therapists.
                      </p>
                    </div>

                    <div className="prose prose-emerald max-w-none text-brand-charcoal/85 space-y-6 text-sm font-sans leading-relaxed">
                      
                      {/* Section 1 */}
                      <div className="bg-brand-ivory/50 rounded-2xl border border-brand-sage/20 p-5 space-y-2.5">
                        <span className="inline-block rounded-lg bg-brand-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-[#b58552] uppercase tracking-widest">CHAPTER 1</span>
                        <h3 className="font-serif text-lg font-bold text-brand-emerald">The Fallacy of Extreme Cardio & Caloric Starvation</h3>
                        <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                          Conventional weight loss commands high-heart-rate jogging and strict caloric deprivations. However, when the nervous system enters continuous high stress, the adrenal glands spike cortisol emissions. Elevated cortisol informs human cells to protect stubborn fat storage (primarily visceral bellies) to fuel survival. Our method centers around gentle spinal alignments and deep breathing to restore thyroid baseline health, unlocking cellular fat releases without triggers.
                        </p>
                      </div>

                      {/* Section 2 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-brand-sage/25 bg-brand-sage/5 space-y-2">
                          <p className="font-serif text-[15px] font-bold text-brand-emerald flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-brand-gold" />
                            Agni: Restoring The Digestive Fire
                          </p>
                          <p className="text-xs text-brand-charcoal/65 leading-relaxed">
                            Agni represents the heat within your digestive engine. When Agni is sluggish, heavy metals and toxic substances (Ama) settle around organs, stalling fat metabolism. Targeted twists (such as Ardha Matsyendrasana) physically compress abdominal arteries, sending oxygenated blood directly to organs on release, reviving core digestions.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl border border-brand-sage/25 bg-brand-sage/5 space-y-2">
                          <p className="font-serif text-[15px] font-bold text-brand-emerald flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-brand-gold" />
                            Endocrine Throat Compression
                          </p>
                          <p className="text-xs text-brand-charcoal/65 leading-relaxed">
                            Thyroid secretion hormones directly dictate metabolic speed. Utilizing deep throat closure pressure postures, including shoulder-stand supports or chin pressure locks (Jalandhara Bandha), stimulates standard thyroxine emissions, keeping basal thermic burn curves highly reactive.
                          </p>
                        </div>
                      </div>

                      {/* Summary callout quotes */}
                      <div className="text-center py-6 px-4 border-t border-b border-brand-sage/35 max-w-xl mx-auto italic font-serif text-sm text-brand-emerald">
                        "Your weight is not a failure of character; it is a metabolic signal. Listen to the tissue alignments and hormonal plateaus, and balance them naturally."
                        <span className="block mt-2 font-sans font-bold text-[10px] uppercase tracking-widest text-[#b58552] not-italic">— Master S. Anjaneyulu</span>
                      </div>

                      <div className="bg-brand-emerald text-brand-ivory p-5 rounded-2xl space-y-3">
                        <p className="font-serif text-md font-bold text-[#faf9f6]">Claim Your Companion Blueprints</p>
                        <p className="text-xs text-brand-sage leading-relaxed">
                          Enter our elite VIP coaching cohort. This includes exact daily nutritional guides mapping to natural post-session thermic cycles, live video adjustments, and a customized routine folder.
                        </p>
                        <button
                          type="button"
                          onClick={() => onBookClick('Companion Blueprint Guide')}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#D4A373] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:bg-brand-gold cursor-pointer transition-colors"
                        >
                          <span>Get Personalized Natural Slimming Pass</span>
                          <ArrowRight className="h-3.5 w-3.5 text-brand-charcoal" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab content: Diet & PDF Charts */}
                {activeTab === 'charts' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <Award className="h-5 w-5 text-brand-gold" />
                        Printable Diet Charts & Guides
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        High-contrast, expert-styled clinical brochures and Ayurvedic recipes curated by S. Anjaneyulu.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* PDF 1 */}
                      <div className="bg-brand-ivory/30 p-5 rounded-2xl border border-brand-sage/20 flex flex-col justify-between font-sans">
                        <div className="space-y-3">
                          <span className="text-[9px] font-bold text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/15 px-2.5 py-1 rounded-full uppercase tracking-wider">Ayurvedic Nutrition</span>
                          <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug">7-Day Metabolic Flush Diet Chart</h3>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                            Specific vegetarian ingredients, morning herbal brews, and metabolic timing schedules to spark your digestive fires (Agni) naturally.
                          </p>
                        </div>
                        <div className="pt-5 border-t border-brand-sage/10 mt-5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider">PDF Manual (1.8 MB)</span>
                          <button 
                            type="button" 
                            onClick={() => setDownloadMessage("Success: Preparing '7-Day Metabolic Flush Diet Chart.pdf' file for instant download on your local device.")}
                            className="px-4 py-2 bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Download PDF
                          </button>
                        </div>
                      </div>

                      {/* PDF 2 */}
                      <div className="bg-brand-ivory/30 p-5 rounded-2xl border border-brand-sage/20 flex flex-col justify-between font-sans">
                        <div className="space-y-3">
                          <span className="text-[9px] font-bold text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/15 px-2.5 py-1 rounded-full uppercase tracking-wider">Spinal Orthotics</span>
                          <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug">Corporate Lumbar Posture Routine</h3>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                            A highly visual sheet detailing 5 seated physical realignment stretches to release locked back metrics during hectic office schedules.
                          </p>
                        </div>
                        <div className="pt-5 border-t border-brand-sage/10 mt-5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider">PDF Manual (2.4 MB)</span>
                          <button 
                            type="button" 
                            onClick={() => setDownloadMessage("Success: Preparing 'Corporate Lumbar Posture Stretching.pdf' file for instant download on your local device.")}
                            className="px-4 py-2 bg-brand-emerald hover:bg-brand-emerald-hover text-brand-ivory rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Download PDF
                          </button>
                        </div>
                      </div>

                      {/* PDF 3 */}
                      <div className="bg-brand-ivory/30 p-5 rounded-2xl border border-brand-sage/20 flex flex-col justify-between font-sans">
                        <div className="space-y-3">
                          <span className="text-[9px] font-bold text-[#b58552] bg-brand-gold/10 border border-brand-gold/15 px-2.5 py-1 rounded-full uppercase tracking-wider">Metabolism loops</span>
                          <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug">Thyroid Activation Breathing sequence</h3>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                            Respiratory maps and lock sequence durations mapped precisely to stimulate sluggish thyroid secretional pathways for weight plateaus.
                          </p>
                        </div>
                        <div className="pt-5 border-t border-brand-sage/10 mt-5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#b58552] uppercase tracking-wider">PDF Manual (1.2 MB)</span>
                          <button 
                            type="button" 
                            onClick={() => setDownloadMessage("Success: Preparing 'Thyroid Activation Breathing Blueprint.pdf' for instant download.")}
                            className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Download PDF
                          </button>
                        </div>
                      </div>

                      {/* PDF 4 */}
                      <div className="bg-brand-ivory/30 p-5 rounded-2xl border border-brand-sage/20 flex flex-col justify-between font-sans">
                        <div className="space-y-3">
                          <span className="text-[9px] font-bold text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/15 px-2.5 py-1 rounded-full uppercase tracking-wider">Complete handbook</span>
                          <h3 className="font-serif text-lg font-bold text-brand-charcoal leading-snug">Harmony Intake & Screening Questionnaire</h3>
                          <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                            Our standard clinical onboarding document. Assess your physical baseline, metabolic history, and submit it before your first trial batch.
                          </p>
                        </div>
                        <div className="pt-5 border-t border-brand-sage/10 mt-5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider">PDF Manual (900 KB)</span>
                          <button 
                            type="button" 
                            onClick={() => setDownloadMessage("Success: Preparing 'Harmony Onboarding Intake Questionnaire.pdf' download package.")}
                            className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab content 5: FAQ */}
                {activeTab === 'faq' && (
                  <div className="space-y-6">
                    <div className="border-b border-brand-sage/30 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brand-emerald flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-brand-gold" />
                        FAQ Shield - Premium Wisdom
                      </h2>
                      <p className="text-xs text-brand-charcoal/50 font-sans mt-1">
                        Find transparent clarity surrounding thyroid weight plateaus, joint safety, and Bansara Hills studio options.
                      </p>
                    </div>

                    {/* Search block */}
                    <div className="relative">
                      <input 
                        type="text"
                        placeholder="Search answers from the Master..."
                        value={faqSearch}
                        onChange={(e) => setFaqSearch(e.target.value)}
                        className="w-full text-xs font-medium rounded-xl border border-brand-sage/50 bg-brand-ivory/50 px-4 py-3 text-brand-charcoal focus:border-brand-emerald focus:outline-hidden"
                      />
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                      {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, idx) => {
                          const isExpanded = expandedFaq === idx;
                          return (
                            <div 
                              key={idx}
                              className="rounded-xl border border-brand-sage/30 bg-brand-ivory/20 overflow-hidden transition-all duration-300"
                            >
                              <button
                                type="button"
                                onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                                className="w-full flex justify-between items-center text-left p-4 hover:bg-brand-sage/10 transition-colors cursor-pointer"
                              >
                                <span className="font-serif text-sm font-bold text-brand-emerald pr-4">{faq.q}</span>
                                <ChevronRight className={`h-4 w-4 shrink-0 text-brand-gold transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`} />
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="p-4 pt-1 text-xs text-brand-charcoal/70 leading-relaxed border-t border-brand-sage/20 bg-white/60 font-sans">
                                      {faq.a}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8 text-xs text-brand-charcoal/40 font-sans">
                          No matching answer found. Click button below to contact Master S. Anjaneyulu directly.
                        </div>
                      )}
                    </div>

                    {/* FAQ Quick Helpline */}
                    <div className="p-5 rounded-2xl bg-brand-sage/10 border border-brand-sage/25 text-center space-y-3">
                      <p className="text-xs font-bold uppercase text-brand-emerald tracking-wider font-sans">Have a direct question for our master?</p>
                      <p className="text-xs text-brand-charcoal/65 max-w-md mx-auto leading-relaxed">
                        If you have active neck injuries, disc slip plateaus, or targeted metabolic concerns, speak directly with S. Anjaneyulu in Vijayawada.
                      </p>
                      <div className="flex justify-center gap-3">
                        <a
                          href="https://wa.me/917036711097?text=Hi%20Master%20Anjaneyulu,%20I%20have%20a%20specific%20health%20question..."
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 font-bold uppercase text-white rounded-lg text-[10px] tracking-wider transition-colors shadow-sm"
                        >
                          <Flame className="h-3.5 w-3.5 text-white animate-pulse" />
                          <span>Direct WhatsApp Line</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
