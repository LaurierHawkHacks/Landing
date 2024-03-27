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
                }, 1000); 
            };

            window.addEventListener('load', handleLoad);

            return () => window.removeEventListener('load', handleLoad);
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
