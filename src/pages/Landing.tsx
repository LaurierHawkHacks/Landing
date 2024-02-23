import { SponsorSection } from '@components';
import { FooterSection } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div>
            <Navbar />
            <SponsorSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
