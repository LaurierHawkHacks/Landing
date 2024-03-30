import { useState, useEffect, useRef } from 'react';
import {
    HeroAboutMobile,
    HeroAboutAirBalloon,
    HeroAboutDesktop,
    HawkHacksLogo,
} from '@assets';

const HeroStatSection: React.FC = () => {
    const [translateY, setTranslateY] = useState(0);
    const heroRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);

    const handleScroll = () => {
        // Control the speed at which the Balloon travels
        const newTranslateY = window.scrollY * 0.58;
        setTranslateY(newTranslateY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (heroRef.current !== null && aboutRef.current !== null) {
            const heroSection = heroRef.current;
            const heroStyles = window.getComputedStyle(heroSection);
            aboutRef.current.style.setProperty('top', heroStyles.height);

            window.addEventListener('resize', () => {
                if (heroRef.current === null || aboutRef.current === null)
                    return;
                const heroSection = heroRef.current;
                const heroStyles = window.getComputedStyle(heroSection);
                aboutRef.current.style.setProperty('top', heroStyles.height);
            });
        }
    }, []);

    return (
        <div className="relative">
            <section
                ref={heroRef}
                className="hero-section stacked bg-gradient-to-b from-peachPuff to-brightUbe sm:place-items-start"
                id="top"
            >
                <img
                    src={HeroAboutDesktop}
                    alt="Hawkhacks stats"
                    className="hidden w-full sm:block"
                />
                <img
                    src={HeroAboutMobile}
                    alt="Hawkhacks stats"
                    className="block w-full sm:hidden"
                />
                <div className="mt-16 px-4 sm:ml-16 sm:mt-16 sm:px-0 lg:ml-20 lg:mt-24 xl:ml-24 xl:mt-32 2xl:mt-10">
                    <img
                        className="hidden aspect-square sm:mb-4 sm:block sm:w-28 lg:mb-10 xl:w-36 2xl:w-60"
                        src={HawkHacksLogo}
                        alt="Hawkhacks logo"
                    />
                    <div className="sm:space-y-2">
                        <h1 className="bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text  text-4xl font-extrabold text-transparent sm:text-5.5xl lg:text-7xl xl:text-8.5xl">
                            HawkHacks 2024
                        </h1>
                        <p className="text-base text-[#2B6469] lg:text-xl 2xl:text-3.5xl">
                            Hosted at Wilfrid Laurier University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-[#2B6469] sm:hidden sm:text-2xl">
                            May 17 - 19
                        </p>
                        <p className="text-xl font-bold text-[#2B6469] sm:hidden sm:text-2xl">
                            In Person
                        </p>
                    </div>
                </div>
                <div
                    id="about-anchor"
                    className="absolute left-1/2 top-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform pt-24 text-[#1D4549] sm:top-[70%] sm:pt-36 md:top-3/4 md:pt-36 "
                >
                    <h1 className="mb-5 text-center text-4.5xl uppercase drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
                        About Hawkhacks
                    </h1>
                    <div className="space-y-3 text-center text-[#1D4549] lg:space-y-10">
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                            HawkHacks came out of a desire to give everyone an
                            equal opportunity to get into tech, whether that be
                            programming, networking, researching, learning, or
                            teaching.
                        </p>
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                            Join hundreds of students across Canada (and across
                            the world) in a 36 hour period of exploration,
                            creativity, and learning!
                        </p>
                        <p className="text-base md:text-lg lg:text-2xl xl:text-2.5xl">
                            Remember, you don’t have to be a pro to participate
                            - show up with ten years or ten minutes of
                            experience (oh yeah, and a great attitute too!)
                        </p>
                    </div>
                </div>
                {/* Hawk Air Balloon */}
                <img
                    src={HeroAboutAirBalloon}
                    alt=""
                    className="absolute left-[70%] top-1/3 hidden w-[20%] sm:top-1/4 md:block"
                    style={{ transform: `translateY(${translateY}px)` }} // Move balloon with scroll
                />
            </section>
        </div>
    );
};

export { HeroStatSection };
