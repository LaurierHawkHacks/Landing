import { Link } from 'react-scroll';

interface NavItemsProps {
    isHorizontal: boolean;
    handleClick: () => void;
}

const links = [
    { title: 'About', href: 'about-section' },
    { title: 'Sponsors', href: 'sponsors-section' },
    { title: 'Partners', href: 'partners-section' },
    { title: 'FAQ', href: 'faq-section' },
    { title: 'The Team', href: 'team-section' },
    { title: 'Contact', href: 'contact-section' },
];

const rowStyle = 'flex-row items-center';
const colStyle = 'flex-col lg:p-0';
const scrollPadding = -120;

const NavItems: React.FC<NavItemsProps> = ({ isHorizontal, handleClick }) => {
    return (
        <ul
            className={`flex gap-7 text-deepMarine ${
                isHorizontal ? rowStyle : colStyle
            }`}
        >
            {links.map((link) => (
                <li key={link.title}>
                    <Link
                        to={link.href}
                        smooth duration={500}
                        offset={scrollPadding}
                        onClick={handleClick}
                        className="link-hover--two text-md"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { NavItems };
