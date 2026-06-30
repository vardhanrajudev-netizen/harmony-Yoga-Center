import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/harmonyyoga', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/harmonyyoga', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/harmonyyoga', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/harmonyyoga', label: 'LinkedIn' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent, 
    path: string
  ) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.footer
      id="footer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#021a17] text-[#FAF9F6] overflow-hidden border-t border-brand-gold/15 shadow-[0_-12px_40px_-5px_rgba(212,163,115,0.07)]"
      style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(212, 163, 115, 0.05) 0%, transparent 50%), linear-gradient(135deg, #021a17 0%, #052c26 50%, #011411 100%)'
      }}
    >
      <div className="px-6 sm:px-12 md:px-16 py-8 sm:py-10 mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Logo & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative flex items-center gap-3.5 group select-none shrink-0 border-none inline-flex" id="footer-logo">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-emerald/20 to-brand-gold/15 rounded-full filter blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div 
                onClick={(e) => handleLinkClick(e, '/')}
                className="relative flex items-center justify-center rounded-full bg-brand-emerald text-brand-ivory hover:bg-brand-gold transition-colors duration-300 shrink-0 shadow-lg border border-white/5 cursor-pointer"
                style={{ width: '42px', height: '42px' }}
              >
                <span className="font-serif font-bold text-sm text-brand-ivory">H</span>
              </div>
              
              <div className="flex flex-col select-none whitespace-nowrap justify-center cursor-pointer font-sans" style={{ gap: '1px' }} onClick={(e) => handleLinkClick(e, '/')}>
                <div className="flex items-baseline gap-1.5" style={{ lineHeight: '1.0' }}>
                  <span 
                    className="font-serif font-bold text-white tracking-tight"
                    style={{ fontSize: '24px', fontFamily: '"Cormorant Garamond", serif', fontWeight: 700 }}
                  >
                    Harmony
                  </span>
                  <span 
                    className="font-serif italic font-light text-white/90"
                    style={{ fontSize: '13px', fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    Yoga Center
                  </span>
                </div>
                <span 
                  className="font-sans font-bold text-brand-gold uppercase block tracking-[2px]"
                  style={{ 
                    fontSize: '8px', 
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.1',
                    marginTop: '2px'
                  }}
                >
                  PREMIUM WELLNESS SANCTUARY
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-white/80 max-w-sm leading-relaxed">
              Harmony Yoga Center helps individuals transform their health naturally through expert yoga programs, physical diagnostic alignments, and holistic dietary wisdom.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social, id) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      boxShadow: '0 0 15px rgba(227,183,119,0.3)'
                    }}
                    className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/85 hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Core Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-brand-gold text-sm uppercase tracking-[2px] font-sans block">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home View', path: '/' },
                { name: 'About Biography', path: '/about' },
                { name: 'Programs List', path: '/programs' },
                { name: 'Corporate Wellness', path: '/corporate-wellness' },
                { name: 'Success Stories', path: '/success-stories' },
                { name: 'Media Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="font-medium text-white/80 hover:text-brand-gold transition-colors duration-300 inline-block text-xs uppercase tracking-wide cursor-pointer relative group/link"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E3B777] group-hover/link:w-full transition-all duration-300 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Resources */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-brand-gold text-sm uppercase tracking-[2px] font-sans block">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Yoga Tutorials', path: '/yoga-tutorials' },
                { name: 'The Slimming Guide', path: '/resources/guide' },
                { name: 'BMI Assessment Calculator', path: '/resources/bmi-calculator' },
                { name: 'Diet & PDF Charts', path: '/resources/diet-charts' },
                { name: 'FAQ Solutions', path: '/resources/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="font-medium text-white/80 hover:text-brand-gold transition-colors duration-300 inline-block text-xs uppercase tracking-wide cursor-pointer relative group/link"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E3B777] group-hover/link:w-full transition-all duration-300 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact Address */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-brand-gold text-sm uppercase tracking-[2px] font-sans block">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#E3B777] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  D.no. 39-17-10/1, behind SV Ranga Rao Hospital,<br />
                  Mogalrajapuram, Vijayawada, AP — 520010
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-xs">
                <Phone className="h-4 w-4 text-[#E3B777] shrink-0" />
                <span>+91 70367 11097</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs">
                <Mail className="h-4 w-4 text-[#E3B777] shrink-0" />
                <a 
                  href="mailto:contact@harmonyyoga.in" 
                  className="hover:text-brand-gold transition-colors font-semibold"
                >
                  contact@harmonyyoga.in
                </a>
              </li>
              <li className="pt-1 select-none">
                <motion.a
                  href="https://wa.me/917036711097?text=Hello%20Harmony%20Yoga%20Center!%20I'd%20like%20to%20learn%20more%20about%20your%20therapeutic%20slimming%20sessions."
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ scale: 1.03, y: -1, boxShadow: '0 0 15px rgba(34,197,94,0.3)' }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-white transition-all duration-300 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Chat on WhatsApp
                </motion.a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45 font-sans select-none">
          <p>© 2026 Harmony Yoga Center. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-white transition-colors">Terms of Sanctuary Admission</a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
