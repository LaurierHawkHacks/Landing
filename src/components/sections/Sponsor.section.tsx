// import { useEffect, useRef } from 'react';

import { TopBorder, BottomBorder, Hawk, BirdParts, StreamYard } from '@assets';

import {
    OnePassword,
    Balsamiq,
    Echo3D,
    Fossa,
    Lcs,
    Mlh,
    StudentsUnion,
    Taskade,
    Certopus,
    Cisco,
    DeFiBlocks,
    Dominos,
    Distributive,
    Ennios,
    Fantuan,
    IndoFood,
    InterviewBuddy,
    InterviewCake,
    JDoodle,
    Near,
    Nibiru,
    Roku,
    SmokesPoutinerie,
    SweetLouLogo,
    Vectara,
    Verbwire,
    Fintech,
    Wolfram,
    Solana,
    Rosenfeld,
} from '@assets';

import { Button } from '@components';
import { Link } from 'react-router-dom';

const SponsorSection = () => {
    // const carouselRefs = useRef<HTMLDivElement[]>([]);

    // useEffect(() => {
    //     const animationFrameIds = new Map<HTMLDivElement, number>();

    //     const initializeScrollAnimation = (carousel: HTMLDivElement) => {
    //         const totalAnimationTime = 8000; // Total cycle time for moving, excluding pauses
    //         const pauseDuration = 2000; // Duration of pause at each end
    //         let pauseScheduled = false;
    //         const animationStartTime = Date.now() - pauseDuration; // Start with a pause
    //         let lastAnimationPhase = 'pause';

    //         const handleScroll = () => {
    //             const totalWidth = carousel.scrollWidth;
    //             const visibleWidth = carousel.clientWidth;
    //             const buffer = visibleWidth * 0.03; // Slightly less buffer for tighter right side
    //             const scrollDistance = totalWidth - visibleWidth + buffer;

    //             const easeInOutCubic = (t: number) =>
    //                 t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    //             const updatePosition = () => {
    //                 const currentTime = Date.now();
    //                 const timeElapsedSinceStart =
    //                     currentTime - animationStartTime;
    //                 const cycleDuration =
    //                     totalAnimationTime + pauseDuration * 2; // Total duration including pauses
    //                 const cyclePosition = timeElapsedSinceStart % cycleDuration;

    //                 let currentPosition;

    //                 if (cyclePosition < pauseDuration) {
    //                     currentPosition = 0;
    //                     if (lastAnimationPhase !== 'pause') {
    //                         pauseScheduled = false;
    //                     }
    //                 } else if (
    //                     cyclePosition <
    //                     totalAnimationTime / 2 + pauseDuration
    //                 ) {
    //                     const progress =
    //                         (cyclePosition - pauseDuration) /
    //                         (totalAnimationTime / 2);
    //                     currentPosition =
    //                         easeInOutCubic(progress) * scrollDistance;
    //                     lastAnimationPhase = 'forward';
    //                 } else if (
    //                     cyclePosition <
    //                     totalAnimationTime / 2 + pauseDuration * 2
    //                 ) {
    //                     currentPosition = scrollDistance;
    //                     if (!pauseScheduled) {
    //                         lastAnimationPhase = 'pause';
    //                         pauseScheduled = true;
    //                     }
    //                 } else {
    //                     const progress =
    //                         (cyclePosition -
    //                             totalAnimationTime / 2 -
    //                             pauseDuration * 2) /
    //                         (totalAnimationTime / 2);
    //                     currentPosition =
    //                         scrollDistance -
    //                         easeInOutCubic(progress) * scrollDistance;
    //                     lastAnimationPhase = 'backward';
    //                 }

    //                 carousel.style.transform = `translateX(-${currentPosition}px)`;
    //                 animationFrameIds.set(
    //                     carousel,
    //                     requestAnimationFrame(updatePosition)
    //                 );
    //             };

    //             // Only start the animation if the carousel is actually wider than the viewport
    //             if (scrollDistance > buffer) {
    //                 animationFrameIds.set(
    //                     carousel,
    //                     requestAnimationFrame(updatePosition)
    //                 );
    //             }
    //         };

    //         // Observe carousel for resize events
    //         const resizeObserver = new ResizeObserver(() => {
    //             if (animationFrameIds.has(carousel)) {
    //                 cancelAnimationFrame(animationFrameIds.get(carousel)!);
    //             }

    //             handleScroll(); // Re-evaluate whether to start or stop the animation based on new size
    //         });
    //         resizeObserver.observe(carousel);
    //     };

    //     carouselRefs.current.forEach((carousel) => {
    //         if (carousel) initializeScrollAnimation(carousel);
    //     });

    //     return () => {
    //         carouselRefs.current.forEach((carousel) => {
    //             if (carousel && animationFrameIds.has(carousel)) {
    //                 cancelAnimationFrame(animationFrameIds.get(carousel)!);
    //             }
    //         });
    //     };
    // }, []);

    return (
        <div>
            <section
                id="sponsors-section"
                className="sponsor-section relative z-20"
            >
                <img src={TopBorder} alt="Top Border" className="z-10 w-full" />
                <img
                    src={Hawk}
                    alt="Bird"
                    className="absolute left-0 top-0 z-[-1] w-full max-w-5xl -translate-y-1/2 scale-x-[-1] xl:left-10 2xl:left-52"
                />
                <img
                    src={BirdParts}
                    alt="Bird Parts"
                    className="md: absolute left-0 top-0 z-50 w-full max-w-5xl -translate-x-2 -translate-y-[42.5%] scale-x-[-1] md:-translate-x-3 xl:left-10 2xl:left-52"
                />
                <div className="relative">
                    <div className="main-container flex flex-col items-center space-y-6 bg-[#f2f2f0] py-8 sm:space-y-12 md:py-16 xl:py-32">
                        <div className="sponsor-content mx-auto max-w-6xl space-y-4 px-4 pb-10 text-center md:space-y-8 lg:space-y-16">
                            <h2
                                id="sponsors-anchor"
                                className="font-raleway vs:text-[60px] text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg md:text-[80px]"
                            >
                                SPONSORS
                            </h2>
                            <div className="grid gap-4">
                                <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                                    Thanks to our dedicated sponsors, we’re able
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
                                className="mx-auto block w-fit px-10 py-3 lg:px-[123px] lg:py-[24px]"
                                tabIndex={-1}
                            >
                                {/* <Link
                                    to="public/sponsorships.pdf"
                                    className="block px-5 py-2"
                                >
                                    Application Portal
                                </Link> */}
                                <a
                                    className="text-base md:text-lg lg:text-2xl xl:text-2.5xl"
                                    href="./sponsorships.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Become a sponsor!
                                </a>
                            </Button>
                        </div>

                        {/* each div is a section */}
                        {/* the height define the size of the image */}
                        {/* the different row define different tiers */}
                        {/* first: h-20, mb-150px
                            second: h-14, mb-150px
                            third: h-12
                            fourth: h-8
                        */}

                        {/* first tier: h-20 */}
                        <div className="max-w-[100rem] overflow-hidden ">
                            <div className="mb-[2rem] flex items-center justify-center gap-4 transition-transform duration-[50ms] ease-linear md:gap-6">
                                <div className="h-28 md:h-40 lg:h-60 xl:h-80">
                                    <img
                                        src={Solana}
                                        alt="Solana"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-28 md:h-40 lg:h-60 xl:h-80">
                                    <img
                                        src={Near}
                                        alt="Near"
                                        className="aspect-video h-28 w-auto object-contain md:h-40 lg:h-60 xl:h-80"
                                    />
                                </div>

                                {/* <img
                                    src={Near}
                                    alt="Near"
                                    className="aspect-video h-28 w-auto object-contain md:h-40 lg:h-60 xl:h-80"
                                /> */}
                            </div>
                        </div>

                        {/* second tier */}
                        <div className="max-w-[100rem] overflow-hidden">
                            <div
                                // ref={(el) =>
                                //     el && (carouselRefs.current[2] = el)
                                // }
                                // className="golden flex items-center justify-start space-x-6 px-4 transition-transform duration-[50ms] ease-linear"
                                className="mb-[2rem] flex flex-wrap items-center justify-center gap-4 lg:gap-12"
                            >
                                {/* h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32 */}
                                <div className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44">
                                    <img
                                        src={Fantuan}
                                        alt="Fantuan"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44">
                                    <img
                                        src={SmokesPoutinerie}
                                        alt="SmokesPoutinerie"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44">
                                    <img
                                        src={Dominos}
                                        alt="Dominos"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44">
                                    <img
                                        src={Nibiru}
                                        alt="Nibiru"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44">
                                    <img
                                        src={Distributive}
                                        alt="Distributive"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* third tier */}
                        <div className="max-w-[100rem] overflow-hidden">
                            <div
                                // ref={(el) =>
                                //     el && (carouselRefs.current[0] = el)
                                // }
                                // className="silver flex items-center justify-start space-x-4 px-4 transition-transform duration-[50ms] ease-linear sm:space-x-16"
                                className="mb-[2rem] flex flex-wrap items-center justify-center gap-8 lg:gap-12"
                            >
                                {/* h-16 w-auto flex-shrink-0 sm:h-24 md:h-32 lg:h-36 xl:h-44 */}
                                <div className="h-12 w-auto flex-shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36">
                                    <img
                                        src={IndoFood}
                                        alt="VeriIndoFoodtas"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36">
                                    <img
                                        src={Roku}
                                        alt="Roku"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36">
                                    <img
                                        src={SweetLouLogo}
                                        alt="SweetLouLogo"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-24 md:h-28 lg:h-32 xl:h-36">
                                    <img
                                        src={Cisco}
                                        alt="Cisco"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* last tiers: make each row contain mostly 4 things */}
                        <div className="max-w-[100rem] overflow-hidden ">
                            <div
                                // ref={(el) =>
                                //     el && (carouselRefs.current[1] = el)
                                // }
                                // className="bronze flex items-center justify-start space-x-6 px-4 transition-transform duration-[50ms] ease-linear"
                                className="mb-[2rem] flex flex-wrap items-center justify-center gap-8"
                            >
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Echo3D}
                                        alt="Echo3D"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={OnePassword}
                                        alt="1Password"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Wolfram}
                                        alt="Wolfram"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Balsamiq}
                                        alt="Balsamiq"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Rosenfeld}
                                        alt="Rosenfeld"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Taskade}
                                        alt="Taskade"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={StreamYard}
                                        alt="StreamYard"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={DeFiBlocks}
                                        alt="DeFiBlocks"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={InterviewCake}
                                        alt="InterviewCake"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Ennios}
                                        alt="Ennios"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Certopus}
                                        alt="Certopus"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={InterviewBuddy}
                                        alt="InterviewBuddy"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Verbwire}
                                        alt="Verbwire"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={JDoodle}
                                        alt="JDoodle"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
                                        src={Vectara}
                                        alt="Vectara"
                                        className="aspect-video h-full w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* PARTNERS SECTION BEGINS HERE */}
                        <div id="partners-section">
                            <h2
                                id="partners-anchor"
                                className="font-raleway vs:text-[60px] mb-4 mt-6 text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg md:mb-8 md:text-[80px] lg:mb-16"
                            >
                                PARTNERS
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <img
                                    src={StudentsUnion}
                                    alt="Student Union"
                                    className=" aspect-video h-16 object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Mlh}
                                    alt="MLH"
                                    className="aspect-video h-16 object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Fossa}
                                    alt="Fossa"
                                    className="aspect-video h-16 object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Fintech}
                                    alt="Fintech"
                                    className="aspect-video h-16 object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Lcs}
                                    alt="LCS"
                                    className="aspect-video h-16 object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={BottomBorder}
                    alt="Bottom Border"
                    className="z-10 w-full"
                />
            </section>
        </div>
    );
};

export { SponsorSection };
