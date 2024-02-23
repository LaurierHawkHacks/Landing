import { FooterSection } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div className="pt-36">
            <Navbar />
            <FooterSection />
        </div>
    );
};

export { Landing };
