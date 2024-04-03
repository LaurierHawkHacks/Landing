import { Link } from 'react-scroll';

interface NavItemsProps {
    isHorizontal: boolean;
    handleClick: () => void;
}

const links = [
    { title: 'About', href: 'about-anchor' },
    { title: 'Sponsors', href: 'sponsors-anchor', offset: 200 },
    { title: 'Partners', href: 'partners-anchor', offset: 20 },
    { title: 'FAQ', href: 'faq-anchor', offset: 120 },
    { title: 'The Team', href: 'team-anchor' },
    { title: 'Contact', href: 'contact-anchor', offset: 100 },
];

const rowStyle = 'flex-row items-center';
const colStyle = 'flex-col lg:p-0';
const navbarHeightPx = 80;
const scrollPaddingPx = -navbarHeightPx; // navbarHeight + extra padding

const NavItems: React.FC<NavItemsProps> = ({ isHorizontal, handleClick }) => {
    return (
        <ul
            className={`flex gap-7 text-deepMarine ${
                isHorizontal ? rowStyle : colStyle
            }`}
        >
            {links.map((link) => (
                <li
                    key={link.title}
                    className="transition-colors duration-200 hover:text-[#0FA3B1]"
                >
                    <Link
                        to={link.href}
                        smooth
                        duration={500}
                        offset={
                            link.offset
                                ? -link.offset + scrollPaddingPx
                                : scrollPaddingPx
                        }
                        className="text-md w-full"
                        onClick={handleClick}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { NavItems };
