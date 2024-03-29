import { Link } from 'react-scroll';

interface NavItemsProps {
    isHorizontal: boolean;
    handleClick: () => void;
}

// update the name of href
const links = [
    { title: 'About', href: 'about-anchor' },
    { title: 'Sponsors', href: 'sponsors-anchor' },
    { title: 'Partners', href: 'partners-anchor' },
    { title: 'FAQ', href: 'faq-anchor' },
    { title: 'The Team', href: 'team-anchor' },
    { title: 'Contact', href: 'contact-anchor' },
];

const rowStyle = 'flex-row items-center';
const colStyle = 'flex-col lg:p-0';
const navbarHeightPx = 80;
const scrollPaddingPx = -(navbarHeightPx + 20); // navbarHeight + extra padding

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
                        smooth
                        duration={500}
                        offset={scrollPaddingPx}
                        onClick={() => {
                            console.log('hello world');
                            // hide the side menu
                            // hideMenu()
                        }}
                        className="text-md"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { NavItems };
