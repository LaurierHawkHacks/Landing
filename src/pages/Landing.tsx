import { FooterSection, About } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div className="grid grid-cols-1">
            <Navbar />
            <About />
            <FooterSection />
        </div>
    );
};

export { Landing };
