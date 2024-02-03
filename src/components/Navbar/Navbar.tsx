import { useEffect, useState } from 'react';
import { useWindowSize, useWindowScroll } from '@uidotdev/usehooks';

import Hamburger from 'hamburger-react';

import { LivePortalBtn } from '@components';
import { SideMenu } from '@components';
import { NavItems } from '@components';

const Navbar = () => {
    const LG_BREAKPOINT_PX = 1024;
    const SPACE_INLINE = 10;

    const windowSizeWidth = useWindowSize().width as number;
    const [scrollPos] = useWindowScroll();
    const scrollPositionY = scrollPos.y as number;
    const bannerOpacity = Math.max(1 - scrollPositionY / 100, 0);

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (windowSizeWidth >= LG_BREAKPOINT_PX) {
            setShowMenu(false);
        }
    }, [windowSizeWidth]);

    return (
        <nav
            className={`fixed top-0 w-full h-fit flex items-center justify-between lg:justify-normal text-white z-50 px-10 ${
                scrollPositionY < 100
                    ? 'p-8 transition-all duration-500 ease-in-out '
                    : 'shadow-lg p-4 transition-all duration-500 ease-in-out bg-midnight'
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
                <NavItems
                    isHorizontal={true}
                    handleClick={() => setShowMenu(!showMenu)}
                />
            </div>

            <div
                className={`live-portal-btn hidden lg:block transition-all duration-500 ease-in-out ${
                    scrollPositionY < 100 ? 'lg:mr-40' : 'lg:mr-0'
                }`}
            >
                <LivePortalBtn />
            </div>

            <div
                className={`banner-holder order-first w-[50px] lg:hidden ${
                    scrollPositionY < 100 ? 'block' : 'hidden'
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
                        width={scrollPositionY < 100 ? '100px' : '0px'}
                    />
                </a>
            </div>

            <div className="menu-toggle-btn lg:hidden z-[60]">
                <Hamburger
                    toggled={showMenu}
                    toggle={() => setShowMenu(!showMenu)}
                    size={25}
                    label="Show menu"
                />
            </div>

            <div className="side-menu absolute">
                {showMenu && (
                    <SideMenu
                        showMenu={showMenu}
                        setShowMenu={() => setShowMenu(!showMenu)}
                    />
                )}
            </div>
        </nav>
    );
};

export { Navbar };
