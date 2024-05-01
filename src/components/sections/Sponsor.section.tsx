import { sponsors } from './data';
import { TopBorder, BottomBorder, Hawk, BirdParts } from '@assets';
import { logEvent, analytics } from '../../utils/Analytics';
import { Button } from '@components';

const SponsorSection = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openInNewTab('https://hawkhacks.ca/sponsorships.pdf');
    };

    return (
        <div>
            <section
                id="sponsors-section"
                className="sponsor-section relative z-20"
            >
                <img src={TopBorder} alt="" className="z-10 w-full" />
                <img
                    src={Hawk}
                    alt=""
                    className="absolute left-0 top-0 z-[-1] w-full max-w-5xl -translate-y-1/2 scale-x-[-1] xl:left-10 2xl:left-52"
                />
                <img
                    src={BirdParts}
                    alt=""
                    className="absolute left-0 top-0 z-50 w-full max-w-5xl -translate-x-2 -translate-y-[42.5%] scale-x-[-1] md:-translate-x-3 xl:left-10 2xl:left-52"
                />
                <div className="relative">
                    <div className="main-container flex flex-col items-center space-y-6 bg-[#f2f2f0] pb-28 pt-8 sm:space-y-12 md:pb-52 md:pt-16 xl:pb-72 xl:pt-32 2xl:pb-96">
                        <div className="sponsor-content mx-auto max-w-6xl space-y-4 px-4 pb-10 text-center md:space-y-8 lg:space-y-16">
                            <h2
                                id="sponsors-anchor"
                                className="font-raleway vs:text-[60px] text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg md:text-[80px]"
                            >
                                SPONSORS
                            </h2>
                            <div className="grid gap-4">
                                <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                                    Thanks to our dedicated sponsors, we're able
                                    to give hackers an invaluable space to
                                    connect and grow! Their contributions fuel
                                    the creative energy and unforgettable
                                    experiences that HawkHacks strives for.
                                </p>
                                <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                                    Further sponsor updates coming soon!
                                </p>
                            </div>
                            <Button
                                className="mx-auto block w-fit bg-gradient-to-b from-tbrand to-tbrand-hover p-0 before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10"
                                tabIndex={-1}
                                type="button"
                                onClick={handleSubmit}
                            >
                                <p className="px-10 py-3 text-base font-medium md:text-lg lg:px-[123px] lg:py-[24px] lg:text-2xl xl:text-2.5xl">
                                    Become a sponsor!
                                </p>
                            </Button>
                        </div>

                        <div className="tiers xl:space-y max-w-[102rem] space-y-12 px-4 py-6 md:space-y-16 lg:space-y-24 lg:px-8 lg:py-12 xl:space-y-36 xl:px-12">
                            <div className="first-tier">
                                <div className="flex items-center justify-center gap-6 md:gap-16">
                                    {sponsors.platinumSponsors.map(
                                        (sponsor, i) => (
                                            <a
                                                key={i}
                                                href={sponsor.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="xl:h-90 h-40 cursor-pointer md:h-60 lg:h-80"
                                                onClick={() => {
                                                    logEvent(
                                                        analytics,
                                                        'click_sponsor',
                                                        {
                                                            sponsor:
                                                                sponsor.name,
                                                        }
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={sponsor.image}
                                                    alt={sponsor.name}
                                                    className="aspect-video h-full w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="second-tier">
                                <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-12">
                                    {sponsors.goldSponsors.map((sponsor, i) => (
                                        <a
                                            key={i}
                                            href={sponsor.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-56"
                                            onClick={() => {
                                                logEvent(
                                                    analytics,
                                                    'click_sponsor',
                                                    { sponsor: sponsor.name }
                                                );
                                            }}
                                        >
                                            <img
                                                src={sponsor.image}
                                                alt={sponsor.name}
                                                className="aspect-video h-full w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                                loading="lazy"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="third-tier">
                                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                                    {sponsors.silverSponsors.map(
                                        (sponsor, i) => (
                                            <a
                                                key={i}
                                                href={sponsor.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h-12 w-auto flex-shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36"
                                                onClick={() => {
                                                    logEvent(
                                                        analytics,
                                                        'click_sponsor',
                                                        {
                                                            sponsor:
                                                                sponsor.name,
                                                        }
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={sponsor.image}
                                                    alt={sponsor.name}
                                                    className="aspect-video h-full w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="fourth-tier">
                                <div className="flex flex-wrap items-center justify-center gap-8">
                                    {sponsors.bronzeSponsors.map(
                                        (sponsor, i) => (
                                            <a
                                                key={i}
                                                href={sponsor.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                // -4
                                                className="sm:h-18 lg:h-22 h-12 w-auto flex-shrink-0 md:h-20 xl:h-24"
                                                onClick={() => {
                                                    logEvent(
                                                        analytics,
                                                        'click_sponsor',
                                                        {
                                                            sponsor:
                                                                sponsor.name,
                                                        }
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={sponsor.image}
                                                    alt={sponsor.name}
                                                    className="aspect-video h-full w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            id="partners-section"
                            className=" px-4 lg:px-8 xl:px-12 2xl:px-20"
                        >
                            <h2
                                id="partners-anchor"
                                className="font-raleway vs:text-[60px] mb-4 mt-6 text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg md:mb-8 md:text-[80px] lg:mb-16"
                            >
                                PARTNERS
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {sponsors.partners.map((partner, i) => (
                                    <a
                                        key={i}
                                        href={partner.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-40"
                                        onClick={() => {
                                            logEvent(
                                                analytics,
                                                'click_partner',
                                                { partner: partner.name }
                                            );
                                        }}
                                    >
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="aspect-video h-full w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                            loading="lazy"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={BottomBorder} alt="" className="z-10 w-full" />
            </section>
        </div>
    );
};

export { SponsorSection };
