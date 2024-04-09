import { useEffect, useState } from 'react';
import {
    Navbar,
    HeroStatSection,
    TeamFAQSection,
    ContactSection,
    SponsorSection,
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
    const isLoading = !(
        desktopImageLoaded &&
        mobileImageLoaded &&
        timerFinished
    );

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

    useEffect(() => {
        logEvent(analytics, 'page_view');
    }, []);

    useEffect(() => {
        const anchorPoints = [
            { id: 'faq', seen: false },
            { id: 'top', seen: false },
            { id: 'team', seen: false },
            { id: 'sponsors-section', seen: false },
            { id: 'contact', seen: false },
        ];

        const trackAnchorVisibility = () => {
            anchorPoints.forEach((anchor) => {
                if (!anchor.seen) {
                    const element = document.getElementById(anchor.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const isVisible =
                            rect.top <= window.innerHeight && rect.bottom >= 0;
                        if (isVisible) {
                            logEvent(analytics, `seen_${anchor.id}`);
                            anchor.seen = true;
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', trackAnchorVisibility);
        return () =>
            window.removeEventListener('scroll', trackAnchorVisibility);
    }, []);

    if (isLoading) {
        return <LoadingAnimation />;
    }

    return (
        <div className="pt-[5rem] transition ease-in">
            <Navbar />
            <main>
                <HeroStatSection />
                <SponsorSection />
                <TeamFAQSection />
                <ContactSection />
            </main>
            <FooterSection />
            <ScrollButton />
        </div>
    );
};

export { Landing };
