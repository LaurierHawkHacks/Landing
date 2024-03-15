import { useState, useEffect, useRef } from 'react';
import AboutAirBalloon from '../../assets/about/about-air-balloon.svg';
// import AboutSectionDesktop from '../../assets/about/about-section-desktop.svg';
// import AboutSectionMobile from '../../assets/about/about-section-mobile.svg';
// import { HeroBackgroundMobile, HeroBackgroundDesktop } from '@assets';
import { HeroAboutDesktop } from '@assets';

const HeroStatSection = () => {
    const [translateY, setTranslateY] = useState(0);
    const heroRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);

    const handleScroll = () => {
        // Control the speed at which the Balloon travels
        const newTranslateY = window.scrollY * 0.45;
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
                className="hero-section stacked place-items-end-center absolute bg-peachPuff sm:place-items-start"
            >
                <img src={HeroAboutDesktop} />
                {/* <HeroBackgroundMobile className="media block pb-16 sm:hidden xl:translate-y-20" /> */}
                {/* <HeroBackgroundDesktop className="media hidden sm:block xl:translate-y-20" /> */}

                <div className="space-y-1 pb-4 text-center sm:pl-24 sm:pt-12 sm:text-left lg:pl-16 lg:pt-16 2xl:pl-60 2xl:pt-24">
                    <img
                        className="inline-block aspect-square w-20 sm:mx-0 lg:w-28 xl:w-32 2xl:w-52"
                        src="src/assets/logo.svg"
                        alt="Hawkhack logo"
                    />
                    <div className="sm:space-y-2">
                        <h1 className="bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text text-5.5xl font-extrabold text-transparent lg:text-7xl xl:text-8.5xl">
                            HawkHacks 2024
                        </h1>
                        <p className="text-base font-semibold text-[#2B6469] lg:text-xl xl:text-3.5xl">
                            Hosted at Wilfrid Laurier University
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-[#2B6469] sm:hidden">
                            April 5th - 7th
                        </p>
                        <p className="text-2xl font-bold text-[#2B6469] sm:hidden">
                            In Person
                        </p>
                    </div>
                </div>
                <div className="absolute left-1/2 top-[70%] w-2/3 -translate-x-1/2 -translate-y-1/2 transform text-white ">
                    <h1 className="mb-5 text-center text-4.5xl uppercase drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
                        About Hawkhacks
                    </h1>
                    <div className="space-y-10 text-center">
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
                    src={AboutAirBalloon}
                    alt=""
                    className="absolute left-[70%] top-1/3 hidden w-[20%] sm:top-1/4 md:block"
                    style={{ transform: `translateY(${translateY}px)` }} // Move balloon with scroll
                />
            </section>

            {/* about section */}
            <section ref={aboutRef} id="about-section" className="absolute">
                <div className="relative pb-10">
                    {/* MAIN SVG (Background) */}
                    {/* <div className="relative w-full object-cover"> */}
                    {/*     <img */}
                    {/*         src={AboutSectionDesktop} */}
                    {/*         alt="about-statistics" */}
                    {/*         className="hidden w-full md:block" */}
                    {/*     /> */}
                    {/*     <img */}
                    {/*         src={AboutSectionMobile} */}
                    {/*         alt="about-statistics" */}
                    {/*         className="block w-full md:hidden" */}
                    {/*     /> */}
                    {/* </div> */}
                    {/* About HawkHacks Content */}
                </div>
            </section>
        </div>
    );
};

export default HeroStatSection;
