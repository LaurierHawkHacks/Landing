import { ExternalBalloon, MeetTheTeamBuildingLeft } from "@assets";

/*
 *
 * @description Error page
 * @props {void}
 * 
 */
const ErrorPage: React.FC = () => {
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
                        404 Error
                    </h2>

                    <p className="text-white drop-shadow-md mb-4">
                        Are you supposed to be here? 🤔
                    </p>

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

export { ErrorPage };