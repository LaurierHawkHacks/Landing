import { NavItems, Button } from '@components';

interface MenuProp {
    showMenu: boolean;
    hideMenu: () => void;
}

const Menu: React.FC<MenuProp> = ({ showMenu, hideMenu }) => {
    if (!showMenu) return;

    return (
        <div className="oveflow-hidden fixed right-0 top-0 z-50 h-full w-full max-w-[65%] border px-10 py-24 backdrop-blur-xl">
            <NavItems isHorizontal={false} handleClick={hideMenu} />

            <Button className="mt-20 block lg:hidden">
                Application Portal
            </Button>
        </div>
    );
};

export { Menu };
