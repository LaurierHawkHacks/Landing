import { TeamSection } from '@components';
import { FooterSection } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div>
            <Navbar />
            <TeamSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
