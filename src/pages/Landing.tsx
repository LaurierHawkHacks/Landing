import {
    HeroSection,
    InfoSection,
    StatSection,
    FAQSection,
    Navbar,
    FooterSection,
    SponsorsSection,
} from '@components';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <InfoSection />
            <StatSection />
            <FAQSection />
            <SponsorsSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
