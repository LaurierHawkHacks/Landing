import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaDiscord, FaTiktok } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

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

    const SocialIconLink = ({ href, Icon }: { href: string, Icon: React.ElementType }) => {
        const [iconColor, setIconColor] = useState(color);

        return (
            <a
                href={href}
                onMouseEnter={() => setIconColor(hoverColor)}
                onMouseLeave={() => setIconColor(color)}
                style={{ transition: 'color 0.3s' }}
            >
                <Icon size={iconSize} color={iconColor} />
            </a>
        );
    };

    return (
        <div className="flex justify-center items-center space-x-7">
            <SocialIconLink href="mailto:hello@hawkhawks.ca" Icon={FaEnvelope} />
            <SocialIconLink href="https://www.linkedin.com/company/hawkhacks/" Icon={FaLinkedin} />
            <SocialIconLink href="https://discord.gg/CwQ7mGg98N" Icon={FaDiscord} />
            <SocialIconLink href="https://tiktok.com/@hawkhacks" Icon={FaTiktok} />
            <SocialIconLink href="https://www.instagram.com/wluhawkhacks/" Icon={RiInstagramFill} />
            <SocialIconLink href="https://hawkhacks.devpost.com/" Icon={SiDevpost} />
        </div>
    );
};

export { SocialIcons };