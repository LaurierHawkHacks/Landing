import {
    Loader,
    HeroSection,
    InfoSection,
    StatSection,
    FAQSection,
    Navbar,
    FooterSection,
} from '@components';
import { useState, useEffect } from 'react';

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);

    // This simulates loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // <--- 3 second timer

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <Navbar />
                    <HeroSection />
                    <InfoSection />
                    <StatSection />
                    <FAQSection />
                    <FooterSection />
                </div>
            )}
        </div>
    );
};

export { Landing };
