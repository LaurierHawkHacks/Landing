import { Navbar, HeroSection, AboutSection, TeamSection, ContactSection, SponsorSection, SponsorFAQSection, FooterSection } from '@components';

const Landing: React.FC = () => {
    return (
        // padding calculation
        // logo in navbar height = 3.5rem
        // navbar adds top and bottom padding of 2rem
        // total top padding = 3.5 + 4 = 7.5rem
        <div className="pt-[7.5rem]">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SponsorFAQSection />
            <TeamSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
};

export { Landing };