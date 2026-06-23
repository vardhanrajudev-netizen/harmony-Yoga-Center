import Hero from './Hero';
import TrustIndicators from './TrustIndicators';
import Trainer from './Trainer';
import Programs from './Programs';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import SEO from './SEO';

interface HomePageProps {
  onBookClick: (programName?: string) => void;
}

export default function HomePage({ onBookClick }: HomePageProps) {
  return (
    <>
      <SEO 
        title="Premium Weight Loss Yoga & Personal Training | Harmony Yoga Center Vijayawada"
        description="Experience personalized yoga alignments, natural slimming solutions, and Ayurvedic nutrition schedules under Master S. Yoga Anjaneyulu in Mogalrajapuram, Vijayawada."
        path="/"
      />
      <main id="main-content-flow">
        <Hero onBookClick={onBookClick} />
        <TrustIndicators />
        <Trainer />
        <Programs onSelectProgram={onBookClick} />
        <Testimonials />
        <CTASection onBookClick={onBookClick} />
      </main>
    </>
  );
}
