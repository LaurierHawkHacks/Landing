import { useState, useEffect, useRef } from 'react';
import {
    HawkHacksLogo,
    HeroAboutMobile,
    HeroAboutAirBalloon,
    HeroAboutDesktop,
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
                className="hero-section stacked bg-peachPuff sm:place-items-start"
            >
                <img
                    src={HeroAboutDesktop}
                    alt="Hawkhacks stats"
                    className="hidden w-full md:block"
                />
                <img
                    src={HeroAboutMobile}
                    alt="Hawkhacks stats"
                    className="block w-full md:hidden"
                />
                <div className="space-y-1 pb-4 pl-10 text-left sm:pl-24 sm:pt-12 lg:pl-16 lg:pt-16 2xl:pl-60 2xl:pt-24">
                    <img
                        className="inline-block aspect-square w-16 sm:mx-0 lg:w-28 xl:w-32 2xl:w-52"
                        src={HawkHacksLogo}
                        alt="Hawkhacks logo"
                    />
                    <div className="sm:space-y-2">
                        <h1 className="bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text  text-4xl font-extrabold text-transparent sm:text-5.5xl lg:text-7xl xl:text-8.5xl">
                            HawkHacks 2024
                        </h1>
                        <p className="text-base font-semibold text-[#2B6469] lg:text-xl xl:text-3.5xl">
                            Hosted at Wilfrid Laurier University
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-[#2B6469] sm:hidden sm:text-2xl">
                            April 5th - 7th
                        </p>
                        <p className="text-xl font-bold text-[#2B6469] sm:hidden sm:text-2xl">
                            In Person
                        </p>
                    </div>
                </div>
                <div className="absolute left-1/2 top-3/4 w-2/3 -translate-x-1/2 -translate-y-1/2 transform text-white ">
                    <h1 className="mb-5 text-center text-4.5xl uppercase drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
                        About Hawkhacks
                    </h1>
                    <div className="space-y-3 text-center sm:space-y-10">
                        <p>
                            HawkHacks came out of a desire to give everyone an
                            equal opportunity to get into tech, whether that be
                            programming, networking, researching, learning, or
                            teaching.
                        </p>
                        <p>
                            Join hundreds of students across Canada (and across
                            the world) in a 36 hour period of exploration,
                            creativity, and learning!
                        </p>
                        <p>
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
