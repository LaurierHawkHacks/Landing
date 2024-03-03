import { FooterSection } from '@components';
import { Navbar } from '@components';
import { FAQSection } from '@components';

const Landing: React.FC = () => {
    return (
        <div>
            <Navbar />
            <FAQSection/>
            <FooterSection />
        </div>
    );
};

export { Landing };
