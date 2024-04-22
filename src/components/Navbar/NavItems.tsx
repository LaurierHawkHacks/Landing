import { Link } from 'react-scroll';
import { logEvent, analytics } from '../../utils/Analytics';

interface NavItemsProps {
  isHorizontal: boolean;
  handleClick: () => void;
}

const links = [
  { title: 'About', href: 'about-anchor' },
  { title: 'Sponsors', href: 'sponsors-anchor', offset: 200 },
  { title: 'Partners', href: 'partners-anchor', offset: 20 },
  { title: 'FAQ', href: 'faq-anchor', offset: 120 },
  { title: 'The Team', href: 'team-anchor', offset: 180 },
  { title: 'Contact', href: 'contact-anchor', offset: 100 },
];

const rowStyle = 'flex-row items-center';
const colStyle = 'flex-col lg:p-0';
const navbarHeightPx = -88;

const NavItems: React.FC<NavItemsProps> = ({ isHorizontal, handleClick }) => {
  const handleLinkClick = (title: string) => {
    logEvent(analytics, 'navbar_link_click', { title });
    handleClick();
  };

  return (
    <ul className={`flex gap-7 text-deepMarine ${isHorizontal ? rowStyle : colStyle}`}>
      {links.map((link) => (
        <li key={link.title} className="font-semibold hover:text-[#0FA3B1] transition-colors duration-200">
          <Link
            to={link.href}
            smooth
            duration={500}
            offset={link.offset ? -link.offset + navbarHeightPx : navbarHeightPx}
            className="text-md w-full"
            onClick={() => handleLinkClick(link.title)}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { NavItems };