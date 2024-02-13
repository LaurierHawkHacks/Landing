import { useState } from 'react';
import { useWindowScroll } from '@uidotdev/usehooks';

import Hamburger from 'hamburger-react';
import { NavItems, Menu } from '@components';

const Navbar = () => {
    const [scrollPos] = useWindowScroll();
    const scrollPosY = scrollPos.y as number;

    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => setShowMenu(false);

    return (
        <nav
            className={`gradient fixed top-0 z-50 flex h-fit w-full items-center justify-between px-10 text-white lg:justify-normal ${
                scrollPosY < 100
                    ? 'p-8 transition-all duration-500 ease-in-out'
                    : 'bg-midnight p-4 shadow-lg transition-all duration-500 ease-in-out'
            }`}
        >
            {/* logo */}
            <div className="logo lg:mr-8">
                <img
                    className="w-14"
                    src="./src/assets/logo.svg"
                    alt="HawkHacks Logo"
                />
            </div>

            {/* nav items */}
            <div className="nav-items hidden lg:mr-auto lg:block">
                <NavItems isHorizontal={true} handleClick={hideMenu} />
            </div>

            {/* portal button */}
            <div
                className={`portal-btn hidden transition-all duration-500 ease-in-out lg:block ${
                    scrollPosY < 100 ? 'lg:mr-32' : 'lg:mr-0'
                }`}
            >
                <button className="px-4 py-2 xl:px-6 xl:py-3">
                    Application Portal
                </button>
            </div>

            {/* banner */}
            <div className="banner-holder order-first w-[50px] lg:hidden"></div>
            <div className="banner absolute left-10 top-0 lg:left-auto lg:right-10">
                <a
                    id="mlh-trust-badge"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* !keep the image on all the time */}
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                        alt="Major League Hacking 2024 Hackathon Season"
                        className="w-20 lg:w-24"
                    />
                </a>
            </div>

            {/* menu button */}
            <div className="menu-toggle-btn z-[60] lg:hidden">
                <Hamburger
                    size={25}
                    label="Show menu"
                    toggled={showMenu}
                    toggle={() => setShowMenu(!showMenu)}
                    color="#2B6469"
                />
            </div>

            {/* side menu */}
            <div className="menu absolute lg:hidden">
                <Menu showMenu={showMenu} hideMenu={hideMenu} />
            </div>
        </nav>
    );
};

export { Navbar };
