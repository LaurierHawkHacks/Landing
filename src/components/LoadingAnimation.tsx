import { HawkHacksLogo } from '@assets';

const LoadingAnimation: React.FC = () => {
    return (
        <div className="loading-container flex h-screen items-center justify-center">
            <img
                className="h-14 w-14 animate-ping"
                src={HawkHacksLogo}
                alt="Loading Animation"
            />
        </div>
    );
};

export { LoadingAnimation };
