import React, { useEffect, useState } from 'react';
import AboutAirBalloon from '../../assets/about/AboutAirBalloon.svg';
import AboutSection from '../../assets/about/AboutSection.svg';

const About: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY * 0.45); // Handles the speed at which the balloon moves
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="relative bg-gradient-to-b from-peachPuff to-brightUbe pb-10 pt-48">
            {/* MAIN SVG (Background) */}
            <div className="relative w-screen">
                <img src={AboutSection} alt="Billboard" className="block" />
            </div>
            {/* About HawkHacks Content */}
            <div className="absolute left-1/2 top-[70%] w-2/3 -translate-x-1/2 -translate-y-1/2 transform text-white ">
                <h1 className="mb-5 text-center text-4.5xl uppercase drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
                    About Hawkhacks
                </h1>
                <div className="space-y-10 text-center">
                    <p>
                        HawkHacks came out of a desire to give everyone an equal
                        opportunity to get into tech, whether that be
                        programming, networking, researching, learning, or
                        teaching.
                    </p>
                    <p>
                        Join hundreds of students across Canada (and across the
                        world) in a 36 hour period of exploration, creativity,
                        and learning!
                    </p>
                    <p>
                        Remember, you don’t have to be a pro to participate -
                        show up with ten years or ten minutes of experience (oh
                        yeah, and a great attitute too!)
                    </p>
                </div>
            </div>
            {/* Hawk Air Balloon */}
            <img
                src={AboutAirBalloon}
                alt="Billboard"
                className="absolute left-[70%] w-[20%]"
                style={{ top: `calc(30% + ${offsetY}px)` }} // Move balloon with scroll
            />
        </div>
    );
};

export { About };
