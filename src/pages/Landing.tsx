import { ContactSection } from '@components';
import { FooterSection } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ContactSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
