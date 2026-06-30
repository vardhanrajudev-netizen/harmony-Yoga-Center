import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  TrendingDown, 
  Flame, 
  BookOpen, 
  HelpCircle, 
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track Resources dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileResourcesExpanded, setIsMobileResourcesExpanded] = useState(false);
  
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicking outside of resources dropdown if clicked on tablet
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Ordered main navigation links with paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Corporate Wellness', path: '/corporate-wellness' },
    { name: 'Yoga Tutorials', path: '/yoga-tutorials' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const primaryRightLinks = [
    { name: 'Contact', path: '/contact' },
  ];

  // Resources dropdown content
  const dropdownItems = [
    {
      id: 'bmi' as const,
      title: 'BMI Calculator',
      description: 'Calculate body mass ratios and health metrics.',
      icon: Activity,
    },
    {
      id: 'weight-goal' as const,
      title: 'Weight Loss Goal Calculator',
      description: 'Find real timelines for sustainable healthy weight loss.',
      icon: TrendingDown,
    },
    {
      id: 'calorie' as const,
      title: 'Daily Calorie Calculator',
      description: 'Sustain vital energy balances with lifestyle estimates.',
      icon: Flame,
    },
    {
      id: 'guide' as const,
      title: 'Weight Loss Guide',
      description: 'Complete expert editorial handbooks for flat stomachs.',
      icon: BookOpen,
    },
    {
      id: 'charts' as const,
      title: 'Diet Charts & PDF Plan',
      description: 'Printable Ayurvedic nutritional checklists and menus.',
      icon: Sparkles,
    },
    {
      id: 'faq' as const,
      title: 'FAQ Shield',
      description: 'Master S. Anjaneyulu answers academic concerns.',
      icon: HelpCircle,
    },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleDropdownItemClick = (e: React.MouseEvent, item: typeof dropdownItems[number]) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const pathsMap: Record<string, string> = {
      'bmi': '/resources/bmi-calculator',
      'weight-goal': '/resources/weight-loss-goal-calculator',
      'calorie': '/resources/calorie-calculator',
      'guide': '/resources/guide',
      'charts': '/resources/diet-charts',
      'faq': '/resources/faq',
    };
    navigate(pathsMap[item.id] || '/resources/bmi-calculator');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isNavActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu"
        style={{
          height: 'var(--navbar-height, 80px)',
          backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.98)' : 'rgba(250, 249, 246, 0.88)',
          backdropFilter: isScrolled ? 'blur(24px)' : 'blur(16px)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(15, 118, 110, 0.08)' : '1px solid rgba(15, 118, 110, 0.04)',
          boxShadow: isScrolled ? '0 15px 35px -15px rgba(15, 118, 110, 0.08)' : 'none',
        }}
      >
        <style>{`
          :root {
            --navbar-height: 64px;
          }
          @media (min-width: 640px) {
            :root {
              --navbar-height: 72px;
            }
          }
          @media (min-width: 1024px) {
            :root {
              --navbar-height: 80px;
            }
          }
        `}</style>

        {/* Max width container */}
        <div className="mx-auto max-w-[1280px] h-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex h-full items-center justify-between">
            
            {/* Logo block */}
            <Logo variant="light" onClick={handleLogoClick} className="group shrink-0" />

            {/* Desktop Navigation Links (Uniform typography and clean state routes) */}
            <div className="hidden lg:flex items-center gap-[24px]" id="desktop-nav-menu">
              
              {navLinks.map((link) => {
                const active = isNavActive(link.path);
                return (
                  <a
                    key={link.name}
                    href="#"
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`font-sans text-[11.5px] font-bold tracking-wider transition-colors duration-250 relative py-1 block uppercase group cursor-pointer ${
                      active ? 'text-brand-emerald' : 'text-brand-charcoal/80 hover:text-brand-emerald'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 h-[1px] bg-[#E3B777] -translate-x-1/2 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}

              {/* Resources Dropdown Trigger */}
              <div 
                ref={resourcesDropdownRef}
                className="relative py-1"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className={`flex items-center gap-1 font-sans text-[11.5px] font-bold tracking-wider py-1 uppercase transition-colors duration-250 cursor-pointer ${
                    location.pathname.startsWith('/resources') ? 'text-brand-emerald' : 'text-brand-charcoal/80 hover:text-brand-emerald'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className="h-3 w-3 text-[#E3B777]" />
                </button>

                {/* Dropdown Container */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(15,118,110,0.1)',
                        width: '330px',
                        padding: '20px',
                        backgroundColor: '#FAF9F6',
                        transformOrigin: 'top'
                      }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3 border border-brand-sage/20 z-50 transform-gpu"
                    >
                      <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#B47F43] font-bold border-b border-brand-sage/15 pb-2 mb-2">
                        <Sparkles className="h-3 w-3" />
                        Interactive Guides
                      </div>

                      <div className="space-y-0.5">
                        {dropdownItems.map((item, id) => {
                          const IconComponent = item.icon;
                          return (
                            <a
                              key={item.id}
                              href="#"
                              onClick={(e) => handleDropdownItemClick(e, item)}
                              className="flex items-start gap-3 p-2 rounded-xl text-left hover:bg-[#CFE8D5]/30 transition-all duration-300 group/item cursor-pointer"
                            >
                              <div className="p-1.5 rounded-lg bg-white border border-brand-sage/20 text-brand-emerald shrink-0 mt-0.5">
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[11.5px] font-bold text-brand-charcoal font-sans group-hover/item:text-brand-emerald transition-colors leading-tight">
                                  {item.title}
                                </p>
                                <p className="text-[10px] text-brand-charcoal/50 leading-tight truncate mt-0.5 font-sans">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryRightLinks.map((link) => {
                const active = isNavActive(link.path);
                return (
                  <a
                    key={link.name}
                    href="#"
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`font-sans text-[11.5px] font-bold tracking-wider transition-colors duration-250 relative py-1 block uppercase group cursor-pointer ${
                      active ? 'text-brand-emerald' : 'text-brand-charcoal/80 hover:text-brand-emerald'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 h-[1px] bg-[#E3B777] -translate-x-1/2 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}

            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:block shrink-0">
              <motion.button
                type="button"
                id="navbar-cta-btn"
                onClick={onBookClick}
                whileHover={{ 
                  scale: 1.02,
                  y: -1.5,
                }}
                whileTap={{ scale: 0.98 }}
                className="h-[42px] rounded-full bg-[#0F766E] px-4.5 text-[11px] font-bold text-[#FAF9F6] uppercase cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(15,118,110,0.2)] hover:bg-[#0D6962] transition-colors group tracking-wider"
              >
                <span>BOOK FREE TRIAL</span>
                <div className="h-5.5 w-5.5 rounded-full bg-[#E3B777] flex items-center justify-center shrink-0 ml-0.5 shadow-[0_0_12px_rgba(227,183,119,0.4)]">
                  <ArrowRight className="h-3 w-3 text-[#0F766E] stroke-[3.5] transition-transform duration-300 transform group-hover:translate-x-0.5" />
                </div>
              </motion.button>
            </div>

            {/* Mobile / Tablet Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-2 text-brand-emerald hover:bg-brand-sage/20 focus:outline-none transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5.5 w-5.5" />
                ) : (
                  <Menu className="h-5.5 w-5.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              id="mobile-navigation-drawer"
              className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF9F6] border-b border-brand-emerald/10 shadow-lg overflow-y-auto max-h-[85vh] transform-gpu"
            >
              <div className="px-6 py-4 space-y-1">
                
                {navLinks.map((link) => {
                  const active = isNavActive(link.path);
                  return (
                    <a
                      key={link.name}
                      href="#"
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className={`block rounded-xl px-4 py-2 text-xs font-bold transition-all uppercase tracking-wider ${
                        active 
                          ? 'bg-brand-emerald/10 text-brand-emerald' 
                          : 'text-[#1F2937]/90 hover:bg-brand-sage/10 hover:text-brand-emerald'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                {/* Mobile Resources Accordion */}
                <div className="rounded-xl overflow-hidden border border-brand-sage/20 bg-brand-sage/5 my-1" id="mobile-resources-accordion">
                  <button
                    type="button"
                    onClick={() => setIsMobileResourcesExpanded(!isMobileResourcesExpanded)}
                    className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal cursor-pointer"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`h-3 w-3 text-brand-gold transition-transform duration-300 ${isMobileResourcesExpanded ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileResourcesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-white/60 border-t border-brand-sage/20"
                      >
                        <div className="py-2 px-2.5 space-y-0.5">
                          {dropdownItems.map((item) => {
                            const IconComp = item.icon;
                            return (
                              <a
                                key={item.id}
                                href="#"
                                onClick={(e) => handleDropdownItemClick(e, item)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-bold text-brand-charcoal/80 hover:bg-brand-sage/10 hover:text-brand-emerald transition-colors cursor-pointer"
                              >
                                <IconComp className="h-4 w-4 text-brand-emerald scale-90" />
                                <span>{item.title}</span>
                                <ChevronRight className="h-3 w-3 ml-auto text-brand-gold/70" />
                              </a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {primaryRightLinks.map((link) => {
                  const active = isNavActive(link.path);
                  return (
                    <a
                      key={link.name}
                      href="#"
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className={`block rounded-xl px-4 py-2 text-xs font-bold transition-all uppercase tracking-wider ${
                        active 
                          ? 'bg-brand-emerald/10 text-brand-emerald' 
                          : 'text-[#1F2937]/90 hover:bg-brand-sage/10 hover:text-brand-emerald'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <div className="pt-4 border-t border-brand-emerald/10 px-2 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onBookClick();
                    }}
                    className="w-full h-11 rounded-full bg-[#0F766E] text-center text-[11px] font-bold text-[#FAF9F6] tracking-wider uppercase hover:bg-[#0D6962] transition-colors shadow-sm cursor-pointer"
                  >
                    BOOK FREE TRIAL
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
