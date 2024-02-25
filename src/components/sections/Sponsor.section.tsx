import React from 'react';
import GreyBorderTop from '../../assets/sponsor/top-border.svg';
import GreyBorderBottom from '../../assets/sponsor/bottom-border.svg';
import MiddleBody from '../../assets/sponsor/middle-body.svg';
import HawkSVG from '../../assets/sponsor/hawk.svg';
import BirdPartsSVG from '../../assets/sponsor/bird_parts.svg';
// Sponsor logos
import VeritasLogo from '../../assets/logos/veritas.png';
import AssemblyLogo from '../../assets/logos/assembly.png';
import SocLogo from '../../assets/logos/soc.png';
import FdmLogo from '../../assets/logos/fdm.png';
import Echo3dLogo from '../../assets/logos/echo3d.png';
import LeadingLogo from '../../assets/logos/leadingleaders.png';
import OllonLogo from '../../assets/logos/ollon.png';
import OnePasswordLogo from '../../assets/logos/1password.png';
import RoomiezLogo from '../../assets/logos/roomiez.png';
import BalsamiqLogo from '../../assets/logos/balsamiq.png';
import DigitalOceanLogo from '../../assets/logos/digitalocean.png';
import TaskadeLogo from '../../assets/logos/taskade.png';
import DclLogo from '../../assets/logos/dcl.png';
// Partner logos
import StudentUnionLogo from '../../assets/logos/studentsunion.png';
import CcubedLogo from '../../assets/logos/ccubed.png';
import MlhLogo from '../../assets/logos/mlh.png';
import FossaLogo from '../../assets/logos/fossa.png';
import LcsLogo from '../../assets/logos/lcs.png';
const SponsorSection: React.FC = () => {
    return (
        <section className="sponsor-section relative z-20">
            <img src={GreyBorderTop} alt="Top Border" className="w-full z-10" />
            <img src={HawkSVG} alt="Bird" className="absolute left-0 top-0 transform -translate-y-1/4 scale-x-[-1] scale-100 z-[-1]" />
            <img src={BirdPartsSVG} alt="Bird Parts" className="absolute left-0 top-0 transform -translate-y-[42.5%] -translate-x-[1%] scale-x-[-1] scale-100 z-50 lg:translate-x-[5%]" />
            <div className="relative">
                <img src={MiddleBody} alt="Middle Body" className="w-full object-cover h-[1200px] sm:h-[1400px] md:h-[1300px] lg:h-[1200px] z-10" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center space-y-6 sm:space-y-12 pt-[200px]">
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                        <div className="text-center font-raleway font-black text-[50px] leading-[117px] tracking-widest text-[#404040] drop-shadow-lg sm:text-[80px] vs:text-[60px]">
                            SPONSORS
                        </div>
                    </div>
                    <div className="flex justify-center items-center sm:space-x-16 space-x-4 px-4">
                        <div className="h-14 sm:h-15 flex justify-center items-center">
                            <img src={VeritasLogo} alt="Veritas" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={AssemblyLogo} alt="Assembly" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={SocLogo} alt="Soc" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={FdmLogo} alt="FDM" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={Echo3dLogo} alt="Echo3D" className="max-h-full" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-6 px-4">
                        <div className="h-12 sm:h-15 flex justify-center items-center"> 
                            <img src={LeadingLogo} alt="Leading" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={OllonLogo} alt="Ollon" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={OnePasswordLogo} alt="1Password" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={RoomiezLogo} alt="Roomiez" className="max-h-full" />
                        </div>
                        <div className="h-12 sm:h-15 flex justify-center items-center">
                            <img src={BalsamiqLogo} alt="Balsamiq" className="max-h-full" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-6 px-4">
                        <div className="h-13 sm:h-16 flex justify-center items-center">
                            <img src={DigitalOceanLogo} alt="DigitalOcean" className="max-h-full" />
                        </div>
                        <div className="h-13 sm:h-16 flex justify-center items-center">
                            <img src={TaskadeLogo} alt="Taskade" className="max-h-full" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center px-8">
                        <div className="h-28 sm:h-32 flex justify-center items-center">
                            <img src={DclLogo} alt="DCL" className="max-h-full" />
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-center font-raleway font-black text-[50px] leading-[117px] tracking-widest text-[#404040] drop-shadow-lg mt-36 sm:text-[80px] vs:text-[60px]">
                            PARTNERS
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center mt-8 gap-y-4 gap-x-10">
                            <img src={StudentUnionLogo} alt="Student Union" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={CcubedLogo} alt="Ccubed" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={MlhLogo} alt="MLH" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={FossaLogo} alt="Fossa" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                            <img src={LcsLogo} alt="LCS" className="h-16 sm:h-18 md:h-21 lg:h-24 xl:h-24 col-span-2 md:col-span-1 justify-self-center" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={GreyBorderBottom} alt="Bottom Border" className="w-full z-10" />
        </section>
    );
};

export { SponsorSection };
