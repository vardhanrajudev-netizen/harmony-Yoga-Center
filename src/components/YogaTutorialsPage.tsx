import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Flame, Wind, Sunrise, Clock, ChevronRight, X, Heart, ShieldCheck, Award, MessageSquare, ArrowRight, UserCheck, Phone } from 'lucide-react';
import SEO from './SEO';

interface Tutorial {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  caloriesBurned: string;
  benefits: string[];
  precautions: string[];
  steps: string[];
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  mentor: string;
}

interface YogaTutorialsPageProps {
  onBookClick: (programName?: string) => void;
}

export default function YogaTutorialsPage({ onBookClick }: YogaTutorialsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTutorial, setActiveTutorial] = useState<Tutorial | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Premium stock videos for luxury feel
  const tutorials: Tutorial[] = useMemo(() => [
    {
      id: '1',
      title: 'Surya Namaskar (Sun Salutation Routine)',
      category: 'Morning Yoga Routines',
      difficulty: 'Beginner',
      duration: '15 Mins',
      caloriesBurned: '120 kcal',
      benefits: [
        'Awakens full-body metabolic fire',
        'Stretches major muscle pathways and spinal columns',
        'Improves cardiovascular strength naturally'
      ],
      precautions: [
        'Avoid if suffering from severe hernia or acute high blood pressure',
        'Perform slower if dealing with mild lower back spine soreness'
      ],
      steps: [
        'Pranamasana (Prayer Pose): Stand at the edge of your mat, feet together, hands in prayer posture before the chest.',
        'Hastauttanasana (Raised Arms Pose): Inhale, extend arms upward and gently arch backward from the upper spine.',
        'Padahastasana (Standing Forward Curve): Exhale fully, hinge at the waist, and place palms flat beside feet.',
        'Ashwa Sanchalanasana (Equestrian Pose): Inhale, step your right leg far back, drop your knee, and lift your chin.'
      ],
      description: 'A 12-sequence classical alignment formulated to balance the metabolic rate, tone cellular tissues, and stimulate early morning lymphatic circulation.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-performing-yoga-on-mats-at-sunset-41705-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '2',
      title: 'Yoga for Belly Fat (Core Activator)',
      category: 'Weight Loss Yoga',
      difficulty: 'Intermediate',
      duration: '20 Mins',
      caloriesBurned: '180 kcal',
      benefits: [
        'Ignites deep abdominal muscle activation',
        'Stimulates hepatic and pancreatic secretion stability',
        'Assists in solving rigid hormonal weight plateaus'
      ],
      precautions: [
        'Do not practice right after heavy meals',
        'Avoid excessive strain if in late-stage menstruation or early pregnancy'
      ],
      steps: [
        'Phalakasana (High Board Pose): Align shoulders directly above wrists, creating a straight path from head to heels.',
        'Navasana (Elegant Boat Pose): Balance sitting bones, lift legs at 45 degrees, and extend palms forward.',
        'Urdhva Prasarita Padasana (Leg Lifts): Lie on your back, slowly raise both legs to 90 degrees while pressing lumbar spine flat.',
        'Dhanurasana (Bow Arc Pose): Reach back to hold ankles, lift chest and thighs off the floor, breathing deeply.'
      ],
      description: 'A scientifically compiled sequence focusing on abdominal compression and visceral reflex stimulation to enhance calorie burn.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-exercises-in-a-sunny-studio-41712-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '3',
      title: 'Pranayama Basics (Nervous Balance)',
      category: 'Breathing Exercises',
      difficulty: 'Beginner',
      duration: '10 Mins',
      caloriesBurned: '35 kcal',
      benefits: [
        'Lowers elevated vascular cortisol tension',
        'Enhances arterial blood oxygenation levels',
        'Calms hyperactive neural patterns immediately'
      ],
      precautions: [
        'Do not force retention of breath beyond comfort thresholds',
        'Always maintain an upright, neutral vertical spine posture'
      ],
      steps: [
        'Siddhasana Setup: Sit with crossed legs in absolute symmetry. Touch index and thumb tips in Chin Mudra.',
        'Deep Diaphragmatic Breath: Inhale, expand belly outward, then ribs, then chest. Exhale in reverse flow.',
        'Anulom Vilom (Alternate Nostril): Block right nostril, inhale through left; block left, exhale through right. Repeat.',
        'Bhramari Pranayama (Humming Bee): Block ears with thumbs, eyes with fingers, and hum softly upon a long exhalation.'
      ],
      description: 'An elite breathing masterclass guiding proper diaphragmatic expansion to stabilize thyroid activity and eliminate stress handles in 10 minutes.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-in-nature-31498-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '4',
      title: 'Spinal Mobility Flow (Back Joint Relief)',
      category: 'Flexibility & Strength',
      difficulty: 'Intermediate',
      duration: '18 Mins',
      caloriesBurned: '95 kcal',
      benefits: [
        'Relieves chronic stiffness in lumbar and thoracic vertebrae',
        'Increases fluid lubrication of intervertebral discs',
        'Aligns posture against screen-sitting slouch habits'
      ],
      precautions: [
        'Refrain from deep twists if suffering from severe slipped disc injury',
        'Prioritize breath synchronization over deep athletic range'
      ],
      steps: [
        'Marjaryasana (Cat-Cow Arc): Move rhythmically on all fours, arching spine up and dipping belly down on breath.',
        'Adho Mukha Svanasana (Downward Dog): Direct hips up and back, pressing through palms, pushing heels toward mat.',
        'Bhujangasana (Low Cobra Rise): Gliding forward, pull shoulders back and elevate upper trunk using core back strength.',
        'Setu Bandhasana (Bridge Raise): Lie down, place feet flat near glutes, and lift pelvis toward sky while binding fingers.'
      ],
      description: 'Realign stiff lumbar joints and release long-held micro-tension with smooth, gentle structural expansions designed to restore natural posture.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-stretching-her-arms-in-bed-41481-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '5',
      title: 'Office Desk Yoga (Stress Break)',
      category: 'Meditation & Stress Relief',
      difficulty: 'Beginner',
      duration: '8 Mins',
      caloriesBurned: '30 kcal',
      benefits: [
        'Releases tension from neck, shoulders, and wrists',
        'Can be performed completely seated at any classic chair',
        'Resets intellectual fatigue and enhances focus instantly'
      ],
      precautions: [
        'Use an un-wheeled stable stool or locked chair to ensure balance',
        'Move with patience; avoid quick, jerking muscle stretches'
      ],
      steps: [
        'Seated Neck Release: Drop your right ear to right shoulder, extend left palm downwards, breathing deep.',
        'Seated Spinal Expansion: Clasp fingers behind back, stretch arms downwards, and open upper chest to sky.',
        'Chair Pigeon Joint Opener: Place right ankle on left knee, hinge forward slightly from hips, relaxing head.',
        'Vertical Wrist Massage: Join palms, alternate flexing wrist joints downward and upward to release screen strain.'
      ],
      description: 'A modern, discrete micro-routine targeting key occupational stress points in professional schedules. No athletic gear or mat required.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-exercises-in-a-sunny-studio-41712-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '6',
      title: 'Morning Energy Routine (Vitality Boost)',
      category: 'Morning Yoga Routines',
      difficulty: 'Beginner',
      duration: '12 Mins',
      caloriesBurned: '80 kcal',
      benefits: [
        'Triggers metabolic rate to assist fat storage use',
        'Drives rich morning circulation to cognitive centers',
        'Establishes structural awareness early in your day'
      ],
      precautions: [
        'Practice with an empty stomach for comfort and maximum ease',
        'Maintain soft, fluid breaths during active alignment transitions'
      ],
      steps: [
        'Tadasana (Mountain Balance): Stand high, lift heels, clasp fingers overhead turning palms up.',
        'Virabhadrasana (warrior Star): Lunging deeply with left leg, sweep arms overhead, gazing softly forward.',
        'Urdhva Hastasana (Gentle Sky Reach): Take deep breaths, feeling full lateral rib cage elongation.',
        'Balasana (Spacious Child Pose): Drop knees, push hips to heels, lay forehead down, relaxing respiratory rhythm.'
      ],
      description: 'An uplifting, low-impact flow combining balance sequences with gentle heart openers to elevate energy pathways and establish focus.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-performing-yoga-on-mats-at-sunset-41705-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    },
    {
      id: '7',
      title: "Women's Balance & Thyroid Calmer",
      category: "Women's Wellness Yoga",
      difficulty: 'Intermediate',
      duration: '22 Mins',
      caloriesBurned: '110 kcal',
      benefits: [
        'Nurtures and strengthens endocrine and reproductive zones',
        'Alleviates metabolic blockages triggered by PCOS/Thyroid imbalance',
        'Stretches inner groins, hips, and lower core bands'
      ],
      precautions: [
        'Keep posture gentle and never strain lower abdomen excessively',
        'Use cushion props under thighs if hips feel initially stiff'
      ],
      steps: [
        'Baddha Konasana (Bound Angle Pose): Sit upright, press foot soles together, allow knees to fall outward with ease.',
        'Sarvangasana (Supported shoulder stance): Elevate legs and hips overhead, hands flat on lower back for full balance.',
        'Matsyasana (Spacious Fish Counter): Lie down, arch thoracic spine up, rest head crown gently on mat, opening chest.',
        'Supta Baddha Konasana: Lie relaxed on back with bound soles, place hands on abdomen, breathing organic warmth.'
      ],
      description: 'A dedicated restorative flow custom-curated to regulate pelvic energy, quiet hormonal plateaus, and optimize thyroid tissue functioning.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-in-nature-31498-large.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=800&q=80',
      mentor: 'S. Yoga Anjaneyulu, M.Sc.'
    }
  ], []);

  const categories = ['All', 'Morning Yoga Routines', 'Weight Loss Yoga', 'Breathing Exercises', 'Flexibility & Strength', 'Meditation & Stress Relief', "Women's Wellness Yoga"];

  const filteredTutorials = useMemo(() => {
    if (selectedCategory === 'All') return tutorials;
    return tutorials.filter(t => t.category === selectedCategory);
  }, [selectedCategory, tutorials]);

  return (
    <div className="bg-[#FAF9F6] text-[#1F2937] min-h-screen pt-[80px] font-sans overflow-x-hidden" id="tutorials-page-root">
      <SEO 
        title="Yoga Pose Library & Tutorial Videos | Harmony Yoga Center"
        description="Master your alignments via custom streaming video tutorials guiding morning sun salutations, endocrine weight loss pose adjustments and calming pranayamas."
        path="/yoga-tutorials"
      />
      
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative px-6 sm:px-12 md:px-16 lg:px-20 py-12 lg:py-16 max-w-[1280px] mx-auto border-b border-brand-sage/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/10 px-3.5 py-1 text-[11px] font-bold text-brand-emerald tracking-[0.2em] uppercase url-badge"
            >
              <Sparkles className="h-3 w-3 text-brand-gold fill-current" />
              PREMIUM YOGA LEARNING EXPERIENCE
            </motion.div>

            {/* Headline word reveal */}
            <div className="overflow-hidden scroll-title">
              <motion.h1 
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal tracking-tight leading-[1.1]"
              >
                Master Yoga Through <br />
                <span className="text-brand-emerald italic font-light">Guided Tutorials</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed font-sans max-w-2xl"
            >
              Explore scientifically designed, masterfully structured yoga routines for weight loss, flexibility, thyroid balance, posture correction, and holistic wellness. Practiced sequentially to optimize metabolic secretional output.
            </motion.p>

            {/* Buttons Row with dynamic interaction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  const targetElement = document.getElementById('featured-grid-anchor');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="relative group overflow-hidden px-8 py-4 rounded-full bg-brand-emerald text-brand-ivory text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-brand-emerald/95 duration-300"
              >
                <div className="absolute inset-0 bg-brand-gold/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <Play className="h-4 w-4 text-brand-gold fill-current group-hover:scale-110 transition-transform duration-300" />
                <span>Start Learning</span>
              </button>

              <button
                type="button"
                onClick={() => onBookClick()}
                className="group border border-brand-emerald/30 hover:border-brand-emerald bg-white text-brand-emerald px-8 py-4 rounded-full text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Trust Badges and Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-sage/20 max-w-lg"
            >
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-serif font-bold text-brand-emerald">500+</p>
                <p className="text-[11px] font-bold text-brand-charcoal/65 tracking-wider uppercase font-sans">Students Trained</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-serif font-bold text-brand-emerald">7+ Years</p>
                <p className="text-[11px] font-bold text-brand-charcoal/65 tracking-wider uppercase font-sans">Elite Mentorship</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-serif font-bold text-brand-emerald">100%</p>
                <p className="text-[11px] font-bold text-brand-charcoal/65 tracking-wider uppercase font-sans">Beginner Friendly</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-sage/30 group"
            >
              {/* Gold accent outer frame ring */}
              <div className="absolute inset-4 border border-brand-gold/20 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-500 pointer-events-none z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="Harmony premium yoga meditation tutorial"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Float Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-brand-sage/40 flex items-center gap-3 shadow-lg">
                <div className="p-2.5 rounded-lg bg-brand-emerald/10 text-brand-emerald">
                  <UserCheck className="h-5 w-5 text-brand-emerald" />
                </div>
                <div className="text-left select-none">
                  <p className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest leading-none">Clinical Design</p>
                  <p className="text-xs font-bold text-brand-emerald mt-1">MSC-Certified Posture Corrective Flow</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY SELECTOR CARDS */}
      <section className="py-12 bg-white border-b border-brand-sage/10">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Select Focus Discipline</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal tracking-tight">Structured Wellness Channels</h2>
            <div className="h-[1px] w-12 bg-brand-gold mx-auto mt-2" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  selectedCategory === category 
                    ? 'bg-brand-emerald text-brand-ivory border-brand-emerald shadow-sm' 
                    : 'bg-[#FAF9F6] text-brand-charcoal/75 hover:text-brand-emerald border-brand-sage/30 hover:border-brand-emerald/40 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FEATURED TUTORIALS BENTO GRID */}
      <section className="py-16 px-6 sm:px-12 max-w-[1280px] mx-auto" id="featured-grid-anchor">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 border-b border-brand-sage/20 pb-4">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
              Class Sequences 
              <span className="text-brand-emerald italic font-light ml-2">Currently Streaming</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/60">
              Showing {filteredTutorials.length} tailored physical modules. Click on any routine below to launch active tutorial steps.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-[0.15em] pt-2 md:pt-0">
            <Flame className="h-4 w-4 animate-pulse fill-current text-brand-gold" />
            <span>Optimize Hormonal Response</span>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTutorials.map((tutorial) => (
              <motion.div
                layout
                key={tutorial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(tutorial.id)}
                onMouseLeave={() => setHoveredCard(null)}
                id={`tutorial-core-${tutorial.id}`}
                className="bg-white rounded-2xl border border-brand-sage/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Media Thumbnail */}
                <div 
                  className="relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => setActiveTutorial(tutorial)}
                >
                  <img
                    src={tutorial.thumbnailUrl}
                    alt={tutorial.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Level & Difficulty badge overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex gap-1.5 pointer-events-none select-none">
                    <span className="text-[9px] font-bold text-brand-ivory bg-brand-emerald/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tutorial.difficulty}
                    </span>
                    <span className="text-[9px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tutorial.category}
                    </span>
                  </div>

                  {/* Dynamic Glass Play Button Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-charcoal/20 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-13 h-13 rounded-full bg-white/10 group-hover:bg-brand-gold/90 backdrop-blur-md border border-white/20 hover:border-brand-gold flex items-center justify-center transform group-hover:scale-110 transition-all duration-400 shadow-lg">
                      <Play className="h-5 w-5 text-brand-ivory fill-current translate-x-0.5 group-hover:text-brand-ivory transition-colors" />
                    </div>
                  </div>

                  {/* Floating mini video preview block */}
                  {hoveredCard === tutorial.id && (
                    <div className="absolute inset-0 bg-neutral-950 pointer-events-none overflow-hidden duration-300">
                      <video
                        src={tutorial.videoUrl}
                        muted
                        playsInline
                        loop
                        autoPlay
                        className="w-full h-full object-cover scale-102"
                      />
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal cursor-pointer hover:text-brand-emerald transition-colors leading-tight"
                      onClick={() => setActiveTutorial(tutorial)}
                    >
                      {tutorial.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                      {tutorial.description}
                    </p>
                  </div>

                  {/* Technical values indicators & benefits */}
                  <div className="space-y-3.5 pt-1">
                    <div className="flex items-center gap-4 text-[11px] font-bold text-brand-charcoal/60 uppercase tracking-wider border-y border-brand-sage/15 py-2.5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-brand-gold" />
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center gap-1.5 border-l border-brand-sage/30 pl-4">
                        <Flame className="h-3.5 w-3.5 text-brand-gold" />
                        {tutorial.caloriesBurned}
                      </span>
                    </div>

                    {/* Benefit labels */}
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold uppercase text-brand-gold/90 tracking-wider">Target Clinical Benefit:</p>
                      <ul className="space-y-1">
                        {tutorial.benefits.slice(0, 1).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-brand-charcoal/80">
                            <ShieldCheck className="h-3.5 w-3.5 text-brand-emerald shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Navigation trigger button */}
                  <button
                    type="button"
                    onClick={() => setActiveTutorial(tutorial)}
                    className="w-full py-2.5 rounded-lg border border-brand-sage/30 group-hover:border-brand-emerald text-brand-charcoal/80 group-hover:text-brand-emerald group-hover:bg-brand-emerald/5 transition-all duration-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <span>Watch Tutorial</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. LUXURY DETAIL MODAL DIALOG */}
      <AnimatePresence>
        {activeTutorial && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            id="tutorial-detail-modal"
          >
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTutorial(null)}
              className="absolute inset-0 bg-brand-charcoal/65 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#FAF9F6] rounded-2.5xl overflow-hidden shadow-2xl border border-brand-sage z-10 flex flex-col max-h-[90vh]"
            >
              
              {/* Header block with close trigger */}
              <div className="absolute top-4 right-4 z-30 select-none">
                <button
                  type="button"
                  onClick={() => setActiveTutorial(null)}
                  className="p-2 rounded-full bg-brand-charcoal/80 hover:bg-brand-charcoal text-brand-ivory transition-all shadow-lg active:scale-95 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 scrollbar-thin">
                
                {/* Immersive Video frame */}
                <div className="relative aspect-video bg-black w-full overflow-hidden flex items-center justify-center border-b border-brand-sage/20 shadow-inner">
                  
                  {/* Overlay watermarks */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-0.5">
                    <span className="flex items-center gap-1.5 text-[10px] text-white bg-brand-emerald/90 px-3 py-1 rounded-full backdrop-blur-md font-semibold tracking-wider uppercase">
                      <Heart className="h-3 w-3 text-brand-gold animate-pulse fill-current" />
                      Studio Active Stream
                    </span>
                  </div>

                  <video
                    src={activeTutorial.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    loop
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content body split columns */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Core Title Details */}
                  <div className="space-y-2 border-b border-brand-sage/25 pb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase block">
                      {activeTutorial.category} • Certified Guidance
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-tight">
                      {activeTutorial.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-3xl">
                      {activeTutorial.description}
                    </p>
                  </div>

                  {/* Multi-grid statistics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-4 rounded-xl border border-brand-sage/30">
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-brand-charcoal/40 uppercase tracking-widest font-sans">DURATION</p>
                      <p className="text-sm font-bold text-brand-charcoal">{activeTutorial.duration}</p>
                    </div>
                    <div className="space-y-0.5 border-l border-brand-sage/20 pl-4">
                      <p className="text-[10px] font-bold text-brand-charcoal/40 uppercase tracking-widest font-sans">CALORIE RATE</p>
                      <p className="text-sm font-bold text-brand-charcoal">{activeTutorial.caloriesBurned}</p>
                    </div>
                    <div className="space-y-0.5 border-l border-brand-sage/20 pl-4">
                      <p className="text-[10px] font-bold text-brand-charcoal/40 uppercase tracking-widest font-sans">DIFFICULTY</p>
                      <p className="text-sm font-bold text-brand-emerald">{activeTutorial.difficulty}</p>
                    </div>
                    <div className="space-y-0.5 border-l border-brand-sage/20 pl-4 font-sans">
                      <p className="text-[10px] font-bold text-brand-charcoal/40 uppercase tracking-widest font-sans">LED BY MASTER</p>
                      <p className="text-xs font-bold text-brand-gold line-clamp-1">{activeTutorial.mentor}</p>
                    </div>
                  </div>

                  {/* Two columns: Step-by-step & benefits / precautions */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                    
                    {/* Left detailed steps list */}
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-[13px] font-bold text-brand-charcoal tracking-widest uppercase flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-emerald" />
                        Step-By-Step Practice Blueprint
                      </h4>
                      <ol className="space-y-3.5">
                        {activeTutorial.steps.map((step, index) => {
                          const [title, desc] = step.split(': ');
                          return (
                            <li key={index} className="flex gap-3.5 font-sans">
                              <span className="w-6 h-6 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <div>
                                <h5 className="text-xs sm:text-sm font-bold text-brand-charcoal">{title}</h5>
                                {desc && <p className="text-xs text-brand-charcoal/70 mt-0.5 leading-relaxed">{desc}</p>}
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    </div>

                    {/* Right benefits and precautions panel */}
                    <div className="md:col-span-5 space-y-5">
                      
                      {/* Clinical target benefits */}
                      <div className="bg-brand-emerald/5 p-4 rounded-xl border border-brand-emerald/10 space-y-3">
                        <h4 className="text-[11px] font-bold text-brand-emerald tracking-widest uppercase flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4" />
                          Physiological Benefits
                        </h4>
                        <ul className="space-y-2 text-xs text-brand-charcoal/85">
                          {activeTutorial.benefits.map((benefit, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-brand-emerald font-bold shrink-0">•</span>
                              <span className="leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Clinical pre-check and precautions */}
                      <div className="bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/15 space-y-3">
                        <h4 className="text-[11px] font-bold text-[#b58552] tracking-widest uppercase flex items-center gap-1.5">
                          <Wind className="h-4 w-4" />
                          Health Precautions
                        </h4>
                        <ul className="space-y-2 text-xs text-brand-charcoal/85">
                          {activeTutorial.precautions.map((precaution, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-brand-gold font-bold shrink-0">•</span>
                              <span className="leading-relaxed">{precaution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Action persistent footer block inside modal */}
              <div className="p-4 sm:p-5 bg-white border-t border-brand-sage/20 flex flex-col sm:flex-row items-center justify-between gap-4 z-20 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping shrink-0" />
                  <p className="text-xs text-brand-charcoal/60 leading-tight">
                    Want real-time postural breath correction? Join our next live class.
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    setActiveTutorial(null);
                    onBookClick(activeTutorial?.category || 'Weight Loss Programs');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand-emerald hover:bg-brand-emerald/95 text-brand-ivory text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all duration-300 pointer-events-auto"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-brand-gold fill-current" />
                  <span>Book Complementary Session</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. WHY LEARN WITH HARMONY YOGA YOGA CENTER BRAND */}
      <section className="py-16 px-6 sm:px-12 bg-white border-t border-b border-brand-sage/15">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Handcrafted Excellence</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">The Luxury Wellness Standard</h2>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed font-sans">
              Unlike generic, unmonitored digital video repositories, Harmony channels are designed by clinical specialists to achieve true metabolic realignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'MSC-Therapist Guidance',
                desc: 'Every posture is curated and verified by S. Yoga Anjaneyulu, combining a master’s degree in clinical Yoga Science with real corrective experience.'
              },
              {
                icon: ShieldCheck,
                title: 'Postural Alignment Science',
                desc: 'Each sequence includes detailed safety protocols and modified transitions to ensure total lumbar, knee, and cervical spine support.'
              },
              {
                icon: Clock,
                title: 'Time-Efficient Design',
                desc: 'All routines are optimally capped at 10-20 minutes, directly addressing cellular metabolic acceleration to easily fit occupied lifestyles.'
              }
            ].map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={i} 
                  className="bg-[#FAF9F6] p-6 rounded-2xl border border-brand-sage/20 space-y-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-charcoal">{feature.title}</h3>
                  <p className="text-xs sm:text-[13px] text-brand-charcoal/70 leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. FINAL IMMERSIVE CALL-TO-ACTION SECTION */}
      <section className="relative overflow-hidden py-16 px-6 sm:px-12 bg-brand-emerald text-brand-ivory" id="tutorials-final-cta">
        {/* Subtle decorative background glow */}
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-brand-gold/10 filter blur-[100px] pointer-events-none" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-white/5 filter blur-[120px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Start Your Path</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Begin Your Wellness <br />
            <span className="italic font-light">Transformation Today</span>
          </h2>
          <p className="text-sm text-brand-ivory/85 leading-relaxed font-sans max-w-lg mx-auto">
            Receive personalized, live physical corrections and dietary blueprints tailored directly for your constitutional type. Book a complete free interactive video assessment setup session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 uppercase tracking-wider text-xs font-bold">
            <button
              type="button"
              onClick={() => onBookClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-emerald hover:bg-brand-ivory transition-colors shadow-lg flex items-center justify-center gap-1.5"
            >
              <Award className="h-4 w-4 text-brand-gold fill-current" />
              <span>Book Complimentary Live Session</span>
            </button>

            <a
              href="https://wa.me/917036711097?text=Hello%20Harmony%20Yoga%20Center,%20I%20would%20love%20to%20learn%20more%20about%20your%20natural%20yoga%20treatments%20and%20slimming%20guides!"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="h-4 w-4 text-brand-gold fill-current animate-pulse" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. REINFORCED STICKY MOBILE CALL CTAs FOR OPTIMAL CONVERSIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-sage/20 py-2.5 px-4 flex sm:hidden items-center justify-between gap-3 shadow-2xl pointer-events-auto">
        <a
          href="tel:+917036711097"
          className="flex-1 h-11 rounded-lg border border-brand-sage flex items-center justify-center text-brand-charcoal text-[11px] font-bold uppercase tracking-wider gap-1.5"
        >
          <Phone className="h-3.5 w-3.5 text-brand-gold" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/917036711097?text=Hi%20Harmony%20Yoga,%20interested%20in%20Postural%20Tutorials!"
          target="_blank"
          rel="noreferrer noopener"
          className="flex-1 h-11 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white text-[11px] font-bold uppercase tracking-wider gap-1.5"
        >
          <MessageSquare className="h-3.5 w-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => onBookClick()}
          className="flex-1 h-11 rounded-lg bg-brand-emerald text-brand-ivory text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1"
        >
          <Award className="h-3.5 w-3.5 text-brand-gold fill-current" />
          <span>Book Free</span>
        </button>
      </div>

    </div>
  );
}
