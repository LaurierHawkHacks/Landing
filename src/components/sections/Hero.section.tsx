import React, { useState, useEffect, useCallback } from 'react';
import {
  HeroIllustration,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon
} from '@assets';

const HeroSection: React.FC = () => {
  const [countdown, setCountdown] = useState<string>('');

  const calculateCountdown = useCallback(() => {
    const targetDate = new Date('2024-04-06T00:00:00');
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountdown(`${days} ${hours} ${minutes} ${seconds}`);
  }, []); 

  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateCountdown]);


    return (
        <div className="bg-midnight text-white py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">
             <span className="text-mint">&lt;HawkHacks 2024/&gt;</span>           
            </h1>
            <p className="pb-2 text-lg">Wilfrid Laurier’s first large-scale global hackathon!</p>
            <p className="pb-3 text-xs font-thin [word-spacing:5px]">Waterloo, ON | April 6th - 8th | In-Person</p>
            <p className="mx-5 space-x-8 text-2sm font-bold [word-spacing:45px]">{countdown}</p>
            <p className="pb-3 text-sm font-thin [word-spacing:35px] mr-[-0.5rem]">Days Hrs Mins Secs</p>
            <button className="bg-mint text-white px-4 py-1 rounded">
              REGISTER
            </button>
            <img  className="mt-[-4rem]" src={HeroIllustration} alt="Hero Illustration" />
            <div className="flex items-center justify-center space-x-4 mt-[-8.5rem]">
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <DiscordIcon />
          </div>
        </div>
      </div>
      );
    };

export { HeroSection };


