import { Award, Zap, HeartHandshake, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustIndicators() {
  const trustItems = [
    {
      icon: Award,
      title: 'MSC Certified Trainer',
      description: 'Academically backed wellness and natural anatomy techniques.',
      color: 'text-brand-gold',
      bgColor: 'bg-[#FAF4EC]',
      glowClass: 'group-hover:shadow-[0_0_15px_rgba(212,163,115,0.3)]',
    },
    {
      icon: Zap,
      title: '500+ Transformations',
      description: 'Documented sustainable weight-loss transformations.',
      color: 'text-brand-emerald',
      bgColor: 'bg-[#EFF8F6]',
      glowClass: 'group-hover:shadow-[0_0_15px_rgba(15,118,110,0.25)]',
    },
    {
      icon: HeartHandshake,
      title: 'Online & Offline Classes',
      description: 'Stream live to your dining room or join in-studio in Vijayawada.',
      color: 'text-brand-emerald',
      bgColor: 'bg-[#EFF8F6]',
      glowClass: 'group-hover:shadow-[0_0_15px_rgba(15,118,110,0.25)]',
    },
    {
      icon: Compass,
      title: 'Personalized Guidance',
      description: 'Every program is hand-tailored to your health history and speed.',
      color: 'text-brand-gold',
      bgColor: 'bg-[#FAF4EC]',
      glowClass: 'group-hover:shadow-[0_0_15px_rgba(212,163,115,0.3)]',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-luxury-glow-b border-y border-brand-sage/30 py-[64px] md:py-[80px] lg:py-[110px] relative overflow-hidden" id="trust-indicators">
      {/* Decorative organic background elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-sage/15 filter blur-3xl opacity-40 pointer-events-none ambient-glow-1" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-brand-gold/8 filter blur-3xl opacity-40 pointer-events-none ambient-glow-2" />
      
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  id={`trust-item-${index}`}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    borderColor: 'rgba(20, 168, 154, 0.4)',
                    boxShadow: '0 22px 45px -10px rgba(15, 118, 110, 0.12), 0 0 20px rgba(20, 168, 154, 0.05)',
                  }}
                  className="bg-white/90 backdrop-blur-md border border-brand-sage/40 rounded-[24px] p-6.5 transition-all duration-500 group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.015)] relative overflow-hidden premium-card-glow"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-emerald to-brand-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.bgColor} ${item.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-emerald group-hover:text-white mb-5`}>
                    <IconComponent className="h-6 w-6 stroke-[1.75] icon-breathe" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-bold text-brand-charcoal tracking-tight group-hover:text-brand-emerald transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
