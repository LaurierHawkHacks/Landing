import React from "react";
import { Accordion } from "@components";
import { TopBorder, BottomBorder, MiddleBody, Hawk, BirdParts } from "@assets";

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
} from "@assets";

const SponsorFAQSection = () => {
    const faqData = [
        {
            question: "🤔 So, what exactly is a hackathon?",
            answer: "A hackathon is made up of two sections - a social coding event where programmers, designers, and developers collaborate in teams to solve a problem.\\n You can either create a software-based project that falls under a category hack, or make whatever your heart desires as a general hack. \\n The second section is networking events, seminars, and presentations that happen throughout the hackathon conducted by industry and academic professionals - if you've been putting off learning that one programming language for a while, now might be the time to learn!",
        },
        { 
            question: "🕒 When and where is HawkHacks happening?", 
            answer: "HawkHacks will take place for 36 hours, starting on some day idk, Some day @ 6PM EDT all the way till Someday @ 2PM EDT.  \\n HawkHacks is a fully in-person event, meaning everything will be hosted and managed at Wilfrid Laurier University!"
        },
        {
            question: "💰 How much does it cost?",
            answer: "Nothing! Free! Nada! Due to our amazing sponsors and support systems, attending and participating at HawkHacks is absolutely free!",
        },
        { 
            question: "💻 Who can attend? Do I need to be a skilled leet programmer?", 
            answer: "Anybody from someone who doesn’t know what a computer is, to someone who makes computers, can attend the hackathon!\\nYou can either create a piece of software in 36-hours, attend the workshops and seminars, or do a bit of both - everything is up to you!" 
        },
        { 
            question: "👪 Do I need a team?", 
            answer: " You can work alone, or all the way up to a team of 2, 3, or 4 people! \\nWe highly encourage working in a team! \\nIf you don't have friends who are attending, you can find a team in our Discord OR attend our team finding event before the hackathon!." 
        },
        {
            question: "🐦 Why did y'all choose a bird as the mascot?",
            answer: "Midas, the Golden Hawk, is our school mascot!",
        },
        {
            question: "🏆 Are there any prizes?",
            answer: "We have a tonne of different prizes!\\nWe have our general prizes for any submission, as well as prizes for each specific category hack - some of these prizes are from sponsors, and others are directly from us!\\nWe also do random giveaways and prizes throughout the event!\\nWe might have random mini-game events, or even random giveaways whenever Nausher is feeling nice :)"
        },
        {
          question: "📧 This is a cool FAQ section, but I still have questions!",
          answer: "No worries! Reach out to us at hello@hawkhacks.ca or our social media, and we'll get back to you as soon as our social media and email person wakes up!",
        },
    ];

    return (
        <div>
            <section id="sponsors-section" className="sponsor-section relative z-20">
            <img src={TopBorder} alt="Top Border" className="w-full z-10" />
            <img
            src={Hawk}
            alt="Bird"
            className="absolute left-0 top-0 transform -translate-y-1/2 scale-x-[-1] scale-100 z-[-1]"
            />
            <img
            src={BirdParts}
            alt="Bird Parts"
            className="absolute left-0 top-0 transform -translate-y-[42.5%] -translate-x-[1%] scale-x-[-1] scale-100 z-50 lg:translate-x-[5%]"
            />
            <div className="relative">
            <img
            src={MiddleBody}
            alt="Middle Body"
            className="w-full object-cover h-[810px] sm:h-[925px] md:h-[925px] lg:h-[950px] z-10"
            />
            <div className="absolute top-6 left-0 right-0 bottom-0 flex flex-col items-center space-y-6 sm:space-y-12 pt-[110px]">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 ">
            <div className="text-center font-raleway font-black text-[50px] leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px] vs:text-[60px]">
            SPONSORS
            </div>
            </div>

            <div className="flex justify-center items-center sm:space-x-16 space-x-4 px-4">
            <div className="h-14 sm:h-15 flex justify-center items-center">
            <img src={Veritas} alt="Veritas" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Assembly} alt="Assembly" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Soc} alt="Soc" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Fdm} alt="FDM" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Echo3D} alt="Echo3D" className="max-h-full" />
            </div>
            </div>
            <div className="flex justify-center items-center space-x-6 px-4">
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={LeadingLeaders} alt="Leading" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Ollon} alt="Ollon" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img
            src={OnePassword}
            alt="1Password"
            className="max-h-full"
            />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Roomiez} alt="Roomiez" className="max-h-full" />
            </div>
            <div className="h-12 sm:h-15 flex justify-center items-center">
            <img src={Balsamiq} alt="Balsamiq" className="max-h-full" />
            </div>
            </div>
            <div className="flex justify-center items-center space-x-6 px-4">
            <div className="h-13 sm:h-16 flex justify-center items-center">
            <img
            src={DigitalOcean}
            alt="DigitalOcean"
            className="max-h-full"
            />
            </div>
            <div className="h-13 sm:h-16 flex justify-center items-center">
            <img src={Taskade} alt="Taskade" className="max-h-full" />
            </div>
            </div>
            <div className="flex justify-center items-center px-8">
            <div className="h-28 sm:h-32 flex justify-center items-center">
            <img src={Dcl} alt="DCL" className="max-h-full" />
            </div>
            </div>
            <div className="mt-20" id="partners-section">
            <div className="text-center font-raleway font-black mt-6 text-[50px] leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px] vs:text-[60px]">
            PARTNERS
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3">
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
            className="h-16 sm:h-18 md:h-21 lg:h-24 xl:h-24 col-span-2 md:col-span-1 justify-self-center"
            />
            </div>
            </div>
            </div>
            </div>
            <img
            src={BottomBorder}
            alt="Bottom Border"
            className="w-full z-10"
            />
            </section>

            <section
            id="faq-section"
            className="py-12 lg:py bg-brightUbe bg-faq-image bg-cover"
            >
            <div className="container mx-auto px-4">
            <div className="text-center mb-10">
            <h2 className="mt-60 text-center text-white font-bold drop-shadow-md lg:text-6.5xl xl:text-7.5xl">
            FAQ
            </h2>
            </div>
            <div className="max-w-6xl mx-auto">
            <Accordion items={faqData} />
            </div>
            </div>
            </section>
        </div>
    );
};

export { SponsorFAQSection };