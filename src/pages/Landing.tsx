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
        // Set a delay for the loading animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 3000ms = 3 seconds

        return () => clearTimeout(timer);
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
