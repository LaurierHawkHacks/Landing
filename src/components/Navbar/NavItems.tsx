import { Link } from 'react-scroll';

const links = [
    { title: 'About', anchor: 'about' },
    { title: 'FAQ', anchor: 'faq' },
    { title: 'Contact', anchor: 'contact' },
    { title: 'Partners', anchor: 'partners' },
    { title: 'Sponsors', anchor: 'sponsors' },
    { title: 'The Team', anchor: 'team' },
];

const NavItems: React.FC<{
    isHorizontal: boolean;
    handleClick: () => void;
}> = ({ isHorizontal, handleClick }) => {
    const rowStyle = 'flex-row items-center';
    const colStyle = 'flex-col lg:p-0';
    const scrollPadding = -150;

    return (
        <ul className={`flex gap-7 ${isHorizontal ? rowStyle : colStyle}`}>
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        to={link.anchor}
                        offset={scrollPadding}
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
