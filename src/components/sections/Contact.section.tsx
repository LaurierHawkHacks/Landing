import React, { useState } from 'react';
import {
    TopBorder,
    BottomBorder,
    MiddleBody,
    ArrowRightIcon,
    Hawk,
    BirdParts,
} from '@assets';
import { SocialIcons } from '@components';
import axios from 'axios';

const ContactSection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://us6.api.mailchimp.com/3.0/lists/050d487d87/members',
                {
                    email_address: email,
                    status: 'subscribed',
                },
                {
                    headers: {
                        Authorization: `c98c4f298fa4008840f46ab61638f69d-us6`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                console.log('Subscribed successfully!');
            }
        } catch (error) {
            console.error('Subscription error:', error);
        }
    };
    return (
        <section className="contact-section relative z-10">
            <img src={TopBorder} className="z-0 w-full" />
            <img
                src={Hawk}
                className="absolute right-0 top-0 z-[-1] w-full max-w-5xl -translate-x-2  -translate-y-1/2 md:-translate-x-3 xl:right-10 2xl:right-52"
            />
            <img
                src={BirdParts}
                className="absolute right-0 top-0 z-50 w-full max-w-5xl -translate-y-[42.5%] xl:right-10 2xl:right-52"
            />

            <div className="absolute inset-x-0 z-10 mx-auto max-w-4xl px-4 pt-10 sm:pt-16 md:px-8 md:pt-20 lg:px-12 lg:pt-32 xl:pt-32">
                <div className="contact-info mb-2 text-center sm:mb-4 sm:text-left md:mb-6 lg:mb-12">
                    <h2 className="font-raleway text-2xl font-extrabold leading-tight tracking-wider text-[#32848C] sm:text-4xl md:text-5xl lg:text-8xl">
                        CONTACT US
                    </h2>
                    <p className="text-md lg:text-lg xl:mt-9">
                        Reach out at <b>hello@hawkhacks.ca</b> for any help or
                        support, and please be sure to join the{' '}
                        <b>HawkHacks Discord</b> community!
                    </p>
                </div>
                <div className="newsletter text-center sm:text-left lg:mt-6">
                    <h3 className="font-raleway text-lg font-bold text-[#32848C] md:text-xl lg:text-2xl">
                        Sign up for our newsletter!
                    </h3>
                    <div className="mt-2 flex flex-col items-center sm:items-start md:mt-4">
                        <div className="relative mb-4 w-full sm:mb-6 sm:w-1/2 lg:max-w-lg">
                            <form
                                onSubmit={handleSubmit}
                                className="contact-section"
                            >
                                {' '}
                                {/* Adjusted margin-bottom for small screens */}
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-12 w-full rounded-lg border-2 border-gray-400 bg-white pl-4 pr-12 text-sm focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-lg px-4 shadow-none focus:bg-transparent focus:outline-none"
                                >
                                    <img src={ArrowRightIcon} alt="Submit" />
                                </button>
                            </form>
                        </div>
                        <div className="pt-2 sm:pt-4">
                            <SocialIcons color="#32848C" />
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={MiddleBody}
                className="z-0 h-[300px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[700px]"
            />
            <img src={BottomBorder} className="z-0 w-full" />
        </section>
    );
};

export { ContactSection };
