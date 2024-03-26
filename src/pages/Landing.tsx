import {
    Navbar,
    HeroStatSection,
    TeamSection,
    ContactSection,
    SponsorFAQSection,
    FooterSection,
    ScrollButton,
} from '@components';

const Landing: React.FC = () => {
    return (
        <div className="pt-[5rem]">
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
