import React from 'react';
import { TopBorder, BottomBorder, MiddleBody, ArrowRightIcon, Hawk, BirdParts } from '@assets';
import { SocialIcons } from '@components';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section relative z-10">
            <img src={TopBorder} className="w-full z-0" />
            <img src={Hawk} className="absolute right-0 top-0 transform -translate-y-1/2 scale-100 -z-10" />
            <img src={BirdParts} className="absolute right-0 top-0 transform -translate-y-[42.5%] translate-x-[1%] scale-100 z-50 lg:-translate-x-[5%]" />
            <div className="absolute inset-x-0 mx-auto max-w-4xl px-5 pt-10 sm:pt-16 md:pt-20 lg:pt-32 xl:pt-32 z-10">
                <div className="contact-info text-center sm:text-left mb-2 sm:mb-4 md:mb-6 lg:mb-12">
                    <h2 className="font-raleway text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold leading-tight tracking-wider text-[#32848C]">CONTACT US</h2>
                    <p className="text-md lg:text-lg xl:mt-9">
                        Reach out at <b>hello@hawkhacks.ca</b> for any help or support, and please be sure to join the <b>HawkHacks Discord</b> community!
                    </p>
                </div>
                <div className="newsletter text-center sm:text-left lg:mt-6">
                    <h3 className="text-[#32848C] font-bold font-raleway text-lg md:text-xl lg:text-2xl">Sign up for our newsletter!</h3>
                    <div className="flex flex-col items-center sm:items-start mt-2 md:mt-4">
                        <div className="relative w-full sm:w-1/2 lg:max-w-lg mb-4 sm:mb-6"> {/* Adjusted margin-bottom for small screens */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border-2 border-gray-400 bg-white h-12 pl-4 pr-12 rounded-lg text-sm w-full focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 right-0 flex items-center justify-center px-4 w-12 rounded-r-lg focus:bg-transparent focus:outline-none shadow-none"
                            >
                                <img src={ArrowRightIcon} alt="Submit" />
                            </button>
                        </div>
                        <div className="pt-2 sm:pt-4">
                            <SocialIcons color='#32848C' />
                        </div>
                    </div>
                </div>
            </div>
            <img src={MiddleBody} className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[700px] z-0 object-cover" />
            <img src={BottomBorder} className="w-full z-0" />
        </section>
    );
};

export { ContactSection };