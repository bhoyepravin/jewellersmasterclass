import HeroSection           from '../components/HeroSection';
import WhatYouLearnSection   from '../components/WhatYouLearnSection';
import WhoIsThisForSection   from '../components/WhoIsThisForSection';
import RegistrationSection   from '../components/RegistrationSection';
import ChallengesSection     from '../components/ChallengesSection';
import MasterclassBenefits   from '../components/MasterclassBenefits';
import BonusSection          from '../components/BonusSection';
import ReadyToJoinSection    from '../components/ReadyToJoinSection';
import TestimonialsSection   from '../components/TestimonialsSection';
import MentorSection         from '../components/MentorSection';
import MissionSection        from '../components/MissionSection';
import FAQSection            from '../components/FAQSection';
import FinalCTASection       from '../components/FinalCTASection';
import Footer                from '../components/Footer';

import { heroData, offerData, statsBar } from '../data/landingPageData';

import {
  whatYouLearnData,
  whoIsThisForData,
  challengesData,
  masterclassBenefitsData,
  bonusSectionData,
  masterclassTestimonialsData,
  mentorSectionData,
  missionData,
  faqSectionData,
} from '../data/masterclassData';
import BusinessBreakthroughSection from '../components/BusinessBreakthroughSection';
import WhoHelpsSection             from '../components/WhoHelpsSection';
import TextTestimonialsSection from '../components/TextTestimonialsSection';
import RegisterButton from '../components/RegisterButton';

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">

      {/* 1. Hero */}
      <HeroSection data={heroData} statsBar={statsBar} />

      <BusinessBreakthroughSection/>

      <WhoHelpsSection />

      {/* 2. What You Will Learn */}
      <WhatYouLearnSection data={whatYouLearnData} />

      {/* 3. Who Is This For */}
      {/* <WhoIsThisForSection data={whoIsThisForData} /> */}

      {/* 4. Registration / Countdown */}
      <RegistrationSection />

      {/* 5. Challenges */}
      <ChallengesSection data={challengesData} />

      {/* 6. Masterclass Benefits */}
      <MasterclassBenefits data={masterclassBenefitsData} />

      {/* 7. Exclusive Bonuses */}
      <BonusSection data={bonusSectionData} />

      {/* 8. Ready To Join */}
      {/* <ReadyToJoinSection /> */}

      {/* 9. Testimonials */}
      <TestimonialsSection data={masterclassTestimonialsData} />

      <TextTestimonialsSection/>

      {/* 10. Mentor */}
      <MentorSection data={mentorSectionData} />

      {/* 11. Mission */}
      <MissionSection data={missionData} />

      {/* 12. FAQ */}
      <FAQSection data={faqSectionData} />


      {/* 13. Final CTA */}
      {/* <FinalCTASection offerData={offerData} /> */}

      <RegisterButton/>
      

      {/* 14. Footer */}
      <Footer />

    </main>
  );
}
