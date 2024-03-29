import React from 'react';
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
                        
                    <div className="flex overflow-x-auto overflow-y-hidden space-x-4 px-4 sm:space-x-16 py-3">
                        <img src={Veritas} alt="Veritas" className="sm:h-15 h-14" />
                        <img src={Assembly} alt="Assembly" className="sm:h-15 h-12" />
                        <img src={Soc} alt="Soc" className="sm:h-15 h-12" />
                        <img src={Fdm} alt="FDM" className="sm:h-15 h-12" />
                        <img src={Echo3D} alt="Echo3D" className="sm:h-15 h-12" />
                    </div>

                    <div className="flex overflow-x-auto overflow-y-hidden space-x-6 px-4 py-3">
                        <img src={LeadingLeaders} alt="LeadingLeaders" className="sm:h-15 h-12" />
                        <img src={Ollon} alt="Ollon" className="sm:h-15 h-12" />
                        <img src={OnePassword} alt="OnePassword" className="sm:h-15 h-12" />
                        <img src={Roomiez} alt="Roomiez" className="sm:h-15 h-12" />
                        <img src={Balsamiq} alt="Balsamiq" className="sm:h-15 h-12" />
                    </div>

                    <div className="flex overflow-x-auto overflow-y-hidden space-x-6 px-5 py-4">
                        <img src={DigitalOcean} alt="DigitalOcean" className="h-12 sm:h-14" />
                        <img src={Taskade} alt="Taskade" className="h-12 sm:h-14" />
                    </div>

                    <div className="flex overflow-x-auto overflow-y-hidden py-120">
                        <img src={Dcl} alt="DCL" className="h-28 sm:h-46 mb-10" />
                    </div>

                    <div className="mt-20" id="partners-section">
                        <div className="font-raleway vs:text-[60px] mt-6 text-center text-[50px] font-black leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px]">
                            PARTNERS
                        </div>
                        <div className="flex overflow-x-auto overflow-y-hidden space-x-3 px-4 py-2">
                            <img src={StudentsUnion} alt="Student Union" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={CCubed} alt="Ccubed" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={Mlh} alt="MLH" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={Fossa} alt="Fossa" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={Lcs} alt="LCS" className="h-16 sm:h-18 md:h-21 lg:h-24 xl:h-32" />
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

export { SponsorFAQSection };
