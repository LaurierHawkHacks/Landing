import React from 'react';
import GreyBorderTop from '../../assets/contact/top-border.svg';
import GreyBorderBottom from '../../assets/contact/bottom-border.svg';
import MiddleBody from '../../assets/contact/middle-body.svg';
import ArrowRightIcon from '../../assets/contact/arrow-right-icon.svg';
import HawkSVG from '../../assets/contact/hawk.svg';
import BirdPartsSVG from '../../assets/contact/bird_parts.svg';
import EmailSVG from '../../assets/contact/email.svg';
import LinkedInSVG from '../../assets/contact/linkedin.svg';
import InstagramSVG from '../../assets/contact/instagram.svg';
import TwitterSVG from '../../assets/contact/twitter.svg';
import FacebookSVG from '../../assets/contact/facebook.svg';
import DevpostSVG from '../../assets/contact/devpost.svg';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section relative" style={{ position: 'relative', zIndex: '2' }}>

            <img src={GreyBorderTop} alt="Top Border" className="w-full" style={{ zIndex: '1' }} />
            <img src={HawkSVG} alt="Bird" className="absolute right-0 top-0 transform -translate-y-1/4 scale-100 z-[-1]" />
            <img src={BirdPartsSVG} alt="Bird Parts" className="absolute right-0 top-0 transform -translate-y-[42.5%] translate-x-[1%] scale-100 z-50 lg:-translate-x-[5%]" />
            <div className="absolute inset-x-0 mx-auto max-w-4xl px-5 pt-4 sm:pt-8 md:pt-12 lg:pt-32 xl:pt-48" style={{ zIndex: '2' }}>
                <div className="contact-info mb-2 sm:mb-4 md:mb-6 lg:mb-12 text-center lg:text-left">
                    <h2 className="font-raleway text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold leading-tight tracking-wider text-[#32848C] md:leading-tight lg:leading-[7.3125rem]">CONTACT US</h2>
                    <p className="text-xs sm:text-sm md:text-md lg:text-[20px] mt-2 md:mt-3">
                        Reach out at <b>hello@hawkhacks.ca</b> for any help or support, and please be sure to join the <b>HawkHacks Discord</b> community!
                    </p>
                </div>
                <div className="newsletter mt-2 sm:mt-3 md:mt-4 lg:mt-6 lg:text-left">
                    <h3 className="text-[#32848C] font-raleway text-sm sm:text-md md:text-lg lg:text-xl font-weight-600 text-center lg:text-left">Sign up for our newsletter!</h3>
                    <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-2 md:mt-4 mb-1 md:mb-4 lg:ml-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-2 border-gray-300 bg-white h-8 sm:h-10 md:h-12 pl-3 sm:pl-4 md:pl-5 pr-6 sm:pr-8 md:pr-10 rounded-full text-xs sm:text-sm md:text-sm focus:outline-none w-full"
                        />
                        <button type="submit" className="absolute inset-y-0 right-2 sm:right-3 md:right-4 flex items-center justify-center top-1/2 transform -translate-y-1/2">
                            <img src={ArrowRightIcon} alt="Submit" />
                        </button>
                    </div>
                    <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-1 sm:mt-2 md:mt-3 lg:justify-start">
                        <a href="mailto:hello@hawkhacks.com" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={EmailSVG} alt="Email" />
                        </a>
                        <a href="https://www.linkedin.com/company/hawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={LinkedInSVG} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/wluhawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={InstagramSVG} alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/wluhawkhacks" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={TwitterSVG} alt="Twitter" />
                        </a>
                        <a href="https://www.facebook.com/Hawkhacks/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={FacebookSVG} alt="Facebook" />
                        </a>
                        <a href="https://hawkhacks.devpost.com/" target="_blank" rel="noopener noreferrer" className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                            <img src={DevpostSVG} alt="Devpost" />
                        </a>
                    </div>
                </div>
            </div>
            <img src={MiddleBody} alt="Middle Body" className="w-full" style={{ zIndex: '1' }} />
            <img src={GreyBorderBottom} alt="Bottom Border" className="w-full" style={{ zIndex: '1' }} />
        </section>
    );
};

export { ContactSection };
