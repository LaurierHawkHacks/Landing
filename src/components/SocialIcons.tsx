import React, { useState, useEffect } from 'react';
import {
    RiInstagramLine,
    RiLinkedinLine,
    RiDiscordLine,
    RiTiktokLine,
} from 'react-icons/ri';
import { FaRegEnvelope } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
// import { SiDevpost } from "react-icons/si";

interface SocialIconsProps {
    color?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
    color = 'currentColor',
}) => {
    const [iconSize, setIconSize] = useState(40);
    const hoverColor = '#0FA3B1';

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth < 640 ? 32 : 40);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const SocialIconLink = ({
        href,
        Icon,
        label,
    }: {
        href: string;
        Icon: React.ElementType;
        label: string;
    }) => {
        const [iconColor, setIconColor] = useState(color);

        return (
            <a
                href={href}
                target="_blank"
                aria-label={label}
                onMouseEnter={() => setIconColor(hoverColor)}
                onMouseLeave={() => setIconColor(color)}
            >
                <Icon
                    size={iconSize}
                    color={iconColor}
                    style={{ transition: 'color 0.5s' }}
                />
            </a>
        );
    };

    return (
        <div className="flex items-center justify-center space-x-7">
            <SocialIconLink
                href="mailto:hello@hawkhawks.ca"
                Icon={FaRegEnvelope}
                label="Send HawkHacks an email if you have any questions"
            />
            <SocialIconLink
                href="https://linkedin.com/company/hawkhacks/"
                Icon={RiLinkedinLine}
                label="Check out HawkHacks LinkedIn"
            />
            <SocialIconLink
                href="https://discord.gg/CwQ7mGg98N"
                Icon={RiDiscordLine}
                label="Check out HawkHacks Discord channel"
            />
            <SocialIconLink
                href="https://tiktok.com/@hawkhacks"
                Icon={RiTiktokLine}
                label="Check out HawkHacks TikTok and follow for more exciting contents"
            />
            <SocialIconLink
                href="https://instagram.com/wluhawkhacks/"
                Icon={RiInstagramLine}
                label="Check out HawkHacks Instagram and follow for more future updates"
            />
            <SocialIconLink
                href="https://linktr.ee/hawkhacks"
                Icon={SiLinktree}
                label="Check out all HawkHacks links on LinkTree"
            />
        </div>
    );
};

export { SocialIcons };
