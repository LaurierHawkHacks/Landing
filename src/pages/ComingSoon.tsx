import { Link } from 'react-router-dom';
import { ExternalBalloon, MeetTheTeamBuildingLeft } from '@assets';
import { Button } from '@components';

/*
 *
 * @description Coming Soon page
 * @props {void}
 * 
 */
const ComingSoon: React.FC = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openInNewTab('http://eepurl.com/hDHf8b');
    };

    return (
        <section
            className="stacked relative -mb-24 bg-cover"
            style={{
                background:
                    'linear-gradient(180deg, #FDDDB7 0%, #CBAAF4 328.99%, #8B6AB6 494.83%)',
            }}
        >
            <img
                src={ExternalBalloon}
                alt="Balloon"
                className="absolute right-0 top-0 w-1/4 max-w-md"
            />

            <img
                src={MeetTheTeamBuildingLeft}
                alt="Building"
                className="absolute bottom-0 left-0 w-1/4 max-w-md"
            />

            <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="mb-4 font-bold text-tbrand drop-shadow-md">
                        Coming Soon!
                    </h2>

                    <p className="mb-4 text-white drop-shadow-md">
                        This page is currently under construction 🚧
                    </p>

                    <hr className="mx-auto mb-4 w-1/2 border-white" />

                    <div className="pb-8">
                        <p className="mb-4 text-tbrand drop-shadow-md">
                            Subscribe to our newsletter to get notified when it
                            is launched!
                        </p>

                        <Button
                            type="button"
                            onClick={handleSubmit}
                            className="mx-auto w-full justify-center rounded-lg bg-gradient-to-b from-tbrand to-tbrand-hover px-4 py-2 sm:w-auto"
                        >
                            Subscribe
                        </Button>
                    </div>

                    <Link
                        to="/"
                        className="text-tbrand underline drop-shadow-md hover:text-deepMarine hover:no-underline"
                    >
                        Return to the homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { ComingSoon };