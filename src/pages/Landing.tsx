import {
    HeroSection,
    InfoSection,
    StatSection,
    FAQSection,
    Navbar,
    FooterSection,
} from '@components';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <InfoSection />
            <StatSection />
            <FAQSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
