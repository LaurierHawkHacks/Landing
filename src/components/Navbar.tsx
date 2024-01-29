import { MouseEventHandler, useEffect, useState } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';

interface SideMenu {
    showMenu: boolean;
    handleClose: MouseEventHandler;
    scrollPos: number;
}

const links = [
    {
        title: 'Home',
        anchor: '#',
    },
    {
        title: 'About',
        anchor: '/about',
    },
    {
        title: 'Sponsors',
        anchor: '/sponsors',
    },
    {
        title: 'FAQ',
        anchor: '/faq',
    },
    {
        title: 'Contact',
        anchor: '/contact',
    },
];

const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPos;
};

const LivePortalBtn = () => (
    <a
        href="/"
        className={`tracking-widest border-2 rounded-md p-2 px-4 font-bold hover:bg-white hover:text-black transition-all duration-500 ease-in-out
    }`}
    >
        LIVE PORTAL
    </a>
);
const SideMenu = ({ showMenu, handleClose, scrollPos }: SideMenu) => {
    useLockBodyScroll();

    return (
        <div
            className={`fixed top-0 right-0 h-full max-w-[65%] w-full oveflow-hidden backdrop-blur-xl z-50 py-24 px-10 ${
                showMenu ? 'block' : 'hidden'
            }`}
        >
            <button
                className={`close-btn text-white absolute ${
                    scrollPos < 100 ? 'top-8 right-10' : 'top-5 right-10'
                }`}
                onClick={handleClose}
            >
                <img
                    src="./src/assets/close-icon.svg"
                    alt="click this button to close the side menu"
                />
            </button>
            <ul className="flex gap-8 flex-col lg:p-0 ">
                {links.map((link) => (
                    <li>
                        <a href={link.anchor}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="live-portal-btn mt-20">
                <LivePortalBtn />
            </div>
        </div>
    );
};

const Navbar = () => {
    const SPACE_INLINE = 10;
    const scrollPos = useScrollPosition();
    const bannerOpacity = Math.max(1 - scrollPos / 100, 0);

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <nav
            className={`fixed top-0 w-full h-fit flex items-center justify-between lg:justify-normal text-white z-50 px-10 ${
                scrollPos > 100
                    ? 'shadow-lg p-4 transition-all duration-500 ease-in-out bg-midnight'
                    : 'p-8 transition-all duration-500 ease-in-out '
            }`}
        >
            <div className="logo lg:mr-8">
                <img
                    className="w-[55px]  md:w-[60px] lg:w-[50px]"
                    src="./src/assets/logo.svg"
                    alt="HawkHacks Logo"
                />
            </div>

            <div className="nav-items hidden lg:block lg:mr-auto">
                <ul className="flex gap-8 flex-row items-center ">
                    {links.map((link) => (
                        <li>
                            <a href={link.anchor}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`live-portal-btn hidden lg:block transition-all duration-500 ease-in-out ${
                    scrollPos < 100 ? 'lg:mr-40' : 'lg:mr-0'
                }`}
            >
                <LivePortalBtn />
            </div>

            {/* banner holder is for styling purposes only */}
            {/* problem: since banner is positioned absolute, justify-between does not affect the banner element */}
            {/* solution: adding a div before the banner */}
            <div className="banner-holder order-first w-[50px] lg:hidden"></div>
            <div
                className={`banner absolute top-0 left-${SPACE_INLINE} lg:left-auto lg:right-${SPACE_INLINE}`}
            >
                <a
                    id="mlh-trust-badge"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                        alt="Major League Hacking 2024 Hackathon Season"
                        className="shadow-2xl w-16 lg:w-[100px]"
                        style={{
                            opacity: bannerOpacity,
                            transition: 'opacity ms ease-out',
                        }}
                        width={scrollPos < 100 ? '100px' : '0px'}
                    />
                </a>
            </div>

            <div className="menu-toggle-btn lg:hidden">
                <button onClick={toggleMenu}>
                    <img
                        src="./src/assets/hamburger-icon.svg"
                        alt="open the menu with this button"
                    />
                </button>
            </div>

            <div className="side-menu absolute">
                {showMenu && (
                    <SideMenu
                        scrollPos={scrollPos}
                        showMenu={showMenu}
                        handleClose={toggleMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export { Navbar };
