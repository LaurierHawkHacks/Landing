import { FooterSection, About } from '@components';
import { Navbar } from '@components';

const Landing: React.FC = () => {
    return (
        <div>
            <Navbar />
            <About />
            <FooterSection />
        </div>
    );
};

export { Landing };
