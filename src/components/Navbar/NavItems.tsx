import { Link } from 'react-scroll';

interface NavItems {
    isHorizontal: boolean;
    handleClick: () => void;
}

const NavItems = ({ isHorizontal, handleClick }: NavItems) => {
    const links = ['home', 'about', 'faq', 'sponsors', 'contact'];
    const rowStyle = 'flex-row items-center';
    const colStyle = 'flex-col lg:p-0';

    return (
        <ul className={`flex gap-8 ${isHorizontal ? rowStyle : colStyle}`}>
            {links.map((link, index) => (
                <li key={index} className="capitalize">
                    <Link
                        className={link}
                        to={link}
                        offset={-150}
                        activeClass="active"
                        onClick={handleClick}
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export { NavItems };
