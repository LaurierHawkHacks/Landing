import { TeamSection } from '@components';
import { FooterSection } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        // padding calculation
        // logo in navbar height = 3.5rem
        // navbar adds top and bottom padding of 2rem
        // total top padding = 3.5 + 4 = 7.5rem
        <div className="pt-[7.5rem]">
            <Navbar />
            <TeamSection />
            <FooterSection />
        </div>
    );
};

export { Landing };
