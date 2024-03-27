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

const Landing: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Extra second after load event
        };

        window.addEventListener('load', handleLoad);

        if (document.readyState === 'complete') {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="loading-overlay">
                    <LoadingAnimation />
                </div>
            )}
            <div className={`pt-[5rem] transition ease-in ${isLoading ? 'hidden' : 'block'}`}>
                <Navbar />
                <HeroStatSection />
                <SponsorFAQSection />
                <TeamSection />
                <ContactSection />
                <FooterSection />
                <ScrollButton />
            </div>
        </>
    );
};

export { Landing };
