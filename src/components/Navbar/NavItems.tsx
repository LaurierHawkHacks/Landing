import { Link } from 'react-scroll';

const links = [
    { title: 'About', href: 'about' },
    { title: 'FAQ', href: 'faq' },
    { title: 'Contact', href: 'contact' },
    { title: 'Partners', href: 'partners' },
    { title: 'Sponsors', href: 'sponsors' },
    { title: 'The Team', href: 'team' },
];

const rowStyle = 'flex-row items-center';
const colStyle = 'flex-col lg:p-0';
const scrollPadding = -150;

const NavItems: React.FC<{
    isHorizontal: boolean;
    handleClick: () => void;
}> = ({ isHorizontal, handleClick }) => {
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
                        offset={scrollPadding}
                        onClick={handleClick}
                        className="link-hover--two text-xl"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { NavItems };
