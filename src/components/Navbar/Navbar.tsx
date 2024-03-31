import { useEffect, useState } from 'react';
import { NavItems, Menu, Button } from '@components';
import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => setShowMenu(false);

    useEffect(() => {
        if (showMenu) document.body.classList.add('overflow-y-hidden');
        else document.body.classList.remove('overflow-y-hidden');
    }, [showMenu]);
    
    return (
        <nav 
          className="navbar fixed top-0 z-50 flex h-fit w-full items-center justify-between p-3 px-10 | lg:justify-normal">
            <div className="logo lg:mr-8">
                <img
                    className="h-14 w-14"
                    src="./src/assets/logo.svg"
                    alt="HawkHacks Logo"
                />
            </div>

            <div className="nav-items hidden text-tbrand lg:mr-auto lg:block">
                <NavItems isHorizontal={true} handleClick={hideMenu} />
            </div>

            {/* <div className="portal-btn hidden transition-all duration-500 ease-in-out lg:mr-32 lg:block">
                <Button className="xl:px-6 xl:py-3">Application Portal</Button>
            </div> */}

            <div className="portal-btn hidden transition-all duration-500 ease-in-out lg:mr-32 lg:block">
                <Button className="xl:px-6 xl:py-3">
                    <Link
                        className="text-sm"
                        to="/comingsoon"
                    >
                        Application Portal
                    </Link>
                </Button>
            </div>

            {/* banner-holder: banner is out of flow, to prevent banner affect the desired flow, adding a placeholder banner holder when the screen is smaller  */}
            <div className="banner-holder order-first w-12 lg:hidden"></div>
            <div className="banner absolute left-10 top-0 lg:left-auto lg:right-10">
                <a
                    id="mlh-trust-badge"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                        alt="Major League Hacking 2024 Hackathon Season"
                        className="w-20 lg:w-24"
                    />
                </a>
            </div>

            <div className="menu-toggle-btn z-[60] lg:hidden">
                <Hamburger
                    size={25}
                    label="Show menu"
                    toggled={showMenu}
                    toggle={setShowMenu}
                    color="#2B6469"
                />
            </div>

            <div className="menu absolute lg:hidden">
                <Menu showMenu={showMenu} hideMenu={hideMenu} />
            </div>
        </nav>
    );
};

export { Navbar };
