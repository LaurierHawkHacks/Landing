import { NavItems, Button } from '@components';
import { Link } from 'react-router-dom';

interface MenuProp {
    showMenu: boolean;
    hideMenu: () => void;
}

const Menu: React.FC<MenuProp> = ({ showMenu, hideMenu }) => {
    if (!showMenu) return;

    return (
        <div className="oveflow-hidden fixed right-0 top-0 z-50 h-screen max-w-[65%] w-full border border-white bg-white/20 px-10 py-24 backdrop-blur-lg">
            <NavItems isHorizontal={false} handleClick={hideMenu} />
            <Button className="mt-20 block">
                <Link className="text-sm" to="/comingsoon">
                    Application Portal
                </Link>
            </Button>
        </div>
    );
};

export { Menu };
