import HeroSection         from '../components/HeroSection';
import BenefitsSection     from '../components/BenefitsSection';
import TrustSection        from '../components/TrustSection';
import ProgramSection      from '../components/ProgramSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfferSection        from '../components/OfferSection';
import FAQSection          from '../components/FAQSection';
import FinalCTASection     from '../components/FinalCTASection';

import {
  heroData,
  benefitsData,
  audienceData,
  painPointsData,
  programData,
  bonusData,
  mentorData,
  testimonialsData,
  offerData,
  faqData,
  statsBar,
} from '../data/landingPageData';

export default function Home() {
  return (
    /* pb-20 reserves space for the sticky mobile CTA bar */
    <main className="pb-20 md:pb-0">
      <HeroSection
        data={heroData}
        statsBar={statsBar}
      />
      <BenefitsSection
        data={benefitsData}
      />
      <TrustSection
        painPoints={painPointsData}
        audience={audienceData}
      />
      <ProgramSection
        program={programData}
        bonus={bonusData}
        mentor={mentorData}
      />
      <TestimonialsSection
        data={testimonialsData}
      />
      <OfferSection
        data={offerData}
      />
      <FAQSection
        data={faqData}
      />
      <FinalCTASection
        offerData={offerData}
      />
    </main>
  );
}
