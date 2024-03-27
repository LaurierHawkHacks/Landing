import React from 'react';
import { Accordion } from '@components';
import { TopBorder, BottomBorder, MiddleBody, Hawk, BirdParts } from '@assets';

import {
    Veritas,
    Assembly,
    Soc,
    Fdm,
    Echo3D,
    LeadingLeaders,
    Ollon,
    OnePassword,
    Roomiez,
    Balsamiq,
    DigitalOcean,
    Taskade,
    Dcl,
    StudentsUnion,
    CCubed,
    Mlh,
    Fossa,
    Lcs,
} from '@assets';

const SponsorFAQSection = () => {
    const faqData = [
        {
            question: '🤔 So, what exactly is a hackathon?',
            answer: "A hackathon is made up of two sections - a social coding event where programmers, designers, and developers collaborate in teams to solve a problem.\\n You can either create a software-based project that falls under a category hack, or make whatever your heart desires as a general hack. \\n The second section is networking events, seminars, and presentations that happen throughout the hackathon conducted by industry and academic professionals - if you've been putting off learning that one programming language for a while, now might be the time to learn!",
        },
        {
            question: '🕒 When and where is HawkHacks happening?',
            answer: 'HawkHacks will take place for 36 hours, starting on some day idk, Some day @ 6PM EDT all the way till Someday @ 2PM EDT.  \\n HawkHacks is a fully in-person event, meaning everything will be hosted and managed at Wilfrid Laurier University!',
        },
        {
            question: '💰 How much does it cost?',
            answer: 'Nothing! Free! Nada! Due to our amazing sponsors and support systems, attending and participating at HawkHacks is absolutely free!',
        },
        {
            question:
                '💻 Who can attend? Do I need to be a skilled leet programmer?',
            answer: 'Anybody from someone who doesn’t know what a computer is, to someone who makes computers, can attend the hackathon!\\nYou can either create a piece of software in 36-hours, attend the workshops and seminars, or do a bit of both - everything is up to you!',
        },
        {
            question: '👪 Do I need a team?',
            answer: " You can work alone, or all the way up to a team of 2, 3, or 4 people! \\nWe highly encourage working in a team! \\nIf you don't have friends who are attending, you can find a team in our Discord OR attend our team finding event before the hackathon!.",
        },
        {
            question: "🐦 Why did y'all choose a bird as the mascot?",
            answer: 'Midas, the Golden Hawk, is our school mascot!',
        },
        {
            question: '🏆 Are there any prizes?',
            answer: 'We have a tonne of different prizes!\\nWe have our general prizes for any submission, as well as prizes for each specific category hack - some of these prizes are from sponsors, and others are directly from us!\\nWe also do random giveaways and prizes throughout the event!\\nWe might have random mini-game events, or even random giveaways whenever Nausher is feeling nice :)',
        },
        {
            question:
                '📧 This is a cool FAQ section, but I still have questions!',
            answer: "No worries! Reach out to us at hello@hawkhacks.ca or our social media, and we'll get back to you as soon as our social media and email person wakes up!",
        },
    ];

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
                    className="md: absolute left-0 top-0 z-50 w-full max-w-5xl  -translate-x-2 -translate-y-[42.5%] scale-x-[-1] md:-translate-x-3 xl:left-10 2xl:left-52"
                />
                <div className="relative">
                    <img
                        src={MiddleBody}
                        alt="Middle Body"
                        className="z-10 h-[810px] w-full object-cover sm:h-[925px] md:h-[925px] lg:h-[950px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-6 flex flex-col items-center space-y-6 pt-[110px] sm:space-y-12">
                        <div className="absolute left-1/2 top-6 -translate-x-1/2 transform">
                            <div className="font-raleway vs:text-[60px] text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px]">
                                SPONSORS
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-4 px-4 sm:space-x-16">
                            <div className="sm:h-15 flex h-14 items-center justify-center">
                                <img
                                    src={Veritas}
                                    alt="Veritas"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Assembly}
                                    alt="Assembly"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Soc}
                                    alt="Soc"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Fdm}
                                    alt="FDM"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Echo3D}
                                    alt="Echo3D"
                                    className="max-h-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-6 px-4">
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={LeadingLeaders}
                                    alt="Leading"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Ollon}
                                    alt="Ollon"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={OnePassword}
                                    alt="1Password"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Roomiez}
                                    alt="Roomiez"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="sm:h-15 flex h-12 items-center justify-center">
                                <img
                                    src={Balsamiq}
                                    alt="Balsamiq"
                                    className="max-h-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-6 px-4">
                            <div className="h-13 flex items-center justify-center sm:h-16">
                                <img
                                    src={DigitalOcean}
                                    alt="DigitalOcean"
                                    className="max-h-full"
                                />
                            </div>
                            <div className="h-13 flex items-center justify-center sm:h-16">
                                <img
                                    src={Taskade}
                                    alt="Taskade"
                                    className="max-h-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-8">
                            <div className="flex h-28 items-center justify-center sm:h-32">
                                <img
                                    src={Dcl}
                                    alt="DCL"
                                    className="max-h-full"
                                />
                            </div>
                        </div>
                        <div className="mt-20" id="partners-section">
                            <div className="font-raleway vs:text-[60px] mt-6 text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px]">
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

            <section
                id="faq-section"
                className="lg:py bg-brightUbe bg-faq-image bg-cover py-12"
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mb-10 text-center">
                        <h2 className="mt-60 text-center font-bold text-white drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
                            FAQ
                        </h2>
                    </div>
                    <div className="mx-auto max-w-6xl">
                        <Accordion items={faqData} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export { SponsorFAQSection };
