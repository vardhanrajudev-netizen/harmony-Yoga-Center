import Hero from './Hero';
import TrustIndicators from './TrustIndicators';
import Trainer from './Trainer';
import Programs from './Programs';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import SEO from './SEO';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';

interface HomePageProps {
  onBookClick: (programName?: string) => void;
}

export default function HomePage({ onBookClick }: HomePageProps) {
  return (
    <>
      <SEO 
        title="Premium Weight Loss Yoga & Personal Training | Harmony Yoga Center Vijayawada"
        description="Experience personalized yoga alignments, natural slimming solutions, and Ayurvedic nutrition schedules under Master S. Anjaneyulu in Mogalrajapuram, Vijayawada."
        path="/"
      />
      <main id="main-content-flow">
        {/* Hero Section has its own built-in high-fidelity lines reveal and parallax elements */}
        <Hero onBookClick={onBookClick} />
        
        <AnimatedSection variant="scale-in">
          <TrustIndicators />
        </AnimatedSection>

        <SectionDivider variant="lotus" className="my-2" />

        <AnimatedSection variant="fade-left">
          <Trainer />
        </AnimatedSection>

        <SectionDivider variant="line" className="my-4" />

        <AnimatedSection variant="fade-up">
          <Programs onSelectProgram={onBookClick} />
        </AnimatedSection>

        <SectionDivider variant="wave" className="-mt-1" />

        <AnimatedSection variant="fade-right">
          <Testimonials />
        </AnimatedSection>

        <SectionDivider variant="lotus" className="my-2" />

        <AnimatedSection variant="reveal-mask">
          <CTASection onBookClick={onBookClick} />
        </AnimatedSection>
      </main>
    </>
  );
}
