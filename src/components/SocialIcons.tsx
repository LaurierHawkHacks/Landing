import React, { useState, useEffect } from "react";
import { RiInstagramLine, RiLinkedinLine, RiDiscordLine , RiTiktokLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
// import { SiDevpost } from "react-icons/si";

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
            <SocialIconLink href="mailto:hello@hawkhawks.ca" Icon={FaRegEnvelope} />
            <SocialIconLink href="https://linkedin.com/company/hawkhacks/" Icon={RiLinkedinLine} />
            <SocialIconLink href="https://discord.gg/CwQ7mGg98N" Icon={RiDiscordLine } />
            <SocialIconLink href="https://tiktok.com/@hawkhacks" Icon={RiTiktokLine} />
            <SocialIconLink href="https://instagram.com/wluhawkhacks/" Icon={RiInstagramLine} />
            <SocialIconLink href="https://linktr.ee/hawkhacks" Icon={SiLinktree} />
        </div>
    );
};

export { SocialIcons };
