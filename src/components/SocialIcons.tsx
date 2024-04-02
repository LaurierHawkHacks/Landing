import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaDiscord, FaTiktok } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { logEvent, analytics } from '../utils/Analytics';

interface SocialIconsProps {
    color?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ color = "currentColor" }) => {
    const [iconSize, setIconSize] = useState(40);
    const hoverColor = '#0FA3B1'; 

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth < 640 ? 32 : 40);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleClick = (platform: string) => {
        console.log(platform);
        logEvent(analytics, 'social_icon_click', { platform });
    };    
    
    return (
        <div className="flex justify-center items-center space-x-7">
            <a href="mailto:hello@hawkhawks.ca" onClick={() => handleClick('email')}>
                <FaEnvelope size={iconSize} color={color} />
            </a>
            <a href="https://www.linkedin.com/company/hawkhacks/" onClick={() => handleClick('linkedin')}>
                <FaLinkedin size={iconSize} color={color} />
            </a>
            <a href="https://discord.gg/CwQ7mGg98N" onClick={() => handleClick('discord')}>
                <FaDiscord size={iconSize} color={color} />
            </a>
            <a href="https://tiktok.com/@hawkhacks" onClick={() => handleClick('tiktok')}>
                <FaTiktok size={iconSize} color={color} />
            </a>
            <a href="https://www.instagram.com/wluhawkhacks/" onClick={() => handleClick('instagram')}>
                <RiInstagramFill size={iconSize} color={color} />
            </a>
            <a href="https://hawkhacks.devpost.com/" onClick={() => handleClick('devpost')}>
                <SiDevpost size={iconSize} color={color} />
            </a>
        </div>
    );
};

export { SocialIcons };