import {
    HeroSection,
    InfoSection,
    StatSection,
    FAQSection,
    Navbar,
    FooterSection,
} from '@components';
import { useState, useEffect } from 'react';

const Landing = () => {
    // State to control loader visibility
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading (e.g., fetching data)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds load time

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="loader"></div>
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
