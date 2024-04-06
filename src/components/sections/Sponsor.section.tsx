import { useEffect, useRef } from 'react';
import { TopBorder, BottomBorder, Hawk, BirdParts } from '@assets';
import {
    OnePassword,
    Assembly,
    Balsamiq,
    CCubed,
    Dcl,
    DigitalOcean,
    Echo3D,
    Fdm,
    Fossa,
    Lcs,
    LeadingLeaders,
    Mlh,
    Ollon,
    Roomiez,
    Soc,
    StudentsUnion,
    Taskade,
    Veritas,
    Certopus,
    Cisco,
    DeFiBlocks,
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
} from '@assets';

const SponsorSection = () => {
    const carouselRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const animationFrameIds = new Map<HTMLDivElement, number>();

        const initializeScrollAnimation = (carousel: HTMLDivElement) => {
            const totalAnimationTime = 8000; // Total cycle time for moving, excluding pauses
            const pauseDuration = 2000; // Duration of pause at each end
            let pauseScheduled = false;
            const animationStartTime = Date.now() - pauseDuration; // Start with a pause
            let lastAnimationPhase = 'pause';

            const handleScroll = () => {
                const totalWidth = carousel.scrollWidth;
                const visibleWidth = carousel.clientWidth;
                const buffer = visibleWidth * 0.03; // Slightly less buffer for tighter right side
                const scrollDistance = totalWidth - visibleWidth + buffer;

                const easeInOutCubic = (t: number) =>
                    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

                const updatePosition = () => {
                    const currentTime = Date.now();
                    const timeElapsedSinceStart =
                        currentTime - animationStartTime;
                    const cycleDuration =
                        totalAnimationTime + pauseDuration * 2; // Total duration including pauses
                    const cyclePosition = timeElapsedSinceStart % cycleDuration;

                    let currentPosition;

                    if (cyclePosition < pauseDuration) {
                        currentPosition = 0;
                        if (lastAnimationPhase !== 'pause') {
                            pauseScheduled = false;
                        }
                    } else if (
                        cyclePosition <
                        totalAnimationTime / 2 + pauseDuration
                    ) {
                        const progress =
                            (cyclePosition - pauseDuration) /
                            (totalAnimationTime / 2);
                        currentPosition =
                            easeInOutCubic(progress) * scrollDistance;
                        lastAnimationPhase = 'forward';
                    } else if (
                        cyclePosition <
                        totalAnimationTime / 2 + pauseDuration * 2
                    ) {
                        currentPosition = scrollDistance;
                        if (!pauseScheduled) {
                            lastAnimationPhase = 'pause';
                            pauseScheduled = true;
                        }
                    } else {
                        const progress =
                            (cyclePosition -
                                totalAnimationTime / 2 -
                                pauseDuration * 2) /
                            (totalAnimationTime / 2);
                        currentPosition =
                            scrollDistance -
                            easeInOutCubic(progress) * scrollDistance;
                        lastAnimationPhase = 'backward';
                    }

                    carousel.style.transform = `translateX(-${currentPosition}px)`;
                    animationFrameIds.set(
                        carousel,
                        requestAnimationFrame(updatePosition)
                    );
                };

                // Only start the animation if the carousel is actually wider than the viewport
                if (scrollDistance > buffer) {
                    animationFrameIds.set(
                        carousel,
                        requestAnimationFrame(updatePosition)
                    );
                }
            };

            // Observe carousel for resize events
            const resizeObserver = new ResizeObserver(() => {
                if (animationFrameIds.has(carousel)) {
                    cancelAnimationFrame(animationFrameIds.get(carousel)!);
                }

                handleScroll(); // Re-evaluate whether to start or stop the animation based on new size
            });
            resizeObserver.observe(carousel);
        };

        carouselRefs.current.forEach((carousel) => {
            if (carousel) initializeScrollAnimation(carousel);
        });

        return () => {
            carouselRefs.current.forEach((carousel) => {
                if (carousel && animationFrameIds.has(carousel)) {
                    cancelAnimationFrame(animationFrameIds.get(carousel)!);
                }
            });
        };
    }, []);

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
                    <div className="top-6 flex flex-col items-center space-y-6 bg-[#f2f2f0] pt-[110px] sm:space-y-12">
                        <div className="sponsor-content">
                            <div
                                id="sponsors-anchor"
                                className="font-raleway vs:text-[60px] text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px]"
                            >
                                SPONSORS
                            </div>
                            <div className="grid gap-4">
                                <p>
                                    Thanks to our dedicated sponsors, we’re able
                                    to give hackers an invaluable space to
                                    connect and grow! Their contributions fuel
                                    the creative energy and unforgettable
                                    experiences that HawkHacks strives for.
                                </p>
                                <p>Further sponsor updates coming soon!</p>
                            </div>
                            <button>Become a sponsor!</button>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex items-center justify-start px-2 transition-transform duration-[50ms] ease-linear md:px-8">
                                <div className="h-20 w-auto flex-shrink-0 md:h-28">
                                    <img
                                        src={Dcl}
                                        alt="DCL"
                                        className="h-full w-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div
                                ref={(el) =>
                                    el && (carouselRefs.current[2] = el)
                                }
                                className="golden flex items-center justify-start space-x-6 px-4 transition-transform duration-[50ms] ease-linear"
                            >
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={DigitalOcean}
                                        alt="DigitalOcean"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Taskade}
                                        alt="Taskade"
                                        className="h-full w-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div
                                ref={(el) =>
                                    el && (carouselRefs.current[0] = el)
                                }
                                className="silver flex items-center justify-start space-x-4 px-4 transition-transform duration-[50ms] ease-linear sm:space-x-16"
                            >
                                <div className="h-14 w-auto flex-shrink-0">
                                    <img
                                        src={Veritas}
                                        alt="Veritas"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Assembly}
                                        alt="Assembly"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Soc}
                                        alt="Soc"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Fdm}
                                        alt="FDM"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Echo3D}
                                        alt="Echo3D"
                                        className="h-full w-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div
                                ref={(el) =>
                                    el && (carouselRefs.current[1] = el)
                                }
                                className="bronze flex items-center justify-start space-x-6 px-4 transition-transform duration-[50ms] ease-linear"
                            >
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={LeadingLeaders}
                                        alt="Leading"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Ollon}
                                        alt="Ollon"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={OnePassword}
                                        alt="1Password"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Roomiez}
                                        alt="Roomiez"
                                        className="h-full w-auto"
                                    />
                                </div>
                                <div className="h-12 w-auto flex-shrink-0">
                                    <img
                                        src={Balsamiq}
                                        alt="Balsamiq"
                                        className="h-full w-auto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* PARTNERS SECTION BEGINS HERE */}
                        <div className="mt-20" id="partners-section">
                            <div
                                id="partners-anchor"
                                className="font-raleway vs:text-[60px] mt-6 text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px]"
                            >
                                PARTNERS
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <img
                                    src={StudentsUnion}
                                    alt="Student Union"
                                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={CCubed}
                                    alt="Ccubed"
                                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Mlh}
                                    alt="MLH"
                                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Fossa}
                                    alt="Fossa"
                                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                                />
                                <img
                                    src={Lcs}
                                    alt="LCS"
                                    className="sm:h-18 md:h-21 col-span-2 h-16 justify-self-center md:col-span-1 lg:h-24 xl:h-24"
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
