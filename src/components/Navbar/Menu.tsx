import { useLockBodyScroll } from '@uidotdev/usehooks';

import { NavItems } from '@components';

interface ShowMenu {
    showMenu: boolean;
    hideMenu: () => void;
}

const Menu: React.FC<ShowMenu> = ({ showMenu, hideMenu }) => {
    useLockBodyScroll();

    return (
        <div
            className={`border fixed top-0 right-0 h-full max-w-[65%] w-full oveflow-hidden backdrop-blur-xl z-50 py-24 px-10 ${
                showMenu ? 'block' : 'hidden'
            }`}
        >
            <NavItems isHorizontal={false} handleClick={hideMenu} />

            <div className="portal-btn mt-20">
                <button className="w-full py-4 rounded-lg">
                    Application Portal
                </button>
            </div>
        </div>
    );
};

export { Menu };
