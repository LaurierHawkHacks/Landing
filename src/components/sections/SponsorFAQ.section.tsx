import React from "react";
import Accordion from "../Accordion";
import { TopBorder, BottomBorder, MiddleBody, Hawk, BirdParts } from "@assets";

import {
  Veritas,
  Assembly,
  SOC,
  FDM,
  Echo3D,
  LeadingLeaders,
  Ollon,
  OnePassword,
  Roomiez,
  Balsamiq,
  DigitalOcean,
  Taskade,
  DCL,
  StudentsUnion,
  CCubed,
  MLH,
  FOSSA,
  LCS,
} from "@assets";

const SponsorFAQSection = () => {
  const faqData = [
    {
      question: "So, what exactly is a hackathon?",
      answer: "Our product is...",
    },
    { question: "Do I need a team?", answer: "Our product is..." },
    {
      question: "When and where is HawkHacks happening?",
      answer: "Our product is...",
    },
    { question: "Are there any prizes?", answer: "Our product is..." },
    { question: "How much does it cost?", answer: "Our product is..." },
    {
      question: "Who can attend? Do I need to be a skilled leet programmer?",
      answer: "Our product is...",
    },
    {
      question: "This is a cool FAQ but I still have questions!",
      answer: "Our product is...",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <section id="sponsors-section" className="sponsor-section relative z-20">
        <img src={TopBorder} alt="Top Border" className="w-full z-10" />
        <img
          src={Hawk}
          alt="Bird"
          className="absolute left-0 top-0 transform -translate-y-1/4 scale-x-[-1] scale-100 z-[-1]"
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
            className="w-full object-cover h-[1200px] sm:h-[1400px] md:h-[1300px] lg:h-[1200px] z-10"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center space-y-6 sm:space-y-12 pt-[200px]">
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
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
                <img src={SOC} alt="Soc" className="max-h-full" />
              </div>
              <div className="h-12 sm:h-15 flex justify-center items-center">
                <img src={FDM} alt="FDM" className="max-h-full" />
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
                <img src={DCL} alt="DCL" className="max-h-full" />
              </div>
            </div>
            <div className="mt-20" id="partners-section">
              <div className="text-center font-raleway font-black text-[50px] leading-[117px] tracking-widest text-[#404040] drop-shadow-lg mt-36 sm:text-[80px] vs:text-[60px]">
                PARTNERS
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center mt-8 gap-y-4 gap-x-10">
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
                  src={MLH}
                  alt="MLH"
                  className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                />
                <img
                  src={FOSSA}
                  alt="Fossa"
                  className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                />
                <img
                  src={LCS}
                  alt="LCS"
                  className="h-16 sm:h-18 md:h-21 lg:h-24 xl:h-24 col-span-2 md:col-span-1 justify-self-center"
                />
              </div>
            </div>

            {/* FAQ Section*/}
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
            <h2 className="mt-60 text-center text-white font-bold drop-shadow-md">
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