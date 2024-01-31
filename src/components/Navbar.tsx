import { MouseEventHandler, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useWindowSize, useLockBodyScroll } from '@uidotdev/usehooks';
import Hamburger from 'hamburger-react';

interface SideMenu {
    showMenu: boolean;
    handleClose: MouseEventHandler;
    scrollPos: number;
}

const links = ['home', 'about', 'faq', 'sponsors', 'contact'];

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

const Links = () => {
    return links.map((link) => (
        <li className="capitalize">
            <Link
                activeClass="active"
                className={link}
                to={link}
                offset={-150}
                smooth={true}
                spy={true}
                duration={500}
            >
                {link}
            </Link>
        </li>
    ));
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
const SideMenu = ({ showMenu }: SideMenu) => {
    useLockBodyScroll();

    return (
        <div
            className={`fixed top-0 right-0 h-full max-w-[65%] w-full oveflow-hidden backdrop-blur-xl z-50 py-24 px-10 ${
                showMenu ? 'block' : 'hidden'
            }`}
        >
            <ul className="flex gap-8 flex-col lg:p-0 ">
                <Links />
            </ul>
            <div className="live-portal-btn mt-20">
                <LivePortalBtn />
            </div>
        </div>
    );
};

const Navbar = () => {
    const LG_BREAKPOINT_PX = 1024;
    const SPACE_INLINE = 10;
    const windowSize = useWindowSize();
    const scrollPos = useScrollPosition();
    const bannerOpacity = Math.max(1 - scrollPos / 100, 0);

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        if ((windowSize.width as number) >= LG_BREAKPOINT_PX) {
            setShowMenu(false);
        }
    }, [windowSize]);

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
                    className="w-[55px] md:w-[60px] lg:w-[50px]"
                    src="./src/assets/logo.svg"
                    alt="HawkHacks Logo"
                />
            </div>

            <div className="nav-items hidden lg:block lg:mr-auto">
                <ul className="flex gap-8 flex-row items-center ">
                    <Links />
                </ul>
            </div>

            <div
                className={`live-portal-btn hidden lg:block transition-all duration-500 ease-in-out ${
                    scrollPos < 100 ? 'lg:mr-40' : 'lg:mr-0'
                }`}
            >
                <LivePortalBtn />
            </div>

            <div
                className={`banner-holder order-first w-[50px] lg:hidden ${
                    scrollPos < 100 ? 'block' : 'hidden'
                }`}
            ></div>
            <div
                className={`banner absolute top-0 left-10 lg:left-auto lg:right-10`}
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

            <div className="menu-toggle-btn lg:hidden z-[60]">
                <Hamburger
                    toggled={showMenu}
                    toggle={setShowMenu}
                    size={25}
                    label="Show menu"
                />
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
