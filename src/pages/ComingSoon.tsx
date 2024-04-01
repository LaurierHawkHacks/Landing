import { ExternalBalloon, MeetTheTeamBuildingLeft } from "@assets";
import { Button } from "@components";

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
            className="stacked -mb-24 bg-cover relative"
            style={{
                background: "linear-gradient(180deg, #FDDDB7 0%, #CBAAF4 328.99%, #8B6AB6 494.83%)",
            }}
        >
            <img
                src={ExternalBalloon}
                alt="Balloon"
                className="absolute top-0 right-0 w-1/4 max-w-md"
            />

            <img
                src={MeetTheTeamBuildingLeft}
                alt="Building"
                className="absolute bottom-0 left-0 w-1/4 max-w-md"
            />
            
            <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h2 className="font-bold text-tbrand drop-shadow-md mb-4">
                        Coming Soon!
                    </h2>

                    <p className="text-white drop-shadow-md mb-4">
                        This page is currently under construction 🚧
                    </p>

                    <hr className="border-white w-1/2 mx-auto mb-4" />

                    <div className="pb-8">
                        <p className="text-tbrand drop-shadow-md mb-4">
                            Subscribe to our newsletter to get notified when it is launched!
                        </p>
            
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            className="mx-auto w-full sm:w-auto justify-center rounded-lg bg-gradient-to-b from-tbrand to-tbrand-hover px-4 py-2"
                        >
                            Subscribe
                        </Button>
                    </div>

                    <a
                        href="/"
                        className="text-tbrand drop-shadow-md underline hover:text-deepMarine hover:no-underline"
                    >
                        Return to the homepage
                    </a>
                </div>
            </div>
        </section>
    );
};

export { ComingSoon };