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

const Landing: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
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

    useEffect(() => {
        if (desktopImageLoaded && mobileImageLoaded && timerFinished) {
            setIsLoading(false);
        }
    }, [desktopImageLoaded, mobileImageLoaded, timerFinished]);

    const isLoading = !(desktopImageLoaded && mobileImageLoaded && timerFinished);
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
