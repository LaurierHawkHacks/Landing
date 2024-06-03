import React, { useState, useEffect } from "react";

import { logEvent, analytics, SocialLinks } from '@utils';

import { RiInstagramLine, RiLinkedinLine, RiDiscordLine, RiTiktokLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

/*
 *
 * @description Social media icons interface
 * @props {string} color
 * 
 */
interface SocialIconsProps {
    color?: string;
}

/*
 *
 * @description Social media icons
 * @props {string} color
 * 
 */
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
        logEvent(analytics, 'social_icon_click', { platform });
    };

    const SocialIconLink = ({ href, Icon, platform }: { href: string, Icon: React.ElementType, platform: string }) => {
        const [iconColor, setIconColor] = useState(color);

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${platform} page to learn more about HawkHacks!`}
                onMouseEnter={() => setIconColor(hoverColor)}
                onMouseLeave={() => setIconColor(color)}
                onClick={() => handleClick(platform)}
            >
                <Icon size={iconSize} color={iconColor} style={{ transition: "color 0.5s" }} />
            </a>
        );
    };

    return (
        <div className="flex justify-center items-center space-x-7">
            <SocialIconLink href={SocialLinks.email} Icon={FaRegEnvelope} platform="email" />
            <SocialIconLink href={SocialLinks.linkedin} Icon={RiLinkedinLine} platform="linkedin" />
            <SocialIconLink href={SocialLinks.discord} Icon={RiDiscordLine} platform="discord" />
            <SocialIconLink href={SocialLinks.tiktok} Icon={RiTiktokLine} platform="tiktok" />
            <SocialIconLink href={SocialLinks.instagram} Icon={RiInstagramLine} platform="instagram" />
            <SocialIconLink href={SocialLinks.linktree} Icon={SiLinktree} platform="linktree" />
        </div>
    );
};

export { SocialIcons };