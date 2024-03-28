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
import { HeroAboutDesktop } from '@assets';

const Landing: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [componentLoaded, setComponentLoaded] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        const desktopImage = new Image();
        desktopImage.src = HeroAboutDesktop;
        desktopImage.onload = () => setComponentLoaded(true);

        setTimeout(() => setTimerFinished(true), 2000);
    }, []);

    // Once the timer and component are finished -> display the page
    useEffect(() => {
        if (componentLoaded && timerFinished) {
            setIsLoading(false);
        }
    }, [componentLoaded, timerFinished]);

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
