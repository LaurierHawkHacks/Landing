import React from 'react';
import { TopBorder, BottomBorder, MiddleBody, ArrowRightIcon, Hawk, BirdParts, Email, LinkedIn, Instagram, Twitter, Facebook, DevPost } from '@assets';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section relative z-10">

            <img src={TopBorder} className="w-full z-0" />
            <img src={Hawk} className="absolute right-0 top-0 transform -translate-y-1/4 scale-100 -z-10" />
            <img src={BirdParts} className="absolute right-0 top-0 transform -translate-y-[42.5%] scale-100 z-50 lg:-translate-x-[5%]" />
            <div className="absolute xs:text-center xs:ml-16 inset-x-0 mx-auto max-w-4xl px-5 pt-4 sm:pt-8 md:pt-12 lg:pt-32 xl:pt-48 z-10">
                <div className="contact-info text-center sm:text-left sm:mt-5 md:mt-8 lg:mt-0 mb-2 sm:mb-4 md:mb-6 lg:mb-12 text-left">
                    <h2 className="font-raleway text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold leading-tight tracking-wider text-[#32848C] md:leading-tight lg:leading-[7.3125rem]">CONTACT US</h2>
                    <p className="text-md md:text-md lg:text-lg xl:mt-9">
                        Reach out at <b>hello@hawkhacks.ca</b> for any help or support, and please be sure to join the <b>HawkHacks Discord</b> community!
                    </p>
                </div>
                <div className="newsletter mt-2 sm:mt-3 md:mt-4 lg:mt-6 lg:text-left">
                    <h3 className="text-[#32848C] font-bold font-raleway text-sm sm:text-lg md:text-xl lg:text-2xl text-left">Sign up for our newsletter!</h3>
                        <div className="relative w-[270px] sm:w-1/2 mt-2 md:mt-4 mb-1 md:mb-4 lg:ml-0">
                            <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-2 border-gray-400 bg-white h-12 pl-4 pr-10 rounded-lg text-sm w-full focus:outline-none shadow-2xl"
                            />
                            <button
                            type="submit"
                            className="absolute inset-y-0 right-0 flex shadow-none items-center justify-center px-1 w-10 rounded-r-lg focus:bg-transparent focus:outline-none focus:ring-0"
                            >
                            <img src={ArrowRightIcon} alt="Submit" />
                            </button>
                        </div>
                    <div className="flex space-x-3 sm:space-x-4 md:space-x-6 ml-1 mt-3 sm:mt-2 md:mt-3 lg:justify-start">
                        <a href="mailto:hello@hawkhacks.com" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={Email} alt="Email" />
                        </a>
                        <a href="https://www.linkedin.com/company/hawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/wluhawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/wluhawkhacks" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com/Hawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="https://hawkhacks.devpost.com/" target="_blank" rel="noopener noreferrer" className="mt-0.5 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={DevPost} alt="Devpost" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[700px] z-0">
                <img src={MiddleBody} className="w-full h-full object-cover" />
            </div>
            <img src={BottomBorder} className="w-full z-0" />
        </section>
    );
};

export { ContactSection };
