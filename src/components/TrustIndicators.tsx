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
    <section className="bg-white border-y border-brand-sage/20 py-[56px] md:py-[72px] lg:py-[100px] relative overflow-hidden" id="trust-indicators">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
                    y: -5,
                    borderColor: 'rgba(15, 118, 110, 0.15)',
                    boxShadow: '0 12px 24px -10px rgba(15, 118, 110, 0.08)',
                    backgroundColor: 'rgba(250, 249, 246, 0.6)'
                  }}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group border border-transparent cursor-pointer"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bgColor} ${item.color} transition-all duration-300 group-hover:scale-105 ${item.glowClass}`}>
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-sm font-bold text-brand-charcoal tracking-tight group-hover:text-brand-emerald transition-colors">
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
