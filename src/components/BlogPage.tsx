import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Search, 
  Heart, 
  User, 
  AlertCircle,
  Mail,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'metabolism' | 'posture' | 'nutrition'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'all' as const, label: 'All Journal Entry' },
    { id: 'metabolism' as const, label: 'Metabolism Science' },
    { id: 'posture' as const, label: 'Spine & Posture Care' },
    { id: 'nutrition' as const, label: 'Ayurvedic Fuel' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Sparks in the Gland: How 30-Min Posture Loops Activate Your Thyroid Secretion',
      category: 'metabolism' as const,
      categoryLabel: 'Metabolism Science',
      readTime: '5 min read',
      date: 'June 18, 2026',
      author: 'S. Yoga Anjaneyulu',
      snippet: 'Static thyroid plateaus are often corrected by targeted cervical flexion movements. Explore the specific physiological feedback loops that stimulate weight management without aggressive starving diets.',
      image: '/assets/images/choose_img.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Lumbar Liberation: Correcting Spine Compressions from Corporate Hours',
      category: 'posture' as const,
      categoryLabel: 'Spine & Posture Care',
      readTime: '6 min read',
      date: 'June 14, 2026',
      author: 'S. Yoga Anjaneyulu',
      snippet: 'Prolonged office desks freeze primary muscle structures and decrease oxygen flow to key joints. Learn how three diagnostic pelvic extensions can alleviate recurring lower back discomfort within days.',
      image: '/assets/images/trainer_hero.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Igniting the Agni: Understanding Your Body Constitutional Dosha Digestive Fire',
      category: 'nutrition' as const,
      categoryLabel: 'Ayurvedic Fuel',
      readTime: '4 min read',
      date: 'June 10, 2026',
      author: 'Clinical Nutrition Consultant',
      snippet: 'Traditional dieting attempts often crash when they violate individual body heat categories. Understand whether your metabolic structure aligns with Vata, Pitta, or Kapha requirements.',
      image: '/assets/images/gallery_3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Visceral Fat Clearance: The Real Healing Power of Deep Diaphragmatic Agitations',
      category: 'metabolism' as const,
      categoryLabel: 'Metabolism Science',
      readTime: '5 min read',
      date: 'June 05, 2026',
      author: 'S. Yoga Anjaneyulu',
      snippet: 'A look at how clinical breath controls stimulate high-efficiency lymphatic pathways. Decreasing internal inflammation processes naturally flushes stubborn lipid cells.',
      image: '/assets/images/gallery_4.jpg',
      featured: false
    }
  ];

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubscribed(true);
    setSubEmail('');
  };

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const categoryMatches = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatches = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatches && searchMatches;
  });

  const featuredPost = blogPosts.find(p => p.featured);
  const standardPosts = filteredPosts.filter(p => !p.featured || selectedCategory !== 'all');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-[var(--navbar-height,80px)] bg-brand-ivory min-h-screen relative overflow-hidden font-sans"
      id="blog-page"
    >
      <SEO 
        title="Sanctuary Wellness Journals & Research | Harmony Yoga Center"
        description="Read scientific research articles on metabolic thyroid triggers, endocrine posture adjustments, and Ayurvedic diet charts written by S. Yoga Anjaneyulu."
        path="/blog"
      />

      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#CFE8D5]/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-1/4 bottom-1/4 w-80 h-80 rounded-full bg-brand-gold-bright/5 blur-3xl pointer-events-none" />

      {/* Hero Banner Section */}
      <section className="py-16 md:py-24 px-6 text-center select-none" id="blog-hero">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[12px] font-bold tracking-[0.25em] text-[#b58552] uppercase block">
            THE WELLNESS JOURNAL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-emerald tracking-tight leading-tight">
            Harmony Curated Chronicles
          </h1>
          <div className="h-[1px] w-20 bg-[#E3B777] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Academic perspectives, physiological structures, and Ayurvedic nutrition secrets designed by master therapist S. Yoga Anjaneyulu to enrich your daily vitality.
          </p>
        </div>
      </section>

      {/* Featured Article Section - displayed if category is 'all' */}
      {selectedCategory === 'all' && featuredPost && !searchQuery && (
        <section className="pb-12 px-6 sm:px-10 lg:px-16" id="blog-featured-section">
          <div className="max-w-[1280px] mx-auto">
            
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#b58552] uppercase block mb-6">
              FEATURED DISPATCH
            </span>

            <div className="bg-white border border-[#CFE8D5]/60 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(15,118,110,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[280px] bg-brand-emerald/10">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[95%] hover:scale-101 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-[#b58552] uppercase tracking-wider">
                    <span>{featuredPost.categoryLabel}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-gold-bright" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-emerald tracking-tight hover:text-brand-emerald/90 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                    {featuredPost.snippet}
                  </p>
                </div>

                <div className="pt-8 border-t border-brand-sage/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-brand-emerald text-brand-ivory flex items-center justify-center font-bold text-xs select-none">
                      YA
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-charcoal leading-none">{featuredPost.author}</p>
                      <p className="text-[9px] text-[#b58552] font-semibold mt-0.5 uppercase tracking-wider">{featuredPost.date}</p>
                    </div>
                  </div>

                  <a 
                    href="#blog-posts"
                    className="h-9 w-9 rounded-full bg-brand-emerald/5 hover:bg-brand-emerald/10 flex items-center justify-center text-brand-emerald transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* Main Blog Filters and Grid */}
      <section className="py-12 px-6 sm:px-10 lg:px-16" id="blog-posts-grid">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Filters & Search Header */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 border-b border-brand-sage/10 pb-8">
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id 
                      ? 'bg-[#0F766E] text-brand-ivory shadow-2xs' 
                      : 'text-brand-charcoal/60 hover:text-brand-emerald hover:bg-brand-emerald/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search inputs */}
            <div className="relative w-full md:w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-brand-sage/50 bg-white text-xs focus:border-brand-emerald focus:outline-hidden"
              />
            </div>

          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts">
            {standardPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white border border-brand-sage/20 rounded-2xl overflow-hidden hover:shadow-xs transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Image */}
                  <div className="relative aspect-[16/10] bg-brand-emerald/5 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover filter brightness-[95%] hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-[#b58552] uppercase tracking-wider">
                      <span>{post.categoryLabel}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-gold-bright" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-brand-charcoal hover:text-brand-emerald transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-brand-charcoal/65 leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-brand-sage/10 flex items-center justify-between">
                  <div className="text-[10px] text-brand-charcoal/50 font-medium">
                    By <span className="font-bold text-brand-charcoal/70">{post.author}</span>
                  </div>
                  <span className="text-[10.5px] uppercase font-bold tracking-widest text-[#0F766E] flex items-center gap-1 group/btn select-none">
                    Read Journal
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            ))}

            {standardPosts.length === 0 && (
              <div className="col-span-full text-center py-20 bg-[#FAF9F6] border border-brand-sage/20 rounded-3xl">
                <AlertCircle className="h-10 w-10 text-brand-gold mx-auto animate-pulse" />
                <h4 className="font-serif text-xl font-bold text-brand-charcoal mt-4">No Entries Discovered</h4>
                <p className="text-xs text-brand-charcoal/50 mt-1 max-w-sm mx-auto">
                  We currently lack specific journals matching your filters or keyword query. Please relax your query.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Journal Newsletter Panel */}
      <section className="py-20 px-6 sm:px-10 lg:px-16" id="blog-newsletter-section">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#FAF9F6] border border-[#CFE8D5] rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xs max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-emerald/5 blur-xl pointer-events-none" />

            <div className="md:w-1/2 space-y-4">
              <span className="text-[11px] font-bold tracking-[2.5px] text-[#b58552] uppercase block">BI-WEEKLY RECHARGES</span>
              <h2 className="font-serif text-3xl font-bold text-brand-emerald leading-tight">
                Harmony Insights direct to your inbox
              </h2>
              <p className="text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed">
                Receive curated yoga science protocols, therapeutic stretching schedules, recipes, and workshop updates from Hyderabad direct to your mail folder. No spam. Only clinical wellness.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form 
                    key="newsletter-email-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribeSubmit} 
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/40" />
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={subEmail}
                        onChange={(e) => setSubEmail(e.target.value)}
                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-brand-sage/60 bg-white text-xs focus:border-brand-emerald focus:outline-hidden"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D6962] text-brand-ivory text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 cursor-pointer block text-center"
                    >
                      Subscribe
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="newsletter-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#CFE8D5]/35 border border-brand-emerald/15 p-6 rounded-2xl text-center space-y-2"
                  >
                    <CheckCircle className="h-8 w-8 text-brand-emerald mx-auto" />
                    <h4 className="font-serif text-lg font-bold text-brand-emerald leading-tight">Successfully Subscribed</h4>
                    <p className="text-[11px] text-brand-charcoal/60 leading-relaxed">
                      Thank you for tuning in to the Harmony Journal! You are officially enqueued for our next bi-weekly wellness release.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}
