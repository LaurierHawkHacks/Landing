import React, { useState, useEffect } from "react";
import { RiInstagramLine, RiLinkedinLine, RiDiscordLine, RiTiktokLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
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
    logEvent(analytics, 'social_icon_click', { platform });
  };

  const SocialIconLink = ({ href, Icon, platform }: { href: string, Icon: React.ElementType, platform: string }) => {
    const [iconColor, setIconColor] = useState(color);

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
      <SocialIconLink href="mailto:hello@hawkhawks.ca" Icon={FaRegEnvelope} platform="email" />
      <SocialIconLink href="https://linkedin.com/company/hawkhacks/" Icon={RiLinkedinLine} platform="linkedin" />
      <SocialIconLink href="https://discord.gg/GxwvFEn9TB" Icon={RiDiscordLine} platform="discord" />
      <SocialIconLink href="https://tiktok.com/@hawkhacks" Icon={RiTiktokLine} platform="tiktok" />
      <SocialIconLink href="https://instagram.com/wluhawkhacks/" Icon={RiInstagramLine} platform="instagram" />
      <SocialIconLink href="https://linktr.ee/hawkhacks" Icon={SiLinktree} platform="linktree" />
    </div>
  );
};

export { SocialIcons };
