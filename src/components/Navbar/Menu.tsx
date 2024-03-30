import { NavItems, Button } from '@components';
import { Link } from 'react-router-dom';

interface MenuProp {
    showMenu: boolean;
    hideMenu: () => void;
}

const Menu: React.FC<MenuProp> = ({ showMenu, hideMenu }) => {
    if (!showMenu) return;

    return (
        <div className="oveflow-hidden gradient fixed right-0 top-0 z-50 h-screen max-w-[65%] border-l border-black px-10 py-24">
            <NavItems isHorizontal={false} handleClick={hideMenu} />
            <Button className="mt-20 block p-0">
                <Link className="px-4 py-2" to="/comingsoon">
                    Application Portal
                </Link>
            </Button>
        </div>
    );
};

export { Menu };
