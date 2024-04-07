import { useEffect, useState } from 'react';
import { NavItems, Menu, Button } from '@components';
import { HawkHacksLogo } from '@assets';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => setShowMenu(false);

    useEffect(() => {
        if (showMenu) document.body.classList.add('overflow-y-hidden');
        else document.body.classList.remove('overflow-y-hidden');
    }, [showMenu]);

    // const openInNewTab = (url: string) => {
    //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    //     if (newWindow) newWindow.opener = null;
    // };

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault(); 
    //     openInNewTab('https://portal.hawkhacks.ca');
    // };

    return (
        <header className="fixed top-0 z-50 flex h-fit w-full items-center justify-between p-3 px-10 lg:justify-normal">
            <div className="logo lg:mr-8">
                <ScrollLink 
                    to="top"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="cursor-pointer"
                >
                <img
                    className="h-14 w-14"
                    src={HawkHacksLogo}
                    alt="HawkHacks Logo"
                />
                </ScrollLink>
            </div>

            <nav className="nav-items hidden text-tbrand lg:mr-auto lg:block">
                <NavItems isHorizontal={true} handleClick={hideMenu} />
            </nav>

            <div className="portal-btn hidden transition-all duration-500 ease-in-out lg:mr-32 lg:block">
                {/* <Button
                    className="relative font-medium mx-auto block w-64 max-[1080px]:w-48 h-16 rounded-r-lg bg-gradient-to-b from-tbrand to-tbrand-hover before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10 sm:mx-0"
                    tabIndex={-1}
                    type="button"
                    onClick={handleSubmit}
                >
                    <span className="whitespace-nowrap text-lg font-bold">Application Portal</span>
                </Button> */}
                <Link to="/coming-soon" className="block">
                    <Button 
                        className="relative font-medium mx-auto block w-64 max-[1080px]:w-48 h-16 rounded-r-lg bg-gradient-to-b from-tbrand to-tbrand-hover before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10 sm:mx-0"
                        tabIndex={-1}
                        type="button"
                    >
                        <span className="whitespace-nowrap text-lg font-bold">Application Portal</span>
                    </Button>
                </Link>
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
                        className="w-20 lg:w-24 onhover:dark:filter-none hover:scale-105 transition-transform duration-300 ease-in-out"
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
                    hideOutline={false}
                />
            </div>

            <div className="menu absolute lg:hidden">
                <Menu showMenu={showMenu} hideMenu={hideMenu} />
            </div>
        </header>
    );
};

export { Navbar };
