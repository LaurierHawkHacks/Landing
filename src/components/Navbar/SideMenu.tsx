import { useLockBodyScroll } from '@uidotdev/usehooks';

import { NavItems } from '@components';

interface SideMenu {
    showMenu: boolean;
    setShowMenu: () => void;
}

const SideMenu = ({ showMenu, setShowMenu }: SideMenu) => {
    useLockBodyScroll();

    return (
        <div
            className={`fixed top-0 right-0 h-full max-w-[65%] w-full oveflow-hidden backdrop-blur-xl z-50 py-24 px-10 ${
                showMenu ? 'block' : 'hidden'
            }`}
        >
            <NavItems isHorizontal={false} handleClick={setShowMenu} />
            <div className="live-portal-btn mt-20">
                <a
                    href="/"
                    className="tracking-widest border-2 rounded-md p-2 px-4 font-bold hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
                >
                    LIVE PORTAL
                </a>
            </div>
        </div>
    );
};

export { SideMenu };
