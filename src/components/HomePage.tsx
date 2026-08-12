import Hero from './Hero';
import TrustIndicators from './TrustIndicators';
import Trainer from './Trainer';
import Programs from './Programs';
import Testimonials from './Testimonials';
import GoogleReviews from './GoogleReviews';
import GalleryPreview from './GalleryPreview';
import CTASection from './CTASection';
import SEO from './SEO';
import AnimatedSection from './AnimatedSection';
import SectionDivider from './SectionDivider';
import { PAGE_METADATA } from '../seo/metadata';
import { getWebSiteSchema } from '../seo/structuredData';

interface HomePageProps {
  onBookClick: (programName?: string) => void;
}

export default function HomePage({ onBookClick }: HomePageProps) {
  const meta = PAGE_METADATA.home;

  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        path={meta.path}
        keywords={meta.keywords}
        schema={getWebSiteSchema()}
      />
      <main id="main-content-flow">
        {/* Hero Section */}
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

        <AnimatedSection variant="fade-up">
          <GoogleReviews />
        </AnimatedSection>

        <SectionDivider variant="line" className="my-4" />

        <AnimatedSection variant="fade-up">
          <GalleryPreview />
        </AnimatedSection>

        <SectionDivider variant="line" className="my-4" />

        <AnimatedSection variant="reveal-mask">
          <CTASection onBookClick={onBookClick} />
        </AnimatedSection>
      </main>
    </>
  );
}
