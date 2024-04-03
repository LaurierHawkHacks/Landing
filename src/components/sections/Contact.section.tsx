import React from 'react';
import { TopBorder, BottomBorder, MiddleBody, Hawk, BirdParts } from '@assets';
import { Button } from '@components';

const ContactSection: React.FC = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        openInNewTab('http://eepurl.com/hDHf8b');
    };
    return (
        <section className="relative z-10">
            <img src={TopBorder} className="z-0 w-full" alt="" />
            <img
                src={Hawk}
                className="absolute right-0 top-0 z-[-1] w-full max-w-5xl -translate-x-2  -translate-y-1/2 md:-translate-x-3 xl:right-10 2xl:right-52"
                alt=""
            />
            <img
                src={BirdParts}
                className="absolute right-0 top-0 z-50 w-full max-w-5xl -translate-y-[42.5%] xl:right-10 2xl:right-52"
                alt=""
            />

            <div className="absolute inset-x-0 z-10 mx-auto max-w-4xl px-4 pt-10 sm:pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-32 xl:pt-32">
                <div className="contact-info mb-2 text-center sm:mb-4 sm:text-left md:mb-6 lg:mb-12">
                    <h2
                        id="contact-anchor"
                        className="font-raleway text-2xl font-extrabold leading-tight tracking-wider text-[#32848C] sm:text-4xl md:text-5xl lg:text-8xl"
                    >
                        CONTACT US
                    </h2>
                    <p className="my-6">
                        Reach out at <b>hello@hawkhacks.ca</b> for any help or
                        support, and please be sure to join the{' '}
                        <b>HawkHacks Discord</b> community!
                    </p>
                </div>
                <Button
                    type="button" // Changed to type="button" to prevent form submission
                    onClick={handleSubmit}
                    className="relative mx-auto block w-fit rounded-r-lg bg-gradient-to-b from-tbrand to-tbrand-hover before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-300 before:hover:opacity-10 sm:mx-0"
                >
                    <span className="whitespace-nowrap">
                        Sign up for our newsletter!
                    </span>
                </Button>
            </div>
            <img
                src={MiddleBody}
                className="z-0 h-[300px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[700px]"
                alt=""
            />
            <img src={BottomBorder} className="z-0 w-full" alt="" />
        </section>
    );
};

export { ContactSection };
