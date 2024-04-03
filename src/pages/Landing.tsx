import { useEffect, useState } from 'react';
import {
  Navbar,
  HeroStatSection,
  TeamSection,
  ContactSection,
  SponsorFAQSection,
  FooterSection,
  ScrollButton,
  LoadingAnimation,
} from '@components';
import { HeroAboutDesktop, HeroAboutMobile } from '@assets';
import { logEvent, analytics } from '../utils/Analytics';

const Landing: React.FC = () => {
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    // Load Desktop SVG
    const desktopImage = new Image();
    desktopImage.src = HeroAboutDesktop;
    desktopImage.onload = () => setDesktopImageLoaded(true);

    // Load Mobile SVG
    const mobileImage = new Image();
    mobileImage.src = HeroAboutMobile;
    mobileImage.onload = () => setMobileImageLoaded(true);

    // Timer
    setTimeout(() => setTimerFinished(true), 2000);
  }, []);

  const isLoading = !(
    desktopImageLoaded &&
    mobileImageLoaded &&
    timerFinished
  );

  useEffect(() => {
    logEvent(analytics, 'page_view');
  }, []);

  useEffect(() => {
    const milestones = Array.from({ length: 20 }, () => false); // Create an array for each 5% milestone

    const trackScrollPercentage = () => {
      const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      milestones.forEach((reached, index) => {
        const milestone = (index + 1) * 5;
        if (scrolledPercentage >= milestone && !reached) {
          logEvent(analytics, 'scroll', { percentage: `${milestone}%` });
          milestones[index] = true; // Mark this milestone as reached
        }
      });
    };

    window.addEventListener('scroll', trackScrollPercentage);

    return () => window.removeEventListener('scroll', trackScrollPercentage);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="pt-[5rem] transition ease-in">
      <Navbar />
      <HeroStatSection />
      <SponsorFAQSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
      <ScrollButton />
    </div>
  );
};

export { Landing };