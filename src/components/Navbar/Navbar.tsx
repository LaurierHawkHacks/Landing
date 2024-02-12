import { useState, useEffect } from 'react';
import { useWindowSize, useWindowScroll } from '@uidotdev/usehooks';

import Hamburger from 'hamburger-react';
import { NavItems, Menu } from '@components';

const Navbar = () => {
    const LG_BREAKPOINT_PX = 1024;

    const [scrollPos] = useWindowScroll();
    const scrollPosY = scrollPos.y as number;
    const bannerOpacity = Math.max(1 - scrollPosY / 100, 0);

    const windowSize = useWindowSize();
    const windowSizeWidth = windowSize.width as number;

    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => setShowMenu(false);

    useEffect(() => {
        if (windowSizeWidth >= LG_BREAKPOINT_PX) hideMenu();
    }, [windowSizeWidth]);

    return (
        <nav
            className={`fixed top-0 w-full h-fit flex items-center justify-between lg:justify-normal text-white z-50 px-10 ${
                scrollPosY < 100
                    ? 'p-8 transition-all duration-500 ease-in-out '
                    : 'shadow-lg p-4 transition-all duration-500 ease-in-out bg-midnight'
            }`}
        >
            {/* logo */}
            <div className="logo lg:mr-8">
                <img
                    className="w-[55px] md:w-[60px] lg:w-[50px]"
                    src="./src/assets/logo.svg"
                    alt="HawkHacks Logo"
                />
            </div>

            {/* nav items */}
            <div className="nav-items hidden lg:block lg:mr-auto">
                <NavItems isHorizontal={true} handleClick={hideMenu} />
            </div>

            {/* portal button */}
            <div
                className={`portal-btn hidden lg:block transition-all duration-500 ease-in-out ${
                    scrollPosY < 100 ? 'lg:mr-32' : 'lg:mr-0'
                }`}
            >
                <button className="px-4 py-2 xl:px-6 xl:py-3 rounded-lg">Application Portal</button>
            </div>

            {/* banner */}
            <div
                className={`banner-holder order-first w-[50px] lg:hidden ${
                    scrollPosY < 100 ? 'block' : 'hidden'
                }`}
            ></div>
            <div className="banner absolute top-0 left-10 lg:left-auto lg:right-10">
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
                        width={scrollPosY < 100 ? '100px' : '0px'}
                        style={{
                            opacity: bannerOpacity,
                            transition: 'opacity ms ease-out',
                        }}
                    />
                </a>
            </div>

            {/* menu button */}
            <div className="menu-toggle-btn lg:hidden z-[60]">
                <Hamburger
                    size={25}
                    label="Show menu"
                    toggled={showMenu}
                    toggle={() => setShowMenu(!showMenu)}
                />
            </div>

            {/* side menu */}
            <div className="side-menu absolute">
                {showMenu && <Menu showMenu hideMenu={hideMenu} />}
            </div>
        </nav>
    );
};

export { Navbar };
